import React from "react";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "University Rank Certificate",
      detail: "Secured university First rank in B.Tech Automation and Robotics programme during Academic Year 2022-2023 at VISTAS University."
    },
    {
      title: "University Rank Certificate",
      detail: "Secured university First rank in B.Tech Automation and Robotics programme during Academic Year 2023-2024 at VISTAS University."
    },
    {
      title: "University Rank Certificate",
      detail: "Secured university First rank in B.Tech Automation and Robotics programme during Academic Year 2024-2025 at VISTAS University."
    }, 
    {
      title: "Student Mobility Programme",
      detail: "Selected for International Exchange at INTI International University, Malaysia (2025)."
    },
    {
      title: "NPTEL Certification",
      detail: "Completed 'Automation in Manufacturing' with Elite grade (2024)."
    },
    {
      title: "NPTEL Certification",
      detail: "Completed 'Experimental Robotics' with Elite grade (2024)."
    },
    {
      title: "NPTEL Certification",
      detail: "Completed 'Python For Data Science' with Elite grade (2025)."
    },
    {
      title: "NPTEL Certification",
      detail: "Completed 'Microrobotics' with Elite grade (2025)."
    },
    {
     title: "NPTEL+ Workshop",
      detail: "Successfully completed workshop on 'Forecasting Using Machine Learning Tools' by Syracuse University (Jan 2025)."
    },
    {
      title: "NPTEL+ Workshop",
      detail: "Successfully completed workshop on 'Signal Classification using Deep Learning' by MathWorks (Jan 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'Master in Full Stack Web Development With Java' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'Advanced Web Design' course (Sep 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'SQL' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'SQL Professional-Bonus Lessons' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'FSD Spring Boot' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'Core Web Design' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'Core Java' course (May 2025)."
    },
    {
      title: "I.T. Vedant Certification",
      detail: "Successfully completed 'Project and Case Studies-JFSD' course (Sep 2025)."
    },
    {
      title: "IBM Certification",
      detail: "Successfully completed 'SQL and Relational Databases 101' (DB0101EN) powered by IBM Developer Skills Network, issued via I.T. Vedant (Apr 2025)."
    },
    {
      title: "IBM Certification",
      detail: "Successfully completed 'Java Fundamentals' (CEJAVA1IN) powered by IBM Developer Skills Network, issued via I.T. Vedant (Apr 2025)."
    },
    {
      title: "IBM Certification",
      detail: "Successfully completed 'Web Development using HTMl' (CEWDHT1IN) powered by IBM Developer Skills Network, issued via I.T. Vedant (Apr 2025)."
    },
    {
      title: "Internship Experience",
      detail: "Successfully completed internship in 'Java Programming' at CODTECH IT Solutions Pvt. Ltd. (Apr–May 2025)."
    },
    {
      title: "Internship Experience",
      detail: "Successfully completed internship at Blue-D Air Control Engineering, Chennai, focusing on production processes, project management, and inventory management (Dec 2024)."
    }, 
    {
      title: "Times NIE National Aptitude Challenge",
      detail: "Successfully participated in the Times NIE National Aptitude Challenge 2016-17 organized by The Times of India and BYJU'S."
    },
    {
      title: "Times NIE National Aptitude Challenge",
      detail: "Successfully participated in the Times NIE National Aptitude Challenge 2017-18 organized by The Times of India and BYJU'S."
    },
    {
      title: "CADDAM Technologies Certification",
      detail: "Successfully completed SolidWorks training with Grade A from CADDAM Technologies Pvt. Ltd. (Feb-Mar 2024)."
    },
    {
      title: "Seed For Safety Certification",
      detail: "Successfully completed training on Industrial Safety from ISO certified company Seed For Safety (Sep 2024)."
    },
    {
      title: "Stay Safe Online Certification",
      detail: "Successfully participated in online quiz on 'Secure Social Media Practices' organized by Ministry of Electronics & IT, Government of India (Mar-Apr 2023)."
    }
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">
        <h2>Achievements & Certifications</h2>
        <ul className="achievement-list">
          {achievements.map((item, index) => (
            <li key={index} className="achievement-item">
              <h3>🏆 {item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
