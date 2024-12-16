require('dotenv').config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/MERN';

// Middleware to parse JSON request bodies
app.use(express.json());

// API Routes
app.use(cors());
app.use('/feed', feedRoutes);


app.post("/api/Newsletter", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  try {
    const newSubscriber = new Newsletter({ name, email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscription successful!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
});


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
    process.exit(1);
  }
};

connectDB();

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
