import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'

export default class OtaTable extends Component {
    constructor(props) {
        super()
        this.state = {
            ota: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            this.setState({
                ota: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })
            this.setState({
                ota: filtershift
            })
        } else {
            this.setState({
                ota: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                ota: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        this.setState({
            ota: resetdata
        })
    }
    exportdata = async () => {
        const exportota = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota/export`).then((res) => {
            return res.data
        })
        window.open(exportota)
    }
    statusfilter = async (e) => {
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/ota`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })
            this.setState({
                ota: filterstatus
            })
        } else {
            this.setState({
                ota: statusdata
            })
        }
    }
    render() {
        const { ota } = this.state
        console.log(ota)
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4' style={{ marginBottom: "10px !important" }}>Testers Checklist OTA</h3>

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

                    <Table striped bordered hover size="sm" id="ota2" responsive="sm">
                        <thead>
                            <tr>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Date</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Shift</th>
                                <th className="tg-54sw text-center pb-4" rowSpan="3">Machine Serial No</th>
                                {/* <th className="tg-54sw text-center pb-4" rowSpan="3">Pressure Guage Value</th> */}
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
                            {ota && ota.map((otainfo, index) => (
                                <tr key={index}>
                                    <td className="tg-za14">{otainfo.date}</td>
                                    <td className="tg-za14">{otainfo.shift}</td>
                                    <td className="tg-za14"> {otainfo.machine_Sl_No}</td>
                                    {/* <td className="tg-za14"> {otainfo.pressure_guage_value}</td> */}
                                    <td className="tg-za14"> {otainfo.checked_by}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime1}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.ota1}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime2}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.ota2} </td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime3}</td>
                                    <td className="tg-za14" colSpan="1"> {otainfo.ota3}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime4}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.ota4} </td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime5}</td>
                                    <td className="tg-za14" colSpan="1"> {otainfo.ota5}</td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime6}</td>
                                    <td className="tg-7zrl" colSpan="1">{otainfo.ota6} </td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime7}</td>
                                    <td className="tg-7zrl" colSpan="1">{otainfo.ota7} </td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime8}</td>
                                    <td className="tg-7zrl" colSpan="1">{otainfo.ota8} </td>
                                    <td className="tg-za14" colSpan="1">{otainfo.Otatime9}</td>
                                    <td className="tg-7zrl" colSpan="1">{otainfo.ota9} </td>
                                    <td className="tg-7zrl">{otainfo.status}</td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </Table>
                    {
                        ota !== null ? ota.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

