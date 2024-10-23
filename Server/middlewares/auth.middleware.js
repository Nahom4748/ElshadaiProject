// // Import the dotenv package
// require("dotenv").config();
// // Import the jsonwebtoken package
// const jwt = require("jsonwebtoken");
// // A function to verify the token received from the frontend
// // Import the employee service
// const employeeService = require("../services/user.service");

// // A function to verify the token received from the frontend
// const verifyToken = async (req, res, next) => {
//   let token = req.headers["x-access-token"];
//   if (!token) {
//     return res.status(403).send({
//       status: "fail",
//       message: "No token provided!",
//     });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({
//         status: "fail",
//         message: "Unauthorized!",
//       });
//     }
//     // console.log("Here is the decoded token");
//     // console.log(decoded);
//     req.employee_email = decoded.employee_email;
//     next();
//   });
// };

// // A function to check if the user is an admin
// const isAdmin = async (req, res, next) => {
//   // let token = req.headers["x-access-token"];
//   console.log(req.employee_email);
//   const employee_email = req.employee_email;
//   const employee = await employeeService.getEmployeeByEmail(employee_email);
//   if (employee[0].company_role_id === 3) {
//     next();
//   } else {
//     return res.status(403).send({
//       status: "fail",
//       error: "Not an Admin!",
//     });
//   }
// };

// const authMiddleware = {
//   verifyToken,
//   isAdmin,
// };

// module.exports = authMiddleware;



// Import the dotenv package
require("dotenv").config();
// Import the jsonwebtoken package
const jwt = require("jsonwebtoken");
// A function to verify the token received from the frontend
// Import the employee service
const userService = require("../services/user.service");

// A function to verify the token received from the frontend
const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      status: "fail",
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "fail",
        message: "Unauthorized!",
      });
    }
    
    req.user_email = decoded.user_email; // Update to use user_email
    next();
  });
};

// A function to check if the user has a specific role
const checkRole = (roleIds) => {
  return async (req, res, next) => {
    const user_email = req.user_email;
    const user = await userService.getUserByEmail(user_email); // Ensure this function fetches based on email

    if (!user || !user[0]) {
      return res.status(404).send({
        status: "fail",
        message: "User not found!",
      });
    }

    const userRole = user[0].company_role_id; // Assuming the fetched user has a company_role_id
    if (roleIds.includes(userRole)) {
      next();
    } else {
      return res.status(403).send({
        status: "fail",
        message: "Access denied. Not authorized!",
      });
    }
  };
};

// Create role checking middleware for specific roles
const isAdmin = checkRole([1]); // Admin role id is 1
const isManager = checkRole([2]); // Manager role id is 2
const isStudent = checkRole([3]); // Student role id is 3
const isPartner = checkRole([4]); // Partner role id is 4

const authMiddleware = {
  verifyToken,
  isAdmin,
  isManager,
  isStudent,
  isPartner,
};

module.exports = authMiddleware;
