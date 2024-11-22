import React from 'react';
import Navbar from '../components/Navbar';
// import styles from './styles/HomePage.module.css'
import HeroSection from '../components/sections/HeroSection';
import Footer from '../components/sections/Footer';

const HomePage = () => {
      return (
        <div>
            <Navbar />
            
            {/*Static Components*/}
            <HeroSection />
            <Footer />
        </div>
      )
    }

export default HomePage