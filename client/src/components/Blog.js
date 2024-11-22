import React, { useEffect, useState } from 'react';
import styles from './styles/BlogCard.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend
    fetch('http://localhost:5000/api/blog')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <div className="col-md-6 mt-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p>{post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
