//import libraries 
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = async(req, res, next) => {
  try {
    //1.destructure the token
    const jwtToken = req.header("token");

      if(!jwtToken) {
        return res.status(403).json("Not Authorized")
      }
      const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)
     

       req.id = payload.id;
       req.email = payload.email

    next()

    
  } catch (error) {
    console.error(error.message)
    return res.status(403).json("Not Authorized")
    
  }
}