import React from 'react'
import './step.css'
import Vacuum from './Vaccume'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
function Steps(props) {
    const OperatorName = localStorage.getItem("vacName")
    const MachineId = localStorage.getItem("vacMachineId")

    return (
        <>
            <div className='bg-primary d-flex justify-content-center flex-column h-100vh container-fluid px-5 position-fixed'>

                <div>
                    <div className="d-flex" >
                        <div className="col-8 h-auto">
                            <h2 className="mb-3 heading step-title">{props.stepTitle}</h2>
                            <div className="dd"><video muted autoPlay={true} loop src={props.videoSrc} type="video/mp4" width="100%" height="100%" className="position-relative" /></div>
                            {props.doNotTouch === "true" && <img className='dnt-sign-img' src='./images/dnt.jpg' alt='do-not-touch-signBoad' />}
                        </div>
                        <div className="col-md-4 ">
                            <div ref={props.vacRef} className="vacuum-menu-col"><Vacuum /></div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <OverlayTrigger
                            top="top"
                            overlay={
                                <Tooltip id={`tooltip-top`} >
                                    <div className='disable-btn-tooltip'>You Have To Spend Minimum <br />25seconds For Checking</div>
                                </Tooltip>
                            }
                        >
                            <div className='d-flex'>
                                <button  className="step-continue-btn" name={props.nameContinue} onClick={props.onClickContinue}>{props.ContinueBtnName}<i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                                <button  className="raise-issue-btn" name={props.nameIssue} onClick={props.onClickIssue}>{props.IssueBtnName}<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                            </div>
                        </OverlayTrigger>

                        {props.inputField &&
                            <OverlayTrigger
                                key="top"
                                top="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`} >
                                        <div className=''>Please Enter The Value</div>
                                    </Tooltip>
                                }
                            >
                                <div className="px-4  " style={{ fontWeight: "600" }}> Enter The Pressure Guage Value&nbsp;: &nbsp;&nbsp;
                                    <input autoFocus={true} type='text' className={`${props.error}` && "error-bg border-danger"} onChange={props.onChangeVacInput} name={props.name} placeholder={props.placeholder} value={props.value} />
                                </div>
                            </OverlayTrigger>
                        }

                        <div className='vac-user-det'>
                            <div className='d-flex '>
                                <div className="data-title">Operator Name :</div>
                                <div className="data-text text-right pl-5">{OperatorName}</div>
                            </div>
                            <div className='d-flex'>
                                <div className="data-title ">Machine Serial Number :</div>
                                <div className="data-text text-right pl-2">{MachineId}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='data-title'>Time :</div>
                                <div className='data-text d-flex'>{props.timer}Sec</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Steps
