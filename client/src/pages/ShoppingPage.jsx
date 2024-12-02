import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import ShoppingSection from "../components/sections/ShoppingSection";
import BookList from "../components/BookList";
import Book from "../components/Book";

const ShoppingPage = () => {
    return (
        <div>
            <Navbar />
            <ShoppingSection />
            <BookList />
            <Footer />
        </div>
    )
}

export default ShoppingPage