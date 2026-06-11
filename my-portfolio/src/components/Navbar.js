import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="logo">Selva Dharshini Jeganathan</div>
        <div className="logo-tagline">
          Robotics Engineer & Developer
        </div>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      <div className={`mobile-overlay ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu">

          <div className="mobile-header">
            <div>
              <div className="mobile-logo">
                Selva Dharshini
              </div>
            </div>

            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </Link>

          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>

          <Link to="/achievements" onClick={() => setMenuOpen(false)}>
            Achievements
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button className="resume-btn">
            Resume
          </button>

        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="nav-right">
        <div className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <div className="categories-dropdown">
            <span>Categories </span>

            <div className="dropdown-menu">
              <Link to="/education">Education</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          <Link to="/contact">Contact</Link>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;