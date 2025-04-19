const db = require('../db');

//get users by email
const getUsersByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email=$1;',[email])
  
      
            
}
//Get users by id 
const getUsersById = (id) => {
  return db.query('SELECT * FROM users WHERE id=$1;',[id])
      
            
}

const createNewUser = (first_name,last_name, email,bcryptPassword) => {
  return db.query("INSERT INTO users (first_name,last_name,email, password) VALUES ($1, $2 , $3, $4) RETURNING *;",[first_name,last_name, email, bcryptPassword] )
  
}

//Get users by id 
const getUsersByIdEmail = (id,email) => {
  return db.query('SELECT * FROM users WHERE id=$1 AND email=$2;',[id,email])
      
            
}
module.exports = {getUsersByEmail,createNewUser,getUsersById,getUsersByIdEmail}