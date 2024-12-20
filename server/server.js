require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');
const newsletterRoutes = require('./routes/newsletterRoutes'); // Fixed path
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware to parse JSON request bodies
app.use(express.json());

// API Routes
app.use(cors());
app.use('/feed', feedRoutes);
app.use('/newsletter', newsletterRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
