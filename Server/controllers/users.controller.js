
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
async function registerUser(req, res) {
  const userData = req.body;

  // Validate input fields
  const requiredFields = [
    "email",
    "password",
    "first_name",
    "last_name",
    "phone_number",
    "city",
    "country"  ];

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

    // Register the user
    const result = await userService.registerUser(userData);

    if (result.status === "fail") {
      return res.status(400).json({
        status: "fail",
        message: result.message,
      });
    }

    // If registration is successful
    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred during registration",
    });
  }
}

// Update User Controller
async function updateUser(req, res) {
  const user_id = req.params.id;
  const userData = req.body;

  try {
    // Step 1: Check if the user exists
    const userExists = await userService.getUserById(user_id);
    console.log('Fetched User:', userExists);  // Debugging
    if (!userExists) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    // Step 2: Update the user data
    const result = await userService.updateUser(user_id, userData);

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
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred while updating the user",
    });
  }
}



// Controller method to handle the update
const updateUserRole = async (req, res) => {
  const userId = req.params.userId;
  const { company_role_id } = req.body;

  try {
    const updatedUser = await userService.updateUserRole(userId, company_role_id);
    return res.status(200).json({
      status: 'success',
      message: 'User role updated successfully!',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error in controller:', error);
    return res.status(500).json({
      status: 'fail',
      message: 'Error updating user role!',
      error: error.message,
    });
  }
};



module.exports = {
  registerUser,
  updateUser,
  updateUserRole,
};
