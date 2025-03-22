const db = require('../db');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
            .then(data => {
              return data.rows;
            })
}

module.exports = {getUsers}