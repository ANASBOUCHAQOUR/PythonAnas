import express from 'express';
import chalk from 'chalk';
import indexRouter from './routes/index.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Mount the router
app.use('/', indexRouter);

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

// Start the server
app.listen(PORT, () => {
  console.log(chalk.green('🚀 Server is running!'));
  console.log(chalk.blue(`📍 Server URL: http://localhost:${PORT}`));
  console.log(chalk.yellow('Available routes:'));
  console.log(chalk.cyan('  • http://localhost:3000/ (Homepage)'));
  console.log(chalk.cyan('  • http://localhost:3000/about (About Us)'));
});

export default app;