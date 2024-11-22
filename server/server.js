const express = require('express');
const cors = require('cors'); // Allow cross-origin requests for React

const app = express();
app.use(cors()); // Enable CORS

const posts = [
  { title: 'My First Blog', 
    description: "This is the first blog that I have written", 
    author: "Poltanek",
    date: "21st October",
  },
  { title: 'My Second Blog', 
    description: "This is the second blog that I have written", 
    author: "Poltanek",
    date: "22nd October",
  },
];

// Blog API endpoint
app.get('/api/blog', (req, res) => {
  res.json(posts); // Send JSON data
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));