import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }
};

// Fetch single post by ID
export const fetchPostById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post ${id}:`, error.message);
        throw error;
    }
};

// Create new post
export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error.message);
        throw error;
    }
};

// Update post
export const updatePost = async (id, postData) => {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.error(`Error updating post ${id}:`, error.message);
        throw error;
    }
};

// Delete post
export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post ${id}:`, error.message);
        throw error;
    }
}; 