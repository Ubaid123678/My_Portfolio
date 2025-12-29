const mongoose = require('mongoose');
const Profile = require('../models/Profile');

const profileData = {
  name: 'Ubaid Ullah Akram',
  tagline: 'Full Stack Developer',
  bio: 'I am a passionate and motivated Full Stack Web and Application Developer with a strong interest in building modern, user-friendly, and efficient digital solutions. I have hands-on experience working with front-end and back-end technologies, databases, and basic application development. I enjoy transforming ideas into functional websites and applications that solve real-world problems.',
  email: 'ubaidullahakram063@gmail.com',
  phone: '+92 305 3004536',
  location: 'Hasilpur, Punjab, Pakistan',
  profileImage: 'https://via.placeholder.com/400x400?text=Ubaid+Ullah+Akram',
  resumeUrl: '',
  socialLinks: {
    github: 'https://github.com/Ubaid123678',
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },
  whatsappNumber: '+92 305 3004536',
  whatsappMessage: 'Hi Ubaid! I would like to connect with you.',
};

const seedProfile = async () => {
  try {
    // Connect to MongoDB
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Check if profile already exists
    let profile = await Profile.findOne();

    if (profile) {
      // Update existing profile
      profile = await Profile.findByIdAndUpdate(profile._id, profileData, {
        new: true,
        runValidators: true,
      });
      console.log('Profile updated successfully:', profile.name);
    } else {
      // Create new profile
      profile = await Profile.create(profileData);
      console.log('Profile created successfully:', profile.name);
    }

    await mongoose.connection.close();
    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error seeding profile:', error.message);
    process.exit(1);
  }
};

seedProfile();
