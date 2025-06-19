/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.createTable('products', table => {
    table.increments('id').primary();              // ID autoincremental
    table.string('codigo', 20).notNullable().unique(); // Código único
    table.string('nombre', 100).notNullable();     // Nombre del producto
    table.string('estado', 10).notNullable();      // Estado (activo, inactivo)
  });    
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('productos');
};
