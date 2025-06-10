import express from 'express';
import { 
    fetchPosts, 
    fetchPostById, 
    createPost, 
    updatePost, 
    deletePost 
} from './data/dataService.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('✅ Successfully retrieved posts from JSONPlaceholder');
        res.json(posts);
    } catch (error) {
        console.error('❌ Error in GET /api/posts:', error.message);
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

// GET post by ID
app.get('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = await fetchPostById(id);
        console.log(`✅ Successfully retrieved post ${id} from JSONPlaceholder`);
        res.json(post);
    } catch (error) {
        console.error(`❌ Error in GET /api/posts/${req.params.id}:`, error.message);
        res.status(404).json({ message: 'Post not found' });
    }
});

// POST create new post
app.post('/api/posts', async (req, res) => {
    try {
        const { title, body, userId } = req.body;
        
        if (!title || !body || !userId) {
            return res.status(400).json({ 
                message: 'Title, body, and userId are required' 
            });
        }
        
        const newPost = await createPost({ title, body, userId });
        console.log('✅ Successfully created new post on JSONPlaceholder');
        res.status(201).json(newPost);
    } catch (error) {
        console.error('❌ Error in POST /api/posts:', error.message);
        res.status(500).json({ message: 'Error creating post' });
    }
});

// PUT update post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, body, userId } = req.body;
        
        if (!title && !body && !userId) {
            return res.status(400).json({ 
                message: 'At least one field (title, body, or userId) is required' 
            });
        }
        
        const updatedPost = await updatePost(id, { title, body, userId });
        console.log(`✅ Successfully updated post ${id} on JSONPlaceholder`);
        res.json(updatedPost);
    } catch (error) {
        console.error(`❌ Error in PUT /api/posts/${req.params.id}:`, error.message);
        res.status(404).json({ message: 'Post not found' });
    }
});

// DELETE post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deletePost(id);
        console.log(`✅ Successfully deleted post ${id} from JSONPlaceholder`);
        res.status(204).send();
    } catch (error) {
        console.error(`❌ Error in DELETE /api/posts/${req.params.id}:`, error.message);
        res.status(404).json({ message: 'Post not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log('📝 API Endpoints:');
    console.log('   GET    /api/posts     - Get all posts');
    console.log('   GET    /api/posts/:id - Get post by ID');
    console.log('   POST   /api/posts     - Create new post');
    console.log('   PUT    /api/posts/:id - Update post');
    console.log('   DELETE /api/posts/:id - Delete post');
}); 