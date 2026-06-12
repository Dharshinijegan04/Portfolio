import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>
          Hi, I'm <span className="highlight">Selva Dharshini 👋</span>
        </h1>

        <h3>B.Tech in Automation & Robotics | CGPA: 9.05</h3>

        <p>
          🚀 Motivated Robotics Engineering student passionate about
          <strong> Web Development, AI, and Automation</strong>.
          I enjoy turning ideas into real-world projects using
          <strong> React, Spring Boot, Flask, and Python</strong>.
        </p>

        <p className="stats">
          💡 Projects | 🌍 International Exposure (INTI University, Malaysia)
          | 🎨 Creative Designer
        </p>

        <div className="buttons">
          <a
            href="/dharshini jegan Resume.pdf"
            download
            className="btn-primary"
          >
            📄 Download Resume
          </a>

          <a href="/projects" className="btn-secondary">
            👩‍💻 View Projects
          </a>

          <a href="/contact" className="btn-primary">
            📩 Contact Me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/Dharshinijegan04"
            target="_blank"
            rel="noreferrer"
          >
            🌐 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dharshini-jegan/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>

        {/* Statistics Section */}
        <div className="stats-container">
          <div className="stat-box">
            <h2>6+</h2>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <h2>25+</h2>
            <p>Certifications</p>
          </div>

          <div className="stat-box">
            <h2>1</h2>
            <p>International Program</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;