import express from 'express';
import chalk from 'chalk';

const router = express.Router();

// In-memory array to store to-do items
let todos = [];
let idCounter = 1;

// GET /todos - Get all to-do items
router.get('/', (req, res) => {
  console.log(chalk.blue('📝 GET /todos - Fetching all todos'));
  res.json(todos);
});

// POST /todos - Add a new to-do item
router.post('/', (req, res) => {
  console.log(chalk.green('📝 POST /todos - Creating new todo'));
  const { title } = req.body;
  if (!title) {
    console.log(chalk.red('❌ Title is missing'));
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = { id: idCounter++, title };
  todos.push(newTodo);
  console.log(chalk.green('✅ Todo created:', newTodo));
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update a to-do item
router.put('/:id', (req, res) => {
  console.log(chalk.yellow(`📝 PUT /todos/${req.params.id} - Updating todo`));
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find(t => t.id == id);

  if (!todo) {
    console.log(chalk.red(`❌ Todo ${id} not found`));
    return res.status(404).json({ message: "To-do not found" });
  }

  todo.title = title || todo.title;
  console.log(chalk.green('✅ Todo updated:', todo));
  res.json(todo);
});

// DELETE /todos/:id - Delete a to-do item
router.delete('/:id', (req, res) => {
  console.log(chalk.red(`📝 DELETE /todos/${req.params.id} - Deleting todo`));
  const { id } = req.params;
  const index = todos.findIndex(t => t.id == id);

  if (index === -1) {
    console.log(chalk.red(`❌ Todo ${id} not found`));
    return res.status(404).json({ message: "To-do not found" });
  }

  const deleted = todos.splice(index, 1);
  console.log(chalk.green('✅ Todo deleted:', deleted[0]));
  res.json(deleted[0]);
});

export default router;
