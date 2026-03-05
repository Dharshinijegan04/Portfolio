import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left section with logo and tagline */}
      <div className="nav-left">
        <div className="logo">Selva Dharshini Jeganathan..</div>
        <div className="logo-tagline">Robotics Engineer & Developer</div>
      </div>
      
      {/* Center section with main navigation */}
      <div className="nav-right">
        <div className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="categories-dropdown">
            {/* Changed from Link to span - no navigation */}
            <span>Categories</span>
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