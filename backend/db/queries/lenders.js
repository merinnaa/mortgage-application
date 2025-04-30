const {db} = require('../db');

//get lenders by email
const getLendersByEmail = (email) => {
  return db.query('SELECT * FROM lenders WHERE email=$1;',[email])
  
      
            
}
//get lenders by email
const getLendersByEmployeeIdRoleInstitution = (employee_id,role,institution) => {
  return db.query('SELECT * FROM lenders WHERE employee_id=$1 AND role=$2 AND institution = $3;',[employee_id,role,institution])
  
      
            
}

//Get lenders by id 
const getLendersById = (id) => {
  return db.query('SELECT * FROM lenders WHERE id=$1;',[id])
      
            
}
//Get lenders by role 
const getLendersByRole = (role) => {
  return db.query('SELECT * FROM lenders WHERE role=$1;',[role])
      
            
}
const createNewLender = (first_name,last_name,email,bcryptPassword,institution,employee_id,role) => {
  return db.query("INSERT INTO lenders (first_name,last_name,email, password, institution, employee_id, role) VALUES ($1, $2 , $3,$4,$5,$6,$7) RETURNING *;",[first_name,last_name, email, bcryptPassword,institution,employee_id,role] )
  
}

//Get lenders by id and email
const getLenderByIdEmail = (id,email) => {
  return db.query('SELECT * FROM lenders WHERE id=$1 AND email=$2;',[id,email])
      
            
}
//Get lenders by id and email
const getAdminLenders = () => {
  return db.query('SELECT * FROM lenders WHERE role=admin;')
      
            
}

module.exports = {getLenderByIdEmail,getLendersByEmail,createNewLender,getLendersById, getLendersByEmployeeIdRoleInstitution, getLendersByRole, getAdminLenders}