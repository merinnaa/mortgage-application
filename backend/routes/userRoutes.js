// import libraries

const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const users = require("../controllers/userController")
const authorization = require("../middleware/authorization")



// First time registering a user
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/register",validInfo,users.register)

// login route
/////////////////////////////////////////////////////////////////////////////////////////
router.get("/login", validInfo, users.login)

// verify route
/////////////////////////////////////////////////////////////////////////////////////
router.get("/is-verify" , authorization,users.verify)


module.exports = router