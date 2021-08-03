import React, { Component } from 'react'
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import './sol.css'
import SweetAlert from "sweetalert2";
import axios from 'axios'
import solder1 from '../../assets/videos/soldering/s1.mp4'
import solder2 from '../../assets/videos/soldering/s2.mp4'
import solder3 from '../../assets/videos/soldering/s3.mp4'
import SubmitButton from '../Utilities/Buttons/SubmitButton';
import TitleButton from '../Utilities/Buttons/TitleButton';
import Timer from '../../Container/Timer/Timer';
export default class Solderings extends Component {
    constructor(props) {
        super(props)
        this.timerRef = React.createRef();
        this.state = {
            temp: 316,
            selectTemp: "",
            tempValid: 316,
            error: true,
            error2: true,
            solder_model: null,
            stepsEnabled: true,
            initialStep: 0,
            showStepNumbers: true,
            modalShow: false,
        }
    }

    // ---------------------soldering tooltip select state-------------//
    _sttc117 = () => {
        this.setState({
            temp: 396,
            tempValid: 396
        });
        document.getElementById("mercury").style.height = "150px";
        document.getElementById("mercury").style.bottom = "50%";
    };
    get sttc117() {
        return this._sttc117;
    }
    set sttc117(value) {
        this._sttc117 = value;
    }

    sttc817 = () => {
        this.setState({
            temp: 482,
            tempValid: 482
        })

        document.getElementById("mercury").style.height = "160px";
        document.getElementById("mercury").style.bottom = "90%";
    }

    sttc162 = () => {
        this.setState({
            temp: 382,
            tempValid: 382
        })
        document.getElementById("mercury").style.height = "80px";
        document.getElementById("mercury").style.bottom = "-10%";
    }

    sttc160 = () => {
        this.setState({
            temp: 398,
            tempValid: 398
        })
        document.getElementById("mercury").style.height = "160px";
        document.getElementById("mercury").style.bottom = "80%";
    }

    sttc804L = () => {
        this.setState({
            temp: 425,
            tempValid: 425
        })
        document.getElementById("mercury").style.height = "120px";
        document.getElementById("mercury").style.bottom = "40%";
    }

    sttc198 = () => {
        this.setState({
            temp: 393,
            tempValid: 393
        })
        document.getElementById("mercury").style.height = "85px";
        document.getElementById("mercury").style.bottom = "-10%";
    }

    sttc836 = () => {
        this.setState({
            temp: 479,
            tempValid: 479
        })
        document.getElementById("mercury").style.height = "170px";
        document.getElementById("mercury").style.bottom = "55%";
    }

