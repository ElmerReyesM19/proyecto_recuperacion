const knex = require('knex');
const config = require('../knexfile');


const development= {
    client: 'pg',
    connection: {
      host: "db",
      port:5432 ,
      database: "products",
      user: "elmer",
      password: "elmer1230",
    },
    migrations: {
      directory: './migrations'
    }
}
const db = knex(development);
module.exports = db;