
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// POST request for user registration
router.post("/register", userController.registerUser);

router.put("/api/users/:id", userController.updateUser);
module.exports = router;
