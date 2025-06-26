import React from "react";

const experiences = [
  {
    year: "2025",
    title: "Software Developer",
    description: "Working at XYZ Corp on full-stack development.",
  },
  {
    year: "2023",
    title: "Intern",
    description: "Internship at ABC Inc, focused on front-end development.",
  },
  {
    year: "2021",
    title: "Graduated",
    description: "Completed my Bachelor's degree in Computer Science.",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {experiences.map((exp, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-blob" />
          <div className="timeline-content">
            <h3>{exp.year} - {exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
      <style jsx>{`
        .timeline-container {
          position: relative;
          padding-left: 40px;
          max-width: 600px;
          margin: 0 auto;
          font-family: sans-serif;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #333;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 30px;
          display: flex;
          align-items: flex-start;
        }

        .timeline-blob {
          width: 16px;
          height: 16px;
          background-color: #555;
          border-radius: 50%;
          position: absolute;
          left: 12px;
          top: 8px;
        }

        .timeline-content {
          margin-left: 40px;
        }

        .timeline-content h3 {
          margin: 0 0 5px 0;
          font-size: 1.2rem;
          color: #222;
        }

        .timeline-content p {
          margin: 0;
          color: #555;
          font-size: 1rem;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
}
