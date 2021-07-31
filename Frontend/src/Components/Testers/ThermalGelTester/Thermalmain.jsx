import React, { Component } from 'react'
import '../../../Pages/Styles/Pages.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Navbar/Navbar'

export default class Thermalmain extends Component {
    render() {
        return (
            <>
                {/* Navbar */}
                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Thermal Gel Machine Autonomous Maintenance" />

                {/* Grid Menu Cards */}
                <div className="d-flex justify-content-center align-items-center bg-primary flex-column h-100vh">
                    <div className="d-flex justify-content-center my-5">
                        <Link to="/Pvaform" >
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <img className='w-100 h-100' src="./images/tester/pva.png" alt='asytmek' />
                            </div>
                        </Link>
                        {/* <Link to="/uwaform" > */}
                        <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                            <img className='w-100 h-100' src="./images/tester/asy.png" alt='asytmek' />
                        </div>
                        {/* </Link> */}
                        {/* <Link to="/uwaform" > */}
                        <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                            <img className='w-100 h-100' src="./images/tester/gel.png" alt='asytmek' />
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </>
        )
    }
}
