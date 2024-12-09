const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

// Routes for the blog functionality
router.get('/', feedController.getBlogs); 
router.post('/', feedController.createBlog);

module.exports = router;
