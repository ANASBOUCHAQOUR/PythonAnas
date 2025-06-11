import express from 'express';
import chalk from 'chalk';
import todoRouter from './routes/todos.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/todos', todoRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:'), err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(chalk.green('🚀 Server is running!'));
  console.log(chalk.blue(`📍 Server URL: http://localhost:${PORT}`));
  console.log(chalk.yellow('Available routes:'));
  console.log(chalk.cyan('  • GET    /todos - Get all todos'));
  console.log(chalk.cyan('  • POST   /todos - Create a todo'));
  console.log(chalk.cyan('  • PUT    /todos/:id - Update a todo'));
  console.log(chalk.cyan('  • DELETE /todos/:id - Delete a todo'));
});

export default app;