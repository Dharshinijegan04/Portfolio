import React from "react";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "🏆 University Rank Certificate",
      detail:
        "Secured University First Rank in B.Tech Automation and Robotics Engineering during Academic Year 2022–2023 at VISTAS."
    },
    {
      title: "🏆 University Rank Certificate",
      detail:
        "Secured University First Rank in B.Tech Automation and Robotics Engineering during Academic Year 2023–2024 at VISTAS."
    },
    {
      title: "🏆 University Rank Certificate",
      detail:
        "Secured University First Rank in B.Tech Automation and Robotics Engineering during Academic Year 2024–2025 at VISTAS."
    },
    {
      title: "🌍 International Student Mobility Programme",
      detail:
        "Selected for Student Mobility Programme at INTI International University, Malaysia (2025)."
    },
    {
      title: "🎤 International Conference",
      detail:
        "Participated in International Conference (ICRTME 2025)."
    },
    {
      title: "🤖 NPTEL Certification",
      detail:
        "Successfully completed Python for Data Science through NPTEL (2025)."
    },
    {
      title: "🤖 NPTEL Certification",
      detail:
        "Successfully completed Experimental Robotics through NPTEL (2024)."
    },
    {
      title: "🤖 NPTEL Certification",
      detail:
        "Successfully completed Automation in Manufacturing through NPTEL (2024)."
    },
    {
      title: "💻 Master in Full Stack Development",
      detail:
        "Successfully completed Master in Full Stack Web Development with Java from IT Vedant (2025)."
    },
    {
      title: "☕ Spring Boot Full Stack Development",
      detail:
        "Successfully completed Spring Boot Full Stack Development Certification from IT Vedant (2025)."
    },
    {
      title: "⚛️ Frontend Developer (React)",
      detail:
        "Successfully completed Frontend Developer (React) Certification through HackerRank (2026)."
    },
    {
      title: "📘 IBM Certification",
      detail:
        "Successfully completed Java Fundamentals powered by IBM Developer Skills Network (2025)."
    },
    {
      title: "🏭 Internship Experience",
      detail:
        "Completed Internship at Blue-D Air Control Engineering, Chennai (2024)."
    },
    {
      title: "💼 Internship Experience",
      detail:
        "Completed Java Programming Internship at CodTech IT Solutions (2025)."
    },
    {
      title: "🏅 Certificate of Appreciation",
      detail:
        "Received Certificate of Appreciation for outstanding performance in NPTEL courses from VISTAS (2024–2025)."
    }
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">
        <h2>🏆 Achievements & Certifications</h2>

        <ul className="achievement-list">
          {achievements.map((item, index) => (
            <li key={index} className="achievement-item">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;