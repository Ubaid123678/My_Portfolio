import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaInstagram } from 'react-icons/fa';
import { SiFreelancer, SiFiverr } from 'react-icons/si';
import { getProfile } from '../../services/api';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Ubaid Ullah Akram</h3>
            <p>BSc Computer Science Student</p>
            <p className="footer-tagline">Building digital experiences with passion</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {profile?.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
              )}
              {profile?.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
              {profile?.socialLinks?.twitter && (
                <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                  <FaTwitter />
                </a>
              )}
              {profile?.socialLinks?.instagram && (
                <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                  <FaInstagram />
                </a>
              )}
              {profile?.socialLinks?.fiverr && (
                <a href={profile.socialLinks.fiverr} target="_blank" rel="noopener noreferrer" title="Fiverr">
                  <SiFiverr />
                </a>
              )}
              {profile?.socialLinks?.freelancer && (
                <a href={profile.socialLinks.freelancer} target="_blank" rel="noopener noreferrer" title="Freelancer">
                  <SiFreelancer />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Ubaid Ullah Akram. Made with <FaHeart className="heart" /> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
