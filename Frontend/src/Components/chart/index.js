import React, { Component } from 'react'
import { Bar } from "react-chartjs-2"
export default class Index extends Component {
    render() {
        const { chart } = this.props
        var originaldata = {
            labels: chart.stations,
            datasets: [
                {
                    label: "Standerd Temperature",
                    data: chart.standardtemp,
                    backgroundColor: "#2B78E2"
                }, {
                    label: "Measured Temperature",
                    data: chart.measuredtemp,
                    backgroundColor: "#FF9326"
                }
            ]
        }
        return (
            <div className="chart-div" style={{ width: "500px" }}>
                <Bar data={originaldata} />
            </div>
        )
    }
}
