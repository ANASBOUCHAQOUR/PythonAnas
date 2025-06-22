const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const tasksController = require('../controllers/taskscontroller');
const { validateTask } = require('../validation/tasksSchema');

// GET all tasks
router.get('/', tasksController.getAllTasks);

// GET task by ID
router.get('/:id', tasksController.getTaskById);

// POST create new task
router.post('/', validateTask, tasksController.createTask);

// PUT update task
router.put('/:id', validateTask, tasksController.updateTask);

// DELETE task
router.delete('/:id', tasksController.deleteTask);

module.exports = router;