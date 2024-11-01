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
async function getUserByEmail(email) {
  const query = `
    SELECT 
      Users.user_id, 
      Users.first_name, 
      Users.last_name, 
      Users.phone_number, 
      Users.city, 
      Users.country, 
      Users.active_status, 
      Users.added_date, 
      Emails.email, 
      User_Passwords.password_hashed, 
      Company_Roles.company_role_name
    FROM Users
    INNER JOIN Emails ON Users.user_id = Emails.user_id
    INNER JOIN User_Passwords ON Users.user_id = User_Passwords.user_id
    INNER JOIN Company_Roles ON Users.company_role_id = Company_Roles.company_role_id
    WHERE Emails.email = ?
  `;
  const rows = await db.query(query, [email]);
  return rows;
}
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

    if (!userRows || userRows.affectedRows !== 1) {
      return { status: "fail", message: "Failed to insert user data" };
    }

    const user_id = userRows.insertId;

    // Step 2: Insert into Emails table
    const emailQuery = `INSERT INTO Emails (user_id, email) VALUES (?, ?)`;
    const emailRows = await db.query(emailQuery, [user_id, userData.email]);

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

    if (!passwordRows || passwordRows.affectedRows !== 1) {
      return { status: "fail", message: "Failed to insert password data" };
    }

    return { status: "success", message: "User registered successfully" };
  } catch (error) {
    console.error("Error during user registration:", error); // Detailed error log
    return {
      status: "fail",
      message: error.sqlMessage || "User registration failed",
    };
  }
}

// Get user by ID function
async function getUserById(user_id) {
  try {
    const query = `SELECT * FROM Users WHERE user_id = ?`;
    const rows = await db.query(query, [user_id]);

    if (rows.length > 0) {
      return rows[0]; // Return the first user object
    }
    return null; // User not found
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Database error during user fetch");
  }
}
async function updateUser(user_id, userData) {
  try {
    // Step 1: Dynamically build the query based on the provided fields
    const updateFields = [];
    const updateValues = [];

    // Check each field and add it to the query if it exists in the request
    if (userData.first_name) {
      updateFields.push("first_name = ?");
      updateValues.push(userData.first_name);
    }
    if (userData.last_name) {
      updateFields.push("last_name = ?");
      updateValues.push(userData.last_name);
    }
    if (userData.phone_number) {
      updateFields.push("phone_number = ?");
      updateValues.push(userData.phone_number);
    }
    if (userData.city) {
      updateFields.push("city = ?");
      updateValues.push(userData.city);
    }
    if (userData.country) {
      updateFields.push("country = ?");
      updateValues.push(userData.country);
    }

    // Ensure we only try to update if there's something to update
    if (updateFields.length > 0) {
      const updateQuery = `UPDATE Users SET ${updateFields.join(
        ", "
      )} WHERE user_id = ?`;
      updateValues.push(user_id); // Add user_id to the end of the values array

      // Execute the query
      const result = await db.query(updateQuery, updateValues);

      // Check if result is an array and access the correct property
      const affectedRows = result.affectedRows || result[0]?.affectedRows;
      if (affectedRows !== 1) {
        return { status: "fail", message: "Failed to update user data" };
      }
    }

    // Step 2: Update the password if provided
    if (userData.password) {
      const password_hashed = await bcrypt.hash(userData.password, saltRounds);
      const passwordQuery = `UPDATE User_Passwords SET password_hashed = ? WHERE user_id = ?`;
      const passwordResult = await db.query(passwordQuery, [
        password_hashed,
        user_id,
      ]);

      // Check if passwordResult is an array and access the correct property
      const passwordAffectedRows =
        passwordResult.affectedRows || passwordResult[0]?.affectedRows;
      if (passwordAffectedRows !== 1) {
        return { status: "fail", message: "Failed to update password" };
      }
    }

    return { status: "success", message: "User updated successfully" };
  } catch (error) {
    console.error("Error updating user:", error);
    return { status: "fail", message: "User update failed" };
  }
}

// Update user role
const updateUserRole = async (userId, company_role_id) => {
  const sql = "UPDATE Users SET company_role_id = ? WHERE user_id = ?";

  try {
    const result = await db.query(sql, [company_role_id, userId]);

    if (result.affectedRows === 0) {
      throw new Error("User not found or role not updated");
    }

    return { userId, company_role_id };
  } catch (error) {
    console.error("Error updating user role:", error);
    throw new Error("Error updating user role");
  }
};

module.exports = {
  checkIfUserExists,
  getUserById,
  registerUser,
  updateUser,
  updateUserRole,
  getUserByEmail,
};
