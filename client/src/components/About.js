import React, { useState, useEffect } from 'react'
import dhirajpic from '../images/dhiraj.png'
import '../components/css/about.css'
import aboutpic from "../images/log.png"
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            })
            const data = await res.json();

            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
        }
        catch (err) {
            console.error(err)
            navigate("/login");


        }

    }

    useEffect(() => {
        callAboutPage();

    }, [])

    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-d-4">
                            <div className="profile-img">

                                <img src={userData.name === "aa" ? aboutpic : dhirajpic} alt="Sorry" className="herda my-5" />
                            </div>

                        </div>

                        <div className="col-d-6">
                            <div className="profile-head">
                                <h5>WELCOME : <span className="lala">{userData.name}</span> </h5>
                                <h6 className="mt-4 g">M.E.R.N Stack Developer</h6>


                                <ul className="nav nav-pills nav-fill" role="tablist" >
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" role='tab' href="#home">About</a>
                                    </li>


                                </ul>
                                <hr />
                            </div>
                        </div>


                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>LINK</p>
                                <a href="https://www.instagram.com/bariyait.dhiraj/?hl=en" target="_dhiraj">Instagram</a><br />
                                <a href="https://www.instagram.com/bariyait.dhiraj/?hl=en" target="_dhiraj">GitHub</a><br />



                            </div>

                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" area-labelledby="home-tab" role="tabpanel">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>

                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label >Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User ID">Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User ID">Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User ID">Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web developer</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 my-5 ml-auto">
                        <input type="submit" className="profile-edit-btn" value="Edit Profile" name="btnAdd" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default About