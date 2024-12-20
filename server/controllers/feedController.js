const Blog = require('../models/Blog');

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs from MongoDB
    res.json(blogs); // Send them as a JSON response
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, description, author } = req.body;

  try {
    const newBlog = new Blog({ title, description, author, date: new Date() });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

