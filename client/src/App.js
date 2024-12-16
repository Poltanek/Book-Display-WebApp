import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;