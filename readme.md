# MERN Stack Portfolio

A complete, professional portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

- **Full MERN Stack** - MongoDB, Express, React, Node.js
- **Responsive Design** - Works on all devices
- **Dark Theme** - Modern dark UI with glassmorphism effects
- **Animated** - Smooth animations with Framer Motion and AOS
- **WhatsApp Integration** - Direct chat button with default message
- **Admin Panel Ready** - Backend APIs for content management
- **Email Contact Form** - Nodemailer integration
- **Blog System** - Complete blog with categories and views
- **Project Showcase** - Filterable project gallery
- **Skills & Experience** - Timeline and proficiency visualization
- **Testimonials** - Client reviews section
- **Certifications** - Display your achievements
- **Services** - Showcase what you offer
- **SEO Friendly** - Optimized for search engines

## 📋 Sections

1. **Hero/Home** - Landing with animated text and profile
2. **About** - Personal bio and downloadable resume
3. **Skills** - Technical skills with proficiency levels
4. **Languages** - Programming languages & frameworks
5. **Experience** - Work timeline
6. **Education** - Academic background
7. **Projects** - Portfolio showcase with filtering
8. **Certifications** - Achievements & certificates
9. **Services** - What you offer
10. **Testimonials** - Client reviews
11. **Blog** - Articles section
12. **Contact** - Form + Social links + WhatsApp button

## 🛠️ Technologies

### Frontend
- React 18
- React Router DOM
- Axios
- React Icons
- Framer Motion
- AOS (Animate On Scroll)
- React Type Animation
- Swiper
- React Toastify
- TsParticles

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt.js
- Nodemailer
- Multer (File uploads)
- Cloudinary (Image hosting)
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

5. Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_WHATSAPP_NUMBER=+1234567890
REACT_APP_WHATSAPP_MESSAGE=Hello! I would like to connect with you.
```

5. Start frontend:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 🔐 Admin Setup

### Create Admin User

Use a tool like Postman or curl to create the admin account:

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "your_secure_password"
}
```

### Login

```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "your_password"
}
```

You'll receive a JWT token. Use this token in the `Authorization` header for protected routes:
```
Authorization: Bearer <your_token>
```

## 📡 API Endpoints

### Public Routes
- `GET /api/profile` - Get profile data
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/skills` - Get all skills
- `GET /api/experience` - Get experience
- `GET /api/education` - Get education
- `GET /api/certifications` - Get certifications
- `GET /api/testimonials` - Get testimonials
- `GET /api/services` - Get services
- `GET /api/blog` - Get blog posts
- `GET /api/blog/:slug` - Get single blog post
- `POST /api/contact` - Submit contact form

### Protected Routes (Admin Only)
- `POST /api/profile` - Create/Update profile
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- (Similar CRUD for all other resources)

## 🎨 Customization

### Colors
Edit `frontend/src/App.css` to change the color scheme:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

### WhatsApp Button
1. Add your WhatsApp number in `.env`:
```env
REACT_APP_WHATSAPP_NUMBER=+1234567890
```

2. Customize default message:
```env
REACT_APP_WHATSAPP_MESSAGE=Hello! I would like to discuss a project with you.
```

### Content
Update content through API endpoints or create an admin panel interface.

## 📱 WhatsApp Integration

The WhatsApp button:
- Appears when user scrolls down 300px
- Opens WhatsApp with pre-filled message
- Works on mobile and desktop
- Includes hover tooltip

## 🌐 Deployment

### Backend (Heroku/Railway)
1. Push to GitHub
2. Connect to Heroku/Railway
3. Add environment variables
4. Deploy

### Frontend (Vercel/Netlify)
1. Push to GitHub
2. Connect to Vercel/Netlify
3. Add environment variables
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Deploy

### Database (MongoDB Atlas)
1. Create cluster on MongoDB Atlas
2. Get connection string
3. Update `MONGODB_URI` in backend `.env`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name
- Website: [your-portfolio.com](https://your-portfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Icons from React Icons
- Animations from Framer Motion & AOS
- Particles from TsParticles
- UI inspiration from various portfolio designs

---

Made with ❤️ using MERN Stack
