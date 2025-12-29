import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { submitContact, getProfile } from '../../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContact(formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });
    } catch (error) {
      console.error('Contact error:', error.response || error);
      const errorMsg = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-description">
              <h3>Let's Connect</h3>
              <p>
                Have a project in mind or want to discuss how I can help bring your ideas to life? 
                Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <FaEnvelope className="icon" />
              </div>
              <div>
                <h4>Email</h4>
                <p>{profile?.email || 'Loading...'}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper">
                <FaPhone className="icon" />
              </div>
              <div>
                <h4>Phone</h4>
                <p>{profile?.phone || 'Loading...'}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-wrapper">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div>
                <h4>Location</h4>
                <p>{profile?.location || 'Loading...'}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="btn-text">Sending...</span>
                </>
              ) : (
                <>
                  <span className="btn-text">Send Message</span>
                  <FaPaperPlane className="btn-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
