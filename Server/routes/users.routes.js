
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// POST request for user registration
router.post("/api/user/register", userController.registerUser);

router.put("/api/user/:id", userController.updateUser);
module.exports = router;
