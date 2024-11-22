const express = require('express');
const blogRouter = express.Router();

const blogs = [
    {
        title: "My First Blog",
        description: "This is the first blog that I have written",
        author: "Poltanek",
        date: "21st October"
    },
    {
        title: "My Second Blog",
        description: "This is the second blog that I have written",
        author: "Poltanek",
        date: "22nd October"
    }
    {
        title: "My Third Blog",
        description: "This is the third blog that I have written",
        author: "Poltanek",
        date: "23rd October"
    }
]
blogRouter.route('/')
    .get((req, res) => {
        res.json(blogs); // Send blogs as JSON response
    });

module.exports = blogRouter;