const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const authenticate = require('../middleware/authenticate');






router.use(cookieParser());




require('../db/conn');
const User = require('../model/userSchema');

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "awesome" });

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }

        const userLogin = await User.findOne({ email: email })

        console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials pass" })
            } else {


                res.json({ message: "User Signin success!!" })
            }

        } else {

            res.status(400).json({ error: "Invalid Credentials1" })
        }



    }
    catch (err) {
        console.log(err)
    }
})



// about us ko page

router.get('/about', authenticate, (req, res) => {
    console.log("Hello my about")
    res.send(req.rootUser);


});

// get user data for contact us and home 

router.get('/getdata', authenticate, (req, res) => {
    console.log("Hello my getdata")
    res.send(req.rootUser);
})



// contact us ko


router.post('/contact', authenticate, async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            console.log("please fill the contact form");
            return res.json({ error: "Plz fill the contact form" })

        }

        const userContact = await User.findOne({ _id: req.userID });
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message)
            await userContact.save();

            res.status(201).json({ message: "USer contact successfully" })
        }
    }

    catch (error) {
        console.log(error)
    }
})


// logout ko page
router.get('/logout', (req, res) => {
    console.log("Hello my logOut pgae")
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User Logout');



});






module.exports = router;