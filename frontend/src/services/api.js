import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Profile
export const getProfile = () => api.get('/profile');

// Projects
export const getProjects = (params) => api.get('/projects', { params });
export const getProject = (id) => api.get(`/projects/${id}`);

// Skills
export const getSkills = (params) => api.get('/skills', { params });

// Experience
export const getExperience = () => api.get('/experience');

// Education
export const getEducation = () => api.get('/education');

// Certifications
export const getCertifications = () => api.get('/certifications');

// Testimonials
export const getTestimonials = (params) => api.get('/testimonials', { params });

// Services
export const getServices = () => api.get('/services');

// Blog
export const getBlogs = (params) => api.get('/blog', { params });
export const getBlogBySlug = (slug) => api.get(`/blog/${slug}`);

// Contact
export const submitContact = (data) => api.post('/contact', data);

export default api;
