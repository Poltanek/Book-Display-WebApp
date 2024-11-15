import React from 'react';
import Navbar from '../components/Navbar';
// import styles from './styles/HomePage.module.css'
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
      return (
        <div>
            <Navbar />
            {/*Static Components*/}
            <HeroSection />
        </div>
      )
    }

export default HomePage