import express from 'express';
import chalk from 'chalk';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
    console.log(chalk.blue('📝 Home route accessed'));
    res.json({
        message: 'Welcome to the Express Server!',
        status: 'success',
        data: {
            name: 'Express Server',
            version: '1.0.0'
        }
    });
});

// About route
router.get('/about', (req, res) => {
    console.log(chalk.blue('📝 About route accessed'));
    res.json({
        message: 'About Us',
        status: 'success',
        data: {
            description: 'This is a simple Express server exercise',
            author: 'Student',
            purpose: 'Learning Express.js routing'
        }
    });
});

// Additional route for demonstration
router.get('/api/info', (req, res) => {
  res.json({
    message: 'API Information',
    status: 'success',
    routes: [
      { path: '/', method: 'GET', description: 'Homepage' },
      { path: '/about', method: 'GET', description: 'About Us page' },
      { path: '/api/info', method: 'GET', description: 'API information' }
    ]
  });
});

export default router;