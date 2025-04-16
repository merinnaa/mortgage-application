const db = require('../db');

//get users by email
const getUsersByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email=$1;',[email])
  
      
            
}
//Get users by id 
const getUsersById = (id) => {
  return db.query('SELECT * FROM users WHERE id=$1;',[id])
      
            
}

const createNewUser = (name,email,bcryptPassword) => {
  return db.query("INSERT INTO users (name, email, password) VALUES ($1, $2 , $3) RETURNING *;",[name, email, bcryptPassword] )
  
}

//Get users by id 
const getUsersByIdEmail = (id,email) => {
  return db.query('SELECT * FROM users WHERE id=$1 AND email=$2;',[id,email])
      
            
}
module.exports = {getUsersByEmail,createNewUser,getUsersById,getUsersByIdEmail}