const db = require('../db');


/**
 * Save file to the appropriate table based on the field name (not the filename)
 * @param {string} user_id 
 * @param {string} field - 'id', 'bank', or 'income'
 * @param {string} filename 
 * @param {string} mimetype 
 * @param {number} size 
 * @param {Buffer} file_data 
 */
const getFile = (user_id, field, filename, mimetype, size, file_data) => {
  let table;

  if (field === 'id') {
    table = 'id';
  } else if (field === 'bank') {
    table = 'bank';
  } else if (field === 'income') {
    table = 'income';
  } else {
    throw new Error(`Invalid field name: ${field}`);
  }

  const query = `INSERT INTO ${table} (user_id, filename, mimetype, size, file_data)
                 VALUES ($1, $2, $3, $4, $5)`;

  return db.query(query, [user_id, filename, mimetype, size, file_data]);
};

module.exports = { getFile };