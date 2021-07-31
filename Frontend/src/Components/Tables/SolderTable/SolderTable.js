import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import moment from "moment"
import Charts from "../../../Components/chart"
export default class SolderTable extends Component {
    constructor(props) {
        super()
        this.state = {
            soldering: null,
            from: null,
            to: null,
            chartdate: "",
            chart: null
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering`).then((res) => {
            this.setState({
                soldering: res.data
            })
        })
        const today = moment().format("YYYY-MM-DD")
        this.setState({
            chartdate: today
        })
        this.drawChart(today)
    }
    shiftfilter = async (e) => {
        const shift = e.target.value
        const shiftdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering`).then((res) => {
            return res.data
        })
        if (shift !== "none") {
            const filtershift = await shiftdata.filter((shifts, index) => { return shifts.shift === shift })
            this.setState({
                soldering: filtershift
            })
        } else {
            this.setState({
                soldering: shiftdata
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
            const datedata = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering/datefilter`, {
                from: from,
                to: to
            }).then((res) => {
                return res.data
            })
            this.setState({
                soldering: datedata
            })
        }
    }
    Resetfilter = async () => {
        const resetdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering`).then((res) => {
            return res.data
        })
        this.setState({
            soldering: resetdata
        })
    }
    exportdata = async () => {
        const exportsoldering = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering/export`).then((res) => {
            return res.data
        })
        window.open(exportsoldering)
    }
    statusfilter = async (e) => {
        const status = e.target.value
        const statusdata = await axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering`).then((res) => {
            return res.data
        })
        if (status !== "none") {
            const filterstatus = await statusdata.filter((statuss, index) => { return statuss.status === status })
            this.setState({
                soldering: filterstatus
            })
        } else {
            this.setState({
                soldering: statusdata
            })
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.drawChart(e.target.value)
    }

    drawChart = async (chartDate) => {
        const drawChart = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/soldering/tempeview`, { date: chartDate }).then((res) => { return res.data })
        if (drawChart) {
            const { stations } = drawChart            
            if (stations.length !== 0) {
                this.setState({ chart: drawChart })
            }else{
                this.setState({ chart: null })
            }
        }

    }
    render() {
        const { soldering, chart, chartdate } = this.state

        return (
            <>
                <div>
                    <div><input type="date" name="chartdate" value={chartdate} onChange={(e) => this.handleChange(e)} /></div>
                    {
                        chart !== null ? (
                            <React.Fragment>

                                < Charts chart={chart} />
                            </React.Fragment>
                        ) : null
                    }

                </div>
                <div className='p-3 container-fluid'>
                    <h3 className='text-center mb-4' style={{ marginBottom: "10px !important" }}>Solder Tip Temperature Monitoring</h3>

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
                            <select className="form-select mr-1" onChange={e => this.stationfilter(e)}>
                                <option value="none">Filter By Station</option>
                                <option value="Station 1">Station 1</option>
                                <option value="station 2" >Station 2</option>
                                <option value="Station 3">Station 3</option>
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
                                <th>Date</th>
                                <th>Shift </th>
                                <th>Soldering Station Sl No</th>
                                <th>Catridge Used / Set Temperature</th>
                                <th>Actual Temperature<br />(±10°C)</th>
                                <th>Checked by</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                soldering && soldering.map((solder, index) => (
                                    <tr key={index}>
                                        <td>{solder.date}</td>
                                        <td>{solder.shift}</td>
                                        <td>{solder.station}</td>
                                        <td>{solder.catridge_used}</td>
                                        <td>{solder.temperature}</td>
                                        <td>{solder.checked_by}</td>
                                        <td>{solder.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    {
                        soldering !== null ? soldering.length === 0 ? <div className="text-center">No data</div> : null : null
                    }

                </div>
            </>
        )
    }
}

