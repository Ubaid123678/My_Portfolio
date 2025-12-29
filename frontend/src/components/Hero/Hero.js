import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaInstagram } from 'react-icons/fa';
import { SiFreelancer, SiFiverr } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { getProfile } from '../../services/api';
import './Hero.css';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setProfile(response.data.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Generate typing animation sequence
  const getTypingSequence = () => {
    const defaultRoles = [
      'Full Stack Developer',
      2000,
      'MERN Stack Expert',
      2000,
      'Mobile App Developer',
      2000,
      'Problem Solver',
      2000,
    ];
    return defaultRoles;
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-text">
            <h3 className="greeting">Hi, I'm</h3>
            <h1 className="name">{profile?.name || 'Your Name'}</h1>
            <div className="tagline">
              <span>I'm a </span>
              <TypeAnimation
                sequence={getTypingSequence()}
                wrapper="span"
                speed={50}
                className="typed-text"
                repeat={Infinity}
              />
            </div>
            <p className="hero-description">
              {profile?.bio || 'Passionate about creating amazing web experiences and solving complex problems.'}
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              {profile?.resumeUrl && (
                <a href={profile.resumeUrl} className="btn btn-outline" download>
                  <FaDownload /> Download CV
                </a>
              )}
            </div>

            <div className="social-links">
              {profile?.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {profile?.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
              {profile?.socialLinks?.twitter && (
                <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              )}
              {profile?.socialLinks?.instagram && (
                <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              )}
              {profile?.socialLinks?.fiverr && (
                <a href={profile.socialLinks.fiverr} target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
                  <SiFiverr />
                </a>
              )}
              {profile?.socialLinks?.freelancer && (
                <a href={profile.socialLinks.freelancer} target="_blank" rel="noopener noreferrer" aria-label="Freelancer">
                  <SiFreelancer />
                </a>
              )}
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
            <div className="image-wrapper">
              <img
                src={profile?.profileImage || 'https://via.placeholder.com/400'}
                alt={profile?.name}
              />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
