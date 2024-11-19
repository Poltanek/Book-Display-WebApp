import React from 'react';
import styles from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerCol}>
          <h2>Midnight Manuscripts</h2>
          <p className={styles.footerPara}>
          Discover your next favorite book at Midnight Manuscripts. From fiction to non-fiction, we have something for everyone.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h3 className={styles.textOffice}>
            Office
            <div className={styles.underline}><span></span></div>
          </h3>
          <p>45 Royal Ashley Crescent Road</p>
          <p>Winchester</p>
          <p>Hampshire, UK</p>
          <p className={styles.email}>info.finegap@gmail.com</p>
          <p className={styles.phone}>+44 434 434 4444</p>
        </div>
        <div className={styles.footerCol}>
          <h3>
            Menu
            <div className={styles.underline}><span></span></div>
          </h3>

          {/* Menu Column
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
          */}
        </div>
        <div className={styles.footerCol}>
          <h3>
            Newsletter
            <div className={styles.underline}><span></span></div>
          </h3>
          <form>
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Email Address" />
            <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
          </form>

          {/* Plan to use Box-icons instead */}
          {/*<div className={styles.socialIcons}>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          </div>
          */}

        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 All rights reserved. Author Poltanek</p>
      </div>
    </footer>
  );
};

export default Footer;
