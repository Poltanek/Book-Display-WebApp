import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const toggleNavbar = () => setOpen(!isOpen);

    const handleResize = () => {

        setIsMobile(window.innerWidth <= 768);

        if (window.innerWidth > 768) {
            setOpen(false);
        }
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <a href="/" className={styles.logo}>Midnight Manuscripts</a>

                {/* Hamburger Menu (Only visible on mobile) */}
                <div className={styles.hamburger}>
                    <Hamburger
                        color="rgb(255, 255, 255)" 
                        toggled={isOpen}               
                        toggle={toggleNavbar}          
                    />
                </div>

                {/* Navbar Links */}
                <nav className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.link}>HOME</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/blogpage" className={styles.link}>BLOG</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/aboutpage" className={styles.link}>ABOUT</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/shoppingpage" className={styles.link}>SHOP ALL</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
