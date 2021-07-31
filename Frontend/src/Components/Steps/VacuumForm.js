import React, { Component } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import formImg from "../../assets/img/vacuumform.gif"
import { Slidercontext } from '../../Contexts/Slidercontext'
import { Navbar } from '../Navbar/Navbar';
import SubmitButton from '../Utilities/Buttons/SubmitButton';
import {withRouter} from "react-router-dom"
 class VacuumForm extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.state = {
            date: "",
            machine_Sl_No: "",
            shift: null,
            operator_name: "",
            nameError: false,
            machineError: false
        }
    }

    componentDidMount = () => {
        var today = new Date();
        const hours = today.getHours() + ":" + today.getMinutes()
        const monthsandday = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
            "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
        var date = today.getFullYear() + '-' + (monthsandday[today.getMonth() + 1]) + '-' + (monthsandday[today.getDate()]);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        if (hours < "14:30") {
            this.setState({
                shift: "Shift A",
                date: dateTime
            })
        } else if (hours > "14.30" && hours < "22.30") {
            this.setState({
                shift: "Shift B",
                date: dateTime
            })
        } else {
            this.setState({
                shift: "Shift C",
                date: dateTime
            })
        }
        localStorage.removeItem("step1")
        localStorage.removeItem("step2")
        localStorage.removeItem("step3")
        localStorage.removeItem("step4")
        localStorage.removeItem("step5")
        localStorage.removeItem("step6")
        localStorage.removeItem("step7")
        localStorage.removeItem("step8")
    }

    handleChange = (e) => {
        const { handleChange } = this.context
        handleChange(e)
        this.setState({ [e.target.name]: e.target.value })
    }
    submitbtn = (props,) => {
        const { machine_Sl_No, operator_name } = this.state
        if (machine_Sl_No.trim() === '') {
            this.setState({ machineError: true })
        } else if (operator_name.trim() === '') {
            this.setState({ nameError: true, machineError: false })
        } else {
            this.props.history.push("/step1");
        }
        localStorage.setItem("vacName", this.state.operator_name)
        localStorage.setItem("vacMachineId", this.state.machine_Sl_No)
    }
    render() {
        //ToolTips 
        const serialTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Enter Serial No
            </Tooltip>
        );

        const nameTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Enter Your Name
            </Tooltip>
        );

        //Date function
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        const { shift } = this.state
        const { machineError, nameError } = this.state
        const machineInputClass = machineError ? 'w-50 text-uppercase border border-danger error-bg' : 'w-50 text-uppercase';
        const nameInputClass = nameError ? 'w-50 text-uppercase border border-danger error-bg' : 'w-50 text-uppercase';
        return (
            <>
                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Vacuum Lifter Autonomous Maintenance" />

                <div className=" bg-primary d-flex justify-content-center flex-column align-items-center h-90" style={{ width: "100%" }}>
                    <div className='d-flex justify-content-center h-auto w-75'>
                        <div className='h-100 w-50'>
                            <img src={formImg} alt='formImg' className='h-100 w-100' loop={true} />
                        </div>
                        <div data-aos="flip-left" data-aos-duration='3000' className='d-flex flex-column justify-content-center align-items-center h-100 w-50 glassCard bg-light' style={{ borderRadius: "0px" }}>
                            <h3 className='form-title'>Vacuum Lifter Autonomous <br />Maintenance</h3>
                            <Form>
                                <Form.Group className='d-flex justify-content-between'><Form.Label className='text-left pt-1 input-label w-50'>Time:</Form.Label> <Form.Control className="date-time  w-50" type="text" name={dateTime} value={dateTime} disabled required onChange={(e) => this.handleChange(e)}></Form.Control> </Form.Group>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={serialTooltip}
                                >
                                    <div>
                                        <Form.Group className='d-flex justify-content-between'><Form.Label className='text-left pt-1 input-label w-50'>Machine Serial No / Scan:</Form.Label><Form.Control className={machineInputClass} type="text" placeholder="HDOS768SNK" name="machine_Sl_No" autoFocus required onChange={(e) => this.handleChange(e)}></Form.Control> </Form.Group>
                                        {this.state.machineError && <p className='errorMessage'>*The machine serial no must not be empty</p>}
                                    </div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={nameTooltip}
                                >
                                    <div>
                                        <Form.Group className='d-flex justify-content-between'><Form.Label className='text-left pt-1 input-label w-50'>Operator Name:</Form.Label><Form.Control className={nameInputClass} type="text" placeholder="Mathesh" name="operator_name" required onChange={(e) => this.handleChange(e)}></Form.Control> </Form.Group>
                                        {this.state.nameError && <p className='errorMessage'>*The operator Name must not be empty</p>}
                                    </div>
                                </OverlayTrigger>
                                <Form.Group controlId="exampleForm.ControlSelect11" className=' d-sm-flex'>
                                    <Form.Label className='input-label w-50 pt-1'>Shift</Form.Label>
                                    <Form.Control type="text" className='w-50 ' disabled name="shift" defaultValue={shift !== null ? shift : ""} />
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-center mt-4">
                                    <div><SubmitButton onClick={this.submitbtn} buttonName="Submit" /></div>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(VacuumForm)