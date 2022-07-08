const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();  //multiple halna ()


dotenv.config({ path: './config.env' })
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json())

// we link the router files to make our route easir 
app.use(require('./router/auth'))
app.use(require('./router/login'))


const PORT = process.env.PORT || 1200;



//Middleware
// const middleware = (req, res, next) => {
//     console.log("hello my middleware")
//     next();
// }




// app.get('/', (req, res) => {
//     res.send('Hello World from server');
// })


// app.get('/about', middleware, (req, res) => {
//     console.log("Hello my about")
//     res.send('this is about page');
// })


// app.get('/contact', (req, res) => {
//     res.cookie("Test", "Dhiraj")
//     res.send('this is contact page');
// })



app.get('/signin', (req, res) => {
    res.send('this is signin page');
})



app.get('/signup', (req, res) => {
    res.send('this is signup page');
})


if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


app.listen(PORT, () => {

    console.log(`server is running in port ${PORT}`);
})
