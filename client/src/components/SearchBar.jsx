import React from "react";
import styles from './styles/SearchBar.module.css';

export const SearchBar = () => {
    return (
        <div className={styles.inputWrapper}>
            <input placeholder="Type to search" />    
        </div>
    );
}
