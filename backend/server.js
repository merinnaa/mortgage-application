//backend/server.js
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();

const port = 5000;

//Enable CORs
app.use(cors())

//middleware to parse json bodies
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

//Routes
app.get('/', (req,res) => {
  res.status(200).send(`Hello from the backend!!${process.env.message}`)
});

//start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})