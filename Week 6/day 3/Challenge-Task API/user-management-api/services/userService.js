const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, '../data/users.json');

const userService = {
    // Initialize users file if it doesn't exist
    async initializeUsersFile() {
        try {
            await fs.access(USERS_FILE);
        } catch (error) {
            // File doesn't exist, create it with empty array
            const dataDir = path.dirname(USERS_FILE);
            await fs.mkdir(dataDir, { recursive: true });
            await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2));
        }
    },

    // Read users from file
    async readUsers() {
        try {
            await this.initializeUsersFile();
            const data = await fs.readFile(USERS_FILE, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading users file:', error);
            throw new Error('Failed to read users data');
        }
    },

    // Write users to file
    async writeUsers(users) {
        try {
            await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        } catch (error) {
            console.error('Error writing users file:', error);
            throw new Error('Failed to save users data');
        }
    },

    // Get all users
    async getAllUsers() {
        return await this.readUsers();
    },

    // Find user by username
    async findUserByUsername(username) {
        const users = await this.readUsers();
        return users.find(user => user.username === username);
    },

    // Find user by username or email
    async findUserByUsernameOrEmail(username, email) {
        const users = await this.readUsers();
        return users.find(user => user.username === username || user.email === email);
    },

    // Find user by ID
    async findUserById(id) {
        const users = await this.readUsers();
        return users.find(user => user.id === id);
    },

    // Save new user
    async saveUser(newUser) {
        const users = await this.readUsers();
        users.push(newUser);
        await this.writeUsers(users);
        return newUser;
    },

    // Update user
    async updateUser(id, updates) {
        const users = await this.readUsers();
        const userIndex = users.findIndex(user => user.id === id);
        
        if (userIndex === -1) {
            return null;
        }

        // Update user data
        users[userIndex] = { ...users[userIndex], ...updates, updatedAt: new Date().toISOString() };
        await this.writeUsers(users);
        return users[userIndex];
    }
};

module.exports = userService;