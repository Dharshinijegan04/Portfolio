import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <div className="contact-header">
            <h1>Contact Me</h1>
            <p>
              Have a project in mind? Let's build something great together
            </p>
          </div>

          <div className="chat-section">
            <h2>Let's have a chat ✨</h2>
            <p>
              I'm currently open to full-time roles, freelance projects, and
              collaborations. Whether you have a question or just want to say hi
              — my inbox is always open!
            </p>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">EMAIL</span>
              <span className="detail-value">
                dharshini.jegan04@gmail.com
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">Chennai, India</span>
            </div>
          </div>

          <div className="social-section">
            <h3>FIND ME ON</h3>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/dharshini-jegan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="https://github.com/Dharshinijegan04"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="mail@example.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project or just say hi! 😊"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;