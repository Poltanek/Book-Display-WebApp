import React  from 'react';
import Navbar from '../components/Navbar';
import BlogContent from '../components/sections/BlogContent';
import Footer from '../components/sections/Footer';
import BlogDisplay from '../components/sections/BlogDisplay';

const BlogPage = () => {
      return (
        <div>
            <Navbar />
            {/*Static Components*/}
            <BlogContent />
            <BlogDisplay />
            <Footer />
        </div>
      )
    }

export default BlogPage