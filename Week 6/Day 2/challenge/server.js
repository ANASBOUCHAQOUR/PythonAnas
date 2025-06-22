// Import required modules
const express = require("express");  // Web framework
const userRoutes = require("./routes/userRouter.js");  // User routes
const db = require("./config/knexfile.js");  // Database configuration

// Create Express application
const app = express();

// Middleware
app.use(express.json());  // Parse JSON request bodies

// API Routes
// Mount user routes at /users endpoint
// Available routes:
// POST   /users/register - Register new user
// POST   /users/login    - User login
// GET    /users          - Get all users
// GET    /users/:id      - Get user by ID
// PUT    /users/:id      - Update user
app.use("/users", userRoutes);

// Server Configuration
const PORT = 5000;  // Server port number

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});