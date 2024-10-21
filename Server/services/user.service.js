

// const bcrypt = require("bcrypt");
// const db = require("../config/db.config"); // Ensure this path is correct

// const saltRounds = 10;

// async function checkIfUserExists(email) {
//   try {
//     console.log("Checking for email:", email);
//     const query = `SELECT * FROM Emails WHERE email = ?`;
//     const rows = await db.query(query, [email]); // Use db.query here

//     console.log("Query result:", rows);

//     return rows.length > 0; // Return true if user exists
//   } catch (error) {
//     console.error("Error checking if user exists:", error);
//     throw new Error("Database error during user existence check");
//   }
// }

// // Register user function that handles multiple inserts
// async function registerUser(userData) {
//   try {
//    const Role = userData.company_role_id;
//    console.log(Role);

// if (Role === null) {
// Role = 3;
// }
//     // Step 1: Insert into `Users` table
//     const userQuery = `INSERT INTO Users (first_name, last_name, phone_number, city, country, company_role_id) VALUES (?, ?, ?, ?, ?, ?)`;
//     const userRows = await db.query(userQuery, [
//       userData.first_name,
//       userData.last_name,
//       userData.phone_number,
//       userData.city,
//       userData.country,
//       Role,
//     ]);

//     // Check if rows are returned
//     if (!userRows || userRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert user data" };
//     }

//     const user_id = userRows.insertId;

//     // Step 2: Insert into Emails table
//     const emailQuery = `INSERT INTO Emails (user_id, email) VALUES (?, ?)`;
//     const emailRows = await db.query(emailQuery, [user_id, userData.email]);

//     // Check if rows are returned
//     if (!emailRows || emailRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert email data" };
//     }

//     // Step 3: Hash password and insert into User_Passwords table
//     const password_hashed = await bcrypt.hash(userData.password, saltRounds);
//     const passwordQuery = `INSERT INTO User_Passwords (user_id, password_hashed) VALUES (?, ?)`;
//     const passwordRows = await db.query(passwordQuery, [
//       user_id,
//       password_hashed,
//     ]);

//     // Check if rows are returned
//     if (!passwordRows || passwordRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert password data" };
//     }

//     return { status: "success", message: "User registered successfully" };
//   } catch (error) {
//     console.error("Error during user registration:", error);
//     return { status: "fail", message: "User registration failed" };
//   }
// }

// module.exports = {
//   checkIfUserExists,
//   registerUser,
// };



// // services/user.service.js
// const bcrypt = require("bcrypt");
// const db = require("../config/db.config");

// const saltRounds = 10;

// // Check if user already exists by checking the Emails table
// async function checkIfUserExists(email) {
//   try {
//     console.log("Checking for email:", email);
//     const query = `SELECT * FROM Emails WHERE email = ?`;
//     const [rows] = await db.query(query, [email]); // Destructure the result to get rows

//     console.log("Query result:", rows);

//     return rows.length > 0; // Return true if user exists
//   } catch (error) {
//     console.error("Error checking if user exists:", error);
//     throw new Error("Database error during user existence check");
//   }
// }

// // Register user function that handles multiple inserts
// async function registerUser(userData) {
//   try {
//     let Role = userData.company_role_id; // Capture company role from user data

//     // Set a default role if company_role_id is undefined or null
//     if (Role === undefined || Role === null) {
//       Role = 3; // Default role
//     }

//     // Step 1: Insert into `Users` table
//     const userQuery = `INSERT INTO Users (first_name, last_name, phone_number, city, country, company_role_id) VALUES (?, ?, ?, ?, ?, ?)`;
//     const userRows = await db.query(userQuery, [
//       userData.first_name,
//       userData.last_name,
//       userData.phone_number,
//       userData.city,
//       userData.country,
//       Role,
//     ]);

//     // Check if rows are returned
//     if (!userRows || userRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert user data" };
//     }

//     const user_id = userRows.insertId;

//     // Step 2: Insert into Emails table
//     const emailQuery = `INSERT INTO Emails (user_id, email) VALUES (?, ?)`;
//     const emailRows = await db.query(emailQuery, [user_id, userData.email]);

//     // Check if rows are returned
//     if (!emailRows || emailRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert email data" };
//     }

//     // Step 3: Hash password and insert into User_Passwords table
//     const password_hashed = await bcrypt.hash(userData.password, saltRounds);
//     const passwordQuery = `INSERT INTO User_Passwords (user_id, password_hashed) VALUES (?, ?)`;
//     const passwordRows = await db.query(passwordQuery, [user_id, password_hashed]);

//     // Check if rows are returned
//     if (!passwordRows || passwordRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert password data" };
//     }

//     return { status: "success", message: "User registered successfully" };
//   } catch (error) {
//     console.error("Error during user registration:", error);
//     return { status: "fail", message: "User registration failed" };
//   }
// }

// module.exports = {
//   checkIfUserExists,
//   registerUser,
// };


// // services/user.service.js
// const bcrypt = require("bcrypt");
// const db = require("../config/db.config");

// const saltRounds = 10;

