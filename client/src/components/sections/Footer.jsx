import React, { useState } from 'react'; // Import useState from React
import styles from './styles/Footer.module.css';
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send both email and name to the backend
      await axios.post("http://localhost:5000/newsletter", { email, name });
      alert("You are subscribed!");
      setEmail(""); // Clear the email input after successful submission
      setName(""); // Clear the name input after successful submission
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

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
            Location
            <div className={styles.underline}><span></span></div>
          </h3>
          <p>45 Royal Ashley Crescent Road</p>
          <p>Winchester</p>
          <p>Hampshire, UK</p>
          <p className={styles.email}>student.winchester@gmail.com</p>
          <p className={styles.phone}>+44 434 434 4444</p>
        </div>
        <div className={styles.footerCol}>
          <h3>
            Network
            <div className={styles.underline}><span></span></div>
          </h3>
          {/* Menu Column */}
          {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul> */}
        </div>
        <div className={styles.footerCol}>
          <h3>
            Newsletter
          </h3>
          
          <div className={styles.underline}><span></span></div>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={styles.inputField}
            />
            <input
              type="text" // Change this to "text" for name input
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
            />
            <div>
              <button type="submit" className={styles.signUpButton}>SUBSCRIBE</button>
            </div>
          </form>

          {/* Social media icons could go here */}
          {/* <div className={styles.socialIcons}>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          </div> */}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 All rights reserved. Author Poltanek</p>
      </div>
    </footer>
  );
};

export default Footer;
