import React, { useEffect, useState } from 'react'
import "../components/css/home.css"
import me from "../images/as.webp"

const Home = () => {


    const [userName, setUserName] = useState()
    const [show, setShow] = useState(false);


    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {

                    "Content-Type": "application/json"
                },

            })
            const data = await res.json();

            setUserName(data.name)
            setShow(true);
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
        userHomePage();

    }, [])


    return (
        <>

            <div className="laa" style={{ backgroundImage: `url(${me})` }}>

                <div className="home-page">
                    <div className="home-div">

                        {/* <p>sada</p> */}
                        <h3 className="pt-5 asq"> <span className=" ass ">WELCOME </span></h3>
                        <h4 className=" asq ">{userName}</h4>
                        <hr />
                        <h2 className="aac">{show ? "Happy to see you" : 'This is Dhiraj Bariyait and I am a M.E.R.N Stack  Developer '}

                        </h2>

                        <p className="okxata"> {show ? "" : 'Register and Signin to have fun!! '}</p>


                    </div>
                </div>
            </div>
        </>
    )
}





export default Home