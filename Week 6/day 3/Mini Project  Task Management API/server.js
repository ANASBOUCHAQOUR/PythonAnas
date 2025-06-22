const express = require('express');
const tasksRouter = require('./routes/tasksRouter');

const app = express();
app.use(express.json()); // Middleware for JSON body

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
