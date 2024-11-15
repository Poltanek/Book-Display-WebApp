import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>Midnight Manuscripts</a>
                <nav className={styles.navbar}>
                    <ul className={`${styles.navList} ${click ? styles.isActive : ''}`}>
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
                    <div
                        className={`${styles.hamburger} ${click ? styles.isActive : ''}`}
                        onClick={handleClick}
                    >
                        <div className={styles.bar}></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;






