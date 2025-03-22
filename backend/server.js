//backend/server.jsf

require("dotenv").config()
const express = require("express");
const cors = require('cors');

console.log(process.env)
const app = express();
const port = process.env.PORT || 4000;


const port = process.env.PORT




//middleware to parse json bodies
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())

/////////////////////////////////////////////////////
//Routes

////////////////////////////////////////////////////

// Register and Login routes

app.use("/auth", require("./routes/jwtAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"));

app.get('/', (req,res) => {
  res.status(200).send(`Hello from the backend!!${process.env.MESSAGE}`)
});


//start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})