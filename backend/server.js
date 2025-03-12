//backend/server.js
require('dotenv').config()
const express = require("express");

const cors = require('cors');

//Import the routes
const userInfoRoutes = require('./routes/userInfoRoutes');


const app = express();
const port = process.env.PORT || 4000;



//middleware to parse json bodies
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())

//Routes
app.use ('/users', userInfoRoutes);

//start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})