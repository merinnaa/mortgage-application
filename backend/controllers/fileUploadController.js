const files = require("../db/queries/files")





const fileUploader = async (req,res) =>{
  try {
    user_id = req.id;
    const uploadedFiles = req.files;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).json({ success: false, message: "Missing Files or No files uploaded" });
    }

    for(const file of uploadedFiles) {
      await files.getFile(
        user_id,
        file.originalname,
        file.mimetype,
        file.size,
        file.buffer
      )
    }


    res.status(200).json({ 
      success: true, 
      message: `${uploadedFiles.length} file(s) uploaded successfully`,
      filenames: uploadedFiles.map(f => f.originalname)
    });
    
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ success: false, message: "Upload failed", error: error.message });
  }
}

module.exports = {fileUploader}