const express = require("express");
const {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUserById,
} = require("../controllers/userController.js");

const router = express.Router();

// register
router.post("/register", register);

// login
router.post("/login", login);

// get all users
router.get("/", getAllUsers);

// get user by id
router.get("/:id", getUserById);

// update user by id
router.put("/:id", updateUserById);

module.exports = router;