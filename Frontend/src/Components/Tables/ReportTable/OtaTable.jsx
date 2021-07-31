import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class OtaTable extends Component {
    constructor(props) {
        super()
        this.state = {
            ota: [],
        }
    } 
    componentDidMount = async () => {
        var today = new Date();
        const hours = today.getHours() + ":" + today.getMinutes()
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        if (hours < "14:30") {
            const shiftreport = await this.shiftReport(shiftdata, "Shift A")
            this.setState({
                ota: shiftreport
            })
        } else if (hours > "14.30" && hours < "22.30") {
            const shiftreport = await this.shiftReport(shiftdata, "Shift B")
            this.setState({
                ota: shiftreport
            })
        } else {
            const shiftreport = await this.shiftReport(shiftdata, "Shift C")
            this.setState({
                ota: shiftreport
            })
        }
    }
    shiftReport = async (shiftdata, shift) => {
        var today = new Date();
        const monthsandday = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
            "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
        var todaydate = today.getFullYear() + '-' + (monthsandday[today.getMonth() + 1]) + '-' + (monthsandday[today.getDate()]);
        const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift && shifts.date.includes(todaydate) })
        return filtershift
    }
    render() {
        const { ota } = this.state
        return (
            <>
                <h3 className='text-center mb-4 text-dark' style={{ marginBottom: "10px !important" }}>Testers Checklist OTA</h3>
                <Table striped bordered hover dir="ltr" id="reports" border="1" cellSpacing="0" cellPadding="0"><colgroup><col width="100" /><col width="100" /><col width="128" /><col width="100" /><col width="100" /><col width="117" /><col width="100" /></colgroup>
                    <tbody>
                        <tr style={{ height: "24px", backgroundColor: "#124191", color: "#fff" }}>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Date&quot;}">Date</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shift&quot;}">Shift</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Type of Equipment&quot;}">Type of Equipment</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Operator&quot;}">Operator</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Machine ID&quot;}">Machine ID</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Status&quot;}">Status</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Issue Stage&quot;}">Issue Stage</td>
                            <td style={{ height: "24px", textAlign: "center" }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Issue Stage&quot;}">Average</td>
                        </tr>
                        {ota.length !== 0 ? ota.map((otatable, index) => (
                            <tr style={{ height: "13px" }} key={index}>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.date}</td>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.shift}</td>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.machine_Sl_No}</td>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.checked_by}</td>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.machine_Sl_No}</td>
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.status}</td>                                
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.status !== "Complete" ? otatable.statuslists : "-"}</td>                                 
                                <td style={{ height: "13px", textAlign: "center" }}>{otatable.average}</td>
                            </tr>
                        )) : null
                        }

                    </tbody>
                </Table>
            </>
        )
    }
}
