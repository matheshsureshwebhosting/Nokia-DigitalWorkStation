import React, { useEffect, useRef, useState } from 'react'
import MasterCheckList from '../../../../Pages/MasterCheckList/MasterCheckList'
import video1 from '../../../../assets/videos/PVA/1.mp4'
import video2 from '../../../../assets/videos/PVA/2.mp4'
import video3 from '../../../../assets/videos/PVA/3.mp4'
import video4 from '../../../../assets/videos/PVA/4.mp4'
import video5 from '../../../../assets/videos/PVA/5.mp4'
import video6 from '../../../../assets/videos/PVA/6.mp4'
import video7 from '../../../../assets/videos/PVA/7.mp4'
import video8 from '../../../../assets/videos/PVA/8.mp4'
import video9 from '../../../../assets/videos/PVA/9.mp4'
import video10 from '../../../../assets/videos/PVA/10.mp4'
import video11 from '../../../../assets/videos/PVA/11.mp4'
import video12 from '../../../../assets/videos/PVA/12.mp4'
import video13 from '../../../../assets/videos/PVA/13.mp4'

import { useHistory, Redirect } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
const pvatime = {}
const pvastatus = {}
var pvaform;
export function Pva(props) {


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
    const buttonStatus = timer > 5 ? false : true;

    const onClick = (form, status, nextPath) => {        
        const { state } = props.location
        pvaform = state
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        console.log(form, status, nextPath);
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            })
                .then(async(result) => {
                    if (result.isConfirmed) {
                        pvastatus[form] = status
                        pvatime[`${form}time`] = timer
                        var sendMail = {
                            name: pvaform.operator_name,
                            testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                            failurestep: form
                        }                                     
                        await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                        history.push(nextPath)
                    }
                })
    }

    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer}
                disabled={buttonStatus} count="13" progressValue="7.69230769231"
                progressText="1 0f 13" nameContinue='success' nameIssue='alert'
                TypeOfMedia="Video" videosrc={video1} onClick={onClick} alt="pva1"
                link='/pva/step2' />
        </>
    )
}
export function Pva2() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        console.log(form, status, nextPath);
        // if (pvaform === undefined) {
        //     return history.push("/Pvaform")
        // }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13"
                progressValue="15.3846153846" progressText="2 0f 13" TypeOfMedia="Video"
                videosrc={video2} onClick={onClick} alt="pva2" link='/pva/step3' />

        </>
    )
}
export function Pva3() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="23.0769230769"
                progressText="3 0f 13" TypeOfMedia="Video" videosrc={video3} onClick={onClick} alt="pva3"
                link='/pva/step4' />
        </>
    )
}
export function Pva4() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="30.7692307692"
                progressText="4 0f 13" TypeOfMedia="Video" videosrc={video4} onClick={onClick} alt="pva4"
                link='/pva/step5' />
        </>
    )
}
export function Pva5() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="38.4615384615"
                progressText="5 0f 13" TypeOfMedia="Video" videosrc={video5} onClick={onClick} alt="pva5"
                link='/pva/step6' />
        </>
    )
}
export function Pva6() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="46.1538461539"
                progressText="6 0f 13" TypeOfMedia="Video" videosrc={video6} onClick={onClick} alt="pva6"
                link='/pva/step7' />
        </>
    )
}
export function Pva7() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    const handleChange = (e) => {
        pvaform["pressure_guage_value"] = e.target.value
    }
    return (
        <>
            <MasterCheckList
                inputField="true"
                progressCircle="true" onChangeInput={handleChange} TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="53.8461538462"
                progressText="7 0f 13" TypeOfMedia="Video" videosrc={video7} onClick={onClick} alt="pva7"
                link='/pva/step8' />
        </>
    )
}
export function Pva8() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="61.5384615385"
                progressText="8 0f 13" TypeOfMedia="Video" videosrc={video8} onClick={onClick} alt="pva8"
                link='/pva/step9' />
        </>
    )
}
export function Pva9() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="69.2307692308"
                progressText="9 0f 13" TypeOfMedia="Video" videosrc={video9} onClick={onClick} alt="pva9"
                link='/pva/step10' />
        </>
    )
}
export function Pva10() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="76.9230769231"
                progressText="10 0f 13" TypeOfMedia="Video" videosrc={video10} onClick={onClick} alt="pva10"
                link='/pva/step11' />
        </>
    )
}
export function Pva11() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            }).then(async(result) => {
                if (result.isConfirmed) {
                    pvastatus[form] = status
                    pvatime[`${form}time`] = timer
                    var sendMail = {
                        name: pvaform.operator_name,
                        testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                        failurestep: form
                    }                                     
                    await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                    history.push(nextPath)
                }
            })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="84.6153846154"
                progressText="11 0f 13" TypeOfMedia="Video" videosrc={video11} onClick={onClick} alt="pva11"
                link='/pva/step12' />
        </>
    )
}
export function Pva12() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick = (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        // if (status === 'Yes')
        //     SweetAlert.fire({
        //         title: "Data Submitted",
        //         icon: "success",
        //     })
        // .then((result) => {
        if (status === 'Yes') {
            pvastatus[form] = status
            pvatime[`${form}time`] = timer
            history.push(nextPath)
        }
        // })
        if (status === 'No')
            SweetAlert.fire({
                title: "OK Noted",
                icon: "info",
            })
                .then(async(result) => {
                    if (result.isConfirmed) {
                        pvastatus[form] = status
                        pvatime[`${form}time`] = timer
                        var sendMail = {
                            name: pvaform.operator_name,
                            testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                            failurestep: form
                        }                                     
                        await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
                        history.push(nextPath)
                    }
                })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="92.3076923077"
                progressText="12 0f 13" TypeOfMedia="Video" videosrc={video12} onClick={onClick} alt="pva12"
                link='/pva/step13' />
        </>
    )
}
export function Pva13() {
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
    const buttonStatus = timer > 5 ? false : true;
    const onClick =async (form, status, nextPath) => {
        if (pvaform === undefined) {
            return history.push("/Pvaform")
        }
        if(status==="No"){
            var sendMail = {
                name: pvaform.operator_name,
                testing: `PVA Testing ${pvaform.Station} ${pvaform.shift} ${pvaform.date}`,
                failurestep: form
            }                                     
            await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/mail`, sendMail).then((res) => { return res.data }) 
        }
        SweetAlert.fire({
            title: 'AM for PVA Completed - Succesfully',
            // html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
            // showDenyButton: false,
            // showCancelButton: false,
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                // const description = document.getElementById("des").value
                // if (description.length === 0) {
                //     SweetAlert.fire('Enter description', '', 'error')
                //     return false
                // } else {
                pvastatus["pva13"] = status
                const newpvastatus = Object.values(pvastatus)
                var finalstatus;
                if (newpvastatus.includes("No")) {
                    finalstatus = "In Complete"
                } else {
                    finalstatus = "Complete"
                }
                const avg = newpvastatus.filter(status => { return status === "No" })
                var finalavg
                if (avg.length === 0) {
                    finalavg = '10 / 10'
                } else {
                    finalavg = `${Number(10) - Number(avg.length)}/10`
                }
                const statuslists = []
                for (var i = 0; i < Object.keys(pvastatus).length; i++) {
                    if (Object.values(pvastatus)[i] === "No") {
                        statuslists.push(Object.keys(pvastatus)[i])
                    }
                }
                const datas = {
                    date: pvaform.date,
                    station: pvaform.Station,
                    operator_name: pvaform.operator_name,
                    shift: pvaform.shift,
                    pressure_guage_value:pvaform.pressure_guage_value,
                    pva1: pvastatus.pva1,
                    pva2: pvastatus.pva2,
                    pva3: pvastatus.pva3,
                    pva4: pvastatus.pva4,
                    pva5: pvastatus.pva5,
                    pva6: pvastatus.pva6,
                    pva7: pvastatus.pva7,
                    pva8: pvastatus.pva8,
                    pva9: pvastatus.pva9,
                    pva10: pvastatus.pva10,
                    pva11: pvastatus.pva11,
                    pva12: pvastatus.pva12,
                    pva13: status,
                    pvatime1: pvatime.pva1time,
                    pvatime2: pvatime.pva2time,
                    pvatime3: pvatime.pva3time,
                    pvatime4: pvatime.pva4time,
                    pvatime5: pvatime.pva5time,
                    pvatime6: pvatime.pva6time,
                    pvatime7: pvatime.pva7time,
                    pvatime8: pvatime.pva8time,
                    pvatime9: pvatime.pva9time,
                    pvatime10: pvatime.pva10time,
                    pvatime11: pvatime.pva11time,
                    pvatime12: pvatime.pva12time,
                    pvatime13: timer,
                    description: "Not Provided",
                    status: finalstatus,
                    avg: finalavg,
                    statuslists: statuslists
                }                
                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/Pva/send`, datas).then((res) => {
                    if (res.data === true) {
                    }
                    history.push("/")    
                }).catch((error) => {
                    console.log(error)
                })

            }
            // }
        })
    }
    const data = pvaform
    if (pvaform === undefined) {
        return <Redirect to='/Pvaform' />
    }
    return (
        <>
            <MasterCheckList progressCircle="true" TimeCounter={timer} disabled={buttonStatus}
                name={data.operator_name} machineID={data.Station} count="13" progressValue="100"
                progressText="13 0f 13" okToComplete="true" TypeOfMedia="Video" videosrc={video13}
                onClick={onClick} alt="pva13" link='/' />
        </>
    )
}
