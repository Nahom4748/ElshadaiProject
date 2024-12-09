const loginService = require("../services/login.service");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure this is configured

async function logIn(req, res) {
  const userData = req.body;

  try {
    const user = await loginService.logIn(userData);

    if (user.status === "fail") {
      return res.status(403).json({
        status: user.status,
        message: user.message,
      });
    }

    const roleMapping = {
      Admin: 1,
      Manager: 2,
      Student: 3,
      Partner: 4,
    };

    const roleValue = roleMapping[user.data.company_role_name] || null;

    const payload = {
      user_id: user.data.user_id,
      user_email: user.data.email,
      user_role: roleValue,
      user_first_name: user.data.first_name,
      user_last_name: user.data.last_name,
    };

    const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" });

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: { user_token: token },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred during login",
    });
  }
}

module.exports = {
  logIn,
};
