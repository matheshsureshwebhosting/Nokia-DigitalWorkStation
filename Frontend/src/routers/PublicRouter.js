import { Route } from 'react-router-dom'
import React, { Component } from 'react'

export default class PublicRouter extends Component {
    render() {
        const { path, component } = this.props        
        return (

            <Route exact path={path} component={component} />
        )
    }
}

