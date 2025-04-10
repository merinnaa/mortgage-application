const db = require('../db');

//get lenders by email
const getLendersByEmail = (email) => {
  return db.query('SELECT * FROM lenders WHERE email=$1;',[email])
  
      
            
}
//Get lenders by id 
const getLendersById = (id) => {
  return db.query('SELECT * FROM lenders WHERE id=$1;',[id])
      
            
}

const createNewLender = (first_name,last_name,email,bcryptPassword,institution,employee_id,role) => {
  return db.query("INSERT INTO lenders (first_name,last_name,email, password, institution, employee_id, role) VALUES ($1, $2 , $3,$4,$5,$6,$7) RETURNING *;",[first_name,last_name, email, bcryptPassword,institution,employee_id,role] )
  
}

module.exports = {getLendersByEmail,createNewLender,getLendersById}