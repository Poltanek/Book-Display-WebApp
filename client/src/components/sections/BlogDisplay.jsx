import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../services/api';
import BlogList from '../BlogList';
import styles from './styles/BlogDisplay.module.css';

function BlogDisplay() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setError(error.message);
      });
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
      <div className={styles.blogDisplayContainer}>
        <div className={`${styles.blogRow} row justify-content-center`}>
          <div className={`${styles.blogRow} col-lg-8`}>
            <BlogList blogs={blogs} />
          </div>
        </div>
      </div>
  );
}

export default BlogDisplay;
