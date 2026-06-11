import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 90, icon: "☕" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "React.js", level: 80, icon: "⚛️" },
    { name: "Spring Boot", level: 80, icon: "🍃" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "MySQL", level: 85, icon: "💾" },
    { name: "SolidWorks", level: 70, icon: "⚙️" }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="section-title">Technical Skills</h2>

        <p className="section-desc">
          Technologies and tools I use for software development,
          automation and robotics projects.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}%</p>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;