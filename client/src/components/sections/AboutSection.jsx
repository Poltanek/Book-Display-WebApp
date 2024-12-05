import React from "react";
import styles from "./styles/AboutSection.module.css";


const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <h1 className={styles.header}> ABOUT US!</h1>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere suscipit nam, maiores tenetur dolor ipsum temporibus fugit natus. Perferendis, culpa reprehenderit? In ullam ea blanditiis exercitationem aliquam laborum quia.</p>
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