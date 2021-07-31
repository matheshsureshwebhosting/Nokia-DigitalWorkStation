import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
export const Slidercontext = React.createContext()

export default function SlidercontextProvider(props) {
    const history = useHistory()
    const [enabled, enabledchange] = useState(["step1"])
    const [vacuume, setvaccume] = useState({})
    const [activestep, seactivestep] = useState(0)
    const [date, setdate] = useState(null)
    const [machine_Sl_No, setmachine_Sl_No] = useState(null)
    const [shift, setshift] = useState(null)
    const [operator_name, setoperator_name] = useState(null)
    const [prosses1_result, setprosses1_result] = useState(null)
    const [prosses2_result, setprosses2_result] = useState(null)
    const [prosses3_result, setprosses3_result] = useState(null)
    const [prosses4_result, setprosses4_result] = useState(null)
    const [prosses5_result, setprosses5_result] = useState(null)
    const [prosses6_result, setprosses6_result] = useState(null)
    const [prosses7_result, setprosses7_result] = useState(null)
    const [prosses8_result, setprosses8_result] = useState(null)
    const [prosses1_time, setprosses1_time] = useState(null)
    const [prosses2_time, setprosses2_time] = useState(null)
    const [prosses3_time, setprosses3_time] = useState(null)
    const [prosses4_time, setprosses4_time] = useState(null)
    const [prosses5_time, setprosses5_time] = useState(null)
    const [prosses6_time, setprosses6_time] = useState(null)
    const [prosses7_time, setprosses7_time] = useState(null)
    const [prosses8_time, setprosses8_time] = useState(null)
    function sliderenable(e, step) {
        const active = step.charAt(4)
        seactivestep(active)
        const enabledArray = enabled
        enabledArray.push(step)
        enabledchange(enabledArray)
        history.push(`/vaccume`)
    }
    const updateVaccume = (vaccume) => {
        setvaccume(vaccume)
    }
    const handleChange = (e) => {
        var today = new Date();
        const hours = today.getHours() + ":" + today.getMinutes()
        const monthsandday = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
            "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
        var date = today.getFullYear() + '-' + (monthsandday[today.getMonth() + 1]) + '-' + (monthsandday[today.getDate()]);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        if (hours < "14:30") {
            setdate(dateTime)
            setshift("Shift A")
        } else if (hours > "14.30" && hours < "22.30") {
            setdate(dateTime)
            setshift("Shift B")
        } else {
            setdate(dateTime)
            setshift("Shift C")
        }

        if (e.target.name === "machine_Sl_No") {
            setmachine_Sl_No(e.target.value)
        } else {
            setoperator_name(e.target.value)
        }
    }
    const updatestaus = (from, status, time) => {
        if (from === "prosses1_result") {
            setprosses1_result(status)
            setprosses1_time(time)
        } else if (from === "prosses2_result") {
            setprosses2_result(status)
            setprosses2_time(time)
        } else if (from === "prosses3_result") {
            setprosses3_result(status)
            setprosses3_time(time)
        } else if (from === "prosses4_result") {
            setprosses4_result(status)
            setprosses4_time(time)
        } else if (from === "prosses5_result") {
            setprosses5_result(status)
            setprosses5_time(time)
        } else if (from === "prosses6_result") {
            setprosses6_result(status)
            setprosses6_time(time)
        } else if (from === "prosses7_result") {
            setprosses7_result(status)
            setprosses7_time(time)
        } if (from === "prosses8_result") {
            setprosses8_result(status)
            setprosses8_time(time)
        }
    }
    return (
        <Slidercontext.Provider value={{
            enabled,
            date,
            machine_Sl_No,
            shift,
            operator_name,
            prosses1_result,
            prosses2_result,
            prosses3_result,
            prosses4_result,
            prosses5_result,
            prosses6_result,
            prosses7_result,
            prosses8_result,
            prosses1_time,
            prosses2_time,
            prosses3_time,
            prosses4_time,
            prosses5_time,
            prosses6_time,
            prosses7_time,
            prosses8_time,
            sliderenable: sliderenable,
            updateVaccume: updateVaccume,
            activestep: activestep,
            vacuume: vacuume,
            handleChange: handleChange,
            updatestaus: updatestaus
        }}>
            <div>

                {props.children}
            </div>
        </Slidercontext.Provider>
    )
}
