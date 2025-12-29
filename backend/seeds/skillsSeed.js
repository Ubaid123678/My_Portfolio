const mongoose = require('mongoose');
const Skill = require('../models/Skill');

const skillsData = [
  {
    name: 'HTML & CSS',
    category: 'Frontend',
    proficiency: 90,
    icon: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    proficiency: 85,
    icon: 'https://cdn-icons-png.flaticon.com/512/3291/3291665.png',
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 80,
    icon: 'https://cdn-icons-png.flaticon.com/512/3291/3291667.png',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: 80,
    icon: 'https://cdn-icons-png.flaticon.com/512/3291/3291772.png',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    proficiency: 78,
    icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    proficiency: 80,
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919840.png',
  },
  {
    name: 'Problem Solving',
    category: 'Tools',
    proficiency: 88,
    icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588325.png',
  },
  {
    name: 'Communication',
    category: 'Tools',
    proficiency: 85,
    icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995506.png',
  },
  {
    name: 'Mobile App Development',
    category: 'Frontend',
    proficiency: 75,
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050159.png',
  },
  {
    name: 'Desktop App Development',
    category: 'Backend',
    proficiency: 70,
    icon: 'https://cdn-icons-png.flaticon.com/512/3625/3625067.png',
  },
];

const seedSkills = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing skills
    await Skill.deleteMany({});
    console.log('Cleared existing skills');

    // Insert skills
    const skills = await Skill.insertMany(skillsData);
    console.log(`${skills.length} skills seeded successfully`);

    await mongoose.connection.close();
    console.log('Skills seeding completed!');
  } catch (error) {
    console.error('Error seeding skills:', error.message);
    process.exit(1);
  }
};

seedSkills();

