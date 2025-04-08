
const jwtGenerator = require("../utils/jwtGenerator");
const bcrypt = require("bcrypt")
const usersDb = require("../db/queries/users")


//First time registering a user
 const register = async (req, res) => {
  try {
    // 1. First destructure the req.body coming from the client side , req.body is coming as (name, email, password)

     const {name, email, password} = req.body;

    //2. check if the user exists in DB (if user exists throw error)
      
      const user = await usersDb.getUsersByEmail(email);
      console.log("here is users",user)
      if(user.rows.length !== 0){
        return res.status(401).json("User already exists")
      }
         

    //3.if new user Bcrypt the user password
      
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);
 
      
      
      //4.update db with new user with hashedpassword
      
      const newUser = await usersDb.createNewUser(name,email,bcryptPassword)
     
      
    //5.Once registered successfully , generate a token 
      const token = jwtGenerator(newUser.rows[0].id)
      res.json({token});


      
    } catch (error) {
      console.error(error.message)
      res.status(500).json("Server Error");
      
    }

};

/////////////////////////////////////////////////////////////////////////////////////////
    // login route
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
const login = async (req, res) => {
  try {
    //1. destructure the req.body
    const {email, password} = req.body;

    //2. check if user doesn't exist(if not then we throw error);
    
    const user = await usersDb.getUsersByEmail(email);
     if( user.rows.length === 0 ){
      return res.status(401).json("User email or password is incorrect!!")
     }

     //3. otherwise check if the password is correct, compare it with database password
    
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if(!validPassword) {
      return res.status(401).json("User email or password is incorrect!!")
    }

    //4. if password is correct then generate token 
    const token = jwtGenerator(user.rows[0].id);
    res.json({token})

    
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
    
  }
}

   /////////////////////////////////////////////////////////////////////////////////////////
    // verify if there is still token 
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

const verify = async(req,res) => {
     
        try {
          res.json(true);
          
        } catch (error) {
          console.error(error.message);
          res.status(500).json("Server Error");
          
        }
    }


module.exports = {
  register,
  login,
  verify
}