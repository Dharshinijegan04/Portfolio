import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      {/* Left Sidebar - Contact Information */}
      <div className="contact-sidebar">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a href="mailto:dharshini.jegan04@gmail.com">dharshini.jegan04@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <span className="contact-value">7598569297</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                <a href="https://github.com/Dharshinijegan04" target="_blank" rel="noreferrer">
                  github.com/Dharshinijegan04
                </a>
              </span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-details">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                <a href="https://www.linkedin.com/in/dharshini-jegan" target="_blank" rel="noreferrer">
                  linkedin.com/in/dharshini-jegan
                </a>
              </span>
            </div>
          </div>
        </div>

       
      </div>

    </section>
  );
}

export default Contact;