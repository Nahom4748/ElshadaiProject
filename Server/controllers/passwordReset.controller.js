const passwordResetService = require("../services/passwordReset.service");

// Request password reset (Send email with reset link)
async function requestPasswordReset(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    await passwordResetService.requestPasswordReset(email, res);
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    return res
      .status(500)
      .json({ message: "Error processing password reset request" });
  }
}

// Reset password (Verify token & update password)
async function resetPassword(req, res) {
  const { token, newPassword } = req.body;
  console.log(token, newPassword);
  if (!token || !newPassword) {
    return res
      .status(400)
      .json({ message: "Token and new password are required." });
  }

  try {
    await passwordResetService.resetPassword(token, newPassword, res);
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return res.status(500).json({ message: "Error resetting password" });
  }
}

module.exports = { requestPasswordReset, resetPassword };
