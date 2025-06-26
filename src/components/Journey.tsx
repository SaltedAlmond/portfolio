'use client';

import { useState } from "react";

export default function Journey() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      startYear: 2023,
      endYear: 2025,
      title: "Software Developer, Upgrade – Case IQ",
      description: `Led major upgrades of client systems from a legacy codebase, delivering full-stack features with Node.js, Backbone.js, and PostgreSQL. Used Docker, Jenkins, and Bash to support deployment and debugging, improving performance and reducing downtime.`,
    },
    {
      startYear: 2023,
      endYear: 2023,
      title: "Part-Time Professor – Algonquin College",
      description: `Taught C++ programming, object-oriented design, and applied game physics in the Game Development program. Introduced students to GitHub, agile workflows, and effective debugging using Visual Studio.`,
    },
    {
      startYear: 2022,
      endYear: 2023,
      title: "Software Developer, Delivery – Case IQ",
      description: `Developed client-specific UI features and collaborated on sprint planning. Worked with Backbone.js, JavaScript, HTML/CSS, and GitHub to deliver front-end solutions aligned with brand guidelines.`,
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">My Journey</h2>
      <div className="relative border-l-2 border-gray-300 ml-6 pl-6">

      {experiences.map((exp, index) => {
        const isExpanded = expandedIndex === index;

        return (
        <div key={index} className="mb-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 text-sm font-bold text-gray-700">
            {exp.endYear}
          </div>
          <div className={`mt-6 w-1/2 px-4 py-2 rounded-lg shadow-md bg-white text-left
            ${index % 2 === 0 ? 'ml-auto border-l-4 border-blue-500' : 'mr-auto border-r-4 border-pink-500'}
          `}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
          >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className={`text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out overflow-hidden 
            ${isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-70 max-h-6'}`}>{isExpanded ? exp.description : "Click to read more"}
          </p>
          </div>
        </div>
        );
      })}

    </div>
    </section>
  );
}