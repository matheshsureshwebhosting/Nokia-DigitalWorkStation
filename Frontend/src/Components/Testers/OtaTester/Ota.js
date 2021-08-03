import React, { useEffect, useRef, useState } from 'react'
import { useHistory, Redirect } from 'react-router'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { ProgressCircleBarTen } from '../../ProgressCircleBar/ProgressCircleBar'
import { useSelector, useDispatch } from 'react-redux'
import SweetAlert from "sweetalert2";
import axios from 'axios';
import { otaActions } from '../../../Reducers/OtaReducer'

const otastatus = {}
const otatime = {}
var otaform;
const Timer_constant = -1;
function Ota(props) {
    // Storing name,station in localStorage
    const testerName = localStorage.getItem("testerName")
    const stationId = localStorage.getItem("stationId")

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

    // redux state
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        localStorage.removeItem("testerName")
        localStorage.removeItem("stationId")

        const { state } = props.location
        otaform = state
        if (otaform === undefined) {
            return history.push("/otaform")
        }

        if (status === "Yes") {
            dispatch(otaActions.step1_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        else if (status === "No") {
            dispatch(otaActions.step1_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer                                        
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    return (

        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 1 of 10'
                name={testerName}
                machineID={stationId}
            />
            <MasterCheckList
                disabled={buttonStatus} TimeCounter={timer}
                name={testerName} machineID={stationId}
                count="10" progressValue="10" progressText="1 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/1.mp4" onClick={onClick} alt="Ota"
                uttonName="Next" link="/Ota2" />
        </ >
    )
}
function Ota2() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    const otaState = useSelector(state => state.OtaStates)
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
        if (otaform === undefined) {
            return history.push("/otaform")
        }

        if (status === "Yes") {
            dispatch(otaActions.step2_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step2_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                TimeCounter={timer}
                stepsTag=' 2 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressText="2 of 10" progressValue="20"
                TypeOfMedia="Video" videosrc="./Images/OTA/2.mp4" onClick={onClick} alt="Ota2" buttonName="Next" link="/Ota3" />
        </>
    )

}
function Ota3() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes") {
            dispatch(otaActions.step3_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step3_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 3 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="30" progressText="3 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/3.mp4" onClick={onClick} alt="Ota3" buttonName="Next" link="/Ota4" />
        </>
    )
}
function Ota4() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes") {
            dispatch(otaActions.step4_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step4_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 4 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="40" progressText="4 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/4.mp4" onClick={onClick} alt="Ota4" buttonName="Next" link="/Ota5" />
        </>
    )

}
function Ota5() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes") {
            dispatch(otaActions.step5_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === "No") {
            dispatch(otaActions.step5_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 5 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer} count="10"
                progressValue="50" progressText="5 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/5.mp4" onClick={onClick} alt="Ota5" buttonName="Next" link="/Ota6" />
        </>
    )
}
function Ota6() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === "Yes") {
            dispatch(otaActions.step6_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step6_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    ////await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 6 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="60" progressText="6 0f 10"
                TypeOfMedia="Video" videosrc="./Images/OTA/6.mp4" onClick={onClick}
                alt="Ota6" buttonName="Next" link="/Ota7" />
        </>
    )
}
function Ota7() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }

        if (status === "Yes") {
            dispatch(otaActions.step7_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step7_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (

        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step7} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 7 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="70" progressText="7 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/7.mp4" onClick={onClick} alt="Ota7" buttonName="Next" link="/Ota8" />
        </>
    )
}
function Ota8() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }

        if (status === "Yes") {
            dispatch(otaActions.step8_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === "No") {
            dispatch(otaActions.step8_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step7} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 8 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="80" progressText="8 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/8.mp4" onClick={onClick} alt="Ota8" buttonName="Next" link="/Ota9" />
        </>
    )
}
function Ota9() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }

        if (status === "Yes") {
            dispatch(otaActions.step9_status('yes'))
            otastatus[form] = status
            otatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(otaActions.step9_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    otastatus[form] = status
                    otatime[`${form}time`] = timer
                    var sendMail = {
                        name: otaform.operator_name,
                        testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step7} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 9 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="90" progressText="9 0f 10" TypeOfMedia="Video"
                videosrc="./Images/OTA/9.mp4" onClick={onClick} alt="Ota9" buttonName="Next" link="/Ota10" />
        </>
    )
}
function Ota10() {
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
    const otaState = useSelector(state => state.OtaStates)
    const dispatch = useDispatch();
    const onClick =async (form, status, nextPath) => {
        if (otaform === undefined) {
            return history.push("/otaform")
        }
        if (status === 'Yes') {
            dispatch(otaActions.step10_status('yes'))
        }
        if (status === 'No') {
            var sendMail = {
                name: otaform.operator_name,
                testing: `OTA Testing ${otaform.Station} ${otaform.shift} ${otaform.date}`,
                failurestep: form
            }                                     
            //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
            dispatch(otaActions.step10_status('no'))
        }
        SweetAlert.fire({
            title: 'AM for OTA Completed - Successfully',
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                otastatus["ota10"] = status
                const newotastatus = Object.values(otastatus)
                var finalstatus;
                if (newotastatus.includes("No")) {
                    finalstatus = "In Complete"
                } else {
                    finalstatus = "Complete"
                }
                const avg = newotastatus.filter(status => { return status === "No" })
                var finalavg
                if (avg.length === 0) {
                    finalavg = '10 / 10'
                } else {
                    finalavg = `${Number(10) - Number(avg.length)}/10`
                }
                const statuslists = []
                for (var i = 0; i < Object.keys(otastatus).length; i++) {
                    if (Object.values(otastatus)[i] === "No") {
                        statuslists.push(Object.keys(otastatus)[i])
                    }
                }
                const datas = {
                    date: otaform.date,
                    station: otaform.Station,
                    operator_name: otaform.operator_name,
                    shift: otaform.shift,
                    ota1: otastatus.Ota,
                    ota2: otastatus.Ota2,
                    ota3: otastatus.Ota3,
                    ota4: otastatus.Ota4,
                    ota5: otastatus.Ota5,
                    ota6: otastatus.Ota6,
                    ota7: otastatus.Ota7,
                    ota8: otastatus.Ota8,
                    ota9: otastatus.Ota9,
                    ota10: status,
                    Otatime1: otatime.Otatime,
                    Otatime2: otatime.Ota2time,
                    Otatime3: otatime.Ota3time,
                    Otatime4: otatime.Ota4time,
                    Otatime5: otatime.Ota5time,
                    Otatime6: otatime.Ota6time,
                    Otatime7: otatime.Ota7time,
                    Otatime8: otatime.Ota8time,
                    Otatime9: otatime.Ota9time,
                    Otatime10: timer,
                    status: finalstatus,
                    avg: finalavg,
                    statuslists: statuslists
                }
                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/send`, datas).then((res) => {
                    if (res.data === true) {
                        history.push(nextPath)
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        })
    }
    const data = otaform
    if (otaform === undefined) {
        return <Redirect to="/otaform" />
    }
    return (

        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={otaState.Step1} status2={otaState.Step2} status3={otaState.Step3} status4={otaState.Step4} status5={otaState.Step5} status6={otaState.Step6} status7={otaState.Step7} status8={otaState.Step8} status9={otaState.Step9} status10={otaState.Step10}
                stepsTag=' 10 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList

                disabled={buttonStatus}
                TimeCounter={timer}
                count="10" progressValue="100" progressText="10 0f 10"
                okToComplete="true" TypeOfMedia="Video"
                videosrc="./Images/OTA/10.mp4" onClick={onClick}
                alt="Ota10" buttonName="Done" link="/" />
        </>
    )
}
export { Ota, Ota2, Ota3, Ota4, Ota5, Ota6, Ota7, Ota8, Ota9, Ota10 }
