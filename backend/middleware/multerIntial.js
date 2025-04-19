const multer = require("multer");


const storage = multer.memoryStorage();
const fileFilter = (req,file,cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPG, PNG, or PDF files are allowed'), false);
  }
}

const fileUpload = multer({storage, fileFilter})



module.exports = fileUpload.fields([
  { name: 'id', maxCount: 1 },
  { name: 'bank', maxCount: 1 },
  { name: 'income', maxCount: 1 }
])