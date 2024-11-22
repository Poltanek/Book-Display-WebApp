import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ShoppingPage from './pages/ShoppingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Route Configurations */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/shoppingpage" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
