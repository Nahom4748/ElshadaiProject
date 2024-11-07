const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// POST request for user registration
router.post("/api/user/register", userController.registerUser);

router.put("/api/user/:id", userController.updateUser);
router.get("/api/users", userController.getAllUsers);

// Route for updating a user's company role
router.put(
  "/api/update-role/:userId",
  authMiddleware.verifyToken,
  authMiddleware.isAdmin,
  userController.updateUserRole
);

module.exports = router;
