
const jwtGenerator = require("../utils/jwtGenerator");
const bcrypt = require("bcrypt")
const lendersDb = require("../db/queries/lenders")


//First time registering a lender
 const register = async (req, res) => {
  try {
    // 1. First destructure the req.body coming from the client side , req.body is coming as (name, email, password)

     const {name, email, password} = req.body;

    //2. check if the lender exists in DB (if lender exists throw error)
      
      const lender = await lendersDb.getLendersByEmail(email);
      console.log("here is lenders",lender)
      if(lender.rows.length !== 0){
        return res.status(401).json("lender already exists")
      }
         

    //3.if new lender Bcrypt the lender password
      
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);
 
      
      
      //4.update db with new lender with hashedpassword
      
      const newLender = await lendersDb.createNewLender(first_name,last_name,email,bcryptPassword,institution, employee_id, role)
     
      
    //5.Once registered successfully , generate a token 
      const token = jwtGenerator(newLender.rows[0].id)
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

    //2. check if lender doesn't exist(if not then we throw error);
    
    const lender = await lendersDb.getLendersByEmail(email);
     if( lender.rows.length === 0 ){
      return res.status(401).json("Lender email or password is incorrect!!")
     }

     //3. otherwise check if the password is correct, compare it with database password
    
    const validPassword = await bcrypt.compare(password, lender.rows[0].password);

    if(!validPassword) {
      return res.status(401).json("Lender email or password is incorrect!!")
    }

    //4. if password is correct then generate token 
    const token = jwtGenerator(lender.rows[0].id);
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