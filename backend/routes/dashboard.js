const router = require("express").Router();
const db = require("../db/db");

router.get("/", async (req,res) => {
  try {
    const user = await db.query("SELECT name FROM users WHERE id = $1 ;", [req.user])
    res.json(user.rows[0])
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error")
    
  }
})




module.exports = router;