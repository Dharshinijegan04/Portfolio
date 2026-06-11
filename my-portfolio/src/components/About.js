import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* Left side: profile picture */}
        <div className="about-image">
          <img 
            src="/SD.jpg"  
            alt="Selva Dharshini"
          />
        </div>

        {/* Right side: about content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am a highly motivated B.Tech student specializing in Automation and Robotics 
            (2022–2026) at Vels Institute of Science, Technology & Advanced Studies, Chennai.
          </p>

          <p>
            I have gained valuable international exposure through the Student Mobility Programme 
            at INTI International University, Malaysia (2025). I currently maintain a strong 
            academic record with a CGPA of 9.05 / 10.
          </p>

          <p>
            My core interests include Robotics, Artificial Intelligence, and Full-Stack Web Development. 
            I am passionate about applying interdisciplinary knowledge to design innovative, 
            technology-driven solutions for real-world challenges.
          </p>

          <p>
            Alongside my technical pursuits, I possess a creative mindset and enjoy reading, 
            music, photography, pencil sketching, coding, and digital design. These interests 
            strengthen my analytical thinking and problem-solving abilities.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">🤖 Robotics & Automation</div>
            <div className="highlight-box">💻 Full-Stack Web Development</div>
            <div className="highlight-box">🌍 International Academic Exposure</div>
            <div className="highlight-box">🎨 Creative & Technical Thinker</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
