//backend/server.js
const express = require("express");
const cors = require('cors');



const app = express();
const port = process.env.PORT || 4000;



//middleware to parse json bodies
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())

/////////////////////////////////////////////////////
//Routes
////////////////////////////////////////////////////

// Register and Login routes

app.use ('/auth', require("./routes/jwtAuth"));

// dashboard route
app.use ('/dashboard', require("./routes/dashboard"));

//start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})