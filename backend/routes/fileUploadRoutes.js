const express = require('express');
const router = express.Router();
const file = require("../controllers/fileUploadController");
const  fileupload = require("../middleware/multerIntial");
const authorization = require("../middleware/authorization")


//file upload route 
router.post("/",authorization,fileupload,file.fileUploader)



module.exports= router