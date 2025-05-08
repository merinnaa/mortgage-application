const router = require("express").Router();
const usersDb = require("../db/queries/users");
const documentStatus = require("../db/queries/userData")
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
      function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      const allApplicants = await documentStatus.getUserDocumentStatus();


      return res.json({
        users: users.rows.map(user => ({
          name: `${capitalize(user.first_name)} ${capitalize(user.last_name)}`
        })),
        names: users.rows.map(applicant => ({
          first_name : `${applicant.first_name} `,
          last_name: `${applicant.last_name}`

        }) ),
        lender: thisLender.rows[0],
        allApplicants: allApplicants.rows
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
