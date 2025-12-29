import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaArrowRight } from 'react-icons/fa';
import { getProjects } from '../../services/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Separate featured projects
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const handleViewProject = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Projects</h2>
            <p>My recent work</p>
          </div>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>My recent work</p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter" data-aos="fade-up" data-aos-delay="100">
          <FaFilter className="filter-icon" />
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

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="featured-section">
            <h3 className="featured-title" data-aos="fade-up">
              <span className="featured-badge">⭐ Featured Projects</span>
            </h3>
            <div className="featured-projects">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project._id} 
                  className="project-card featured"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 100)}
                >
                  <div className="project-icon-wrapper">
                    <FaCode className="project-icon" />
                  </div>
                  
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="btn-view-project"
                      onClick={() => handleViewProject(project.githubUrl)}
                      disabled={!project.githubUrl}
                    >
                      <FaGithub /> View Repository <FaArrowRight />
                    </button>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-live-demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>

                  <div className="project-decoration"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div className="regular-projects">
            {regularProjects.map((project, index) => (
              <div 
                key={project._id} 
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                
                <div className="project-icon-wrapper small">
                  <FaCode className="project-icon" />
                </div>
                
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4} more</span>
                  )}
                </div>

                <button 
                  className="btn-view-project small"
                  onClick={() => handleViewProject(project.githubUrl)}
                  disabled={!project.githubUrl}
                >
                  <FaGithub /> View Repository <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="no-projects" data-aos="fade-up">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="projects-bg-decoration">
        <div className="decoration-dots"></div>
      </div>
    </section>
  );
};

export default Projects;
