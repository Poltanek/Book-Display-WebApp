import React from "react";
import styles from "./styles/BlogContent.module.css";

const BlogContent = () => {
    return(
        <div className={styles.blogSection}>
            <div className={styles.blogContent}>
                <h1 className={styles.header}>Whats happening?</h1>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Voluptatum impedit dolores perferendis incidunt doloribus accusamus sequi libero officia, 
                    exercitationem ullam perspiciatis veritatis blanditiis nemo consequatur repellat 
                    dicta non corrupti! Expedita.</p>
            </div>
        </div>
    );
}


export default BlogContent