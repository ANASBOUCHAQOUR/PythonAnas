const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

// Correct path to tasks.json in data directory
const DATA_FILE = path.join(__dirname, '../data/tasks.json');

// Helper: Read tasks from file
function readTasks() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.tasks || []; // Return tasks array from the JSON structure
  } catch (err) {
    console.error('Error reading tasks:', err);
    return { tasks: [] }; // Return proper structure
  }
}

// Helper: Write tasks to file
function writeTasks(tasks) {
  const data = { tasks }; // Maintain the proper JSON structure
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET /tasks - list all tasks
async function getAllTasks(req, res) {
  try {
    const { tasks } = readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' });
  }
}

// GET /tasks/:id - get task by ID
async function getTaskById(req, res) {
  try {
    const taskId = parseInt(req.params.id);
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const { tasks } = readTasks();
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read task' });
  }
}

// POST /tasks - create a new task
async function createTask(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, completed = false, dueDate = null } = req.body;
    const { tasks } = readTasks();
    
    // Generate new ID (handle potential duplicate IDs)
    const maxId = Math.max(...tasks.map(t => t.id), 0);
    const newTask = {
      id: maxId + 1,
      title,
      completed,
      dueDate
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ error: 'Failed to create task' });
  }
}

// PUT /tasks/:id - update a task
async function updateTask(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const taskId = parseInt(req.params.id);
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const { tasks } = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Don't allow updating the ID
    const { id, ...updateData } = req.body;
    const updatedTask = {
      ...tasks[taskIndex],
      ...updateData,
      id: taskId // Ensure ID stays the same
    };

    tasks[taskIndex] = updatedTask;
    writeTasks(tasks);
    res.json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ error: 'Failed to update task' });
  }
}

// DELETE /tasks/:id - delete a task
async function deleteTask(req, res) {
  try {
    const taskId = parseInt(req.params.id);
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const { tasks } = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
