const express = require("express");
const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: "First Post", content: "This is the first blog post." },
    { id: 2, title: "Second Post", content: "This is the second blog post." },
];

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res
            .status(400)
            .json({ error: "Title and content are required" });
    }
    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title,
        content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    res.json(post);
});

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    const deleted = posts.splice(index, 1);
    res.json(deleted[0]);
});

// invalid routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Server error" });
});

app.listen(3000, () => {
    console.log("Blog API server running on port 3000");
});