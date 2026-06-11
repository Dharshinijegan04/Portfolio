import React from "react";
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "B.Tech in Automation & Robotics",
      college: "Vels Institute of Science, Technology & Advanced Studies, Chennai",
      year: "2022 – 2026",
      details: "Final Year Student",
      cgpa: "9.05",
      percentage: null,
      status: "Current"
    },
    {
      degree: "Student Mobility Programme",
      college: "INTI International University, Malaysia",
      year: "2025",
      details: "International Academic Exchange",
      cgpa: null,
      percentage: null,
      status: "International"
    },
    {
      degree: "Higher Secondary (Class 12)",
      college: "Bosco Academy Matric Hr Sec School, Chennai",
      year: "2022",
      details: "Science Stream",
      cgpa: null,
      percentage: "65.1%",
      status: "Completed"
    },
    {
      degree: "Secondary School (Class 10)",
      college: "Bosco Academy Matric Hr Sec School, Chennai",
      year: "2020",
      details: "General Education",
      cgpa: null,
      percentage: "60.5%",
      status: "Completed"
    }
  ];

  return (
    <section className="education">
      <div className="education-container">
        <div className="education-header">
          <h2>Academic Qualifications</h2>
          <p className="education-subtitle">
            A comprehensive overview of my educational background, academic achievements, 
            and professional development milestones.
          </p>
        </div>
        
        <div className="professional-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="degree-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="year-tag">{edu.year}</span>
                </div>
                <div className="institution">{edu.college}</div>
                <p>{edu.details}</p>
                
                <div className="performance-metrics">
                  {edu.cgpa && (
                    <div className="metric">
                      <span className="metric-label">CGPA:</span>
                      <span className="metric-value">{edu.cgpa}/10</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="metric">
                      <span className="metric-label">Percentage:</span>
                      <span className="metric-value">{edu.percentage}</span>
                    </div>
                  )}
                  <div className="metric">
                    <span className="metric-label">Status:</span>
                    <span className="metric-value">{edu.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="professional-stats">
          <div className="stat-box">
            <span className="stat-number">9.4</span>
            <span className="stat-description">Current Academic Score</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">4</span>
            <span className="stat-description">Education Levels</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">2</span>
            <span className="stat-description">Countries Studied In</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-description">Academic Consistency</span>
          </div>
        </div>
        
        <div className="professional-summary">
          <h3 className="summary-title">Academic Profile Summary</h3>
          <ul className="summary-points">
            <li>Pursuing B.Tech in Automation & Robotics with a strong academic record (CGPA: 9.4/10)</li>
            <li>Participated in international student exchange program at INTI University, Malaysia</li>
            <li>Consistent academic performance across all education levels</li>
            <li>Specialized in Science stream during Higher Secondary education</li>
            <li>Demonstrated commitment to continuous learning and academic excellence</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;