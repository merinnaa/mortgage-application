require("dotenv").config({ path: "../../.env" });

const { db, dbApi } = require("../db");


const getUserBySSN = async (ssn) => {
  try {
    const data = await dbApi.query('SELECT * FROM irs_w2_forms WHERE ssn=$1;', [ssn]);
    // console.log(data.rows[0])
    return data; // rows is the actual result set
  } catch (err) {
    console.error(err);
  }
};
// const getUsersById = async (id) => {
//   try {
//     const data = await db.query('SELECT * FROM users WHERE id=$1;', [id]);
//     console.log(data.rows); // rows is the actual result set
//   } catch (err) {
//     console.error(err);
//   }
// };



// getUserBySSN(123456789);
// getUsersById(1);

module.exports = {getUserBySSN}

