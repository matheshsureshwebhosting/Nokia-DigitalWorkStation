import React from 'react'
import '../Styles/Pages.css'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
function MasterCheckList(props) {

    const playVideo = () => {
        document.getElementById("vidRef").play();
        document.getElementById("play").style.background = "green"
        document.getElementById("restart").style.background = "darkblue"
        document.getElementById("pause").style.background = "darkblue"
    };

    const pauseVideo = () => {

        document.getElementById("vidRef").pause();
        document.getElementById("play").style.background = "darkblue"
        document.getElementById("restart").style.background = "darkblue"
        document.getElementById("pause").style.background = "green"
    };
    const restartVideo = () => {
        document.getElementById("vidRef").currentTime = 0;
        document.getElementById("play").style.background = "darkblue"
        document.getElementById("pause").style.background = "darkblue"
    };
    return (

        <>
            <div className="position-fixed bg-primary" style={{ height: "100vh", width: "100vw" }}>

                {props.TypeOfMedia === "Video" ? <video id="vidRef" muted autoPlay={true} src={props.videosrc} type="video/mp4" width="100%" height="90%" className="position-relative video-content" /> :
                    <img src={props.src} alt={props.alt} style={{ height: "95vh" }} className="w-100 position-relative" />
                }


            </div>
            <div className=" bg-transparent d-flex justify-content-center align-items-center master-checklist-btn w-100">
                <div className="videobtndiv">
                    <button className="videobtn" id="play" onClick={playVideo} type="button"> <i className='fa fa-play fa-2x mx-2' /></button>
                    <button className="videobtn" id="pause" onClick={pauseVideo} type="button"> <i className='fa fa-pause fa-2x mx-1' /></button>
                    <button className="videobtn" id="restart" onClick={restartVideo} type="button"> <i className='fa fa-retweet fa-2x mx-0' /></button>

                </div>
                <OverlayTrigger
                    key="top"
                    top="top"
                    overlay={
                        <Tooltip id={`tooltip-top`} >
                            <div className='disable-btn-tooltip'>You Have To Spend Minimum <br />25seconds For Checking</div>
                        </Tooltip>
                    }
                >
                    <div className='d-flex'>
                        <button  className="step-continue-btn" name={props.nameContinue} onClick={(e) => props.onClick(props.alt, "Yes", props.link)} >{props.okToComplete ? "Ok To Complete" : "Ok To Continue"}  <i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                        <button  className="raise-issue-btn" name={props.nameIsssue} onClick={(e) => props.onClick(props.alt, "No", props.link)} >Raise Issue<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                    </div>
                </OverlayTrigger>
                {props.inputField && <div className="px-4" style={{ fontSize: "1.25rem", fontWeight: "600" }}>Enter Pressure Guage Value: <input type='text' name={props.InputName} onChange={props.onChangeInput} placeholder={props.placeholder} value={props.value} className={`${props.errorState}` && "error-bg border-warning"} /></div>}
            </div>
        </>
    )
}
export default MasterCheckList