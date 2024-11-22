import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Spin as Hamburger} from 'hamburger-react';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
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
                </nav>

                <div className={styles.hamburger}>
                    <Hamburger color='rgb(255, 255, 255' toggled={isOpen} toggle={setOpen}/>
                </div>
                
            </div>
        </header>
    );
};

export default Navbar;






