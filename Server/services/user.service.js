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
// function to get all users

// Get user by ID function
async function getUserById(userId) {
  console.log("Received user_id:", userId); // Debugging: check the user_id passed to this function

  const query = `SELECT * FROM Users 
      INNER JOIN Emails ON Users.user_id = Emails.user_id
      WHERE Users.user_id = ?`;
  try {
    const rows = await db.query(query, [userId]); // Use db.query here
    return rows; // User not found
  } catch (error) {
    console.error("Error fetching user:", error); // Debugging: log any error
    console.error("Error fetching user:", error); // Debugging: log any error Error("Database error during user fetch");
    return null;
  }
}

async function updateUser(userId, userData) {
  console.log(userData);
  try {
    if (!userId) {
      throw new Error("userId is required");
    }

    const updateFields = [];
    const updateValues = [];

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
    if (userData.company_role_id) {
      updateFields.push("company_role_id = ?");
      updateValues.push(userData.company_role_id);
    }

    if (updateFields.length === 0) {
      return { status: "fail", message: "No fields provided for update" };
    }

    // Build the update query and execute it
    const updateQuery = `UPDATE Users SET ${updateFields.join(
      ", "
    )} WHERE user_id = ?`;
    updateValues.push(userId);

    const result = await db.query(updateQuery, updateValues);
    console.log("Database result:", result);

    // Check if any row was updated
    if (result.affectedRows > 0) {
      if (result.changedRows === 0) {
        return {
          status: "fail",
          message: "No new data provided for update. Fields remain unchanged.",
        };
      } else {
        return { status: "success", message: "User updated successfully" };
      }
    } else {
      return { status: "fail", message: "User not found or nothing to update" };
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return { status: "fail", message: "An error occurred during user update" };
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

const getAllUsers = async () => {
  try {
    const sql = `
      SELECT Users.*, emails.email
      FROM Users
      LEFT JOIN emails ON Users.user_id = emails.user_id
    `;

    // Using async/await here
    const result = await db.query(sql);
    console.log(result);
    // This should work with the promise-based query function
    return result;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};

module.exports = {
  checkIfUserExists,
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
