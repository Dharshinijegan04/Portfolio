import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Hi, I'm <span className="highlight">Selva Dharshini 👋</span></h1>
        <h3>B.Tech in Automation & Robotics | CGPA: 9.4</h3>
        <p>
          🚀 Motivated Robotics Engineering student passionate about 
          <strong> Web Development, AI, and Automation</strong>.  
          I enjoy turning ideas into real-world projects using
          <strong> React, Spring Boot, Flask, and Python</strong>.
        </p>

        <p className="stats">💡Projects | 🌍 International Exposure (INTI University, Malaysia) | 🎨 Creative Designer</p>

        <div className="buttons">
          <a href="/dharshini jegan Resume.pdf" download className="btn-primary">
            📄 Download Resume
          </a>
          <a href="/projects" className="btn-secondary">👩‍💻 View Projects</a>
          <a href="/contact" className="btn-primary">📩 Contact Me</a>
        </div>

        <div className="socials">
          <a href="https://github.com/Dharshinijegan04" target="_blank" rel="noreferrer">🌐 GitHub</a>
          <a href="https://www.linkedin.com/in/dharshini-jegan/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
