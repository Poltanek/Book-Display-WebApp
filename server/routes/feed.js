const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController'); // Import controller functions

// Routes for the blog functionality
router.get('/', feedController.getBlogs); // Handle fetching all blogs
router.post('/', feedController.createBlog); // Handle creating a new blog

module.exports = router;
