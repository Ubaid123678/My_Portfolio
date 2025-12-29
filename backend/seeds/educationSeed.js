const mongoose = require('mongoose');
const Education = require('../models/Education');

const educationData = [
  {
    institution: 'COMSATS Institute of Information Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2027-12-31'),
    current: true,
    description:
      'Currently pursuing a Bachelor of Science in Computer Science with a focus on software development, web technologies, and database systems. Skilled in full-stack web development, databases, object-oriented programming, and application development. Actively building web and mobile projects with a strong foundation in problem-solving and modern development practices.',
    location: 'Vehari, Punjab, Pakistan',
  },
];

const seedEducation = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing education
    await Education.deleteMany({});
    console.log('Cleared existing education');

    // Insert education
    const education = await Education.insertMany(educationData);
    console.log(`${education.length} education records seeded successfully`);

    await mongoose.connection.close();
    console.log('Education seeding completed!');
  } catch (error) {
    console.error('Error seeding education:', error.message);
    process.exit(1);
  }
};

seedEducation();

