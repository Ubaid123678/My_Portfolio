const mongoose = require('mongoose');
const Service = require('../models/Service');

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Build complete web applications from frontend to backend using modern technologies like MERN stack (MongoDB, Express, React, Node.js). Delivering responsive, scalable, and user-friendly solutions.',
    icon: 'FaCode',
    features: [
      'Custom web application development',
      'Responsive design for all devices',
      'RESTful API development',
      'Database design and integration',
      'User authentication and authorization',
      'Payment gateway integration'
    ],
    order: 1,
  },
  {
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile applications using React Native and Flutter. Build native-like experiences for both iOS and Android from a single codebase.',
    icon: 'FaMobileAlt',
    features: [
      'Cross-platform app development',
      'Native mobile app features',
      'Push notifications',
      'Offline functionality',
      'App store deployment',
      'Real-time data synchronization'
    ],
    order: 2,
  },
  {
    title: 'Desktop Application Development',
    description: 'Develop robust desktop applications for Windows, macOS, and Linux. Using technologies like Electron, I create powerful desktop solutions with modern UI.',
    icon: 'FaDesktop',
    features: [
      'Cross-platform desktop apps',
      'System integration',
      'File management systems',
      'Database applications',
      'Custom business software',
      'Automated workflow tools'
    ],
    order: 3,
  },
  {
    title: 'Flutter Development',
    description: 'Specialized in Flutter framework for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    icon: 'FaLayerGroup',
    features: [
      'Flutter mobile apps',
      'Material Design UI',
      'State management (Provider, Bloc)',
      'Firebase integration',
      'Custom animations',
      'Performance optimization'
    ],
    order: 4,
  },
  {
    title: 'API Development & Integration',
    description: 'Design and develop RESTful APIs and integrate third-party services. Create secure, efficient, and well-documented APIs for your applications.',
    icon: 'FaServer',
    features: [
      'RESTful API design',
      'API documentation',
      'Third-party API integration',
      'Authentication & security',
      'Rate limiting & caching',
      'Microservices architecture'
    ],
    order: 5,
  },
  {
    title: 'Database Design & Management',
    description: 'Expert in designing efficient database schemas and managing both SQL and NoSQL databases. Ensure data integrity, security, and optimal performance.',
    icon: 'FaDatabase',
    features: [
      'Database schema design',
      'MongoDB, MySQL, PostgreSQL',
      'Data modeling and normalization',
      'Query optimization',
      'Database migration',
      'Backup and recovery solutions'
    ],
    order: 6,
  },
  {
    title: 'Error & Bug Fixing',
    description: 'Expert debugging and troubleshooting services to identify and fix errors in your existing applications. Quick turnaround for critical issues.',
    icon: 'FaBug',
    features: [
      'Code debugging',
      'Performance optimization',
      'Security vulnerability fixes',
      'Legacy code improvement',
      'Testing and quality assurance',
      'Emergency support'
    ],
    order: 7,
  },
  {
    title: 'FYP & Semester Projects',
    description: 'Specialized assistance for university students with Final Year Projects and semester assignments. Complete project development with documentation and presentation support.',
    icon: 'FaGraduationCap',
    features: [
      'Complete project development',
      'Technical documentation',
      'Project report writing',
      'Presentation preparation',
      'Code explanation and defense',
      'Timely delivery guaranteed'
    ],
    order: 8,
  },
];

const seedServices = async () => {
  try {
    // Connect to MongoDB
    require('dotenv').config({ path: '../.env' });
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    const result = await Service.insertMany(services);
    console.log(`✅ ${result.length} services seeded successfully!`);

    // Display summary
    console.log('\n📊 Services Summary:');
    result.forEach((service, index) => {
      console.log(`${index + 1}. ${service.title}`);
      console.log(`   Features: ${service.features.length} items`);
      console.log(`   Icon: ${service.icon}\n`);
    });

    await mongoose.connection.close();
    console.log('✅ Seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding services:', error.message);
    process.exit(1);
  }
};

seedServices();
