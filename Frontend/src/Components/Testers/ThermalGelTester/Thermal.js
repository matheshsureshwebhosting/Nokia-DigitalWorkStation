import React, { useEffect, useRef, useState } from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { ProgressCircleBar13 } from '../../ProgressCircleBar/ProgressCircleBar'
import { useSelector, useDispatch } from 'react-redux'
import video1 from '../../../assets/videos/PVA/1.mp4'
import video2 from '../../../assets/videos/PVA/2.mp4'
import video3 from '../../../assets/videos/PVA/3.mp4'
import video4 from '../../../assets/videos/PVA/4.mp4'
import video5 from '../../../assets/videos/PVA/5.mp4'
import video6 from '../../../assets/videos/PVA/6.mp4'
import video7 from '../../../assets/videos/PVA/7.mp4'
import video8 from '../../../assets/videos/PVA/8.mp4'
import video9 from '../../../assets/videos/PVA/9.mp4'
import video10 from '../../../assets/videos/PVA/10.mp4'
import video11 from '../../../assets/videos/PVA/11.mp4'
import video12 from '../../../assets/videos/PVA/12.mp4'
import video13 from '../../../assets/videos/PVA/13.mp4'

import { useHistory } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
import { pvaActions } from '../../../Reducers/PvaReducer'
const thermaltime = {}
const thermalstatus = {}
var thermalforms;
const Timer_constant = 5;
export function Thermal(props) {
    const testerName = localStorage.getItem("testerName")
    const stationId = localStorage.getItem("stationId")
    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;

    const onClick = (form, status, nextPath) => {
        localStorage.removeItem("testerName")
        localStorage.removeItem("stationId")
        const { state } = props.location
        console.log(state.Station)
        thermalforms = {
            Station: state.Station,
            date: state.date,
            operator_name: state.operator_name,
            shift: state.shift,
        }
        console.log(thermalforms.Station)

        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step1_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step1_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            })
                .then(async(result) => {
                    if (result.isConfirmed) {
          
                        thermalstatus[form] = status
                        thermaltime[`${form}time`] = timer
                        var sendMail = {
                            name: thermalforms.operator_name,
                            testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                            failurestep: form
                        }                                     
                        //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                        history.push(nextPath)
                    }
                })
        }
        console.log(thermaltime.thermaltime)
    }

    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 1 of 13'
                name={testerName}
                machineID={stationId}
            />
            <MasterCheckList
                name={testerName} machineID={stationId}
                disabled={buttonStatus}
                nameContinue='success' nameIssue='alert'
                TypeOfMedia="Video" videosrc={video1} onClick={onClick} alt="thermal1"
                link='/thermal/step2' />
        </>
    )
}
export function Thermal2() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }

        if (status === 'Yes') {
            dispatch(pvaActions.step2_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }

        if (status === 'No') {
            dispatch(pvaActions.step2_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 2 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc={video2} onClick={onClick} alt="thermal2" link='/thermal/step3' />

        </>
    )
}
export function Thermal3() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step3_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No') {
            dispatch(pvaActions.step3_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 3 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video3} onClick={onClick} alt="thermal3"
                link='/thermal/step4' />
        </>
    )
}
export function Thermal4() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step4_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step4_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 4 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video4} onClick={onClick} alt="thermal4"
                link='/thermal/step5' />
        </>
    )
}
export function Thermal5() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step5_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step5_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 5 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video5} onClick={onClick} alt="thermal5"
                link='/thermal/step6' />
        </>
    )
}
export function Thermal6() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step6_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step6_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 6 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video6} onClick={onClick} alt="thermal6"
                link='/thermal/step7' />
        </>
    )
}
export function Thermal7() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    const [pressureValue, setPressureValue] = useState("")
    const [error, setError] = useState("")
    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;

    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (pressureValue === "") {
            SweetAlert.fire({
                title: "Please enter the pressure gauge value",
                icon: "warning",
            })
            setError("true")
        }
        if (status === 'No' || !(pressureValue < 49) || !(pressureValue > 70)) {
            SweetAlert.fire({
                title: "Value Should be 50 To 70 PSI",
                icon: "warning",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    dispatch(pvaActions.step7_status('yes'))
                    thermaltime[`${form}time`] = timer
                    thermalstatus[form] = status
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
        if (status === 'Yes' || !(pressureValue < 49) || !(pressureValue > 70)) {
            SweetAlert.fire({
                title: "Value Should be 50 To 70 PSI",
                icon: "warning",
            })
            dispatch(pvaActions.step7_status('yes'))
        }
        if (status === 'Yes' && pressureValue !== "") {
            dispatch(pvaActions.step7_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No' && pressureValue !== "") {
            dispatch(pvaActions.step7_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.replace("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 7 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                InputName="pressure_gauge_value"
                placeholder="50 to 70 PSI"
                errorState={error}
                onChangeInput={e => setPressureValue(e.target.value)}
                inputField="true"
                disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video7} onClick={onClick} alt="thermal7"
                link='/thermal/step8' />
        </>
    )
}
export function Thermal8() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step8_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step8_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 8 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video8} onClick={onClick} alt="thermal8"
                link='/thermal/step9' />
        </>
    )
}
export function Thermal9() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step9_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No') {
            dispatch(pvaActions.step9_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 9 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video9} onClick={onClick} alt="thermal9"
                link='/thermal/step10' />
        </>
    )
}
export function Thermal10() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step10_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No') {
            dispatch(pvaActions.step10_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 10 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video10} onClick={onClick} alt="thermal10"
                link='/thermal/step11' />
        </>
    )
}
export function Thermal11() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step11_status('yes'))
            thermalstatus[form] =
                thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step11_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    thermalstatus[form] = status
                    thermaltime[`${form}time`] = timer
                    var sendMail = {
                        name: thermalforms.operator_name,
                        testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 11 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video11} onClick={onClick} alt="thermal11"
                link='/thermal/step12' />
        </>
    )
}
export function Thermal12() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick = (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step12_status('yes'))
            thermalstatus[form] = status
            thermaltime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === 'No') {
            dispatch(pvaActions.step12_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            })
                .then(async(result) => {
                    if (result.isConfirmed) {
                        thermalstatus[form] = status
                        thermaltime[`${form}time`] = timer
                        var sendMail = {
                            name: thermalforms.operator_name,
                            testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                            failurestep: form
                        }                                     
                        //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                        history.push(nextPath)
                    }
                })
        }
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 12 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TypeOfMedia="Video" videosrc={video12} onClick={onClick} alt="thermal12"
                link='/thermal/step13' />
        </>
    )
}
export function Thermal13() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)

    // redux state
    const pvaState = useSelector(state => state.PvaStates)
    const dispatch = useDispatch();

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }
    useInterval(() => { setTimer(timer + 1); }, 1000);
    const buttonStatus = timer > Timer_constant ? false : true;
    const onClick =async (form, status, nextPath) => {
        if (thermalforms === undefined) {
            return history.push("/thermalform")
        }
        if (status === 'Yes') {
            dispatch(pvaActions.step13_status('yes'))
        }
        if (status === 'No') {
            var sendMail = {
                name: thermalforms.operator_name,
                testing: `Thermal Testing ${thermalforms.Station} ${thermalforms.shift} ${thermalforms.date}`,
                failurestep: form
            }                                     
            //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
            dispatch(pvaActions.step13_status('no'))
        }
        SweetAlert.fire({
            title: 'AM for PVA Completed - {f}Successfully',
            confirmButtonText: `Save`,
        }).then((result) => {
            dispatch(pvaActions.step13_status('yes'))
            if (result.isConfirmed) {
                thermaltime[`${form}time`] = timer
                var finalstatus;
                if (Object.values(thermalstatus).includes("No")) {
                    finalstatus = "In Complete"
                } else {
                    finalstatus = "Complete"
                }
                const datas = {
                    date: thermalforms.date,
                    station: thermalforms.Station,
                    operator_name: thermalforms.operator_name,
                    shift: thermalforms.shift,
                    thermal1: thermalstatus.thermal1,
                    thermal2: thermalstatus.thermal2,
                    thermal3: thermalstatus.thermal3,
                    thermal4: thermalstatus.thermal4,
                    thermal5: thermalstatus.thermal5,
                    thermal6: thermalstatus.thermal6,
                    thermal7: thermalstatus.thermal7,
                    thermal8: thermalstatus.thermal8,
                    thermal9: thermalstatus.thermal9,
                    thermal10: thermalstatus.thermal10,
                    thermal11: thermalstatus.thermal11,
                    thermal12: thermalstatus.thermal12,
                    thermaltime1: thermaltime.thermaltime,
                    thermaltime2: thermaltime.thermal2time,
                    thermaltime3: thermaltime.thermal3time,
                    thermaltime4: thermaltime.thermal4time,
                    thermaltime5: thermaltime.thermal5time,
                    thermaltime6: thermaltime.thermal6time,
                    thermaltime7: thermaltime.thermal7time,
                    thermaltime8: thermaltime.thermal8time,
                    thermaltime9: thermaltime.thermal9time,
                    thermaltime10: thermaltime.thermal10time,
                    thermaltime11: thermaltime.thermal11time,
                    thermaltime12: thermaltime.thermal12time,
                    thermaltime13: timer,
                    thermal13: status,
                    status: finalstatus
                }
                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/send`, datas).then((res) => {
                    if (res.data === true) {
                    }
                    history.push("/")
                }).catch((error) => {
                    console.log(error)
                })
            }
        })
    }
    const data = thermalforms
    if (thermalforms === undefined) {
        return history.push("/thermalform")
    }
    return (
        <>
            <ProgressCircleBar13
                TimeCounter={timer}
                status1={pvaState.Step1} status2={pvaState.Step2} status3={pvaState.Step3} status4={pvaState.Step4} status5={pvaState.Step5} status6={pvaState.Step6} status7={pvaState.Step7} status8={pvaState.Step8} status9={pvaState.Step9} status10={pvaState.Step10} status11={pvaState.Step11} status12={pvaState.Step12} status13={pvaState.Step13}
                stepsTag=' 13 of 13'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                okToComplete="true" TypeOfMedia="Video" videosrc={video13}
                onClick={onClick} alt="thermal13" link='/' />
        </>
    )
}
