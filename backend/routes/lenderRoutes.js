const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const lenders = require("../controllers/lenderController")
const authorization = require("../middleware/authorization")

router.get("/lender",(req,res) => {
  res.json("Hello mosses you are on the lender side")
})

// First time registering a user
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/register-lender",lenders.register)

// login route
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/login-lender", validInfo, lenders.login)

// verify route
/////////////////////////////////////////////////////////////////////////////////////
router.get("/is-verify-lender" , authorization,lenders.verify)


module.exports = router