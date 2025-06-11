import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import quizRouter from './routes/quiz.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
app.use('/quiz', quizRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:'), err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(chalk.green('🚀 Server running at:'), chalk.blue(`http://localhost:${PORT}`));
  console.log(chalk.yellow('Available routes:'));
  console.log(chalk.cyan('  GET  /quiz') + ' - Start a new quiz');
  console.log(chalk.cyan('  POST /quiz') + ' - Submit an answer');
  console.log(chalk.cyan('  GET  /quiz/score') + ' - Get final score');
});
