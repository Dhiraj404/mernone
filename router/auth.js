const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');



// Async-Await

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the property" })
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password not match" })
        } else {
            const user = new User({ name, email, phone, password, cpassword });

            // const userRegister = await user.save();

            await user.save();


            // console.log(`${user} user register success`);
            // console.log(userRegister);

            res.status(201).json({ message: "Success Register" })
        }

    } catch (err) {
        console.log(err)
    }


    // res.json({ message: req.body })
    // res.send("Mero register page")
})

module.exports = router;



// USING PROMISES

// router.post('/register', async (req, res) => {

//     const { name, email, phone, password, cpassword } = req.body;

//     if (!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the property" })
//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" })

//             }
//             const user = new User({ name, email, phone, password, cpassword });
//             user.save().then(() => {
//                 res.status(201).json({ message: "Success Register" })
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }))


//         }).catch(err => { console.log(err) })

//     // res.json({ message: req.body })
//     // res.send("Mero register page")
// })