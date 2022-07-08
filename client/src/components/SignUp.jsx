import React, { useState } from 'react'
// import pic from "../images/a.jpg"
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/css/reg.css"

const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
    });
    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            toast("Invalid Regestrationn");
            console.log("Invalid Regestrationn")


        } else {
            toast("success Registrationn")
            console.log("success Regestrationn")
            navigate("/login")
        }

    }



    return (
        <div>
            <section className="signup">
                <div className="container ">
                    <div className="signup-content">
                        <div className="signup-form">

                            <header>
                                <h1>Made <strong>By</strong> Dhiraj</h1>

                            </header>
                            <section>
                                <article>
                                    <form method="POST" className="pure-steps">
                                        <input type="radio" name="steps" className="pure-steps_radio" id="step-0" autoComplete="off" defaultChecked />
                                        <input type="radio" name="steps" className="pure-steps_radio" id="step-1" />
                                        <input type="radio" name="steps" className="pure-steps_radio" id="step-2" />
                                        <div className="pure-steps_group">
                                            <ol>
                                                <li className="pure-steps_group-step">
                                                    <header>
                                                        <h2 className="pure-steps_group-step_legend">Welcome</h2>
                                                        <p className="pure-steps_group-step_item">The <strong>"Step By Step"</strong> pattern is usually 100% developed with JavaScript but you can use CSS too.</p>
                                                        <p className="pure-steps_group-step_item">Enjoy this example of "what can be done" <strong>just with SASS,</strong> simulating a "sign-up" process.</p>
                                                        <p className="pure-steps_group-step_item" />

                                                        <i className="zmdi zmdi-account lam"></i>
                                                    </header>
                                                </li>
                                                <li className="pure-steps_group-step">
                                                    <fieldset>



                                                        <legend className="pure-steps_group-step_legend">Sign Up</legend>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.name}
                                                                onChange={handleInputs}
                                                                type="text" name="name" autoComplete="off" placeholder="Type your Name here" id="name" />
                                                            <label htmlFor="name"> <i className="zmdi zmdi-accounts"></i>
                                                                &nbsp;  Name</label>
                                                        </p>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.email}
                                                                onChange={handleInputs}
                                                                type="text" name="email" autoComplete="off" placeholder="Type your email here" id="email" />
                                                            <label htmlFor="email"><i className="zmdi zmdi-email"></i> &nbsp;Email</label>
                                                        </p>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.phone}
                                                                onChange={handleInputs}
                                                                type="tel" name="phone" autoComplete="off" placeholder="Type your nick here" id="phone" />
                                                            <label htmlFor="phone"><i className="zmdi zmdi-smartphone-iphone"></i> Mobile Number</label>
                                                        </p>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.work}
                                                                onChange={handleInputs}
                                                                type="text" name="work" placeholder="Type your profession here" id="work" />
                                                            <label htmlFor="work"><i className="zmdi zmdi-case work"></i> Your Profession</label>
                                                        </p>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.password}
                                                                onChange={handleInputs}
                                                                type="password" name="password" placeholder="Type your password here" id="password" />
                                                            <label htmlFor="password"><i className="zmdi zmdi-lock"></i> Password</label>
                                                        </p>
                                                        <p className="pure-steps_group-step_item flexy-item flexy-column reverse">
                                                            <input value={user.cpassword}
                                                                onChange={handleInputs}
                                                                type="password" name="cpassword" placeholder="Type your Confirm password here" id="cpassword" />
                                                            <label htmlFor="cpassword"><i className="zmdi zmdi-lock cpassword"></i> Confirm your Password</label>
                                                        </p>
                                                    </fieldset>
                                                </li>
                                                <li className="pure-steps_group-step flexy-item">
                                                    <div className="pure-steps_preload">
                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 32 32' }} xmlSpace="preserve">
                                                            <path d="M31.8,3.6c-0.2-0.5-0.4-0.9-0.9-1.2C30.4,2,29.7,1.8,29,1.9c-0.6,0.1-1.2,0.4-1.6,1l-8.5,11.2l0,0l-7.2,9.5l-7.1-9.4 c-0.5-0.7-1.3-1-2.1-1c-0.5,0-1,0.2-1.4,0.5c-0.5,0.4-0.9,1-1,1.7s0.1,1.2,0.5,1.8l9.1,12.1l0,0c0.1,0.2,0.3,0.3,0.4,0.4 c0.4,0.3,0.9,0.5,1.4,0.5c0.8,0,1.6-0.3,2.1-1L22.1,18l0,0l9.1-12.1C32,5.2,32.1,4.4,31.8,3.6z" />
                                                        </svg>
                                                    </div>
                                                </li>
                                            </ol>
                                            <ol className="pure-steps_group-triggers">
                                                <li className="pure-steps_group-triggers_item">
                                                    <label htmlFor="step-0">Restart</label>
                                                </li>
                                                <li className="pure-steps_group-triggers_item">
                                                    <label htmlFor="step-1">Sign Up</label>
                                                </li>

                                                <li className="pure-steps_group-triggers_item">

                                                    <input className="aqs" type="submit" name="signup" id="signup" value="Register" onClick={PostData} />
                                                    <ToastContainer />
                                                </li>
                                            </ol>
                                        </div>
                                        <label htmlFor="step-0" className="olu">Restart</label>
                                        <br />
                                    </form>
                                </article>

                            </section>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    )
}

export default SignUp