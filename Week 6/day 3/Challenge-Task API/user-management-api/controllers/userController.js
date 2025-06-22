const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');

const DATA_FILE = path.join(__dirname, '../data/users.json');

// Helper: Read users from file
function readUsers() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users:', err);
        return { users: [] };
    }
}

// Helper: Write users to file
function writeUsers(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const userController = {
    // Register a new user
    async register(req, res) {
        try {
            const { name, lastName, email, username, password } = req.body;

            // Check if username or email already exists
            const existingUser = await userService.findUserByUsernameOrEmail(username, email);
            if (existingUser) {
                const field = existingUser.username === username ? 'username' : 'email';
                return res.status(400).json({
                    success: false,
                    message: `Registration failed. The ${field} already exists.`
                });
            }

            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create user object
            const newUser = {
                id: Date.now().toString(),
                name,
                lastName,
                email,
                username,
                password: hashedPassword,
                createdAt: new Date().toISOString()
            };

            // Save user
            await userService.saveUser(newUser);

            res.status(201).json({
                success: true,
                message: `Registration successful! Welcome, ${name} ${lastName}.`
            });

        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({
                success: false,
                message: 'Registration failed. Please try again.',
                error: error.message
            });
        }
    },

    // Login user
    async login(req, res) {
        try {
            const { username, password } = req.body;

            // Find user by username
            const user = await userService.findUserByUsername(username);
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Login failed. User not registered.'
                });
            }

            // Verify password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: 'Login failed. Invalid credentials.'
                });
            }

            res.status(200).json({
                success: true,
                message: `Login successful! Welcome back, ${user.name} ${user.lastName}.`
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({
                success: false,
                message: 'Login failed. Please try again.',
                error: error.message
            });
        }
    },

    // Get all users
    async getAllUsers(req, res) {
        try {
            const { users } = readUsers();
            // Remove sensitive data
            const safeUsers = users.map(({ password, ...user }) => user);
            res.json(safeUsers);
        } catch (err) {
            console.error('Error getting users:', err);
            res.status(500).json({ error: 'Failed to get users' });
        }
    },

    // Get user by ID
    async getUserById(req, res) {
        try {
            const userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                return res.status(400).json({ error: 'Invalid user ID' });
            }

            const { users } = readUsers();
            const user = users.find(u => u.id === userId);
            
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Remove sensitive data
            const { password, ...safeUser } = user;
            res.json(safeUser);
        } catch (err) {
            console.error('Error getting user:', err);
            res.status(500).json({ error: 'Failed to get user' });
        }
    },

    // Update user by ID
    async updateUser(req, res) {
        try {
            const userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                return res.status(400).json({ error: 'Invalid user ID' });
            }

            const { users } = readUsers();
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { username, email, password, role } = req.body;
            const user = users[userIndex];

            // Check if new username or email already exists
            if (username && username !== user.username && users.some(u => u.username === username)) {
                return res.status(400).json({ error: 'Username already exists' });
            }
            if (email && email !== user.email && users.some(u => u.email === email)) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            // Update user
            const updatedUser = {
                ...user,
                username: username || user.username,
                email: email || user.email,
                password: password ? await bcrypt.hash(password, 10) : user.password,
                role: role || user.role,
                updatedAt: new Date().toISOString()
            };

            users[userIndex] = updatedUser;
            writeUsers({ users });

            // Remove sensitive data
            const { password: _, ...safeUser } = updatedUser;
            res.json(safeUser);
        } catch (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Failed to update user' });
        }
    },

    // Delete user
    async deleteUser(req, res) {
        try {
            const userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                return res.status(400).json({ error: 'Invalid user ID' });
            }

            const { users } = readUsers();
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return res.status(404).json({ error: 'User not found' });
            }

            users.splice(userIndex, 1);
            writeUsers({ users });

            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
};

module.exports = userController;