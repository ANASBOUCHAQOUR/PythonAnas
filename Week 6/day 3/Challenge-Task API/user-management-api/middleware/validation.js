const { body, validationResult } = require('express-validator');

const validateUser = [
    // Username validation
    body('username')
        .trim()
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers, and underscores'),

    // Email validation
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),

    // Password validation
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')
        .matches(/[a-zA-Z]/)
        .withMessage('Password must contain at least one letter'),

    // Role validation (optional)
    body('role')
        .optional()
        .isIn(['user', 'admin'])
        .withMessage('Role must be either "user" or "admin"'),

    // Validation result middleware
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateUpdateUser = [
    // Username validation (optional)
    body('username')
        .optional()
        .trim()
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage('Username can only contain letters, numbers, and underscores'),

    // Email validation (optional)
    body('email')
        .optional()
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),

    // Password validation (optional)
    body('password')
        .optional()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')
        .matches(/[a-zA-Z]/)
        .withMessage('Password must contain at least one letter'),

    // Role validation (optional)
    body('role')
        .optional()
        .isIn(['user', 'admin'])
        .withMessage('Role must be either "user" or "admin"'),

    // Validation result middleware
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateUser,
    validateUpdateUser
};