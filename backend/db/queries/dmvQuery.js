require("dotenv").config({ path: "../../.env" });

const { db, dbApi } = require("../db");


const getUserByLicenseNumber = async (license_number) => {
  try {
    const data = await dbApi.query('SELECT * FROM dmv_licenses WHERE license_number=$1;', [license_number]);
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



// getUserByLicenseNumber('D1234567');
// getUsersById(1);

module.exports = {getUserByLicenseNumber}


