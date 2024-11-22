import React from "react"
import styles from "./styles/ShoppingSection.module.css"
import { SearchBar } from "../SearchBar"

const ShoppingSection = () => {
    return (
        <div className={styles.shoppingSection}>
            <div className={styles.shoppingContent}>
                <h1 className={styles.header}>ALL SHOP BROWSE!</h1>
                <p className={styles.paragraph}>All Genres of stories are available heere to browse that are in store for you!</p>
                <SearchBar />
            </div>
        </div>
    )
}

export default ShoppingSection