const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const lenders = require("../controllers/lenderController")
const authorization = require("../middleware/authorization");
const validLender = require("../middleware/validLender");
const verification = require("../controllers/verificationController");
const authorizeLender = require("../middleware/authorizeLender");

router.get("/lender",(req,res) => {
  res.json("Hello mosses you are on the lender side")
})

// First time registering a user
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/register-lender",lenders.register)

// login route
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/login-lender",validLender,lenders.login)

// verify route
/////////////////////////////////////////////////////////////////////////////////////
router.get("/is-verify-lender" , authorizeLender,lenders.verify)
// verify route
/////////////////////////////////////////////////////////////////////////////////////
router.post("/document-verify",verification)


module.exports = router