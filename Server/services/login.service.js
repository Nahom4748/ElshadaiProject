// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// Import the bcrypt module to do the password comparison
const bcrypt = require("bcrypt");
// Import the user service to get user by email
const userService = require("./user.service");
const { use } = require("../routes");

// Handle user login
async function logIn(userData) {
  try {
    let returnData = {}; // Object to be returned

    // Get user by email
    const user = await userService.getUserByEmail(userData.email);
    // If user does not exist
    if (user.length === 0) {
      return {
        status: "fail",
        message: "User does not exist",
      };
    }

    // Assuming user[0] exists, check password
    const passwordHashed = user[0].password_hashed;

    // Check if the password hashed exists
    if (!passwordHashed) {
      return {
        status: "fail",
        message: "Password hash not found",
      };
    }

    // Compare provided password with hashed password
    const passwordMatch = await bcrypt.compare(
      userData.password,
      passwordHashed
    );
    if (!passwordMatch) {
      return {
        status: "fail",
        message: "Incorrect password",
      };
    }

    returnData = {
      status: "success",
      data: user[0], // Make sure this is not undefined
    };
    return returnData;
  } catch (error) {
    console.error("Error in login service:", error);
    return {
      status: "error",
      message: "An error occurred during login",
    };
  }
}

// Export the function
module.exports = {
  logIn,
};
