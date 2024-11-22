// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the employee routes

const users = require("./users.routes");

// Import the login routes
const loginRoutes = require("./login.routes");
//import the customer routes
const PartnersRoutes = require("./PartnersVideos.routes");
// Add the install router to the main router
const newsRouter = require("./news.routes");
// import the service routes
const documentRouter = require("./document.routes");
//import the vehicle routes
const videos = require("./video.routes");

const passwordReset = require("./passwordResetRouter");
const paymentRouter = require("./payments.routes");

//add the service routes
router.use(documentRouter);

// Add the install router to the main router
router.use(installRouter);
// Add the employee routes to the main router
router.use(users);
// Add the customer routes to the main router
router.use(PartnersRoutes);
// Add the login routes to the main router
router.use(loginRoutes);
// Add the vehicle routes to the main router
router.use(videos);

router.use(newsRouter);
router.use(passwordReset);
router.use(paymentRouter);

// Export the router
module.exports = router;
