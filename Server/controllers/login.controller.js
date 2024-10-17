// Import the login service
const loginService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.SECRET_KEY;

// Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;

    // Call the logIn method from the login service
    const user = await loginService.logIn(userData);
    console.log(user);
    // If the user is not found or password is incorrect
    if (user.status === "fail") {
      return res.status(403).json({
        status: user.status,
        message: user.message,
      });
    }

    // If login is successful, create a JWT token
    const payload = {
      user_id: user.data.user_id,
      user_email: user.data.email,
      user_role: user.data.company_role_name,
      user_first_name: user.data.first_name,
    };

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h", // Token valid for 24 hours
    });

    // Prepare the response data
    const sendBack = {
      user_token: token,
    };

    // Send the response back to the client
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: sendBack,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred during login",
    });
  }
}

// Export the functions
module.exports = {
  logIn,
};
