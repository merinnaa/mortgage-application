const router = require("express").Router();
const usersDb = require("../db/queries/users");
const lendersDb = require("../db/queries/lenders");
const authorization = require("../middleware/authorization");
const authorizeLender = require("../middleware/authorizeLender");

router.get("/", authorization, async (req, res) => {
  try {
     const user = await usersDb.getUsersById(req.id);
    
      return res.json(user.rows[0])
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});
router.get("/lender", authorizeLender, async(req,res) => {

  try {
    if( req.role === "admin") {
      const users = await usersDb.getUsersTable()
      const thisLender = await lendersDb.getLendersById(req.id)

      return res.json({
        users: users.rows,
        lender: thisLender.rows[0]
      })
    } else if( req.role === "supervisor") {
      const users = await usersDb.getUsersTable()
      const adminLenders = await lendersDb.getAdminLenders();
      return res.json({
        users: users.rows,
        lenders: adminLenders.rows
      })
    }
    
  } catch (error) {

    console.error(error.message);
    res.status(500).json("Server Error");
    
  }
})


module.exports = router;
