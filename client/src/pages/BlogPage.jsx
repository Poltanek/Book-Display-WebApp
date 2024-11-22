import React  from 'react';
import Navbar from '../components/Navbar';
import BlogSection from '../components/sections/BlogSection';


import Footer from '../components/sections/Footer';

const BlogPage = () => {
      return (
        <div>
            <Navbar />
            {/*Static Components*/}
            <BlogSection />
            <Footer />
        </div>
      )
    }

export default BlogPage