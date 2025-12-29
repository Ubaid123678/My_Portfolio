const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  issuer: {
    type: String,
    required: true,
  },
  description: String,
  issueDate: {
    type: Date,
    required: true,
  },
  expiryDate: Date,
  credentialId: String,
  credentialUrl: String,
  image: String,
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Certification', CertificationSchema);
