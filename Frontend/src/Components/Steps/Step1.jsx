import React, { Component } from 'react'
import "./step.css"
import video1 from "../../assets/videos/vacclift/1.mp4"
import SweetAlert from "sweetalert2";
import { Slidercontext } from "../../Contexts/Slidercontext"
import Steps from './Steps';
import axios from 'axios';
import {withRouter} from "react-router-dom"
 class Step1 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.stepRef = React.createRef()   // Create a ref object 
        this.state = {
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: "",
            shifta: false,
            shiftb: false,
            shiftc: false,
            buttonStatus: false,
            counterTime: 0
        }
    }


    componentDidMount = () => {
        this.interval = setInterval(() => this.setState({ counterTime: this.state.counterTime + 1 }), 1000);
        var today = new Date();
        const hours = today.getHours() + ":" + today.getMinutes()
        if (hours < "14:30") {
            this.setState({
                shifta: true
            })
        } else if (hours > "14.30" && hours < "22.30") {
            this.setState({
                shiftb: true
            })
        } else {
            this.setState({
                shiftc: true
            })
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
        // Button Status Switcher
        const buttonStatus = this.state.counterTime > 5 ? false : true;
        const { sliderenable } = this.context
        const Displayalert = (name, results) => {
            const { operator_name } = this.context
            if (operator_name === null) return window.location.replace("/VacuumForm")
            if (name === "alertSuccess") {
                const { updatestaus } = this.context
                localStorage.setItem("step1", "okay")
                updatestaus("prosses1_result", results, this.state.counterTime)
                sliderenable(this, "step2")
                this.props.history.push("/step2")
            }
            if (name === "alert") {
                localStorage.setItem("step1", "notOkay")
                SweetAlert.fire({
                    title: "OK Noted",
                    icon: "info",
                }).then(async(result) => {
                    if (result.isConfirmed) {
                        const { updatestaus } = this.context
                        updatestaus("prosses1_result", results, this.state.counterTime)
                        sliderenable(this, "step2")
                        const { date, machine_Sl_No, shift, operator_name } = this.context
                        var sendMail = {
                            name: operator_name,
                            testing: `Vaccume Testing ${machine_Sl_No} ${shift} ${date}`,
                            failurestep: "Step 1"
                        }                    
                        await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data })                    
                        this.props.history.push("/step2")
                    }
                })
            }
        }
        return (
            <>
                <Steps
                    disabled={buttonStatus}
                    timer={this.state.counterTime}
                    ContinueBtnName="OK To continue"
                    IssueBtnName="RAISE ISSUE"
                    stepTitle="Lifting Handle and Pad Cleaning"
                    videoSrc={video1}
                    nameContinue="alertSuccess"
                    nameIssue="alert"
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                />
            </ >
        )
    }
}

export default withRouter(Step1)
