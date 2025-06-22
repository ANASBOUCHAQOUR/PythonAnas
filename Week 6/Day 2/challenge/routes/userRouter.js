// Import required modules
const express = require("express");
// Import controller functions for user operations
const {
    register,      // Handle user registration
    login,         // Handle user login
    getAllUsers,   // Get list of all users
    getUserById,   // Get a specific user by ID
    updateUserById,// Update a user's information
} = require("../controllers/userController.js");

// Create Express router
const router = express.Router();

// Authentication Routes
// POST /api/users/register - Register a new user
router.post("/register", register);

// POST /api/users/login - Login existing user
router.post("/login", login);

// User Management Routes
// GET /api/users - Get all users
router.get("/", getAllUsers);

// GET /api/users/:id - Get user by ID
router.get("/:id", getUserById);

// PUT /api/users/:id - Update user information
router.put("/:id", updateUserById);

// Export router for use in main application
module.exports = router;