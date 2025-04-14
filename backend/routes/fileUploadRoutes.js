const express = require('express');
const router = express.Router();
const file = require("../controllers/fileUploadController");
const  fileupload = require("../middleware/multerIntial");
const authorization = require("../middleware/authorization")


router.post("/",authorization,fileupload,file.fileUploader)

// router.post("/",(req,res) => {res.json("hello uploads")})

module.exports= router