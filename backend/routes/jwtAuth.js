// import libraries

const router = require("express").Router();
const db = require("../db/db");
const bcrypt = require("bcrypt")



// First time registering a user

router.post("/register", async (req, res) =>{
  try {
    // 1. First destructure the req.body coming from the client side , req.body is coming as (name, email, password)

     const {name, email, password} = req.body;

    //2. check if the user exists in DB (if user exists throw error)
      const user = await db.query("SELECT * FROM users WHERE email = $1;", [email]);

      if(user.rows.length !== 0){
        return res.status(401).json("User already exists")
      }
       

      

    //3.if new user Bcrypt the user password
      
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);


    //4.update db with new user with hashedpassword

      const newUser = db.query("INSERT INTO users (name, email, password) VALUES ($1, $2 , $3) RETURNING *;",[name, email, bcryptPassword] )
     

    //5.Once registered successfully , generate a token 
      const token = jwtGenerator(newUser.rows[0].id)
      res.json({token});


    
  } catch (error) {
    console.error(error.message)
    
  }
})

module.exports = router