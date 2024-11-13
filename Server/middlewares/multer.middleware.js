const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be uploaded
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname; // Original file name
    const filePath = path.join("uploads", fileName); // Full file path

    // Check if the file already exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // File does not exist, save with the original name
        cb(null, fileName);
      } else {
        // File exists, append timestamp to the filename to avoid duplicates
        const timestamp = Date.now();
        const fileExt = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, fileExt);
        const newFileName = `${baseName}-${timestamp}${fileExt}`;
        cb(null, newFileName);
      }
    });
  },
});

// Create multer instance
const upload = multer({
  storage,
});

module.exports = upload;
