/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Experience = {
  title: string;
  company: string;
  details: string[];
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
    type: 'work',
    details: [
      "Upgraded 100% of client systems from a legacy codebase, rewriting custom features to boost performance and retain all existing features.",
      "Ensured smooth transitions post-upgrade for 80+ clients by selectively running essential Bash and SQL commands, reducing downtime by ~30% and improving maintainability – Bash, PostgreSQL.",
      "Authored internal documentation on upgrade-specific features and known issues, reducing development time and post-deployment bugs by ~40% across teams – Confluence, GitHub.",
      "Delivered full-stack features for B2B apps, enhancing UI and backend functionality for thousands of users.",
      "Partnered with clients and analysts to resolve critical issues, contributing to high client satisfaction through clear communication – Backbone.js, Node.js, PostgreSQL.",
      "Built and tested internal APIs to support new features, using Postico.",
      "Leveraged Jenkins, Docker, and Vim for CI/CD, automated testing, and efficient debugging in staging environments, supporting User Acceptance Testing (UAT)."
    ],
  },
  {
    startYear: 2023,
    endYear: new Date().getFullYear(),
    startMonth: 9,
    endMonth: new Date().getMonth() + 1,
    title: "Part-time Professor",
    company: "Algonquin College",
    details: [
      "Teach C++ programming, object-oriented design, and applied math for game physics and mechanics to prepare students for industry roles.",
      "Introduce version control, agile workflows, and structured debugging to boost student readiness for real-world development - GitHub, Visual Studio.",
      "Developed interactive resources and hands-on exercises to simplify complex game development concepts, boosting student engagement and success.",
    ],
    type: 'work',
  },
  {
    startYear: 2022,
    endYear: 2023,
    startMonth: 1,
    endMonth: 2,
    title: "Software Developer - Delivery",
    company: "Case IQ",
    details: [
      "Collaborated with the Delivery team during sprint planning to scope and prioritize tickets, consistently completing tasks ahead of schedule - Jira, GitHub.",
      "Implemented custom UI/UX functionality based on client requirements, ensuring alignment with brand guidelines and usability best practices - Backbone.js, HTML, CSS, JavaScript.",

    ],
    type: 'work',
  },
  {
    startYear: 2020,
    endYear: 2021,
    startMonth: 1,
    endMonth: 12,
    title: "Lead Application Tester",
    company: "Case IQ",
    details: [
      "Led QA team in front-end testing and documentation using Jira and Confluence.",
      "Proactively uncovered critical bugs early, preventing production issues and earning a QA lead role within the first month.",

    ],
    type: 'work',
  },
  {
    startYear: 2017,
    endYear: 2017,
    startMonth: 6,
    endMonth: 11,
    title: "3D Technical Artist",
    company: "Algonquin College of Applied Arts and Technology",
    details: [

    ],
    type: 'work',
  },
  {
    startYear: 2017,
    endYear: 2017,
    startMonth: 4,
    endMonth: 5,
    title: "3D Artist",
    company: "Canada Science and Technology Museums Corporation",
    details: [

    ],
    type: 'work',
  },
  {
    startYear: 2018,
    endYear: 2021,
    startMonth: 9,
    endMonth: 12,
    title: "Computer Engineering Technology – Computing Science",
    company: "Algonquin College, Ottawa, Ontario",
    details: [

    ],
    type: 'education',
  },
  {
    startYear: 2014,
    endYear: 2017,
    startMonth: 9,
    endMonth: 4,
    title: "Game Development",
    company: "Algonquin College, Ottawa, Ontario",
    details: [

    ],
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
      className="bg-[#535763] py-12 px-4 relative"
      style={{ 
        minHeight: minDateY + 200, 
      }}
    >
      <h2 className="text-white text-3xl font-bold text-center mb-12">My Journey</h2>

       {/* Legend */}
      <div className="flex justify-center gap-10 mb-15 pr-2">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">Experience</span>
          <span className="w-4 h-4 rounded-full bg-[#6390bf]"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#f7a73e]"></span>
          <span className="text-white text-sm font-medium">Education</span>
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
          const baseColor = isEducation ? 'bg-[#f7a73e] hover:bg-[#fab75f]' : 'bg-[#6390bf] hover:bg-[#80b7e0]';
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
              <h3 className="text-white text-lg font-bold">{exp.title}</h3>
              <p className="text-sm text-white">{exp.company}</p>
              <p className="italic text-sm text-white">
                {exp.startMonth && monthNames[exp.startMonth - 1]} {exp.startYear} -{" "}
                {exp.endMonth && monthNames[exp.endMonth - 1]} {exp.endYear}
              </p>
              {isOpen && (
                <motion.div
                  className="text-white mt-4 text-sm whitespace-pre-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {!isOpen && (
                <p className="text-white mt-2 text-xs italic">Click to expand</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
