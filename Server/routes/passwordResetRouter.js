const express = require("express");
const router = express.Router();
const passwordResetController = require("../controllers/passwordReset.controller");

// Route to request a password reset (generates token and sends email)
router.post("/request", passwordResetController.requestPasswordReset);

// Route to confirm and reset password with the provided token
router.post("/confirm", passwordResetController.resetPassword);

module.exports = router;
