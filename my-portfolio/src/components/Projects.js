import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Friend Recommender",
      desc: "A social networking prototype that suggests friends using AI recommendation algorithms (content-based & collaborative filtering).",
      tech: ["Flask", "Python", "Bootstrap", "AI"],
      link: "https://github.com/Dharshinijegan04"
    },

    {
      title: "E-Commerce Website",
      desc: "A full-stack online store built with Spring Boot & Thymeleaf. Includes user authentication, shopping cart, checkout, and Razorpay payment integration.",
      tech: ["Spring Boot", "Thymeleaf", "MySQL", "Razorpay"],
      link: "https://github.com/Dharshinijegan04"
    },
    
    {
      title: "Robotics Blog Platform",
      desc: "A blog site built with Spring Boot and Thymeleaf where users can register, log in, and post robotics-related content.",
      tech: ["Spring Boot", "Thymeleaf", "HTML", "CSS"],
      link: "https://github.com/Dharshinijegan04"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p>Here are some of the projects I’ve worked on recently 👩‍💻</p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
