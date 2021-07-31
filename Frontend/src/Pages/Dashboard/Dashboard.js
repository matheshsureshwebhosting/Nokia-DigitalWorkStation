import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap';
import SolderTable from '../../Components/Tables/SolderTable/SolderTable';
import VacuumTable from '../../Components/Tables/VacuumTable/VacuumTable';
import './Dashboard.css'
import { AiOutlineDashboard, AiOutlineDownload } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { FcDataSheet } from 'react-icons/fc'
// import ReportTable from '../Tables/ReportTable/ReportTable';
import { Link } from 'react-router-dom'
import OtaTable from '../../Components/Tables/OtaTable/OtaTable';
import UwaTable from '../../Components/Tables/UwaTable/UwaTable';
import VaccumeTables from '../../Components/Tables/ReportTable/VaccumeTable';
import UwaTables from '../../Components/Tables/ReportTable/UwaTable';
import OtaTables from '../../Components/Tables/ReportTable/OtaTable';
import SolderingTables from '../../Components/Tables/ReportTable/SolderingTable';
import PvaTable from "../../Components/Tables/PvaTable/PvaTable"
import PvaTables from "../../Components/Tables/ReportTable/PvaTable"

function Dashboard() {
    const [showTable, setshowTable] = useState(0)
    const [showreportTable, setshowreportTable] = useState(0)
    const [table, settable] = useState(true)
    const [report, setreport] = useState(false)
    const cardBottom = {
        position: "absolute",
        background: "rgba(255,255,255,0.25)",
        width: "100%",
        left: "0",
        bottom: "0",
        height: "30px",
        textAlign: "left",
        paddingLeft: "12px", paddingTop: "3px"
    }
    const tablebtn = () => {
        settable(true)
        setreport(false)
    }
    const reportbtn = () => {
        setreport(true)
        settable(false)
    }
    return (
        <>
            <div className='bg-light dashboard-container'>
                <div className='dashbord-wrap col-2'>
                    <Link to="/"> <div className='dashboard-logo border-bottom'>NOKIA</div></Link>
                    <div className='dashboard-menu-list'><AiOutlineDashboard className='dashboard-icons' /> Dashboard</div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className='dashboard-menu-list' onClick={reportbtn} >
                            <AiOutlineDownload className='dashboard-icons' />Reports<FiChevronDown className='accordion-menu-down-arrow' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ul className='dashboard-accordion-submenu'>
                                <li onClick={() => setshowreportTable(0)} >Solder tip temperature</li>
                                <li onClick={() => setshowreportTable(1)} >vacuum lifter</li>
                                <li onClick={() => setshowreportTable(2)}>OTA</li>
                                <li onClick={() => setshowreportTable(3)}>UWA</li>
                                <li onClick={() => setshowreportTable(4)}>PVA</li>
                            </ul>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className='dashboard-menu-list' onClick={tablebtn}>
                            <FcDataSheet className='dashboard-icons' />Tables  <FiChevronDown className='accordion-menu-down-arrow' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ul className='dashboard-accordion-submenu'>
                                <li onClick={() => setshowTable(0)}>Solder tip temperature</li>
                                <li onClick={() => setshowTable(1)}>vacuum lifter</li>
                                <li onClick={() => setshowTable(2)}>OTA</li>
                                <li onClick={() => setshowTable(3)}>UWA</li>
                                <li onClick={() => setshowTable(4)}>PVA</li>
                            </ul>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
                <div className="dashboard-section col-10">
                    <div className="d-flex justify-content-center mt-4">
                        <div className="col-md-3">
                            <div className="card-counter primary position-relative">
                                <i className="fa fa-code-fork"></i>
                                <span className="count-numbers">6</span>
                                <span className="count-name">InComplete</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter danger position-relative">
                                <i className="fa fa-spin fa-cog"></i>
                                <span className="count-numbers">3</span>
                                <span className="count-name">Missed</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter info position-relative">
                                <i className="fa fa-bar-chart"></i>
                                <span className="count-numbers">35</span>
                                <span className="count-name">Completed</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            table ? showTable === 0 ? <SolderTable /> : showTable === 1 ? <VacuumTable /> : showTable === 2 ? <OtaTable /> : showTable === 3 ? <UwaTable /> : showTable === 4 ? <PvaTable /> : null : null
                        }
                        {
                            report ? showreportTable === 0 ? <SolderingTables /> : showreportTable === 1 ? <VaccumeTables /> : showreportTable === 2 ? <OtaTables /> : showreportTable === 3 ? <UwaTables /> : showreportTable === 4 ? <PvaTables /> : null : null
                        }
                    </div>

                    {/* <div className="mt-5">
                        {
                            solderTable ? <SolderTable /> : vacTab ? <VacuumTable /> : null
                        }
                    </div> */}
                    {/* <div className='d-flex mt-5 mb-4 justify-content-center'>
                        <button className='solderbtn mr-3' onClick={() => setSolderTable(true)}>Solder Report</button>
                        <button className='vacuumbtn' onClick={() => setSolderTable(false)}>Vacuum Report</button>
                    </div><div className='d-flex mt-5 mb-4 justify-content-center'>
                        <button className='solderbtn mr-3' onClick={() => setSolderTable(true)}>Solder Report</button>
                        <button className='vacuumbtn' onClick={() => setSolderTable(false)}>Vacuum Report</button>
                    </div>
                    {
                        solderTable ? <SolderTable /> : <VacuumTable />
                    } */}
                </div>

            </div>
        </>
    )
}

export default Dashboard
