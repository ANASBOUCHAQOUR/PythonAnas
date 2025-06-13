const Post = require('../models/Post');

// Validation helper
const validatePostData = (title, content) => {
  const errors = [];
  
  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!content || content.trim().length === 0) {
    errors.push('Content is required');
  }
  
  if (title && title.trim().length > 255) {
    errors.push('Title must be less than 255 characters');
  }
  
  return errors;
};

// GET /posts - Get all blog posts
const getAllPosts = async (req, res, next) => {
  try {
    const { search } = req.query;
    let posts;
    
    if (search) {
      posts = await Post.search(search);
    } else {
      posts = await Post.findAll();
    }
    
    const totalPosts = await Post.count();
    
    res.json({
      success: true,
      message: `Retrieved ${posts.length} blog posts`,
      data: posts,
      meta: {
        total: totalPosts,
        count: posts.length,
        ...(search && { searchTerm: search })
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /posts/:id - Get a specific blog post
const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Validate ID
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid post ID'
      });
    }
    
    const post = await Post.findById(id);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with ID ${id} not found`
      });
    }
    
    res.json({
      success: true,
      message: 'Post retrieved successfully',
      data: post
    });
  } catch (error) {
    next(error);
  }
};

// POST /posts - Create a new blog post
const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    
    // Validate input
    const errors = validatePostData(title, content);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    const newPost = await Post.create({ title, content });
    
    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost
    });
  } catch (error) {
    next(error);
  }
};

// PUT /posts/:id - Update an existing blog post
const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    
    // Validate ID
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid post ID'
      });
    }
    
    // Validate input
    const errors = validatePostData(title, content);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    // Check if post exists
    const exists = await Post.exists(id);
    if (!exists) {
      return res.status(404).json({
        success: false,
        message: `Post with ID ${id} not found`
      });
    }
    
    const updatedPost = await Post.update(id, { title, content });
    
    res.json({
      success: true,
      message: 'Post updated successfully',
      data: updatedPost
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /posts/:id - Delete a blog post
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Validate ID
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid post ID'
      });
    }
    
    const deletedPost = await Post.delete(id);
    
    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: `Post with ID ${id} not found`
      });
    }
    
    res.json({
      success: true,
      message: 'Post deleted successfully',
      data: {
        id: deletedPost.id,
        title: deletedPost.title
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};