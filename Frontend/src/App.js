import './App.css';
import React, { Component, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sliders from './Components/Sliders/Sliders';
import SlidercontextProvider from "./Contexts/Slidercontext"
import Step from './Components/Test/Step1';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';
import Step5 from './Components/Steps/Step5';
import Step6 from './Components/Steps/Step6';
import Step7 from './Components/Steps/Step7';
import Step8 from './Components/Steps/Step8';
import Step9 from './Components/Steps/Step9';
import Soldering from './Components/Soldering/Solderings';

import SolderForm from './Components/Soldering/SolderForm'
import VacuumForm from './Components/Steps/VacuumForm';
import Testerform from './Components/Testers/Testerform';
import Thermalform from './Components/Testers/ThermalGelTester/Thermalform';
import OtaForm from "./Components/Testers/OtaTester/OtaForm"
import UwaForm from "./Components/Testers/UwaTester/UwaForm"

import AOS from 'aos'
import 'aos/dist/aos.css';
import Testers from './Pages/TestersMainPage/Testers';

import { Ota, Ota2, Ota3, Ota4, Ota5, Ota6, Ota7, Ota8, Ota9, Ota10 } from './Components/Testers/OtaTester/Ota';
import { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 } from './Components/Testers/UwaTester/Uwa';
import { Thermal, Thermal2, Thermal3, Thermal4, Thermal5, Thermal6, Thermal7, Thermal8, Thermal9, Thermal10, Thermal11, Thermal12, Thermal13 } from './Components/Testers/ThermalGelTester/Thermal';
import Error from './Pages/ErrorPage/Error';
import Thermalmain from './Components/Testers/ThermalGelTester/Thermalmain';
import LoginPage from './Pages/LoginPage/LoginPage';
import SuperuserDashboard from './Pages/Dashboard/SuperuserDashboard';
import OperatorsDashboard from './Pages/Dashboard/OperatorsDashboard';
import TechniciansDashboard from './Pages/Dashboard/TechniciansDashboard';
import EngineersDashboard from './Pages/Dashboard/EngineersDashboard';
import TeamLeaderDashboard from './Pages/Dashboard/TeamLeaderDashboard';
import QualityDashboard from './Pages/Dashboard/QualityDashboard';
import Login from './Pages/LoginPage/LoginPage'

import { Pva, Pva2, Pva3, Pva4, Pva5, Pva6, Pva7, Pva8, Pva9, Pva10, Pva11, Pva12, Pva13 } from './Components/Testers/ThermalGelTester/Pva/Pva';
import Pvaform from './Components/Testers/ThermalGelTester/Pva/Pvaform';


const Home = React.lazy(() => import('./Components/Home/Home.jsx'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const Vaccume = React.lazy(() => import('./Components/Steps/Vaccume'))

export default class App extends Component {

  render() {

    AOS.init();
    return (
      <>
        <Router>
          <SlidercontextProvider>
            <Suspense fallback={<div className="center"><Spinner animation="border" variant="primary" /></div>}>
              <Switch>
                <Route path='/' component={Home} exact />
                {/* pages */}
                <Route path="/home" component={Home} />

                {/* <Route path='/Dashboard' render={() => (<Dashboard />)} /> */}
                <Route path="/Dashboard" component={Dashboard} />

                <Route exact path="/sliders" component={Sliders} />
                <Route path='/Soldering' render={() => (<Soldering />)} />
                {/* ----------form--------- */}
                <Route path='/SolderForm' component={SolderForm} />
                <Route path='/VacuumForm' component={VacuumForm} />
                {/* vacuum checklist Steps */}
                <Route exact path="/test/step1" component={Step} />
                <Route exact path="/Step1" component={Step1} />
                <Route exact path="/Step2" component={Step2} />
                <Route exact path="/Step3" component={Step3} />
                <Route exact path="/Step4" component={Step4} />
                <Route exact path="/Step5" component={Step5} />
                <Route exact path="/Step6" component={Step6} />
                <Route exact path="/Step7" component={Step7} />
                <Route exact path="/Step8" component={Step8} />
                <Route exact path="/Step9" component={Step9} />
                <Route path="/vaccume" component={Vaccume} />
                <Route path="/testerform" component={Testerform} />
                <Route path="/Testers" component={Testers} />

                {/* OTA checklist */}
                <Route path="/otaform" component={OtaForm} />
                <Route path="/OTA" component={Ota} />
                <Route path="/Ota2" component={Ota2} />
                <Route path="/Ota3" component={Ota3} />
                <Route path="/Ota4" component={Ota4} />
                <Route path="/Ota5" component={Ota5} />
                <Route path="/Ota6" component={Ota6} />
                <Route path="/Ota7" component={Ota7} />
                <Route path="/Ota8" component={Ota8} />
                <Route path="/Ota9" component={Ota9} />
                <Route path="/Ota10" component={Ota10} />
                {/* UWS Checklist */}
                <Route path="/uwaform" component={UwaForm} />
                <Route path="/UWA" component={Uwa} />
                <Route path="/Uwa2" component={Uwa2} />
                <Route path="/Uwa3" component={Uwa3} />
                <Route path="/Uwa4" component={Uwa4} />
                <Route path="/Uwa5" component={Uwa5} />
                <Route path="/Uwa6" component={Uwa6} />
                <Route path="/Uwa7" component={Uwa7} />
                <Route path="/Uwa8" component={Uwa8} />
                <Route path="/Uwa9" component={Uwa9} />
                <Route path="/Uwa10" component={Uwa10} />
                {/* Thermal Gel */}
                <Route exact path="/Pvaform" component={Pvaform} />
                <Route exact path="/pva" component={Pva} />
                <Route exact path="/pva/step2" component={Pva2} />
                <Route exact path="/pva/step3" component={Pva3} />
                <Route exact path="/pva/step4" component={Pva4} />
                <Route exact path="/pva/step5" component={Pva5} />
                <Route exact path="/pva/step6" component={Pva6} />
                <Route exact path="/pva/step7" component={Pva7} />
                <Route exact path="/pva/step8" component={Pva8} />
                <Route exact path="/pva/step9" component={Pva9} />
                <Route exact path="/pva/step10" component={Pva10} />
                <Route exact path="/pva/step11" component={Pva11} />
                <Route exact path="/pva/step12" component={Pva12} />
                <Route exact path="/pva/step13" component={Pva13} />
                <Route path="/thermalmain" component={Thermalmain} />

                {/**Users dashboard */}
                <Route exact path="/superuser" component={SuperuserDashboard} />
                <Route exact path="/quality" component={QualityDashboard} />
                <Route exact path="/teamleader" component={TeamLeaderDashboard} />
                <Route exact path="/engineer" component={EngineersDashboard} />
                <Route exact path="/technician" component={TechniciansDashboard} />
                <Route exact path="/operator" component={OperatorsDashboard} />
                <Route exact path="/login" component={Login} />


                <Route path="*"><Error /></Route>
              </Switch>
            </Suspense>
          </SlidercontextProvider>
        </Router>
      </>
    )
  }
}