import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Selva Dharshini Jeganathan</div>
        <div className="logo-tagline">Robotics Engineer & Developer</div>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <div className="main-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <div className="categories-dropdown">
            <span>Categories </span>

            <div className="dropdown-menu">
              <Link to="/education">Education</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;