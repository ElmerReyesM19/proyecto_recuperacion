const express = require('express')
const db = require('./config/db');
const app = express()
const {addProducto} = require('./rutas/addProducto')
const {getTotalProductos} = require('./rutas/getTotalProductos')
require('dotenv').config();
app.use(express.json())
app.post('/addProducto',addProducto)
app.get('/totalProductos',getTotalProductos)

app.listen(process.env.PORT, ()=>{
    console.log('puerto ' + process.env.PORT)
    
})