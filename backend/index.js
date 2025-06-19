const express = require('express')
const db = require('./config/db');
const app = express()
const {addProducto} = require('./rutas/addProducto')
require('dotenv').config();
app.post('/addProducto',addProducto)

app.listen(process.env.PORT, ()=>{
    console.log('puerto ' + process.env.PORT)
    
})