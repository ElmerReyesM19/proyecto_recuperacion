const express = require('express')

const app = express()
require('dotenv').config();
app.get('/',(req,res)=>{
    res.send('probando')
})


app.listen(8000, ()=>{
    console.log('puerto ' + process.env.PORT)
})