const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
