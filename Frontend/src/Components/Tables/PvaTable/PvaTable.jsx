import axios from 'axios'
import React, { Component } from 'react'
// import { Table } from 'reactstrap'
import { Table } from 'react-bootstrap'

export default class PvaTable extends Component {
    constructor(props) {
        super()
        this.state = {
            pva: null,
            from: null,
            to: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/pva`).then((res) => {
            this.setState({
                pva: res.data
            })
        })
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/pva`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })            
            this.setState({
                pva: filtershift
            })
        } else {
            this.setState({
                pva: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/pva/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                pva: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/pva`).then((res) => {
            return res.data
        })
        this.setState({
            pva: resetdata
        })
    }
    exportdata = async () => {
        const exportpva = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/pva/export`).then((res) => {
            return res.data
        })
        window.open(exportpva)
    }

    statusfilter=async(e)=>{
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/pva`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })        
            this.setState({
                pva: filterstatus
            })
        } else {
            this.setState({
                pva: statusdata
            })
        }
    }

    render() {
        const { pva } = this.state        
        return (
            <>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4' style={{ marginBottom: "10px !important" }}>Testers Checklist PVA</h3>

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
                                    <th className="tg-wa1i text-center pb-4" rowSpan="3">Remarks</th>
                                    <th className="tg-wa1i text-center pb-4" rowSpan="3">Status</th>
                                </tr>
                                <tr>
                                    <td className="tg-54sw text-center" colSpan="2">PVA1</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA2</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA3</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA4</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA5</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA6</td>
                                    <td className="tg-54sw text-center" colSpan="2">PVA7</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA8</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA9</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA10</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA11</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA12</td>
                                    <td className="tg-2g1l text-center" colSpan="2">PVA13</td>
                                </tr>
                                <tr>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td>
                                    <td className="tg-54sw text-center" colSpan="1">Time</td>
                                    <td className="tg-54sw text-center" colSpan="1">Result</td> 
                                </tr>
                            </thead>
                            <tbody>
                                {  pva && pva.map((pvainfo, index) => (
                                        <tr key={index}>
                                            <td className="tg-za14">{pvainfo.date}</td>
                                            <td className="tg-za14">{pvainfo.shift}</td>
                                            <td className="tg-za14"> {pvainfo.machine_Sl_No}</td>
                                            <td className="tg-za14"> {pvainfo.pressure_guage_value}</td>
                                            <td className="tg-za14"> {pvainfo.checked_by}</td>                                           
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime1}</td>
                                            <td className="tg-za14" colSpan="1">{pvainfo.pva1}</td>  
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime2}</td>                                         
                                            <td className="tg-za14" colSpan="1">{pvainfo.pva2} </td>  
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime3}</td>                                        
                                            <td className="tg-za14" colSpan="1"> {pvainfo.pva3}</td>   
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime4}</td>                                        
                                            <td className="tg-za14" colSpan="1">{pvainfo.pva4} </td>   
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime5}</td>                                        
                                            <td className="tg-za14" colSpan="1"> {pvainfo.pva5}</td> 
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime6}</td>                                        
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva6} </td>   
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime7}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva7} </td>  
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime8}</td>                                        
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva8} </td>   
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime9}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva9} </td>
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime10}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva10} </td>
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime11}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva11} </td>
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime12}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva12} </td>
                                            <td className="tg-za14" colSpan="1">{pvainfo.pvatime13}</td>                                       
                                            <td className="tg-7zrl" colSpan="1">{pvainfo.pva13} </td>
                                            <td className="tg-7zrl">{pvainfo.description}</td>
                                            <td className="tg-7zrl">{pvainfo.status}</td>
                                        </tr>
                                    )) 
                                }

                            </tbody>
                        </Table>
                    {
                        pva !== null ? pva.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

