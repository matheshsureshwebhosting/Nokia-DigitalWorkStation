import React, { Component, Fragment } from 'react'
import { Slidercontext } from "../../Contexts/Slidercontext"
import video1 from "../../assets/videos/vacclift/6.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import Steps from "./Steps"
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Step6 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.step6Ref = React.createRef()   // Create a ref object 
        this.state = {
            date: "",
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: "",
            counterTime: 0
        }
    }
    componentDidMount() {
        this.step6Ref.current.scroll(0, 1330);
        this.interval = setInterval(() => this.setState({ counterTime: this.state.counterTime + 1 }), 1000);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    render() {
        const buttonStatus = this.state.counterTime > 5 ? false : true;
        const { sliderenable } = this.context
        const Displayalert = (name, results) => {
            const { operator_name } = this.context
            if (operator_name === null) return window.location.replace("/VacuumForm")

            if (name === "alertSuccess") {
                const { updatestaus } = this.context
                updatestaus("prosses6_result", results, this.state.counterTime)
                localStorage.setItem("step6", "okay")
                sliderenable(this, "step7")
                this.props.history.push("/step7")
            }
            else if (name === "alert") {
                SweetAlert.fire({
                    title: "OK Noted",
                    icon: "info",
                }).then(async(result) => {
                    if (result.isConfirmed) {
                        const { updatestaus } = this.context
                        updatestaus("prosses6_result", results, this.state.counterTime)
                        localStorage.setItem("step6", "notOkay")
                        sliderenable(this, "step7")
                        const { date, machine_Sl_No, shift, operator_name } = this.context
                        var sendMail = {
                            name: operator_name,
                            testing: `Vaccume Testing ${machine_Sl_No} ${shift} ${date}`,
                            failurestep: "Step 1"
                        }                    
                      //  //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                        this.props.history.push("/step7")
                    }
                })
            }
        }
        return (
            <Fragment>
                <Steps
                    disabled={buttonStatus}
                    timer={this.state.counterTime}
                    vacRef={this.step6Ref}
                    ContinueBtnName="OK To continue"
                    IssueBtnName="RAISE ISSUE"
                    stepTitle="Horizontal Arm Inspection"
                    videoSrc={video1}
                    nameContinue="alertSuccess"
                    nameIssue="alert"
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                    doNotTouch="true"
                />
            </Fragment >
        )
    }
}

export default withRouter(Step6)