const conn = require("../config/db.config");
async function getAllPayments() {
  try {
    const query = "SELECT * FROM payments";
    const rows = await conn.query(query);
    return rows; // Return the rows
  } catch (error) {
    throw error;
  }
}

async function updatePayment(payment) {
  const { user_id, quarter, status } = payment;
  try {
    // Check if the payment record exists
    const checkQuery = `
        SELECT * FROM payments WHERE user_id = ? AND quarter = ?;
      `;
    const [existingPayment] = await conn.query(checkQuery, [user_id, quarter]);

    if (existingPayment) {
      // If the record exists, delete it
      const deleteQuery = `
          DELETE FROM payments WHERE user_id = ? AND quarter = ?;
        `;
      await conn.query(deleteQuery, [user_id, quarter]);
      return {
        success: true,
        message: "Payment record deleted successfully!",
      };
    } else {
      // If the record does not exist, insert the new payment
      const insertQuery = `
          INSERT INTO payments (user_id, quarter, status)
          VALUES (?, ?, ?);
        `;
      await conn.query(insertQuery, [user_id, quarter, status]);
      return {
        success: true,
        message: "Payment status inserted successfully!",
      };
    }
  } catch (error) {
    console.error("Error updating payment status:", error);
    return {
      success: false,
      message: "Error updating payment status.",
      error: error.message,
    };
  }
}
async function getPaymentByUserId(userId) {
  try {
    const query = `SELECT * FROM payments WHERE user_id = ?;`;
    const rows = await conn.query(query, [userId]); // Ensure proper destructuring for rows.
    return rows; // Return the rows as an array of payment objects.
  } catch (error) {
    console.error(`Error fetching payments for user_id ${userId}:`, error);
    throw new Error("Failed to fetch payments for the user.");
  }
}

module.exports = { getAllPayments, updatePayment, getPaymentByUserId };
