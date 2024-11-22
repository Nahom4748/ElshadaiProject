//import the express module
const express = require("express");
//import the router method from express
const router = express.Router();
//import the customer controller
const partnersController = require("../controllers/partnersvideos.controller");
//create a route for the customer controller request a post request
router.post("/api/partners/videos", partnersController.createVideos);
router.get("/api/partners/videos", partnersController.getAllVideos);
router.delete("/api/partners/videos/:id", partnersController.deleteVideo);

//export the router
module.exports = router;
