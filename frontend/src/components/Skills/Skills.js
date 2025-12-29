import React, { useState, useEffect } from 'react';
import { getSkills } from '../../services/api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  // Filter skills
  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>My technical expertise</p>
          </div>
          <div className="loading">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>My technical expertise</p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill._id} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="skill-icon">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} />
                ) : (
                  <span className="skill-initial">{skill.name.charAt(0)}</span>
                )}
              </div>
              
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-meta">
                  <span className="skill-category">{skill.category}</span>
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>
              </div>

              <div className="skill-progress">
                <div 
                  className="skill-progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="no-skills" data-aos="fade-up">
            <p>No skills found in this category.</p>
          </div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="skills-bg-decoration">
        <div className="decoration-grid"></div>
      </div>
    </section>
  );
};

export default Skills;
