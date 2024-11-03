const passwordResetService = require("../services/passwordReset.service");

// Controller for requesting a password reset
async function requestPasswordReset(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const result = await passwordResetService.requestPasswordReset(email);
    return res.status(result.status).json({ message: result.message });
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    return res
      .status(500)
      .json({ message: "Error processing password reset request" });
  }
}

// Controller for confirming the password reset
async function resetPassword(req, res) {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res
      .status(400)
      .json({ message: "Token and new password are required." });
  }

  try {
    const result = await passwordResetService.resetPassword(token, newPassword);
    return res.status(result.status).json({ message: result.message });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return res.status(500).json({ message: "Error resetting password" });
  }
}

module.exports = { requestPasswordReset, resetPassword };
