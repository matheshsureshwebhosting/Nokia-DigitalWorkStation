import React from 'react'
import solderImg from "../../assets/img/home/Mask Group 10.png"
import vacuumImg from "../../assets/img/home/Mask Group 7.png"
import gel from '../../assets/img/home/Mask Group 11.png';
import packing from '../../assets/img/home/Mask Group 8.png';
import robot from '../../assets/img/home/Mask Group 9.png';
import testers from '../../assets/img/home/Mask Group 12.png';
import { Link } from 'react-router-dom'
import list from '../../assets/img/list.png'
import './Homes.css'
import { Navbar } from '../Navbar/Navbar'
import dashboardIcon from "../../assets/img/home/app-store.svg";

function Home(props) {

  return (
    <>
      <Navbar logo="NOKIA" NavMenu='show' subTitle="Digital  WorkStation" title="Autonomous Maintenance" src={dashboardIcon} alt="" />
      <div className='h-90 d-flex flex-column justify-content-center align-content-center' id="homepage">
        <div className="d-flex justify-content-center">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center align-content-center">

            <div className='d-flex justify-content-center'>
              <Link to="/VacuumForm" className='d-flex justify-content-end'><img src={vacuumImg} alt='vacuum-img' className="home-grid-menu" /></Link>
              <Link to="/SolderForm" className='d-flex justify-content-center'><img src={solderImg} alt='vacuum-img' className="home-grid-menu" /></Link>
            </div>

            <div className='d-flex justify-content-around'>
              <Link to="/Testers" className='d-flex justify-content-end'><img src={testers} alt='vacuum-img' className="home-grid-menu" /></Link>
              <Link to="/thermalmain" className='d-flex justify-content-center'><img src={gel} alt='vacuum-img' className="home-grid-menu" /></Link>
            </div>

            <div className='d-flex justify-content-around'>
              <Link to="/" className='d-flex justify-content-end'><img src={robot} alt='vacuum-img' className="home-grid-menu" /></Link>
              <Link to="/" className='d-flex justify-content-center'><img src={packing} alt='vacuum-img' className="home-grid-menu" /></Link>
            </div>
          </div>
          <div className="col-6 my-auto d-flex flex-column align-content-center align-items-center justify-content-center">
            <div className="col-xxl-7">
              <h4 style={{ textAlign: "center", lineHeight: "1.6" }}>
                Autonomous maintenance Check points for Key Process Stages can be accessed by operators.
                The Check lists need to be filled and maintained at beginning of every shift to ensure
                process quality and efficiency of these equipment.
              </h4>
            </div>
            <img src={list} alt="" style={{ height: "200px" }} />
            <Link to='/login'><h4 style={{ textAlign: "center", color: "#124191", fontWeight: "600" }}>Click Here to Go <br /> Reports</h4></Link>
          </div>
        </div>
      </div>
    </ >
  )
}

export default Home
