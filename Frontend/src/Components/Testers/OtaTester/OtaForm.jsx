import React, { Component } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import formImg from '../../../assets/img/formImg.gif'
import { otaActions } from '../../../Reducers/OtaReducer'
import { Navbar } from '../../Navbar/Navbar'
import SubmitButton from '../../Utilities/Buttons/SubmitButton'
export class Testerform extends Component {
    constructor(props) {
        super()
        this.state = {
            shift: null,
            date: null,
            Station: '',
            stationError: false,
            nameError: false,
            operator_name: '',
            istesterform: false,
            location: ''
        }
    }

    componentDidMount = () => {
        this.props.resetOtaState();
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
    }

    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitbtn = () => {
        const { Station, operator_name } = this.state
        localStorage.setItem("stationId", this.state.Station)
        localStorage.setItem("testerName", this.state.operator_name)
        if (Station.trim() === '') {
            this.setState({ stationError: true })
        } else if (operator_name.trim() === '') {
            this.setState({ nameError: true, stationError: false })
        } else {
            this.setState({ istesterform: true })
            // this.props.history.push("/Testers");
        }
    }
    render() {
        localStorage.setItem("operatorname", this.state.operator_name)
        localStorage.setItem("stationid", this.state.Station)
        const { istesterform } = this.state
        if (istesterform === true) {
            return <Redirect to={
                {
                    pathname: "/OTA",
                    state: this.state
                }
            } />
        }
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
        const { shift, date, nameError, stationError } = this.state
        const stationClass = stationError ? 'w-50 text-uppercase border border-danger error-bg' : 'w-50 text-uppercase';
        const nameClass = nameError ? 'w-50 text-uppercase border border-danger error-bg' : 'w-50 text-uppercase';
        return (
            <>
                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="OTA Autonomous Maintenance" />
                <div className=" bg-primary d-flex justify-content-center flex-column align-items-center" style={{ height: "90vh", width: "100%" }}>
                    <div className='d-flex justify-content-center h-75 w-75'>
                        <div className='h-100 w-50 '>
                            <img src={formImg} alt='formImg' className='h-100 w-100' />
                        </div>
                        <div data-aos="flip-left" data-aos-duration='3000' className='d-flex flex-column justify-content-center align-items-center h-100 w-50 glassCard bg-light' style={{ borderRadius: "0px" }}>
                            <h3 className='form-title'>OTA Autonomous Maintenance</h3>
                            <div>
                                <Form >
                                    <Form.Group className='d-sm-flex'>
                                        <Form.Label className=' input-label w-50 pt-1'>Date and Time</Form.Label>
                                        <Form.Control type="text" className='w-50 ' name="date" disabled defaultValue={date} />
                                    </Form.Group>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={serialTooltip}
                                    >
                                        <div>
                                            <Form.Group controlId="exampleForm.ControlSelect1" className=' d-sm-flex'>
                                                <Form.Label className=' input-label w-50 input-label pt-1'> Station Serial No / Scan
                                                </Form.Label>
                                                <Form.Control autoFocus type='text' className={stationClass} name="Station" onChange={(e) => this.handlechange(e)}>
                                                </Form.Control>
                                            </Form.Group>
                                            {this.state.stationError && <p className='errorMessage'>*The station serial no must not be empty</p>}
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={nameTooltip}
                                    >
                                        <div>
                                            <Form.Group className=' d-sm-flex'>
                                                <Form.Label className=' input-label w-50 pt-1'>Operator Name</Form.Label>
                                                <Form.Control type="text" className={nameClass} name="operator_name" onChange={(e) => this.handlechange(e)} />
                                            </Form.Group>
                                            {this.state.nameError && <p className='errorMessage'>*The operator name must not be empty</p>}
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
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        otaState: state.OtaStates
    }
}
const mapDispatchToProps = dispatch => {
    return {
        resetOtaState: () => dispatch(otaActions.step_reset)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Testerform)

