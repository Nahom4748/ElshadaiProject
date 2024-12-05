// Import the login service
const loginService = require("../services/login.service");
// Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwtSecret = process.env.SECRET_KEY;

// Handle user login
async function logIn(req, res, next) {
  try {
    const userData = req.body;

    // Call the logIn method from the login service
    const user = await loginService.logIn(userData);
    // If the user is not found or password is incorrect
    if (user.status === "fail") {
      return res.status(403).json({
        status: user.status,
        message: user.message,
      });
    }

    // If login is successful, create a JWT token
    // Mapping roles to their corresponding numeric values
    const roleMapping = {
      Admin: 1,
      Student: 2,
      Manager: 3,
      Partner: 4,
    };

    // Assuming `user.data.company_role_name` is one of the above roles
    const roleValue = roleMapping[user.data.company_role_name] || null; // Default to null if no match

    // Creating the payload with the role mapped to the numeric value
    const payload = {
      user_id: user.data.user_id,
      user_email: user.data.email,
      user_role: roleValue, // Here we assign the numeric role value
      user_first_name: user.data.first_name,
      user_last_name: user.data.last_name,
    };

    console.log(payload);

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "24h", // Token valid for 24 hours
    });
    // Prepare the response data
    const sendBack = {
      user_token: token,
    };
    console.log(sendBack);
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
