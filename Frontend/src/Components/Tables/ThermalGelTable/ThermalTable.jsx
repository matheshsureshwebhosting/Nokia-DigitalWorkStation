import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'
import Chart from "react-google-charts";

export default class ThermalTable extends Component {
    constructor(props) {
        super()
        this.state = {
            thermal: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            this.setState({
                thermal: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })
            this.setState({
                thermal: filtershift
            })
        } else {
            this.setState({
                thermal: shiftdata
            })
        }
    }
    hanlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    datefilter = async () => {
        const { from, to } = this.state
        if (from == null) {
            alert("From Date Requires")
            return false
        } else if (to == null) {
            alert("To Date Requires")
            return false
        } else {
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                thermal: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        this.setState({
            thermal: resetdata
        })
    }
    exportdata = async () => {
        const exportthermal = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal/export`).then((res) => {
            return res.data
        })
        window.open(exportthermal)
    }
    statusfilter = async (e) => {
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/thermal`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })
            this.setState({
                thermal: filterstatus
            })
        } else {
            this.setState({
                thermal: statusdata
            })
        }
    }
    render() {
        const { thermal } = this.state
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4' style={{ marginBottom: "10px !important" }}>Thermal Checklist </h3>
                    <div><input type="date" name="chartdate" onChange={(e) => this.handleChange(e)} /></div>
                    <select className="form-select" onChange={e => this.shiftfilter(e)}>
                        <option value="none">Filter By Shift</option>
                        <option value="Shift A">Shift A</option>
                        <option value="Shift B" >Shift B</option>
                        <option value="Shift C">Shift C</option>
                    </select>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Day', 'Total Points', 'No OK Points', 'No NOK Points'],
                            ['28/07/2021', 22, 15, 7],
                            ['28/07/2021', 32, 27, 5],
                            ['28/07/2021', 19, 15, 4],
                            ['28/07/2021', 34, 30, 4],
                            ['28/07/2021', 32, 25, 7],
                        ]}
                        options={{
                            // Material design options
                            chart: {
                                title: 'Thermal Complaince Report',
                                subtitle: 'Datewise / Shiftwise',

                            },
                            colors: ['#2b78e3', '#ff9326', 'grey'],
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    />
                    <div className='d-flex justify-content-between my-2'>
                        <div className="d-flex">
                            <div className="pt-1">
                                <label htmlFor="from" className='mr-2'>From</label>
                                <input type="date" id="from" name="from" onChange={e => this.hanlechange(e)} />
                            </div>
                            <div className="pt-1 px-3">
                                <label htmlFor="to" className='mr-2'>To</label>
                                <input type="date" id="to" name="to" onChange={e => this.hanlechange(e)} />
                            </div>
                            <div className="search">
                                <button className="btn btn-info mr-2" onClick={this.datefilter}>Filter</button>
                                <button className="btn btn-info" onClick={this.Resetfilter}>Reset</button>
                            </div>
                        </div>
                        <div >
                            <button className="btn btn-info mr-2" onClick={this.exportdata}>Export</button>
                            <select className="form-select" onChange={e => this.shiftfilter(e)}>
                                <option value="none">Filter By Shift</option>
                                <option value="Shift A">Shift A</option>
                                <option value="Shift B" >Shift B</option>
                                <option value="Shift C">Shift C</option>
                            </select>
                            <select className="form-select mr-1" onChange={e => this.statusfilter(e)}>
                                <option value="none">Filter By Status</option>
                                <option value="Complete" >Complete</option>
                                <option value="In Complete">In Complete</option>
                            </select>
                        </div>
                    </div>

                    <Table striped bordered hover size="sm" responsive="sm">
                        <thead>
                            <tr>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Date</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Shift</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Machine Serial No</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Pressure Guage Value</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Checked By</th>
                                <th className="tg-54sw text-center " colSpan="26">Status</th>
                                <th className="tg-wa1i text-center pb-4" rowSpan="3">Status</th>
                            </tr>
                            <tr>
                                <td className="tg-54sw text-center" colSpan="2">Process1</td>
                                <td className="tg-54sw text-center" colSpan="2">Process2</td>
                                <td className="tg-54sw text-center" colSpan="2">Process3</td>
                                <td className="tg-54sw text-center" colSpan="2">Process4</td>
                                <td className="tg-54sw text-center" colSpan="2">Process5</td>
                                <td className="tg-54sw text-center" colSpan="2">Process6</td>
                                <td className="tg-54sw text-center" colSpan="2">Process7</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process8</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process9</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process10</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process11</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process12</td>
                                <td className="tg-2g1l text-center" colSpan="2">Process13</td>
                            </tr>
                            <tr>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                                <td className="tg-54sw text-center" colSpan="1">Time(sec)</td>
                                <td className="tg-54sw text-center" colSpan="1">Result</td>
                            </tr>
                        </thead>
                        <tbody>
                            {thermal && thermal.map((thermalinfo, index) => (
                                <tr key={index}>
                                    <td className="tg-za14">{thermalinfo.date}</td>
                                    <td className="tg-za14">{thermalinfo.shift}</td>
                                    <td className="tg-za14"> {thermalinfo.machine_Sl_No}</td>
                                    <td className="tg-za14"> {thermalinfo.pressure_guage_value}</td>
                                    <td className="tg-za14"> {thermalinfo.checked_by}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime1}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermal1}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime2}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermal2} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime3}</td>
                                    <td className="tg-za14" colSpan="1"> {thermalinfo.thermal3}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime4}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermal4} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime5}</td>
                                    <td className="tg-za14" colSpan="1"> {thermalinfo.thermal5}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime6}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal6} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime7}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal7} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime8}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal8}</td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime9}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal9} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime10}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal10} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime11}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal11} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime12}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal12} </td>
                                    <td className="tg-za14" colSpan="1">{thermalinfo.thermaltime13}</td>
                                    <td className="tg-7zrl" colSpan="1">{thermalinfo.thermal13} </td>
                                    <td className="tg-7zrl">{thermalinfo.status}</td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </Table>
                    {
                        thermal !== null ? thermal.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

