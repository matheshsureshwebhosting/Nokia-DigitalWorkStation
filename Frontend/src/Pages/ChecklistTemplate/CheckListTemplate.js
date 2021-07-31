import React from 'react'
import { ProgressCircleBarTen } from '../../Components/ProgressCircleBar/ProgressCircleBar';
import '../Styles/Pages.css'
function CheckListTemplate(props) {

    return (
        <>
            <ProgressCircleBarTen
            />
            <div className='checklist_main_section'>
                <h2 className='checklist_title'>checklist title</h2>
                <div className='checklist_content_sec'>
                    <div className='checklist_video_sec overflow-hidden'>
                        <span>process title:</span> Tester example
                        <div>
                            <video src='./images/ota/1.mp4' alt='alt-img' muted className='h-100 w-100' autoPlay='true' controls />
                        </div>
                        <span>precaution:</span> lorem example
                    </div>
                    <div className='checklist_list_sec'>
                        <div className='w-100'>
                            <div className='check_points'>
                                <ul>
                                    <li>What To Check</li>
                                    <li>lists 1</li>
                                    <li>lists 2</li>
                                    <li>lists 3</li>
                                </ul>
                            </div>
                            <div className='check_points'>
                                <ul>
                                    <li>What To Check</li>
                                    <li>lists 1</li>
                                    <li>lists 2</li>
                                    <li>lists 3</li>
                                </ul>
                            </div>
                            <div className='check_points'>
                                <ul>
                                    <li>What To Check</li>
                                    <li>lists 1</li>
                                    <li>lists 2</li>
                                    <li>lists 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <button disabled={props.disabled} className="step-continue-btn" name={props.nameContinue} onClick={(e) => props.onClick(props.alt, "Yes", props.link)} >{props.okToComplete ? "Ok To Complete" : "Ok To Continue"}  <i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                    <button disabled={props.disabled} className="raise-issue-btn" name={props.nameIsssue} onClick={(e) => props.onClick(props.alt, "No", props.link)} >Raise Issue<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                </div>
            </div>
        </>
    )
}

export default CheckListTemplate
