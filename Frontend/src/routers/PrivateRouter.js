import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { checkLogin, getUserinfo } from "../auth"
export default class PublicRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: null,
            isallow: null
        }
    }
    componentDidMount = async () => {
        const { role } = this.props
        const checklogin = await checkLogin()
        const getuserinfo = await getUserinfo()        
        if (checklogin === true) {
            if (role.includes(getuserinfo.role)) {
                this.setState({
                    islogin: true,
                    isallow: true
                })
            } else {
                this.setState({
                    islogin: true,
                    isallow: false
                })
            }
        }
        this.setState({
            islogin: checklogin
        })
    }
    render() {
        const { isallow, islogin } = this.state
        console.log("private");
        if (islogin !== null) {
            if (islogin !== true) return <Redirect to='/login' />
            if (isallow !== null) {
                if (isallow !== true) return <Redirect to='/' />
            }
        }
        const { path, component: Components } = this.props
        return (
            <Route exact path={path} render={() => (
                <Components />
            )} />
        )
    }
}

