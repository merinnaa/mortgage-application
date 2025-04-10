const router = require("express").Router();
const usersDb = require("../db/queries/users");
const lenderDb = require("../db/queries/lenders")
const authorization = require("../middleware/authorization");

router.get("/",authorization, async (req,res) => {
  try {
    const user = await usersDb.getUsersById(req.user)
      res.json(user.rows[0])

  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error")
    
  }
})

router.get("/lender",authorization, async(req,res) => {
  try {
    const lender = await lenderDb.getLendersById(req.user)
      res.json(lender.rows[0])
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error")
  }
})




module.exports = router;