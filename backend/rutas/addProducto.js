
const db = require('../config/db')
const addProducto = async (req, res)=>{
    const trx = await db.transaction();

  try {
    const { nombre, codigo } = req.body;

    // Validación básica
    if (!nombre || !codigo) {
      await trx.rollback();
      return res.status(400).json({ error: 'Faltan datos: nombre o código' });
    }

    const nuevoProducto = {
      nombre,
      codigo,
      estado: 'disponible' // Estado por defecto
    };

    // Insertar con transacción
    await trx('productos').insert(nuevoProducto);

    await trx.commit(); // Confirmar transacción

    res.status(201).json({ mensaje: 'Producto creado exitosamente' });

  } catch (error) {
    await trx.rollback();
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
}

module.exports = {
    addProducto
}