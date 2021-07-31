import React from 'react'
import './Buttons.css'
function TitleButton(props) {
    return (
        <div className='secondary-bg title-button my-4'>
            {props.children}
        </div>
    )
}

export default TitleButton
