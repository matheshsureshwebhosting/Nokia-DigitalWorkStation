import React, { Component } from 'react'
import '../Styles/Pages.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'


export default class Testers extends Component {

    render() {
        return (
            <>
                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Testers Autonomous Maintenance" />
                <div className="d-flex justify-content-center align-items-center bg-primary flex-column h-90">
                    <div className="d-flex justify-content-center my-5">
                        <Link to="/otaform" >
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <img className='w-100 h-100' src="./images/tester/ota.png" alt='asytmek' />
                            </div>
                        </Link>
                        <Link to="/uwaform" >
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <img className='w-100 h-100' src="./images/tester/uwa.png" alt='asytmek' />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

