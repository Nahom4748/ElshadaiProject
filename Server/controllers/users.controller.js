// const userService = require("../services/user.service");
// async function registerUser(req, res) {
//   const userData = req.body;

//   // Validate input fields
//   const requiredFields = [
//     "email",
//     "password",
//     "first_name",
//     "last_name",
//     "phone_number",
//     "city",
//     "country"
//   ];

//   for (const field of requiredFields) {
//     if (!userData[field]) {
//       return res.status(400).json({
//         status: "fail",
//         message: `Please provide ${field}`,
//       });
//     }
//   }

//   try {
//     // Check if user already exists
//     const userExists = await userService.checkIfUserExists(userData.email);
//     if (userExists) {
//       return res.status(400).json({
//         status: "fail",
//         message: "User already exists",
//       });
//     }

//     // Register the user
//     const result = await userService.registerUser(userData);

//     if (result.status === "fail") {
//       return res.status(400).json({
//         status: "fail",
//         message: result.message,
//       });
//     }

//     // If registration is successful
//     return res.status(201).json({
//       status: "success",
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return res.status(500).json({
//       status: "error",
//       message: "An error occurred during registration",
//     });
//   }
// }

// module.exports = {
//   registerUser,
// };

const userService = require("../services/user.service");
const bcrypt = require("bcrypt"); // Import bcrypt at the top of the file

//create a function to get all users
async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    next(); // Correctly placed curly brace
  }
}

async function getUserById(req, res, next) {
  const { userId } = req.params;
  try {
    console.log("request id", userId);
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    next(); // Correctly placed curly brace
  }
}

async function registerUser(req, res) {
  const userData = req.body;
  console.log("first");
  // Validate input fields
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
    // Check if user already exists
    const userExists = await userService.checkIfUserExists(userData.email);
    if (userExists) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }
    // Ensure the password is a string
    if (typeof userData.password !== "string") {
      throw new Error("Password must be a string");
    }

    // Hash the password before registering the user
    const saltRounds = 10;
    userData.password = await bcrypt.hash(userData.password, saltRounds);

    // Register the user with the hashed password
    const result = await userService.registerUser(userData);
    if (result.status === "fail") {
      return res.status(400).json({
        status: "fail",
        message: result.message,
      });
    }

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error); // Detailed error log
    return res.status(500).json({
      status: "error",
      message: "An error occurred during registration",
    });
  }
}

// Update User Controller
async function updateUser(req, res) {
  //   const userId = req.params.userId; // Retrieve userId from the URL parameters
  //   const userData = req.body;

  try {
    // Step 1: Check if the user exists
    const userId = req.params.userId; // Retrieve userId from the URL parameters
    const userData = req.body;

    // Step 1: Check if the user exists
    const userExists = await userService.getUserById(userId); // Use userId from the URL params
    console.log("Fetched User:", userExists); // Debugging: verify if user exists

    if (!userExists) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    // Step 2: Update the user data
    const result = await userService.updateUser(userId, userData); // Use userId

    if (result.status === "fail") {
      return res.status(400).json({
        status: "fail",
        message: result.message,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error); // Debugging: log any error
    return res.status(500).json({
      status: "error",
      message: "An error occurred while updating the user",
    });
  }
}
async function updateUser(req, res) {
  const { userId } = req.params;
  const userData = req.body;

  try {
    const result = await userService.updateUser(userId, userData);
    if (result.success === "success") {
      res
        .status(200)
        .json({ status: "success", message: "User updated successfully" });
    } else {
      res.status(400).json({ status: "fail", message: result.message });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "User update failed" });
  }
}
// controller method to delete a user
const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const result = await userService.deleteUser(userId);
    return res.status(200).json({
      status: "success",
      message: "User deleted successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({
      status: "fail",
      message: "Error deleting user!",
      error: error.message,
    });
  }
};

// Controller method to handle the update
const updateUserRole = async (req, res) => {
  const userId = req.params.userId;
  const { company_role_id } = req.body;

  try {
    const updatedUser = await userService.updateUserRole(
      userId,
      company_role_id
    );
    return res.status(200).json({
      status: "success",
      message: "User role updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({
      status: "fail",
      message: "Error updating user role!",
      error: error.message,
    });
  }
};

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({
      status: "success",
      message: "Users fetched successfully!",
      data: users,
    });
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({
      status: "fail",
      message: "Error fetching users!",
      error: error.message,
    });
  }
}
module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  updateUserRole,
  getAllUsers,
};
