const mongoose = require('mongoose');

// Update profile with your actual image
const updateProfileImage = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://Ubaid025:qwe.%40123@cluster0.rvkwp70.mongodb.net/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const Profile = require('../models/Profile');
    
    // Update with your image URL
    // Option 1: Use a direct image URL (from Imgur, Cloudinary, etc.)
    // Option 2: Place your image in frontend/public/images/ and use: '/images/your-photo.jpg'
    
    const imageUrl = '/images/profile.jpeg'; // REPLACE THIS
    
    const profile = await Profile.findOneAndUpdate(
      {},
      { profileImage: imageUrl },
      { new: true }
    );
    
    console.log('Profile image updated:', profile.name);
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

updateProfileImage();
