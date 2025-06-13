const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postController');

// GET /posts - Get all blog posts
router.get('/', getAllPosts);

// GET /posts/:id - Get a specific blog post
router.get('/:id', getPostById);

// POST /posts - Create a new blog post
router.post('/', createPost);

// PUT /posts/:id - Update an existing blog post
router.put('/:id', updatePost);

// DELETE /posts/:id - Delete a blog post
router.delete('/:id', deletePost);

module.exports = router;