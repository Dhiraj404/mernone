// import React from 'react'
import React, { useState, useContext } from 'react'
import "../components/css/login.css"
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../images/log.png"

import { UserContext } from '../App';

const Login = () => {

    const { state, dispatch } = useContext(UserContext);


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                email,
                password
            })

        })


        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");

        }
        else {
            dispatch({ type: 'USER', payload: true });
            window.alert("Login Successful");
            navigate("/");
        }
    }
    return (
        <>

            <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>

                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src={logo} style={{ width: 185 }} alt="logo" />

                                                <h4 className="mt-1 mb-5 pb-1">We are The <span className="olulu"> Bariyait</span>  Team</h4>
                                            </div>
                                            <form method="POST">
                                                <p>Please login to your account</p>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Username</label>
                                                    <input type="email" id="form2Example11" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} id="form2Example22" className="form-control" />
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">

                                                    <button id="signin" onClick={loginUser} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 signin" type="button">Log
                                                        in</button>
                                                    <NavLink className="btn btn-primary btn-block mb-3" to="/signUp">Create an account</NavLink>
                                                    <br />
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <img src={logo} style={{ width: 185 }} alt="logo" className="maka sm-none" />
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login