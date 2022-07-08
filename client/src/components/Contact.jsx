import React, { useEffect, useState } from 'react'
import "../components/css/contact.css"

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" })


    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {

                    "Content-Type": "application/json"
                },

            })
            const data = await res.json();

            setUserData({ ...data, name: data.name, email: data.email, phone: data.phone })
            console.log(data);


            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
        }
        catch (err) {
            console.error(err)
            // navigate("/login");



        }

    }

    useEffect(() => {
        userContact();

    }, [])

    // we are storing data in state 

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value })

    }


    // send the data to backend 
    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, message })
        })

        const data = await res.json();
        if (!data) {
            console.log("message not sent")
        } else {
            alert("message")
            setUserData({ ...userData, message: "" })
        }

    }

    return (
        <>

            <div className="container mt-5">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt" />
                            <div className="topic">Address</div>
                            <div className="text-one">Mid baneshwor, 10</div>
                            <div className="text-two">Kathmandu, Nepal</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt" />
                            <div className="topic">Phone</div>
                            <div className="text-one">+977-9803158421</div>

                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope" />
                            <div className="topic">Email</div>
                            <div className="text-one">bariyaitdhiraj05@gmail.com</div>

                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                        <form method="POST">
                            <div className="input-box">
                                <input type="text" onChange={handleInputs} name="name" value={userData.name} placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <input type="tel" onChange={handleInputs} name="phone" value={userData.phone} placeholder="Enter your Phone No." required />
                            </div>
                            <div className="input-box">
                                <input type="text" onChange={handleInputs} name="email" value={userData.email} placeholder="Enter your email" required />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Enter your Message" name="message" onChange={handleInputs} value={userData.message} ></textarea>
                                <button type="submit" class="btn btn-primary" onClick={contactForm}  >Send</button>
                            </div></form></div></div></div>


        </>
    )
}

export default Contact