
const db = require('../config/db')

const listaProductos = async (req,res)=>{
     try{

        const result = await db('productos').select('*');

        return res.status(200).json(result)

    }catch{
          return res.status(500).json({ error: 'Ha ocurrido un error al obtener los productos' });

    }
}

module.exports = listaProductos