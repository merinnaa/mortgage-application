const db = require('../db')

const getPhoneUsers = () => {
  return db.query('SELECT * FROM users;')
            . then(data => {
              return data.rows;
            })
}

module.exports = {getPhoneUsers};