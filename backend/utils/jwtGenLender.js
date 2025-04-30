const jwt = require("jsonwebtoken")
require('dotenv').config()


function jwtGenLender(id,employee_id,institution,role,) {
  const payload = {
    id: id,
    institution: institution,
    role: role,
    employee_id: employee_id,

  }
  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1hr"})
}

module.exports = jwtGenLender;