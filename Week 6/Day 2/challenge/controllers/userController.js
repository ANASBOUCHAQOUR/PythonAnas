const bcrypt = require("bcrypt");
const db = require("../modules/db.js");


async function register(req, res) {
    const { email, username, first_name, last_name, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username and password required" });
    }
    try {
        const hash = await bcrypt.hash(password, 10);
        // Start transaction
        await db.transaction(async (trx) => {
            const [user] = await trx("users")
                .insert({ email, username, first_name, last_name })
                .returning("*");
            await trx("hashpwd").insert({ username, password: hash });
            res.status(201).json({ message: "User registered", user });
        });
    } catch (err) {
        res.status(400).json({
            error: "User already exists or error creating user",
        });
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username and password required" });
    }
    try {
        const user = await db("users").where({ username }).first();
        const hashRow = await db("hashpwd").where({ username }).first();
        if (!user || !hashRow) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
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

async function getAllUsers(req, res) {
    try {
        const users = await db("users").select("*");
        res.json(users);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error fetching users" });
    }
}

async function getUserById(req, res) {
    try {
        const user = await db("users").where({ id: req.params.id }).first();
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user" });
    }
}

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

module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUserById,
};