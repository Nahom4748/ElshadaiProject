const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const db = require("../config/db.config");

// Configure nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// services/passwordReset.service.js

async function requestPasswordReset(email) {
  try {
    const query = `SELECT user_id FROM Emails WHERE email = ?`;
    const result = await db.query(query, [email]);

    // Check if the user exists
    if (result.length === 0) {
      return { status: 404, message: "This email is not registered with us." };
    }

    const userId = result[0].user_id;

    // Generate a token
    const token = crypto.randomBytes(20).toString("hex");
    const expiresAt = new Date(Date.now() + 1800000); // 30 minutes expiration

    // Store the token in the database
    await db.query(
      "INSERT INTO Password_Reset_Tokens (user_id, reset_token, expires_at) VALUES (?, ?, ?)",
      [userId, token, expiresAt]
    );

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    const resetLink = `${frontendUrl}/reset/${token}`;

    // Send email with the reset link
    await transporter.sendMail({
      to: email,
      subject: "Your Password Reset Request",
      text: `We received a request to reset your password. Please follow the link below to reset it. 
      
If you did not request this reset, you can ignore this email.

To reset your password, click or paste this link into your browser:
      
${resetLink}

This link is valid for 30 minutes.`,
    });

    return { status: 200, message: "Password reset email sent" };
  } catch (error) {
    console.error("Error in requestPasswordReset service:", error);
    throw new Error("Service error: password reset request failed");
  }
}



async function resetPassword(token, newPassword) {
  try {
    // Validate token and check expiration
    const tokens = await db.query(
      "SELECT * FROM Password_Reset_Tokens WHERE reset_token = ? AND expires_at > NOW()",
      [token]
    );

    // Ensure tokens[0] exists before accessing user_id
    if (!tokens || tokens.length === 0) {
      return { status: 400, message: "Invalid or expired token" };
    }

    const userId = tokens[0].user_id;

    // Hash new password and update in User_Passwords table
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.query(
      "UPDATE User_Passwords SET password_hashed = ? WHERE user_id = ?",
      [hashedPassword, userId]
    );

    // Remove token after successful password reset
    await db.query("DELETE FROM Password_Reset_Tokens WHERE reset_token = ?", [
      token,
    ]);

    return { status: 200, message: "Password reset successful" };
  } catch (error) {
    console.error("Error in resetPassword service:", error);
    throw new Error("Service error: password reset failed");
  }
}

module.exports = { requestPasswordReset, resetPassword };
