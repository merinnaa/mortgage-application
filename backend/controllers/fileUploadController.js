const files = require("../db/queries/files")
const dataExtraction = require("../dataExtraction/dataExtraction")




const fileUploader = async (req,res) =>{
  try {
    user_id = req.id;
    const uploadedFiles = req.files;
    
// Validate presence of all required fields
const requiredFields = ["id", "bank", "income"];
for (const field of requiredFields) {
  if (!uploadedFiles[field] || uploadedFiles[field].length === 0) {
    return res.status(400).json({
      success: false,
      message: `Missing file: ${field}`
    });
  }
}
    // Process files
    for (const field of requiredFields) {
      const file = uploadedFiles[field][0]; // multer stores files in arrays
      await files.getFile(
        user_id,
        field,
        file.originalname,
        file.mimetype,
        file.size,
        file.buffer
      );

      console.log(field)
      dataExtraction(field)

      
    }

    res.status(200).json({
      success: true,
      message: "All files new uploaded successfully",
      filenames: requiredFields.map(field => uploadedFiles[field][0].originalname)
    });

  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({
      success: false,
      message: "Upload failed",
      error: error.message
    });
  }
};

module.exports = { fileUploader };