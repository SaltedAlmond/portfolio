/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Blob from "@/components/Blob";
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
    details: [],
    type: 'work',
  },
  {
    startYear: 2017,
    endYear: 2017,
    startMonth: 4,
    endMonth: 5,
    title: "3D Artist",
    company: "Canada Science and Technology Museums Corporation",
    details: [],
    type: 'work',
  },
  {
    startYear: 2018,
    endYear: 2021,
    startMonth: 9,
    endMonth: 12,
    title: "Computer Engineering",
    company: "Algonquin College, Ottawa, Ontario",
    details: [],
    type: 'education',
  },
  {
    startYear: 2014,
    endYear: 2017,
    startMonth: 9,
    endMonth: 4,
    title: "Game Development",
    company: "Algonquin College, Ottawa, Ontario",
    details: [],
    type: 'education',
  },
];

function yearMonthToDecimal(year: number, month = 1) {
  return year + (month - 1) / 12;
}

function useIsMobile(threshold = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < threshold);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [threshold]);

  return isMobile;
}

export default function Journey() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sortedExperiences = experiences
  .slice()
  .sort((a, b) => {
    const aDec = yearMonthToDecimal(a.startYear, a.startMonth || 1);
    const bDec = yearMonthToDecimal(b.startYear, b.startMonth || 1);
    return aDec - bDec; // Ascending order (earliest to latest)
  });

  const experiencesByYear: Record<number, Experience[]> = {};
  for (const exp of sortedExperiences) {
    if (!experiencesByYear[exp.endYear]) experiencesByYear[exp.endYear] = [];
    experiencesByYear[exp.endYear].push(exp);
  }

  const yearsSortedAsc = Object.keys(experiencesByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const isMobile = useIsMobile();

  return (
    <section className="bg-[#535763] py-12 px-4 relative min-h-[600px]">
      <h2 className="text-white text-3xl font-bold text-center mb-12">My Journey</h2>
      <div className="flex justify-center gap-5 mb-10 flex-wrap mr-2">
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
        <div
          className="absolute left-1/2 w-1 bg-gray-300"
          style={{ top: 0, bottom: 0, transform: 'translateX(-50%)' }}
        />

        {yearsSortedAsc.map((year) => {
          const exps = experiencesByYear[year];
          const blockHeight = exps.length * 120;

          return (
            <div
              key={year}
              className="relative"
              style={{
                height: blockHeight,
                marginBottom: 40,
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <div
                className="absolute left-1/2 -translate-x-1/2 bg-white px-3 rounded-full border border-gray-400 select-none text-sm text-gray-600"
                style={{ top: -24 }}
              >
                {year}
              </div>

              {exps.map((exp) => {
                const globalIndex = sortedExperiences.findIndex(e => e === exp);
                const isEducation = exp.type === 'education';
                const baseColor = isEducation ? 'bg-[#f7a73e] hover:bg-[#fab75f]' : 'bg-[#6390bf] hover:bg-[#80b7e0]';
                const isOpen = openIndex === `${year}-${globalIndex}`;

                const ref = useRef(null);
                const isInView = useInView(ref, { margin: "-50px" });

                const sideClass = isMobile
                  ? 'left-1/2 -translate-x-1/2 w-[90%]'
                  : globalIndex % 2 === 0
                    ? 'left-[2%] w-[45%]'
                    : 'right-[2%] w-[45%]';

                const i = exps.indexOf(exp);

                return (
                  <Blob
                    key={globalIndex}
                    exp={exp}
                    year={year}
                    globalIndex={globalIndex}
                    isMobile={isMobile}
                    baseColor={baseColor}
                    sideClass={sideClass}
                    i={i}
                    monthNames={monthNames}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
