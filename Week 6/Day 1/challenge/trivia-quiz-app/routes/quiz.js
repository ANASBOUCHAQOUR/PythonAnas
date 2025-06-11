// routes/quiz.js

import express from 'express';
import chalk from 'chalk';
import {
  getCurrentQuestion,
  incrementQuestion,
  incrementScore,
  getScore,
  isQuizOver,
  resetQuiz
} from '../triviaData.js';

const router = express.Router();

// Start the quiz
router.get('/', (req, res) => {
  resetQuiz();
  const question = getCurrentQuestion();
  console.log(chalk.blue('📝 New quiz started'));
  res.json({
    message: "Welcome to the Trivia Quiz!",
    question: question.question
  });
});

// Submit an answer
router.post('/', express.json(), (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    console.log(chalk.red('❌ No answer provided'));
    return res.status(400).json({ error: "Please provide an answer." });
  }

  const current = getCurrentQuestion();
  const isCorrect = userAnswer.trim().toLowerCase() === current.answer.toLowerCase();

  console.log(chalk.yellow('📥 Answer received:'), userAnswer);
  console.log(chalk.blue('📝 Correct answer:'), current.answer);
  console.log(isCorrect ? chalk.green('✅ Correct!') : chalk.red('❌ Incorrect!'));

  if (isCorrect) {
    incrementScore();
  }

  incrementQuestion();

  if (isQuizOver()) {
    const finalScore = getScore();
    console.log(chalk.green('🏁 Quiz completed! Final score:'), chalk.yellow(finalScore));
    return res.json({
      message: isCorrect ? "Correct!" : "Incorrect!",
      finalScore: finalScore,
      info: "Quiz is over! Go to /quiz/score to see your result."
    });
  }

  return res.json({
    message: isCorrect ? "Correct!" : "Incorrect!",
    nextQuestion: getCurrentQuestion().question
  });
});

// Show final score
router.get('/score', (req, res) => {
  const score = getScore();
  console.log(chalk.blue('📊 Score requested:'), chalk.yellow(score));
  res.json({
    message: `Quiz completed!`,
    score: score,
  });
});

export default router;