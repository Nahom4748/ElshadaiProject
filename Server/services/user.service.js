
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

// Check if user already exists by checking the Emails table
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
  //if email is not found, return null
  if (!email) {
    throw new Error("Email not found");
  }
  const rows = await db.query(query, [email]);
  return rows;
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
// function to get all users
async function getAllUsers() {
  try {
    const query = `SELECT * FROM Users
    INNER JOIN Emails ON Users.user_id = Emails.user_id 
    INNER JOIN Company_Roles ON Users.company_role_id = Company_Roles.company_role_id 
    ORDER BY Users.user_id`;
    const rows = await db.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Database error during user fetch");
  }
}

// Get user by ID function
async function getUserById(userId) {
  console.log("Received user_id:", userId); // Debugging: check the user_id passed to this function
  
    const query = `SELECT * FROM Users 
      INNER JOIN Emails ON Users.user_id = Emails.user_id
      WHERE Users.user_id = ?`;
try {
  const [rows] = await db.query(query, [userId]); // Use db.query here
  return rows; // User not found
} catch (error) {
  console.error("Error fetching user:", error); // Debugging: log any error
  console.error("Error fetching user:", error); // Debugging: log any error Error("Database error during user fetch");
  return null;
}
}

async function updateUser(userId, userData) {
  try {
    if (!userId) {
      throw new Error("userId is required");
    }

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
      updateValues.push(userId); // Add user_id to the end of the values array

      // Execute the query without destructuring
      const result = await db.query(updateQuery, updateValues);

      // Check affectedRows directly from result
      if (result.affectedRows > 0) {
        return { 
          success: true, 
          message: "User updated successfully" };
      } else {
        return {
          success: false,
          message: "Failed to update user",
      }
      }
    }

    // Step 2: Update the password if provided
    if (userData.password) {
      if (userData.password.length < 6) {
        return {
          status: "fail",
          message: "Password must be at least 6 characters long",
        };
      }

      // Hash the password
      const password_hashed = await bcrypt.hash(userData.password, saltRounds);

      // Update the password in the User_Passwords table
      const passwordQuery = `UPDATE User_Passwords SET password_hashed = ? WHERE user_id = ?`;
      const passwordResult = await db.query(passwordQuery, [
        password_hashed,
        userId,
      ]);

      // Check affectedRows directly from passwordResult
      if (passwordResult.affectedRows !== 1) {
        return { status: "fail", message: "Failed to update password" };
      }
    }

    return { status: "success", message: "User updated successfully" };
  } catch (error) {
    console.error("Error updating user:", error);
    return { status: "fail", message: "User update failed" };
  }
}
// create a function to delete a user
async function deleteUser(userId) {
  try {
    const query = `DELETE FROM Users WHERE user_id = ?`;
    const result = await db.query(query, [userId]);
    if (result.affectedRows === 0) {
      throw new Error("User not found");
    }
    return { status: "success", message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { status: "fail", message: "User delete failed" };
  }
}


// Update user role
const updateUserRole = async (userId, company_role_id) => {
  const sql = 'UPDATE Users SET company_role_id = ? WHERE user_id = ?';
  
  try {
    const result = await db.query(sql, [company_role_id, userId]);
    
    if (result.affectedRows === 0) {
      throw new Error('User not found or role not updated');
    }

    return { userId, company_role_id };
  } catch (error) {
    console.error('Error updating user role:', error);
    throw new Error('Error updating user role');
  }
};

module.exports = {
  checkIfUserExists,
  getUserByEmail,
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  updateUserRole,
};
