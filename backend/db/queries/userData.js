require("dotenv").config({path: "../../.env"})
const {db} = require("../db")

const getUserById = async (id) => {
  try {
    const data = await db.query(`
    SELECT DISTINCT ON (users.id)
    users.id,
    users.first_name,
    users.last_name,
    bank_statment_records.is_valid_bank_statement AS valid_document,
    bank_doc.filename AS bank_filename,
    id_doc.filename AS id_filename,
    income_doc.filename AS income_filename,
    drivers_license.date_of_birth AS DOB,
    drivers_license.license_number AS license_number,
    REPLACE(w2_records.employee_ssn, '-', '') AS ssn
    FROM users 
    INNER JOIN id_doc ON id_doc.user_id = users.id
    INNER JOIN bank_doc ON bank_doc.user_id = users.id
    INNER JOIN income_doc ON income_doc.user_id = users.id
    INNER JOIN bank_statment_records ON bank_statment_records.doc_id = bank_doc.id
    INNER JOIN drivers_license ON drivers_license.doc_id = id_doc.id
    INNER JOIN w2_records ON w2_records.doc_id = income_doc.id
    WHERE users.id=$1;`, [id]);
    // console.log(data.rows); // rows is the actual result set
    return data.rows[0]
  } catch (err) {
    console.error(err);
  }
};

const upDateDocumentStatus = (user_id,valid_dr_license,valid_w2, valid_bank_document) => {
  return db.query("INSERT INTO document_status (user_id,valid_dr_license,valid_w2, valid_bank_document) VALUES ($1, $2 , $3,$4) RETURNING *;",[user_id,valid_dr_license,valid_w2, valid_bank_document])
  
      
            
}



// getUserById(1);

module.exports = {getUserById, upDateDocumentStatus}