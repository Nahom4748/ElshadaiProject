// Import the query function from the db.config.js file
const conn = require("../config/db.config");

// A function to get user by email
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
  const rows = await conn.query(query, [email]);
  return rows;
}

// Export the functions for use in the controller
module.exports = {
  getUserByEmail,
};
