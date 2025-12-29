const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  resumeUrl: {
    type: String,
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    instagram: String,
    facebook: String,
    youtube: String,
    fiverr: String,
    freelancer: String,
  },
  whatsappNumber: {
    type: String,
  },
  whatsappMessage: {
    type: String,
    default: 'Hello! I would like to connect with you.',
  },
  heroImages: [String],
  aboutImages: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
