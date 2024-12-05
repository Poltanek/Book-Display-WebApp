import React, { useEffect, useState } from 'react';
import BlogList from '../BlogList'; 
import './styles/BlogDisplay.module.css';
import styles from './styles/BlogDisplay.module.css';

function BlogDisplay() {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {

    fetch('http://localhost:5000/feed')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data); 
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className={`${styles.blogDisplayContainer} container`}>
      <div className={`${styles.blogRow} row justify-content-center`}>
        <div className={`${styles.blogRow} col-lg-8`}>
          {/* Pass blogs to BlogList */}
          <BlogList blogs={blogs} />
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
