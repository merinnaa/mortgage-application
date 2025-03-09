//backend/server.js
require('dotenv').config()
const express = require("express");
const cors = require('cors');

console.log(process.env)
const app = express();

const port = process.env.PORT
console.log(port)

//Enable CORs
app.use(cors())

//middleware to parse json bodies
app.use(express.json());

//Routes
app.get('/', (req,res) => {
  res.status(200).send(`Hello from the backend!!${process.env.MESSAGE}`)
});

//start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})