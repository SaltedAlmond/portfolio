/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Experience = {
  title: string;
  company: string;
  details: string;
  startYear: number;
  endYear: number;
  startMonth?: number;
  endMonth?: number;
  type: 'work' | 'education';
};

const experiences: Experience[] = [
  {
    startYear: 2023,
    endYear: 2025,
    startMonth: 9,
    endMonth: 3,
    title: "Software Developer - Upgrade",
    company: "Case IQ",
    details:
      "Worked on upgrading systems, improving performance, and deploying new features using Node.js and Docker.",
    type: 'work',
  },
  {
    startYear: 2023,
    endYear: new Date().getFullYear(),
    startMonth: 9,
    endMonth: new Date().getMonth() + 1,
    title: "Part-time Professor",
    company: "Algonquin College",
    details:
      "Taught C++ programming, object-oriented design, and applied mathematics for game development.",
    type: 'work',
  },
  {
    startYear: 2022,
    endYear: 2023,
    startMonth: 1,
    endMonth: 2,
    title: "Software Developer - Delivery",
    company: "Case IQ",
    details:
      "Delivered client-specific features and improved system maintainability using Backbone.js and GitHub.",
    type: 'work',
  },
  {
    startYear: 2020,
    endYear: 2021,
    startMonth: 1,
    endMonth: 12,
    title: "Lead Quality Assurance Engineer",
    company: "Case IQ",
    details:
      "Delivered client-specific features and improved system maintainability using Backbone.js and GitHub.",
    type: 'work',
  },
  {
    startYear: 2017,
    endYear: 2017,
    startMonth: 6,
    endMonth: 11,
    title: "3D Technical Artist",
    company: "Algonquin College of Applied Arts and Technology",
    details:
      "Delivered client-specific features and improved system maintainability using Backbone.js and GitHub.",
    type: 'work',
  },
  {
    startYear: 2017,
    endYear: 2017,
    startMonth: 4,
    endMonth: 5,
    title: "3D Artist",
    company: "Canada Science and Technology Museums Corporation",
    details:
      "Delivered client-specific features and improved system maintainability using Backbone.js and GitHub.",
    type: 'work',
  },
  {
    startYear: 2018,
    endYear: 2021,
    startMonth: 9,
    endMonth: 12,
    title: "Computer Engineering Technology – Computing Science",
    company: "Algonquin College, Ottawa, Ontario",
    details: "Specialized in international supply chain optimization and data analysis.",
    type: 'education',
  },
  {
    startYear: 2014,
    endYear: 2017,
    startMonth: 9,
    endMonth: 4,
    title: "Game Development",
    company: "Algonquin College, Ottawa, Ontario",
    details: "Specialized in international supply chain optimization and data analysis.",
    type: 'education',
  },
];

function yearMonthToDecimal(year: number, month = 1) {
  return year + (month - 1) / 12;
}

export default function Journey() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Find min and max date decimals across experiences
  const minDateDecimal = Math.min(
    ...experiences.map(e => yearMonthToDecimal(e.startYear, e.startMonth || 1))
  );
  const maxDateDecimal = Math.max(
    ...experiences.map(e => yearMonthToDecimal(e.endYear, e.endMonth || 12))
  );

  const timelineHeight = 1200; // total vertical timeline height in px (adjust as needed)
  const topPadding = 50; // padding from top for breathing room

  const heightPerDecimal = timelineHeight / (maxDateDecimal - minDateDecimal);

  const minDateY = getYPosition(minDateDecimal);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Map a date decimal to px offset from top, with padding
  function getYPosition(dateDecimal: number) {
    // invert so maxDateDecimal is at top (topPadding),
    // minDateDecimal is at bottom (topPadding + timelineHeight)
    return topPadding + (maxDateDecimal - dateDecimal) * heightPerDecimal;
  }

  return (
    <section
      className="bg-gray-100 py-12 px-4 relative"
      style={{ 
        minHeight: minDateY + 200, 
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>

       {/* Legend */}
      <div className="flex justify-center gap-10 mb-15 pr-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 text-sm font-medium">Experience</span>
          <span className="w-4 h-4 rounded-full bg-blue-100 border border-blue-300"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-200 border border-green-400"></span>
          <span className="text-gray-700 text-sm font-medium">Education</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline vertical line */}
        <div
          className="absolute left-1/2 w-1 bg-gray-300"
          style={{ height: timelineHeight, top: topPadding, transform: 'translateX(-50%)' }}
        />

        {/* Year markers */}
        {Array.from(
          { length: Math.ceil(maxDateDecimal) - Math.max(Math.floor(minDateDecimal), 2015) + 1 },
          (_, idx) => Math.ceil(maxDateDecimal) - idx
        ).map(year => {
          // position each year on timeline
          const yPos = getYPosition(year);
          return (
            <div
              key={year}
              className="absolute left-1/2 -translate-x-1/2 bg-white px-3 rounded-full border border-gray-400 select-none text-sm text-gray-600"
              style={{ top: yPos - 12 /* half of approx label height */ }}
            >
              {year}
            </div>
          );
        })}

        {/* Experience blobs */}
        {experiences.map((exp, i) => {
          const startDec = yearMonthToDecimal(exp.startYear, exp.startMonth || 1);
          const endDec = yearMonthToDecimal(exp.endYear, exp.endMonth || 12);

          const top = getYPosition(endDec);   // top = end date (more recent)
          const bottom = getYPosition(startDec); // bottom = start date (older)
          const height = bottom - top;

          const isEducation = exp.type === 'education';
          const baseColor = isEducation ? 'bg-green-100 hover:bg-green-200' : 'bg-blue-50 hover:bg-blue-100';
          const isOpen = openIndex === i;

          const ref = useRef(null);
          const isInView = useInView(ref, { margin: "-50px" });

          return (
            <motion.div
              key={i}
              ref={ref}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setOpenIndex(openIndex === i ? null : i);
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`cursor-pointer rounded-2xl shadow-md transition-all duration-500 ease-in-out overflow-auto
                ${baseColor}
                ${isOpen
                  ? "fixed top-10 left-10 right-10 bottom-10 z-50 p-8 w-auto max-w-[90vw] max-h-[90vh]"
                  : `absolute w-[45%] p-4 ${i % 2 === 0 ? "left-[55%]" : "right-[55%]"}`
                }
              `}
              style={{
                top: isOpen ? undefined : top,
                height: isOpen ? undefined : height,
              }}
            >
              <h3 className="text-lg font-bold">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="italic text-sm text-gray-600">
                {exp.startMonth && monthNames[exp.startMonth - 1]} {exp.startYear} -{" "}
                {exp.endMonth && monthNames[exp.endMonth - 1]} {exp.endYear}
              </p>
              {isOpen && (
                <motion.p
                  className="mt-4 text-gray-700 text-sm whitespace-pre-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {exp.details}
                </motion.p>
              )}
              {!isOpen && (
                <p className="mt-2 text-gray-500 text-xs italic">Click to expand</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
