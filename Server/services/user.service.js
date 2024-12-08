const db = require("../config/db.config");
const bcrypt = require("bcrypt");

async function getAllUsers() {
  const query = `SELECT * FROM Users INNER JOIN Emails ON Users.user_id = Emails.user_id`;
  return await db.query(query);
}
async function getUserByEmail(email) {
  const query = `SELECT 
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
    WHERE Emails.email = ?`;
  const rows = await db.query(query, [email]);
  return rows.length > 0 ? rows[0] : null; // Return the user if found, otherwise null
}
async function getUserById(userId) {
  const query = `SELECT * FROM Users 
                 INNER JOIN Emails ON Users.user_id = Emails.user_id 
                 WHERE Users.user_id = ?`;
  const rows = await db.query(query, [userId]);
  return rows.length ? rows[0] : null;
}

async function checkIfUserExists(email) {
  const query = `SELECT * FROM Emails WHERE email = ?`;
  const rows = await db.query(query, [email]);
  return rows.length > 0;
}

async function registerUser(userData) {
  try {
    // Insert into Users table
    const insertUserQuery = `
      INSERT INTO Users (first_name, last_name, phone_number, city, country, company_role_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const userResult = await db.query(insertUserQuery, [
      userData.first_name,
      userData.last_name,
      userData.phone_number,
      userData.city,
      userData.country,
      userData.company_role_id || null, // Use null if no role is provided
    ]);

    const userId = userResult.insertId;

    // Insert into Emails table
    const insertEmailQuery = `
      INSERT INTO Emails (user_id, email)
      VALUES (?, ?)
    `;
    await db.query(insertEmailQuery, [userId, userData.email]);

    // Insert into User_Passwords table
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const insertPasswordQuery = `
      INSERT INTO User_Passwords (user_id, password_hashed)
      VALUES (?, ?)
    `;
    await db.query(insertPasswordQuery, [userId, hashedPassword]);

    return { status: "success", userId };
  } catch (error) {
    console.error("Error registering user:", error);
    return { status: "fail", message: "Error registering user." };
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

async function deleteUser(userId) {
  const query = `DELETE FROM Users WHERE user_id = ?`;
  await db.query(query, [userId]);
  return { status: "success" };
}

module.exports = {
  getAllUsers,
  getUserById,
  checkIfUserExists,
  registerUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
