import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counterTime: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ counterTime: this.state.counterTime + 1 }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                {this.state.counterTime}
            </div>
        )
    }
}
