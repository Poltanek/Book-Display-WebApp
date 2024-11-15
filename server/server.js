const express = require('express');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files for Bootstrap CSS
app.use(express.static('public'));

// Blog route using EJS
app.get('/blog', (req, res) => {
  const posts = [
    { title: "Post 1", content: "Content for post 1" },
    { title: "Post 2", content: "Content for post 2" }
  ];
  res.render('blog', { posts });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
