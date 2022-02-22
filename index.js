const express = require('express');
const app = express();
const PORT = 5000;
const hbs = require('hbs')
const path =require('path')
const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/.env'})
mongoose.connect(process.env.MONGODB)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.use(express.json());
app.use(express.urlencoded({extended: false}));



// all messge routes
app.use('/', require('./routes/index'))

app.listen( PORT, ()=>{
    console.log("Connection established...")
})


