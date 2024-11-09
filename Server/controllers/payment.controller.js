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
module.exports = {
  getAllPayments,
  updatePayment,
};
