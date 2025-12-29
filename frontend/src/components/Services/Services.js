import React, { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaDesktop, FaLayerGroup, FaServer, FaDatabase, FaBug, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { getServices } from '../../services/api';
import './Services.css';

const iconMap = {
  FaCode: FaCode,
  FaMobileAlt: FaMobileAlt,
  FaDesktop: FaDesktop,
  FaLayerGroup: FaLayerGroup,
  FaServer: FaServer,
  FaDatabase: FaDatabase,
  FaBug: FaBug,
  FaGraduationCap: FaGraduationCap,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>What I can do for you</p>
          </div>
          <div className="loading">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>What I can do for you</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCode;
            
            return (
              <div 
                key={service._id} 
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                  <div className="icon-bg"></div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-decoration"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="services-bg-decoration">
        <div className="decoration-wave"></div>
      </div>
    </section>
  );
};

export default Services;