// // Check if user already exists by checking the Emails table
// async function checkIfUserExists(email) {
//   try {
//     console.log("Checking for email:", email);
//     const query = `SELECT * FROM Emails WHERE email = ?`;
//     const [rows] = await db.query(query, [email]); // Correctly destructure the result

//     console.log("Query result:", rows); // Log the rows for debugging

//     // If rows is not defined, return false
//     if (!rows) {
//       return false;
//     }

//     return rows.length > 0; // Return true if user exists
//   } catch (error) {
//     console.error("Error checking if user exists:", error);
//     throw new Error("Database error during user existence check");
//   }
// }

// // Register user function that handles multiple inserts
// async function registerUser(userData) {
//   try {
//     let Role = userData.company_role_id; // Capture company role from user data

//     // Set a default role if company_role_id is undefined or null
//     if (Role === undefined || Role === null) {
//       Role = 3; // Default role
//     }

//     // Step 1: Insert into `Users` table
//     const userQuery = `INSERT INTO Users (first_name, last_name, phone_number, city, country, company_role_id) VALUES (?, ?, ?, ?, ?, ?)`;
//     const userRows = await db.query(userQuery, [
//       userData.first_name,
//       userData.last_name,
//       userData.phone_number,
//       userData.city,
//       userData.country,
//       Role,
//     ]);

//     // Check if rows are returned
//     if (!userRows || userRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert user data" };
//     }

//     const user_id = userRows.insertId;

//     // Step 2: Insert into Emails table
//     const emailQuery = `INSERT INTO Emails (user_id, email) VALUES (?, ?)`;
//     const emailRows = await db.query(emailQuery, [user_id, userData.email]);

//     // Check if rows are returned
//     if (!emailRows || emailRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert email data" };
//     }

//     // Step 3: Hash password and insert into User_Passwords table
//     const password_hashed = await bcrypt.hash(userData.password, saltRounds);
//     const passwordQuery = `INSERT INTO User_Passwords (user_id, password_hashed) VALUES (?, ?)`;
//     const passwordRows = await db.query(passwordQuery, [user_id, password_hashed]);

//     // Check if rows are returned
//     if (!passwordRows || passwordRows.affectedRows !== 1) {
//       return { status: "fail", message: "Failed to insert password data" };
//     }

//     return { status: "success", message: "User registered successfully" };
//   } catch (error) {
//     console.error("Error during user registration:", error);
//     return { status: "fail", message: "User registration failed" };
//   }
// }

// module.exports = {
//   checkIfUserExists,
//   registerUser,
// };




const bcrypt = require("bcrypt");
const db = require("../config/db.config");

const saltRounds = 10;

// Check if user already exists by checking the Emails table
async function checkIfUserExists(email) {
  try {
    console.log("Checking for email:", email);
    const query = `SELECT * FROM Emails WHERE email = ?`;
    const rows = await db.query(query, [email]); // Use db.query here

    console.log("Query result:", rows);

    return rows.length > 0; // Return true if user exists
  } catch (error) {
    console.error("Error checking if user exists:", error);
    throw new Error("Database error during user existence check");
  }
}

// Register user function that handles multiple inserts
async function registerUser(userData) {
  try {
    // Step 1: Insert into `Users` table
    const userQuery = `INSERT INTO Users (first_name, last_name, phone_number, city, country, company_role_id) VALUES (?, ?, ?, ?, ?, ?)`;
    const userRows = await db.query(userQuery, [
      userData.first_name,
      userData.last_name,
      userData.phone_number,
      userData.city,
      userData.country,
      userData.company_role_id || 3, // Default to 3 if company_role_id is not provided
    ]);

    // Check if rows are returned
    if (!userRows || userRows.affectedRows !== 1) {
      return { status: "fail", message: "Failed to insert user data" };
    }

    const user_id = userRows.insertId;

    // Step 2: Insert into Emails table only if the user doesn't already exist
    const emailQuery = `INSERT INTO Emails (user_id, email) VALUES (?, ?)`;
    const emailRows = await db.query(emailQuery, [user_id, userData.email]);

    // Check if rows are returned
    if (!emailRows || emailRows.affectedRows !== 1) {
      return { status: "fail", message: "Failed to insert email data" };
    }

    // Step 3: Hash password and insert into User_Passwords table
    const password_hashed = await bcrypt.hash(userData.password, saltRounds);
    const passwordQuery = `INSERT INTO User_Passwords (user_id, password_hashed) VALUES (?, ?)`;
    const passwordRows = await db.query(passwordQuery, [
      user_id,
      password_hashed,
    ]);

    // Check if rows are returned
    if (!passwordRows || passwordRows.affectedRows !== 1) {
      return { status: "fail", message: "Failed to insert password data" };
    }

    return { status: "success", message: "User registered successfully" };
  } catch (error) {
    console.error("Error during user registration:", error);
    return {
      status: "fail",
      message: error.sqlMessage || "User registration failed",
    }; // Provide detailed error message
  }
}

module.exports = {
  checkIfUserExists,
  registerUser,
};