    sttc837 = () => {
        this.setState({
            temp: 485,
            tempValid: 485
        })
        document.getElementById("mercury").style.height = "200px";
        document.getElementById("mercury").style.bottom = "100%";
    }
    sttc137 = () => {
        this.setState({
            temp: 412,
            tempValid: 412
        })
        document.getElementById("mercury").style.height = "100px";
        document.getElementById("mercury").style.bottom = "25%";
    }
    setSelectTemp = (temp) => {
        this.setState({
            selectTemp: temp
        })
    }
    solderingHandleSubmit = (event) => {
        event.preventDefault();
    }
    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitbtn = (e, status) => {
        // this.setState({ counterTime: this.myRef })
        const counterTime = this.timerRef.current.outerText;
        if (counterTime < 5) {
            console.log("hi ")
            return SweetAlert.fire({
                icon: 'warning',
                text: 'You have to spend minimum 25seconds for checking',
                confirmButtonText: `Save`
            })
        }
        const { solder_model, temp } = this.state
        SweetAlert.fire({
            icon: 'success',
            title: 'Soldering Tooltip Temperature Measurement Recorded Successfully',
            // html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks... if you changed the cartridge please leave the message'></textarea>",
            // showDenyButton: false,
            // showCancelButton: false,
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const { Solderform } = this.props
                const datas = {
                    date: Solderform.date,
                    shift: Solderform.shift,
                    station: Solderform.Station,
                    defaultTemp: this.state.tempValid,
                    catridge_used: solder_model,
                    temperature: temp,
                    checked_by: Solderform.operator_name,
                    status: "Complete",
                    // description: description,
                    time: counterTime
                }
                console.log(datas)
                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering/send`, datas).then((res) => {
                    SweetAlert.fire('Saved!', '', 'success').then((result) => {
                        if (result.isConfirmed) {
                        }
                        window.location.replace("/")
                    })
                })
                // }

            }
        })
    }


    //---------------- Temperature counter functions--------------------//
    increment = () => {
        const { temp, tempValid } = this.state
        const tempA = tempValid + 9;
        const tempB = tempValid - 9;
        this.setState({ temp: this.state.temp + 1 });
        if (temp <= tempA && temp >= tempB) {
            this.setState({ error: false, error2: false });
        }
        else {
            this.setState({ error: true, modalShow: true });
        }
    }
    decrement = () => {
        const { temp, tempValid } = this.state
        const tempA = tempValid + 9;
        const tempB = tempValid - 9;
        this.setState({ temp: this.state.temp - 1 });
        if ((temp <= tempA) && (temp >= tempB)) {
            this.setState({ error: false, error2: false });
        }
        else {
            this.setState({ error: true, modalShow: true });
        }
    }


    render() {
        // Button Status Switcher
        // const buttonStatus = this.state.counterTime > 5 ? false : true;
        const { temp } = this.state

        //-----------------tooltips-----------------//
        const sol1 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC117 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>396°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>386°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>406°c</span>
            </Tooltip>
        );

        const sol2 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC817 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>482°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>472°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>492°c</span>
            </Tooltip>
        );

        const sol3 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC162 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>382°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>372°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>392°c</span>
            </Tooltip>
        );

        const sol4 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC117 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>398°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>378°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>408°c</span>
            </Tooltip>
        );

        const sol5 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC804L Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>425°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>415°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>435°c</span>
            </Tooltip>
        );

        const sol6 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC198 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>393°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>383°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>403°c</span>
            </Tooltip>
        );

        const sol7 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC836 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>479°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>469°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>489°c</span>
            </Tooltip>
        );

        const sol8 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC837 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>485°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>475°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>495°c</span>
            </Tooltip>
        );

        const sol9 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                STTC137 Default Temperature is <span style={{ color: "#00FF00", fontWeight: "bold" }}>412°c.</span>
                <br />
                Allowed Temperature
                <br />
                <span style={{ color: "#fc3008", fontWeight: "bold" }}>402°c</span> to <span style={{ color: "#00FF00", fontWeight: "bold" }}>422°c</span>
            </Tooltip>
        );
        const tempDisplay = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Your Selected <br />Cartridge <br />Allowed<br /> Temperature Is <span style={{ color: "#00FF00", fontWeight: "bold" }}>{this.state.temp}°c</span>
            </Tooltip>
        );


        function MyVerticallyCenteredModal(props) {
            return (
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                            Your Measured ToolTip Temperature Is Wrong
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className='text-center text-danger'>Please Redo the Process Or Change The Cartridge</h5>
                        <p>
                            {/* Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros. */}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Replace and remeasure</Button>
                        <Button onClick={props.onHide}>Remeasure</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
        const hide = () => {
            this.setState({ modalShow: false })
        }
        return (
            <>
                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={hide}
                />
                <div className='testing-user-detail'>
                    <div className='d-flex '>
                        <div className="data-title">Operator Name :</div>
                        <div className="data-text text-right pl-5">{this.props.Solderform.operator_name}</div>
                    </div>
                    <div className='d-flex'>
                        <div className="data-title ">Machine Serial Number :</div>
                        <div className="data-text text-right pl-2">{this.props.Solderform.Station}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='data-title'>Time :</div>
                        <div className='data-text d-flex' ><div ref={this.timerRef}><Timer /></div>Sec</div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center bg-primary' style={{ height: "100vh" }}>
                    <div className="ml-3"><TitleButton>Soldering ToolTip Temperature</TitleButton></div>
                    <div className='d-md-flex justify-content-center'>
                        <div className='col-8 my-auto border-0'>
                            <video src={this.state.error2 ? solder1 : this.state.error ? solder3 : solder2} type="video/mp4" autoPlay={true} muted={true} loop width='100%' />
                        </div>
                        <div className='col-4'>
                            <div className='d-flex justify-content-around w-100 h-100'>
                                <div className='formCard flcc glassCard bt-blue bt-bottom w-100 my-auto h-100' style={{ height: "max-content" }}>
                                    <h5 className='solder-card-title text-center my-4 text-capitalize heading white fa-2x'>Soldering Catridge Type</h5>
                                    <div className="d-flex justify-content-center align-items-center ">

                                        {/*------------------- Soldering ToolTips---------------------- */}

                                        <div className='selettooltip'>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol1}
                                            >
                                                <Form.Group onClick={this.sttc117} className="d-flex h-20px" >
                                                    <Form.Control name='solder_model' autoFocus type='radio' value="STTC 117 /396°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 117</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol2}
                                            >
                                                <Form.Group onClick={this.sttc817} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 817 / 482°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 817</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol3}
                                            >
                                                <Form.Group onClick={this.sttc162} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 162 / 382°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 162</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol4}
                                            >
                                                <Form.Group onClick={this.sttc160} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 160 / 398°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 160</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol5}
                                            >
                                                <Form.Group onClick={this.sttc804L} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 804L / 425°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 804L</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol6}
                                            >
                                                <Form.Group onClick={this.sttc198} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 198 / 393°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 198</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol7}
                                            >
                                                <Form.Group onClick={this.sttc836} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 836 / 479°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 836</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol8}
                                            >
                                                <Form.Group onClick={this.sttc837} className="d-flex h-20px">
                                                    <Form.Control name='solder_model' type='radio' value="STTC 837 / 485°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 837</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="left"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={sol9}
                                            >
                                                <Form.Group onClick={this.sttc137} className="d-flex h-20px">
                                                    <Form.Control required name='solder_model' type='radio' value="STTC 137 / 412°c" onChange={(e) => this.handlechange(e)} className="solder-radiobtn" />
                                                    <Form.Label className=" input-label ml-2">STTC 137</Form.Label>
                                                </Form.Group>
                                            </OverlayTrigger>
                                        </div>
                                        <div className='thermo-control d-flex  flex-column justify-content-center align-items-center '>
                                            <div className="thermometer">
                                                <div className="stem"></div>
                                                <div id="marks"><div id="line">--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--<br />--</div></div>
                                                <div id="merc-stem"><div id="mercury"></div></div>
                                                <div id="bulb"></div>
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={tempDisplay}
                                                >
                                                    <div className='degree exacttemp' id='abb'>{temp}°c</div>
                                                </OverlayTrigger>
                                            </div>

                                            <div autoFocus className='tempcounter d-flex w-50 justify-content-center rounded-pill bg-danger border border-warning p-1'>
                                                <button className='p-0 border-0 bg-transparent white' onClick={this.decrement}><i className="fa fa-minus"></i></button>
                                                <input value={temp} name="temperature" onChange={(e) => this.handlechange(e)} className='selected-temp-inp w-50 white bg-transparent border-0' />
                                                <button className='p-0 border-0 fw-bold bg-transparent white' onClick={this.increment} ><i className="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -----------Submit Buttons----------- */}
                                    <div className='d-flex justify-content-center py-3 '>
                                        <OverlayTrigger
                                            key="top"
                                            top="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top`} >
                                                    <div className='disable-btn-tooltip'>You Have To Spend Minimum <br />25seconds For Checking</div>
                                                </Tooltip>
                                            }
                                        >
                                            {/* disabled={buttonStatus} */}
                                            <SubmitButton onClick={(e) => this.submitbtn(e, "Yes")} className='solderalert white soldering-submit-btn value={yes}' buttonName="Submit" />
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    onExit = () => {
        this.setState(() => ({ stepsEnabled: false }));
    };
}
