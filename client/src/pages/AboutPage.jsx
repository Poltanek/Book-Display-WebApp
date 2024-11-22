import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/sections/Footer'

const AboutPage = () => {
      return (
        <div>
            <Navbar />
            
            {/*Static Components*/}
            <AboutSection />
            <Footer />
        </div>
      )
    }

export default AboutPage