const router = require("express").Router();
const usersDb = require("../db/queries/users");
const lendersDb = require("../db/queries/lenders");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
 
    const lender = await lendersDb.getLenderByIdEmail(req.id, req.email);
    const user = await usersDb.getUsersById(req.id);
  
    if (lender.rows.length !==0) {    
      
      if(lender.rows[0].role === 'admin'){
        console.log(lender.rows[0])
        return res.json("This is admin page")
      }    

        return res.json("This is Supervisior")     
      
    }
    if (user.rows.length !== 0) {
      console.log(user.rows[0])    
      return res.json(user.rows[0])
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});


module.exports = router;
