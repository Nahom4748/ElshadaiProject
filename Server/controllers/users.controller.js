const userService = require("../services/user.service");
const loginService = require("../services/login.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.SECRET_KEY;

// Get all users
async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: "success",
      message: "Users fetched successfully!",
      data: users,
    });
  } catch (error) {
    console.error("Error in controller:", error);
    res.status(500).json({
      status: "fail",
      message: "Error fetching users!",
      error: error.message,
    });
  } finally {
    next();
  }
}

// Get user by ID
async function getUserById(req, res, next) {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: error.message });
  } finally {
    next();
  }
}

// Register a new user
async function registerUser(req, res) {
  const userData = req.body;
  const requiredFields = [
    "email",
    "password",
    "first_name",
    "last_name",
    "phone_number",
    "city",
    "country",
  ];

  for (const field of requiredFields) {
    if (!userData[field]) {
      return res.status(400).json({
        status: "fail",
        message: `Please provide ${field}`,
      });
    }
  }

  try {
    const userExists = await userService.checkIfUserExists(userData.email);
    if (userExists) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const result = await userService.registerUser(userData);

    if (result.status === "fail") {
      return res.status(400).json({
        status: result.status,
        message: result.message,
      });
    }

    res.status(201).json({
      status: result.status,
      message: result.message,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred during registration",
    });
  }
}

// Update a user
async function updateUser(req, res) {
  const { userId } = req.params;
  const userData = req.body;

  try {
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const result = await userService.updateUser(userId, userData);

    if (result.status === "fail") {
      return res.status(400).json({
        status: "fail",
        message: result.message,
      });
    }

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while updating the user",
    });
  }
}

// Delete a user
async function deleteUser(req, res) {
  const { userId } = req.params;
  try {
    const result = await userService.deleteUser(userId);
    res.status(200).json({
      status: "success",
      message: "User deleted successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Error in controller:", error);
    res.status(500).json({
      status: "fail",
      message: "Error deleting user!",
      error: error.message,
    });
  }
}

// Handle user login
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
      Student: 2,
      Manager: 3,
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
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  logIn,
};
