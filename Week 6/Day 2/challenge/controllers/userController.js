// Import required modules
const bcrypt = require("bcrypt");  // For password hashing
const db = require("../modules/db.js");  // Database connection

/**
 * Register a new user
 * POST /api/users/register
 * Required fields: username, password
 * Optional fields: email, first_name, last_name
 */
async function register(req, res) {
    const { email, username, first_name, last_name, password } = req.body;
    // Validate required fields
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username and password required" });
    }
    try {
        // Hash password with bcrypt (10 rounds)
        const hash = await bcrypt.hash(password, 10);
        // Use transaction to ensure both user and password are created
        await db.transaction(async (trx) => {
            // Create user record
            const [user] = await trx("users")
                .insert({ email, username, first_name, last_name })
                .returning("*");
            // Store hashed password
            await trx("hashpwd").insert({ username, password: hash });
            res.status(201).json({ message: "User registered", user });
        });
    } catch (err) {
        // Handle duplicate username/email or other errors
        res.status(400).json({
            error: "User already exists or error creating user",
        });
    }
}

/**
 * Login user
 * POST /api/users/login
 * Required fields: username, password
 */
async function login(req, res) {
    const { username, password } = req.body;
    // Validate required fields
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username and password required" });
    }
    try {
        // Get user and password records
        const user = await db("users").where({ username }).first();
        const hashRow = await db("hashpwd").where({ username }).first();
        
        // Check if user exists
        if (!user || !hashRow) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        // Verify password
        const match = await bcrypt.compare(password, hashRow.password);
        if (match) {
            res.json({
                message: "Login successful",
                user: { id: user.id, username: user.username },
            });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: "Login failed" });
    }
}

/**
 * Get all users
 * GET /api/users
 * Returns list of all users
 */
async function getAllUsers(req, res) {
    try {
        const users = await db("users").select("*");
        res.json(users);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error fetching users" });
    }
}

/**
 * Get user by ID
 * GET /api/users/:id
 * Returns user details if found
 */
async function getUserById(req, res) {
    try {
        const user = await db("users").where({ id: req.params.id }).first();
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user" });
    }
}

/**
 * Update user information
 * PUT /api/users/:id
 * Can update: email, username, first_name, last_name
 */
async function updateUserById(req, res) {
    const { email, username, first_name, last_name } = req.body;
    try {
        const updated = await db("users")
            .where({ id: req.params.id })
            .update({ email, username, first_name, last_name });
        if (!updated) return res.status(404).json({ error: "User not found" });
        res.json({ message: "User updated" });
    } catch (err) {
        res.status(500).json({ error: "Error updating user" });
    }
}

// Export controller functions
module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUserById,
};