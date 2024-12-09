import React from 'react';
import './styles/styles.css';

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return <p>No blogs available.</p>;
  }

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <small>
              By {blog.author} on {new Date(blog.date).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;