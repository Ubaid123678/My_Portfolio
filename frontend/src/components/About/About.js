import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaLaptopCode, FaMobile, FaAward } from 'react-icons/fa';
import { getProfile } from '../../services/api';
import './About.css';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response.data.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>
          <div className="about-content" data-aos="fade-up">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!profile || (!profile.about && !profile.bio)) {
    return null;
  }

  // Use 'about' field if available, otherwise fall back to 'bio'
  const aboutText = profile.about || profile.bio;
  
  // Split bio into paragraphs
  const paragraphs = aboutText.split('\n\n').filter(p => p.trim());

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-wrapper">
          {/* Left Side - About Text */}
          <div className="about-left" data-aos="fade-right" data-aos-delay="100">
            <div className="about-text-box">
              <div className="decorative-line"></div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <FaCode className="stat-icon" />
                <div className="stat-content">
                  <h4>10+</h4>
                  <p>Technologies</p>
                </div>
              </div>
              <div className="stat-item">
                <FaLaptopCode className="stat-icon" />
                <div className="stat-content">
                  <h4>MERN</h4>
                  <p>Stack Expert</p>
                </div>
              </div>
              <div className="stat-item">
                <FaMobile className="stat-icon" />
                <div className="stat-content">
                  <h4>Mobile</h4>
                  <p>Development</p>
                </div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div className="stat-content">
                  <h4>BSc</h4>
                  <p>CS Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="about-right" data-aos="fade-left" data-aos-delay="200">
            <div className="about-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FaGraduationCap />
                </div>
                <div className="info-content">
                  <h3>Education</h3>
                  <p>BSc Computer Science</p>
                  <span>COMSATS Institute</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>{profile.location}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p className="email-text">{profile.email}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>{profile.phone}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="btn btn-outline" download>
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="about-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>
    </section>
  );
};

export default About;
