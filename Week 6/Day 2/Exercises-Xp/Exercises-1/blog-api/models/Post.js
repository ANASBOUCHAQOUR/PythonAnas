const { pool } = require('../config/database');

class Post {
  // Get all posts
  static async findAll() {
    try {
      const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Get post by ID
  static async findById(id) {
    try {
      const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Create new post
  static async create({ title, content, author }) {
    try {
      const result = await pool.query(
        'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
        [title, content, author]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update post by ID
  static async update(id, { title, content, author }) {
    try {
      const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2, author = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
        [title, content, author, id]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Delete post by ID
  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Check if post exists
  static async exists(id) {
    const result = await pool.query(
      'SELECT 1 FROM posts WHERE id = $1',
      [id]
    );
    
    return result.rows.length > 0;
  }

  // Get posts count
  static async count() {
    const result = await pool.query('SELECT COUNT(*) as total FROM posts');
    return parseInt(result.rows[0].total);
  }

  // Search posts by title or content
  static async search(searchTerm) {
    const result = await pool.query(
      'SELECT id, title, content, created_at, updated_at FROM posts WHERE title ILIKE $1 OR content ILIKE $1 ORDER BY created_at DESC',
      [`%${searchTerm}%`]
    );
    
    return result.rows;
  }
}

module.exports = Post;