const express = require('express')
const db = require('./config/db');
const app = express()
const {addProducto} = require('./rutas/addProducto')
const {getTotalProductos} = require('./rutas/getTotalProductos')
const listaProductos = require('./rutas/listaEntidad')
require('dotenv').config();
app.use(express.json())
app.post('/addProducto',addProducto)
app.get('/totalProductos',getTotalProductos)
app.get('/listaProductos',listaProductos)
app.listen(5000,()=>{
    console.log('servidor activo')
    
})