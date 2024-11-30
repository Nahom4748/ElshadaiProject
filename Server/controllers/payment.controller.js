const paynmentService = require("../services/payment.service");

async function getAllPayments(req, res, next) {
  try {
    const payments = await paynmentService.getAllPayments(); // No destructuring needed
    res.status(200).json(payments); // Send the array as response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error message in case of failure
  }
}

async function updatePayment(req, res, next) {
  try {
    const payment = await paynmentService.updatePayment(req.body);
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getPaymentByUserId(req, res) {
  const { userId } = req.params;

  try {
    const payments = await paynmentService.getPaymentByUserId(userId);

    if (payments.length === 0) {
      return res
        .status(404)
        .json({ message: "No payments found for this user." });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error(`Error fetching payments for user ID ${userId}:`, error);
    res
      .status(500)
      .json({ message: "Failed to fetch payments.", error: error.message });
  }
}
module.exports = {
  getAllPayments,
  updatePayment,
  getPaymentByUserId,
};
