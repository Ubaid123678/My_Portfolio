const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: [String],
  technologies: [String],
  location: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  current: {
    type: Boolean,
    default: false,
  },
  companyLogo: String,
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Experience', ExperienceSchema);
