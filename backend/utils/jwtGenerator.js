const jwt = require("jsonwebtoken")
require('dotenv').config()


function jwtGenerator(id,email) {
  const payload = {
    id: id,
    email: email
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1hr"})
}

module.exports = jwtGenerator;