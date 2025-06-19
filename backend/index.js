const express = require('express')
const db = require('./config/db');
const app = express()
require('dotenv').config();
app.get('/',(req,res)=>{
    res.send('probando')
})

app.listen(process.env.PORT, ()=>{
    console.log('puerto ' + process.env.PORT)
    
})