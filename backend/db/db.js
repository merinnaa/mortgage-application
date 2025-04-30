require("dotenv").config();
const { Pool } = require("pg");

const dbParams = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // required for Neon
  },
};

const dbApiParams = {
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false, // required for Neon
  },
};

const db = new Pool(dbParams);
const dbApi = new Pool(dbApiParams);
// Make sure db and dbApi are connected before exporting
db.connect()
  .then(() => console.log("Connected to the main database"))
  .catch((err) => console.error("Error connecting to the main database", err));
dbApi.connect()
  .then(() => console.log("Connected to the Api database"))
  .catch((err) => console.error("Error connecting to the main database", err));




module.exports = { db, dbApi};