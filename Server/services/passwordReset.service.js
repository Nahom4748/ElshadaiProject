const crypto = require("crypto");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const db = require("../config/db.config");

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
console.log(first);
// **Step 1: Request Password Reset (Generate Link & Send Email)**
async function requestPasswordReset(email, res) {
  try {
    // Check if the email exists
    const query = `
      SELECT u.user_id, p.password_id
      FROM Emails e
      INNER JOIN Users u ON e.user_id = u.user_id
      INNER JOIN User_Passwords p ON u.user_id = p.user_id
      WHERE e.email = ?`;

    const [rows] = await db.query(query, [email]);

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "This email is not registered." });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 3600000); // Expires in 1 hour

    // Store token in DB
    await db.query(
      "INSERT INTO Password_Resets (password_id, otp_code, expires_at, used) VALUES (?, ?, ?, 0)",
      [rows.password_id, token, expiresAt]
    );

    // **Generate password reset link**
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    // **Send email with reset link**
    try {
      await transporter.sendMail({
        from: `Support <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Password Reset Request",
        html: `
          <p>You requested a password reset.</p>
          <p>Click the link below to reset your password:</p>
          <a href="${resetLink}" style="display: inline-block; padding: 10px 15px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
          <p>This link will expire in 1 hour.</p>
        `,
      });

      return res
        .status(200)
        .json({ message: "Password reset link sent to your email." });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

// **Step 2: Reset Password**
async function resetPassword(token, newPassword, res) {
  try {
    const first6Digits = token.slice(0, 6);
    // Validate token
    const query =
      "SELECT * FROM Password_Resets WHERE otp_code = ? AND expires_at > NOW() AND used = 0";
    const [tokens] = await db.query(query, [first6Digits]);

    // If no tokens found or expired
    if (!tokens || tokens.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    // Log the token data from the database for debugging

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await db.query(
      "UPDATE User_Passwords SET password_hashed = ? WHERE password_id = ?",
      [hashedPassword, tokens.password_id]
    );

    // Mark token as used
    await db.query("UPDATE Password_Resets SET used = 1 WHERE otp_code = ?", [
      first6Digits,
    ]);

    return res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return res.status(500).json({ message: "Error resetting password." });
  }
}

module.exports = { requestPasswordReset, resetPassword };
