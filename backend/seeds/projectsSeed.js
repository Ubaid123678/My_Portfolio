const mongoose = require('mongoose');
const Project = require('../models/Project');

const projects = [
  {
    title: 'DO IT - Service Provider Platform',
    description: 'A comprehensive mobile application connecting service providers with customers, featuring real-time booking, payment integration, and service management.',
    longDescription: 'DO IT is a full-stack mobile application built with React Native and MERN stack that bridges the gap between service providers and customers. The platform enables users to find and book various services, track service providers in real-time, and complete secure payments. Features include user authentication, service categorization, booking management, rating system, and push notifications.',
    category: 'Mobile App',
    technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
    thumbnail: 'https://via.placeholder.com/800x600?text=DO+IT+App',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 1,
    startDate: new Date('2024-09-01'),
    endDate: new Date('2024-12-15'),
  },
  {
    title: 'Study Planner with Smart Reminder',
    description: 'An intelligent study planning application with AI-powered reminders, task scheduling, and progress tracking for students.',
    longDescription: 'A modern full-stack web application built with MERN stack that helps students organize their study schedule efficiently. Features include smart reminder system, task prioritization, study session tracking, progress analytics, calendar integration, and collaborative study groups. The application uses algorithms to suggest optimal study times based on user patterns.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI', 'Chart.js'],
    thumbnail: 'https://via.placeholder.com/800x600?text=Study+Planner',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 2,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-30'),
  },
  {
    title: 'Furniture 3D Scrolling Website',
    description: 'An immersive furniture showcase website featuring 3D models, smooth scrolling animations, and interactive product visualization.',
    longDescription: 'A visually stunning MERN stack e-commerce platform for furniture shopping with 3D product visualization. Users can rotate, zoom, and view furniture from all angles. Features include parallax scrolling effects, product filtering, shopping cart, user authentication, wishlist functionality, and admin dashboard for inventory management.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'GSAP', 'Stripe'],
    thumbnail: 'https://via.placeholder.com/800x600?text=3D+Furniture+Store',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 3,
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-05-30'),
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing skills, projects, and professional information with dark/light theme toggle.',
    longDescription: 'A full-stack portfolio application built with MERN stack featuring dynamic content management, theme switching, animated components, and SEO optimization. The site includes sections for about, skills with proficiency levels, project showcase with filtering, education timeline, contact form with email integration, and an admin panel for content updates.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Framer Motion', 'AOS'],
    thumbnail: 'https://via.placeholder.com/800x600?text=Portfolio+Website',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 4,
    startDate: new Date('2024-12-01'),
    endDate: new Date('2024-12-28'),
  },
  {
    title: 'Lost and Found Tracker',
    description: 'A community-driven platform for reporting and finding lost items with location mapping and real-time notifications.',
    longDescription: 'A web-based lost and found management system that helps people report lost items and find them through a centralized platform. Features include image upload for lost/found items, location-based search using maps, category filtering, claim verification system, user messaging, and notification alerts when matching items are found.',
    category: 'Web Development',
    technologies: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API'],
    thumbnail: 'https://via.placeholder.com/800x600?text=Lost+%26+Found',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 5,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-03-10'),
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive system for managing student records, attendance, grades, and academic performance tracking.',
    longDescription: 'An interactive student management system designed to streamline academic administration. Features include student registration and profile management, attendance tracking with calendar view, grade management and report card generation, course enrollment system, teacher dashboard, parent portal for monitoring student progress, and data export functionality.',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Local Storage', 'Chart.js'],
    thumbnail: 'https://via.placeholder.com/800x600?text=Student+Management',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 6,
    startDate: new Date('2023-10-01'),
    endDate: new Date('2023-12-20'),
  },
  {
    title: 'Cosmetic E-Commerce Website',
    description: 'An elegant online cosmetics store with product catalog, shopping cart, and secure checkout system.',
    longDescription: 'A fully functional e-commerce website for cosmetic products featuring a modern design and smooth user experience. Includes product browsing with filters by category, brand, and price range, detailed product pages with image galleries, shopping cart management, user authentication and profile management, order tracking system, and admin panel for product and order management.',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    thumbnail: 'https://via.placeholder.com/800x600?text=Cosmetic+Store',
    images: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 7,
    startDate: new Date('2023-08-01'),
    endDate: new Date('2023-10-15'),
  },
];

const seedProjects = async () => {
  try {
    // Connect to MongoDB
    require('dotenv').config({ path: '../.env' });
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new projects
    const result = await Project.insertMany(projects);
    console.log(`✅ ${result.length} projects seeded successfully!`);

    // Display summary
    console.log('\n📊 Projects Summary:');
    result.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   Category: ${project.category}`);
      console.log(`   Technologies: ${project.technologies.join(', ')}`);
      console.log(`   Featured: ${project.featured ? 'Yes' : 'No'}\n`);
    });

    await mongoose.connection.close();
    console.log('✅ Seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding projects:', error.message);
    process.exit(1);
  }
};

seedProjects();
