const mongoose = require('mongoose');
const Profile = require('../models/Profile');

const aboutContent = {
  about: `I'm Ubaid Ullah Akram, a passionate Full Stack Developer specializing in the MERN stack. Currently pursuing my Bachelor's degree in Computer Science at COMSATS Institute of Information Technology, I combine academic knowledge with practical development experience to build innovative digital solutions.

With expertise in React, Node.js, MongoDB, and Express.js, I create scalable, user-centric applications. My skill set includes HTML/CSS (90%), JavaScript (85%), and strong problem-solving abilities (88%). I'm also exploring mobile and desktop application development to expand my technical horizons.

I approach each project with dedication to writing clean, maintainable code while staying current with industry best practices. Whether building responsive web interfaces or robust backend APIs, I focus on creating solutions that make a real impact. Based in Hasilpur, Punjab, I'm eager to collaborate on meaningful projects and contribute to innovative development teams.`,
  
  bio: `I am a passionate and motivated Full Stack Web and Application Developer with a strong interest in building modern, user-friendly, and efficient digital solutions. I have hands-on experience working with front-end and back-end technologies, databases, and basic application development. I enjoy transforming ideas into functional websites and applications that solve real-world problems.`
};

const updateAbout = async () => {
  try {
    // Connect to MongoDB
    require('dotenv').config({ path: '../.env' });
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Find and update profile
    let profile = await Profile.findOne();

    if (profile) {
      profile.about = aboutContent.about;
      profile.bio = aboutContent.bio;
      profile.updatedAt = Date.now();
      await profile.save();
      console.log('✅ About section updated successfully!');
      console.log('\nBio preview:');
      console.log(profile.bio.substring(0, 150) + '...');
      console.log('\nAbout preview:');
      console.log(profile.about.substring(0, 150) + '...');
    } else {
      console.log('❌ No profile found. Please run profileSeed.js first.');
    }

    await mongoose.connection.close();
    console.log('\n✅ Update completed!');
  } catch (error) {
    console.error('❌ Error updating about section:', error.message);
    process.exit(1);
  }
};

updateAbout();
