const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// POST request for user registration
router.post("/api/user/register", userController.registerUser);

router.put("/api/user/:userId", userController.updateUser);
// GET request for all users
//router.route('/api/user/:id').get(userController.getUserById).put(userController.updateUser).delete(userController.deleteUser);
// GET request for a single user
router.get('/api/user/:id',  userController.getUserById);
// delete user
router.delete('/api/user/:userId', userController.deleteUser);

router.put("/api/user/:id", userController.updateUser);
router.get("/api/users", userController.getAllUsers);



module.exports = router;
