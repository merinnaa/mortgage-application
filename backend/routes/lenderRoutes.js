const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const lenders = require("../controllers/lenderController")
const authorization = require("../middleware/authorization")



// First time registering a user
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/register-lender",lenders.register)

// login route
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/login-lender", validInfo, lenders.login)

// verify route
/////////////////////////////////////////////////////////////////////////////////////
router.get("/is-verify" , authorization,lenders.verify)


module.exports = router