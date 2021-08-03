import React, { useEffect, useRef, useState } from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { ProgressCircleBarTen } from '../../ProgressCircleBar/ProgressCircleBar'
import { useHistory, Redirect } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { uwaActions } from '../../../Reducers/UwaReducer';
const uwastatus = {}
const uwatime = {}
var uwaform;
const Timer_constant = -1;
function Uwa(props) {
    // storing user name and station id in localStorage
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
    const uwaState = useSelector(state => state.UwaStates)
    const dispatch = useDispatch();
    const onClick = (form, status, nextPath) => {
        localStorage.removeItem("testerName")
        localStorage.removeItem("stationId")
        const { state } = props.location
        uwaform = state
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }

        if (status === "Yes") {
            dispatch(uwaActions.step1_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }

        if (status === "No") {
            dispatch(uwaActions.step1_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 1 of 10'
                name={testerName}
                machineID={stationId}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/1.mp4"
                name={testerName}
                machineID={stationId}
                alt="Uwa"
                onClick={onClick}
                buttonName="Next"
                link="/Uwa2" />
        </>
    )
}
function Uwa2() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }

        if (status === "Yes") {
            dispatch(uwaActions.step2_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step2_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 2 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/2.mp4"
                onClick={onClick}
                alt="Uwa2"
                buttonName="Next"
                link="/Uwa3" />
        </>
    )

}
function Uwa3() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step3_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step3_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (

        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 3 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/3.mp4"
                onClick={onClick}
                alt="Uwa3"
                buttonName="Next"
                link="/Uwa4" />
        </>
    )
}
function Uwa4() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step4_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step4_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 4 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/4.mp4"
                onClick={onClick}
                alt="Uwa4"
                buttonName="Next"
                link="/Uwa5" />
        </>
    )

}
function Uwa5() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step5_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step5_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 5 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/5.mp4"
                onClick={onClick}
                alt="Uwa5"
                buttonName="Next"
                link="/Uwa6" />
        </>
    )
}
function Uwa6() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step6_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step6_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 6 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/6.mp4"
                onClick={onClick}
                alt="Uwa6"
                buttonName="Next"
                link="/Uwa7" />
        </>
    )
}
function Uwa7() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }

        if (status === "Yes") {
            dispatch(uwaActions.step7_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step7_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 7 of 70'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/7.mp4"
                onClick={onClick}
                alt="Uwa7"
                buttonName="Next"
                link="/Uwa8" />
        </>
    )
}
function Uwa8() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step8_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step8_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 8 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/8.mp4"
                onClick={onClick}
                alt="Uwa8"
                buttonName="Next"
                link="/Uwa9" />
        </>
    )
}
function Uwa9() {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === "Yes") {
            dispatch(uwaActions.step9_status('yes'))
            uwastatus[form] = status
            uwatime[`${form}time`] = timer
            history.push(nextPath)
        }
        if (status === "No") {
            dispatch(uwaActions.step9_status('no'))
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    uwatime[`${form}time`] = timer
                    var sendMail = {
                        name: uwaform.operator_name,
                        testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                        failurestep: form
                    }                                     
                    //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
        }
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 9 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/9.mp4"
                onClick={onClick}
                alt="Uwa9"
                buttonName="Next"
                link="/Uwa10" />
        </>
    )
}
function Uwa10(props) {
    const history = useHistory()
    const [timer, setTimer] = useState(0)
    // redux state
    const uwaState = useSelector(state => state.UwaStates)
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
    const onClick = async(form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/uwaform")
        }
        if (status === 'Yes') {
            dispatch(uwaActions.step10_status('yes'))
        }
        if (status === 'No') {
            var sendMail = {
                name: uwaform.operator_name,
                testing: `Uwa Testing ${uwaform.Station} ${uwaform.shift} ${uwaform.date}`,
                failurestep: form
            }                                     
            //await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
            dispatch(uwaActions.step10_status('no'))
        }
        SweetAlert.fire({
            title: 'AM for UWA Completed - Successfully',
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                uwastatus["uwa10"] = status
                const newotastatus = Object.values(uwastatus)
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
                for (var i = 0; i < Object.keys(uwastatus).length; i++) {
                    if (Object.values(uwastatus)[i] === "No") {
                        statuslists.push(Object.keys(uwastatus)[i])
                    }
                }
                const datas = {
                    date: uwaform.date,
                    station: uwaform.Station,
                    operator_name: uwaform.operator_name,
                    shift: uwaform.shift,
                    uwa1: uwastatus.Uwa,
                    uwa2: uwastatus.Uwa2,
                    uwa3: uwastatus.Uwa3,
                    uwa4: uwastatus.Uwa4,
                    uwa5: uwastatus.Uwa5,
                    uwa6: uwastatus.Uwa6,
                    uwa7: uwastatus.Uwa7,
                    uwa8: uwastatus.Uwa8,
                    uwa9: uwastatus.Uwa9,
                    uwa10: status,
                    uwatime1: uwatime.Uwatime,
                    uwatime2: uwatime.Uwa2time,
                    uwatime3: uwatime.Uwa3time,
                    uwatime4: uwatime.Uwa4time,
                    uwatime5: uwatime.Uwa5time,
                    uwatime6: uwatime.Uwa6time,
                    uwatime7: uwatime.Uwa7time,
                    uwatime8: uwatime.Uwa8time,
                    uwatime9: uwatime.Uwa9time,
                    uwatime10: timer,
                    status: finalstatus,
                    avg: finalavg,
                    statuslists: statuslists
                }
                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa/send`, datas).then((res) => {
                    if (res.data === true) {
                        history.push(nextPath)
                    }
                }).catch((error) => {
                    console.log(error)
                })

            }
        })
    }
    const data = uwaform
    if (uwaform === undefined) {
        return <Redirect to="/uwaform" />
    }
    return (
        <>
            <ProgressCircleBarTen
                TimeCounter={timer}
                status1={uwaState.Step1} status2={uwaState.Step2} status3={uwaState.Step3} status4={uwaState.Step4} status5={uwaState.Step5} status6={uwaState.Step6} status7={uwaState.Step7} status8={uwaState.Step8} status9={uwaState.Step9} status10={uwaState.Step10}
                stepsTag=' 10 of 10'
                name={data.operator_name}
                machineID={data.Station}
            />
            <MasterCheckList
                disabled={buttonStatus}
                okToComplete="true"
                TypeOfMedia="Video"
                videosrc="./Images/Uwa/10.mp4"
                onClick={onClick}
                alt="Uwa10"
                buttonName="Done"
                link="/" />
        </>
    )
}
export { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 }
