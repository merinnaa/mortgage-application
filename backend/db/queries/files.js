const db = require('../db');

//get lenders by email
const getFile = (user_id,filename,mimetype, size, file_data) => {
  return db.query('INSERT INTO upload_files(user_id,filename, mimetype, size, file_data) VALUES ($1,$2,$3,$4,$5)',[user_id,filename,mimetype, size, file_data])     
            
}

module.exports={getFile}