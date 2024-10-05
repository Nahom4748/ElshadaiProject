// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the employee routes

const employeeRouter = require("./employee.routes");
const customerRouter = require("./customer.routes");

// Import the login routes
const loginRoutes = require("./login.routes");
//import the customer routes
const customerRoutes = require("./customer.routes");
// Add the install router to the main router
const newsRouter = require("./news.routes");
// import the service routes
const serviceRouter = require("./service.routes");
//import the vehicle routes
const vehicleRouter = require("./vehicle.routes");

router.use(customerRouter);

//add the service routes
router.use(serviceRouter);

// Add the install router to the main router
router.use(installRouter);
// Add the employee routes to the main router
router.use(employeeRouter);
// Add the customer routes to the main router
router.use(customerRoutes);
// Add the login routes to the main router
router.use(loginRoutes);
// Add the vehicle routes to the main router
router.use(vehicleRouter);

router.use(newsRouter);
// Export the router
module.exports = router;
