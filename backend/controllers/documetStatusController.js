require("dotenv").config({path:"../.env"})
const documentStatus = require("../db/queries/userData")


const status = async (req,res) => {
  try {
    console.log("allApplicants.rows")
    const allApplicants = await documentStatus.getUserDocumentStatus()
    console.log(allApplicants.rows)
    return res.status(400).json({allApplicants})
    
  } catch (error) {
    console.log(error)
    
  }
}


module.exports = {status}

