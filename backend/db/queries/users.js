const {db,dbApi} = require('../db');

// console.log(db)
// console.log(dbApi)

//get users by email
const getUsersByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email=$1;',[email])
  
      
            
}
//Get users by id 
const getUsersById = (id) => {
  return db.query('SELECT * FROM users WHERE id=$1;',[id])
      
            
}
// Get all users 
const getUsersTable = () => {
  return db.query('SELECT * FROM users;')
      
            
}

const createNewUser = (first_name,last_name, email,bcryptPassword) => {
  return db.query("INSERT INTO users (first_name,last_name,email, password) VALUES ($1, $2 , $3, $4) RETURNING *;",[first_name,last_name, email, bcryptPassword] )
  
}

//Get users by id 
const getUsersByIdEmail = (id,email) => {
  return db.query('SELECT * FROM users WHERE id=$1 AND email=$2;',[id,email])
      
            
}

// const getUserById = async (id) => {
//   try {
//     const data = await db.query('SELECT * FROM irs_w2_forms WHERE id=$1;', [id]);
//     console.log(data.rows); // rows is the actual result set
//   } catch (err) {
//     console.error(err);
//   }
// };

// getUserById(2);

module.exports = {getUsersByEmail,createNewUser,getUsersById,getUsersByIdEmail, getUsersTable}