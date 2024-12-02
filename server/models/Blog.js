const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
});

// Specify the collection name 'blogData'
const Blog = mongoose.model('Blog', blogSchema, 'blogData');

module.exports = Blog;
