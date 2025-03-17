// pool method 
const {Pool} = require('pg');

//db parameters declared 
const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // If your database uses a self-signed certificate
  }
};

const db = new Pool(dbParams)

db.connect();

//export db module
module.exports = db;