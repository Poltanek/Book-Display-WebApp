const Post = require('../models/post'); // Import the Post model

// Get all posts
exports.getPosts = (req, res, next) => {
  Post.find()
    .then(foundPosts => {
      res.status(200).json({
        message: "All posts",
        posts: foundPosts
      });
    })
    .catch(err => {
      console.error('Error fetching posts:', err);
      res.status(500).json({ error: 'An error occurred while fetching posts' });
    });
};

// Create a new post
exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  // Create a new Post instance
  const post = new Post({
    title: title,
    content: content
  });

  // Save the instance to the database
  post
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: postSaved
      });
    })
    .catch(err => {
      console.log('Error saving post:', err);
      res.status(500).json({ error: 'An error occurred while saving the post' });
    });
};
