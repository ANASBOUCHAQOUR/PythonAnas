const { body, validationResult } = require("express-validator");

const taskValidationRules = [
    body("title")
        .optional()
        .isString()
        .withMessage("Title must be a string")
        .notEmpty()
        .withMessage("Title cannot be empty"),
    body("completed")
        .optional()
        .isBoolean()
        .withMessage("Completed must be a boolean"),
    body("dueDate")
        .optional({ nullable: true })
        .isISO8601()
        .withMessage("Due date must be a valid date")
        .toDate(),
];

// Validation middleware
const validateTask = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    taskValidationRules,
    validateTask: [...taskValidationRules, validateTask]
};