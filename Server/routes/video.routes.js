// Import the express module
const express = require("express");
// Import the router method from express
const router = express.Router();
// Import the vehicle controller
const videoController = require("../controllers/video.controller");

//
router.get("/api/quarter1/videos", videoController.quarter1videos);
router.get("/api/quarter2/videos", videoController.quarter2videos);
router.get("/api/quarter3/videos", videoController.quarter3videos);
router.get("/api/y2-quarter1/videos", videoController.y2quarter1videos);
router.get("/api/y2-quarter2/videos", videoController.y2quarter2videos);
router.get("/api/y2-quarter3/videos", videoController.y2quarter3videos);

module.exports = router;
