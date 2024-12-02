import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import BlogList from '../BlogList';
import './styles/BlogDisplay.module.css';
import styles from './styles/BlogDisplay.module.css';

function BlogDisplay() {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/blogs') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setFeaturedBlog(data[0]); // Assuming the first blog is the featured one
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className={`${styles.blogDisplayContainer} container`}>
      <div className={`${styles.blogRow} row justify-content-center`}>
        <div className={`${styles.blogRow} col-lg-8`}>
          {/* Featured Post */}
          {featuredBlog && (
            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  src={featuredBlog.image || 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg'}
                  alt={featuredBlog.title}
                />
              </a>
              <div className={`${styles.CardBody} card-body`}>
                <div className="small text-muted">
                  {new Date(featuredBlog.date).toDateString()} {/* Display MongoDB date */}
                </div>
                <h2 className="card-title">{featuredBlog.title}</h2>
                <p className="card-text">{featuredBlog.description}</p>
                <a className="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
          )}

          {/* Blog List */}
          <div className="row">
            <BlogList />
          </div>

          {/* Pagination */}
          <nav aria-label="Pagination">
            <hr className="my-0" />
            <ul className="pagination justify-content-center my-4">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-disabled="true">Newer</a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#!">1</a>
              </li>
              <li className="page-item"><a className="page-link" href="#!">2</a></li>
              <li className="page-item"><a className="page-link" href="#!">3</a></li>
              <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
              <li className="page-item"><a className="page-link" href="#!">15</a></li>
              <li className="page-item"><a className="page-link" href="#!">Older</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
