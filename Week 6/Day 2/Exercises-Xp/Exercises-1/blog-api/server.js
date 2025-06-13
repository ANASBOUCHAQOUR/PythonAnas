const express = require('express');
const cors = require('cors');
require('dotenv').config();

const postRoutes = require('./routes/postRoutes');
const { connectDB } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/posts', postRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Blog API',
        version: '1.0.0',
        endpoints: {
            'GET /api/posts': 'Get all blog posts',
            'GET /api/posts/:id': 'Get a specific blog post',
            'POST /api/posts': 'Create a new blog post',
            'PUT /api/posts/:id': 'Update a blog post',
            'DELETE /api/posts/:id': 'Delete a blog post'
        }
    });
});

// Error handling middleware for 404
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Start server
const startServer = async () => {
    try {
        // Test database connection
        await connectDB();
        console.log('✓ Database connected successfully');
        
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            console.log(`📍 API URL: http://localhost:${PORT}`);
            console.log(`📚 Endpoints: http://localhost:${PORT}/api/posts`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();