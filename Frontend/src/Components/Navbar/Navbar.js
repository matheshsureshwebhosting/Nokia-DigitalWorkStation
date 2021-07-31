import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'
function NavbarTwo(props) {
    return (
        <>
            <div className='container-fluid white d-flex justify-content-center logo_wrap flex-column align-items-center' style={{ background: "#124191", height: "10vh" }}>
                <Link to="/"><div className='nokia-logo'>{props.logo}</div></Link>
            </div>
        </>
    )
}
function Navbar(props) {
    return (
        <>
            <div className='container-fluid white nav-section position-relative'>
                <div className='d-flex justify-content-center flex-column h-100 px-4'>
                    <div className='d-flex justify-content-between logo_wrap'>
                        <Link to="/"><div className='d-flex align-items-end'><div className='nokia-logo'>{props.logo}</div><div className='logo-tagline' style={{ paddingBottom: "6px", fontFamily: "arial" }}>{props.subTitle}</div></div></Link>
                        <div className='nav-title my-auto'>{props.title}</div>
                    </div>
                </div>


            </div>
            {props.NavMenu === 'show' &&
                <div className="nav-menu">
                    <ul>
                        <li className="WI"><a className="active" href="WISearchoptions.aspx">Manufacturing Process Work Instructions</a></li>
                        <li className="AM"><a href="/">Automomus Maintenance</a></li>
                        <li className="QCD"><a href="Qualityhomepage.aspx">Quality Control Documents</a></li>
                        <li className="CN"><a href="ChangeNotes.aspx">Change Notes</a></li>
                    </ul>
                </div>
            }
        </>
    )
}
export { Navbar, NavbarTwo }