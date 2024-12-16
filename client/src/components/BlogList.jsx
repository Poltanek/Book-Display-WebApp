import React from 'react';
import styles from './styles/BlogList.module.css'; 

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className={styles.blogListContainer}>
      <h1 className={styles.subheading}>New Book Releases</h1>
      <ul className={styles.blogList}>
        {blogs.map((blog) => (
          <li key={blog._id} className={styles.blogCard}>
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogDescription}>{blog.description}</p>
            <small className={styles.blogInfo}>
              By {blog.author} on {new Date(blog.date).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
