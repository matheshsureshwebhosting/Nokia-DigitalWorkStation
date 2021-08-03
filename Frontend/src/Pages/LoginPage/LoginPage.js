import React, { useState } from 'react'
import '../Styles/Pages.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from "axios"
import { Redirect, useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
function LoginPage() {
    const [pageHandle, setPageHandle] = useState('');
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    // Form Submit Handlers
    const signInHandler = () => {
        setPageHandle('show_SignIn')
    }
    const signUpHandler = () => {
        setPageHandle('show_SignUp')
    }
    const registerbtn = async (e) => {
        e.preventDefault()
        var newusers = {
            name: name,
            email: email,
            password: password
        }
        var reguse = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/user/register`, newusers).then((res) => { return res.data }).catch((error) => { return error.response })
        if (reguse.token !== undefined) {
            const { token, userid } = reguse
            localStorage.setItem("userid", userid)
            localStorage.setItem("token", token)
            history.push("/dashboard")
        } else {
            alert(reguse.data)
        }
    }
    const loginbtn = async (e) => {
        e.preventDefault()
        var loginusers = {
            email: email,
            password: password
        }
        var loginuser = await axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/user/login`, loginusers).then((res) => { return res.data }).catch((error) => { return error.response })
        if (loginuser.token !== undefined) {
            const { token, userid } = loginuser
            localStorage.setItem("userid", userid)
            localStorage.setItem("token", token)
            history.push("/dashboard")
        } else {
            alert(loginuser.data)
        }
    }
    if (localStorage.getItem("token") !== null) {
        return <Redirect to='/dashboard' />
    }
    // Form page changing classes
    const formContainer = pageHandle === 'show_SignUp' ? 'right-panel-active form-wrap' : pageHandle === 'show_SignIn' ? 'form-wrap' : 'form-wrap';
    return (
        <>
            <Navbar NavMenu='show' logo='NOKIA' subTitle="Digital Workstation" title='Autonomous Maintenance' />
            <div className='login-page container-fluid'>
                <div className={formContainer}>
                    <div className="form-container sign-up-container">
                        <form>
                            <h2>Create Account</h2>
                            {/* <div className="social-container">
                                <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div> */}
                            <span>or use your email for registration</span>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" />
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                            <button onClick={(e) => registerbtn(e)} >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="/" className='form-section'>
                            <h2>Sign in</h2>
                            {/* <div className="social-container">
                                <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div> */}
                            {/* <span>or use your account</span> */}
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                            <a href="/">Forgot your password?</a>
                            <button onClick={(e) => loginbtn(e)} >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                <Link to="/login"><button className="ghost">Sign In</button></Link>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello!</h1>
                                <p>porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</p>
                                <Link to="/login"><button className="ghost">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
