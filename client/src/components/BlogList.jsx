import React, { useEffect, useState } from 'react';
import './styles/styles.css'

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs') // Fetch data from backend
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <small>
                            By {blog.author} on {blog.date}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
