import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import '../css/Tables.css'


export default class VacuumTable extends Component {

    constructor(props) {
        super()
        this.state = {
            vaccumetable: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume`).then((res) => {
            this.setState({
                vaccumetable: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })
            this.setState({
                vaccumetable: filtershift
            })
        } else {
            this.setState({
                vaccumetable: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                vaccumetable: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume`).then((res) => {
            return res.data
        })
        this.setState({
            vaccumetable: resetdata
        })
    }
    exportdata = async () => {
        const exportvaccume = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/export`).then((res) => {
            return res.data
        })
        window.open(exportvaccume)
    }
    statusfilter = async (e) => {
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })
            this.setState({
                vaccumetable: filterstatus
            })
        } else {
            this.setState({
                vaccumetable: statusdata
            })
        }
    }
    render() {
        const { vaccumetable } = this.state
        return (
            <div>
                <>
                    <div className='p-3'>
                        <h3 className='text-center mb-4'>Vacuum Lifter Maintenance</h3>
                        <div className="d-flex justify-content-between my-3">
                            <div className='d-flex'>
                                <div className="mt-1">
                                    <label htmlFor="from" className='pr-2'>From</label>
                                    <input type="date" id="from" name="from" onChange={e => this.hanlechange(e)} />
                                </div>
                                <div className="mt-1">
                                    <label htmlFor="to" className='px-2'>To</label>
                                    <input type="date" id="to" name="to" onChange={e => this.hanlechange(e)} />
                                </div>
                                <div className="ml-2">
                                    <button className="mr-1 btn btn-info" style={{ marginRight: "5px" }} onClick={this.datefilter}>Filter</button>
                                    <button className="btn btn-info" onClick={this.Resetfilter}>Reset</button>
                                </div>
                            </div>
                            <div >
                                <button className="btn btn-info mr-2" onClick={this.exportdata}>Export</button>
                                <select className="" onChange={e => this.shiftfilter(e)}>
                                    <option value="none" className=''>Filter By Shift</option>
                                    <option value="Shift A">Shift A</option>
                                    <option value="Shift B">Shift B</option>
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
                                    <th className="tg-54sw text-center " colSpan="18">Status</th>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    vaccumetable !== null ? vaccumetable.map((vaccume, index) => (
                                        <tr key={index}>
                                            <td className="tg-za14">{vaccume.date}</td>
                                            <td className="tg-za14">{vaccume.shift}</td>
                                            <td className="tg-za14"> {vaccume.machine_Sl_No}</td>
                                            <td className="tg-za14"> {vaccume.pressure_guage_value}</td>
                                            <td className="tg-za14"> {vaccume.checked_by}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process1_time}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process1_result}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process2_time}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process2_result} </td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process3_time}</td>
                                            <td className="tg-za14" colSpan="1"> {vaccume.process3_result}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process4_time}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process4_result} </td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process5_time}</td>
                                            <td className="tg-za14" colSpan="1"> {vaccume.process5_result}</td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process6_time}</td>
                                            <td className="tg-7zrl" colSpan="1">{vaccume.process6_result} </td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process7_time}</td>
                                            <td className="tg-7zrl" colSpan="1">{vaccume.process7_result} </td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process8_time}</td>
                                            <td className="tg-7zrl" colSpan="1">{vaccume.process8_result} </td>
                                            <td className="tg-za14" colSpan="1">{vaccume.process9_time}</td>
                                            <td className="tg-7zrl" colSpan="1">{vaccume.process9_result} </td>
                                            <td className="tg-7zrl">{vaccume.status}</td>
                                        </tr>
                                    )) : null
                                }

                            </tbody>
                        </Table>
                        {
                            vaccumetable !== null ? vaccumetable.length === 0 ? <div className="text-center">No data</div> : null : null
                        }
                    </div>
                </>
            </div>
        )
    }
}

