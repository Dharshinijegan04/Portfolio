import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Spring Boot", level: 80 },
    { name: "HTML / CSS", level: 100 },
    { name: "MySQL", level: 85 },
    { name: "CAD / SolidWorks", level: 70 }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="section-title">Technical Skills</h2>
        <p className="section-desc">
          A collection of technologies and tools I frequently work with.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <span
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
