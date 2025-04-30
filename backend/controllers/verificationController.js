require("dotenv").config({path:"../.env"})
const dmvDB = require("../db/queries/dmvQuery")
const irsDB = require("../db/queries/irsQuery")
const userDataDB = require("../db/queries/userData")
const dLChecker = require("../utils/dLChecker")
const w2Checker = require("../utils/w2Checker")


const verification = async(req,res) => {
  try {
    const {id} = req.body
    const user_id = id;
    const user = await userDataDB.getUserById(id);
    if(!user) {
      res.status(401).json("No user with this idfound")
      return
    }
    const license_number = user.license_number;
    const user_ssn = user.ssn
   
    
    const from_DMV_user_data = await dmvDB.getUserByLicenseNumber(license_number);
   
    
    const  valid_dr_License = dLChecker(user, from_DMV_user_data)

    const from_irs_user_data = await irsDB.getUserBySSN(user_ssn)
    
    const valid_w2 = w2Checker(user, from_irs_user_data)
 

    const valid_bank_document = user.valid_document;
   

    const newStatusUpdate = await userDataDB.upDateDocumentStatus(user_id, valid_dr_License, valid_w2, valid_bank_document)


     
    
    
  } catch (error) {
    console.error(error.message)
      res.status(500).json("Server Error");
    
  }

}
module.exports = verification