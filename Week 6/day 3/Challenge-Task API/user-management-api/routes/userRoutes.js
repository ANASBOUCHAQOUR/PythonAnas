const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser, validateUpdateUser } = require('../middleware/validation');

// Authentication routes
router.post('/register', validateUser, userController.register);
router.post('/login', validateUser, userController.login);

// User management routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', validateUpdateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;