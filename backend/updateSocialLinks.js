const mongoose = require('mongoose');
const Profile = require('./models/Profile');
require('dotenv').config();

const updateSocialLinks = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Find the profile and update social links
    const profile = await Profile.findOne();
    
    if (profile) {
      profile.socialLinks = {
        ...profile.socialLinks,
        fiverr: 'https://www.fiverr.com/s/dDXxPR2',
        freelancer: 'https://www.freelancer.com/u/Ubaid025?frm=Ubaid025&sb=t'
      };
      
      await profile.save();
      console.log('Social links updated successfully!');
      console.log('Fiverr:', profile.socialLinks.fiverr);
      console.log('Freelancer:', profile.socialLinks.freelancer);
    } else {
      console.log('No profile found!');
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating social links:', error);
    process.exit(1);
  }
};

updateSocialLinks();
