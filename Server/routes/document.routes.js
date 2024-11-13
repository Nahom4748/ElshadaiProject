// Import the necessary modules
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  updateDocument,
  updateDocument2,
  updateDocument3,
  updateDocument4,
  updateDocument5,
  updateDocument6,
} = require("../controllers/document.controller"); // Correct import

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the upload folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
  },
});
const upload = multer({ storage: storage });
// Define the PUT route to update the document
router.put(
  "/api/quarter1/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument // Correct callback function
);
router.put(
  "/api/quarter2/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument2 // Correct callback function
);
router.put(
  "/api/quarter3/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument3 // Correct callback function
);
router.put(
  "/api/y2-quarter1/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument4 // Correct callback function
);
router.put(
  "/api/y2-quarter2/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument5 // Correct callback function
);
router.put(
  "/api/y2-quarter3/videos/:id/document", // Correct the route path
  upload.single("pdf"), // Multer middleware to handle file upload
  updateDocument6 // Correct callback function
);
// Export the router
module.exports = router;
