import React, { Component } from 'react'
import './Pages.css'
import TitleButton from "../Components/Utilities/Buttons/TitleButton"
import { FcPrint, FcFinePrint } from 'react-icons/fc'
import { IconContext } from "react-icons"
import { Redirect } from 'react-router-dom'


export default class Testers extends Component {
    constructor(props) {
        super()
        this.state = {
            isota: false,
            isuwa: false
        }
    }

    otabtn = () => this.setState({ isota: true })
    uwabtn = () => this.setState({ isuwa: true })

    render() {
        const { isota, isuwa } = this.state
        if (isota === true) {
            return <Redirect to={
                {
                    pathname: "/OTA",
                    state: this.props
                }
            } />
        } else if (isuwa === true) {
            return <Redirect to={
                {
                    pathname: "/UWA",
                    state: this.props
                }
            } />
        }
        return (
            <>
                <div className="d-flex justify-content-center align-items-center bg-primary flex-column h-100vh">
                    <TitleButton ><span className='fa-2x'>Testers Checklist</span></TitleButton>
                    <div className="d-flex justify-content-center my-5">
                        <div onClick={this.otabtn}>
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <IconContext.Provider value={{ className: "fa-5x green" }}>
                                    <FcPrint />
                                </IconContext.Provider>
                            OTA
                        </div>
                        </div>
                        <div onClick={this.uwabtn}>
                            <div className='grid-card bg-card white  fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <IconContext.Provider value={{ className: "fa-5x green" }}>
                                    <FcFinePrint />
                                </IconContext.Provider>
                            UWA
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

