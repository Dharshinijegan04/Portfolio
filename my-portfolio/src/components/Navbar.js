import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo Section */}
      <div className="nav-left">
        <div className="logo">Selva Dharshini Jeganathan</div>
        <div className="logo-tagline">
          Robotics Engineer & Developer
        </div>
      </div>

      {/* Hamburger / Close Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="mobile-menu"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="mobile-header">
            <div className="mobile-logo">
              Selva Dharshini
            </div>
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

        </div>
      </div>

      {/* Desktop Menu */}
      <div className="nav-right">
        <div className="main-nav">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <div className="categories-dropdown">
            <span>Categories ▼</span>

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