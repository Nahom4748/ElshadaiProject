
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

module.exports = {
  registerUser,

}
