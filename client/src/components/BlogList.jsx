import React from 'react';
import './styles/styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}> {/* Use the _id field as the unique key */}
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
