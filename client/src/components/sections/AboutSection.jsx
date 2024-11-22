import React from "react";
import styles from "./styles/AboutSection.module.css";


const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <h1 className={styles.header}> ABOUT US!</h1>
                <p className={styles.paragraph}>Here you'll find out more about us and our mission as a online book store company!</p>
            </div>
            <div className={styles.socials}>
                <ul className={styles.sociallist}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}


export default AboutSection