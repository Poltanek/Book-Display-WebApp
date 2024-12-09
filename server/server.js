require('dotenv').config(); // Load environment variables
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed'); // Correct path for routes

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/MERN';

// Middleware to parse JSON request bodies
app.use(express.json());

// API Routes
app.use('/feed', feedRoutes);
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if the connection fails
  }
};

connectDB(); // Call the function to connect to MongoDB

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
