
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// POST request for user registration
router.post("/register", userController.registerUser);

module.exports = router;
