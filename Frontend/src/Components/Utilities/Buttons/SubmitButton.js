import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { IconContext } from "react-icons"
import { CgChevronRightO } from 'react-icons/cg'
import "./Buttons.css"
function SubmitButton(props) {
    const [submit, setSubmit] = useState(false)
    return (
        <>
            <Button className='submit-button' disabled={props.disabled} name={props.name} onClick={props.onClick} onMouseEnter={() => setSubmit(true)} onMouseLeave={() => setSubmit(false)} >
                <span className='d-flex mt-1' >
                    <span className={submit ? "sub-active" : "sub-hidden"}>{props.buttonName}</span>
                    <IconContext.Provider value={{ className: submit ? "submit-icon-active" : "submit-icon" }}>
                        <CgChevronRightO />
                    </IconContext.Provider>
                </span>
            </Button>
        </>
    )
}
export default SubmitButton
