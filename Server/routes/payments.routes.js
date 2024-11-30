const express = require("express");
// Call the router method from express to create the router
const router = express.Router();

const paymentController = require("../controllers/payment.controller");

router.get("/api/payments", paymentController.getAllPayments);
router.post("/api/payments", paymentController.updatePayment);
router.get("/api/payments/:userId", paymentController.getPaymentByUserId);
module.exports = router;
