import { useState } from "react";

type Experience = {
  year: string;
  title: string;
  company: string;
  details: string;
};

const experiences: Experience[] = [
  {
    year: "2024",
    title: "Software Developer",
    company: "Case IQ",
    details:
      "Worked on upgrading systems, improving performance, and deploying new features using Node.js and Docker.",
  },
  {
    year: "2022",
    title: "Part-time Professor",
    company: "Algonquin College",
    details:
      "Taught C++ programming, object-oriented design, and applied mathematics for game development.",
  },
  {
    year: "2020",
    title: "Intern Developer",
    company: "Tech Startup",
    details:
      "Assisted in front-end development using React, and contributed to backend REST API design.",
  },
];

export default function Journey() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 700px;
          margin: 2rem auto;
          padding: 2rem 0;
        }
        .line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #ddd;
          transform: translateX(-50%);
          z-index: 0;
        }
        .year-marker {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 4px 10px;
          border-radius: 20px;
          border: 2px solid #0070f3;
          font-weight: bold;
          color: #0070f3;
          margin: 2rem 0;
          z-index: 2;
          width: max-content;
        }
        .item {
          position: relative;
          width: 45%;
          padding: 1rem;
          margin: 1rem 0 3rem 0;
          border-radius: 20px;
          background: #f0f8ff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
          z-index: 2;
        }
        .item:hover {
          background: #e0f0ff;
        }
        .left {
          left: 0;
          text-align: left;
          transform-origin: right center;
        }
        .right {
          left: 55%;
          text-align: left;
          transform-origin: left center;
        }
        .title {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .company {
          font-style: italic;
          color: #555;
          margin-bottom: 0.5rem;
        }
        .details {
          margin-top: 0.5rem;
          color: #333;
          font-size: 0.95rem;
        }
      `}</style>

      <div className="timeline">
        <div className="line" />
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="year-marker">{exp.year}</div>
            <div
              className={`item ${i % 2 === 0 ? "left" : "right"}`}
              onClick={() => toggleOpen(i)}
            >
              <div className="title">{exp.title}</div>
              <div className="company">{exp.company}</div>
              {openIndex === i && <div className="details">{exp.details}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
