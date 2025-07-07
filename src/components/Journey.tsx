/* eslint-disable react-hooks/rules-of-hooks */
// Journey.tsx
'use client';

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    year: 2017,
    title: "Game Development",
    company: "Algonquin College, Ottawa, Ontario",
    timeFrame: "September 2014 - April 2017",
    type: 'education',
    description: [
      <>
        Successfully graduated from the{" "}
        <a
          href="https://www.algonquincollege.com/mediaanddesign/program/game-development/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Game Development
        </a>{" "}
        Program!
      </>,
    ],
  },
  {
    year: 2017,
    title: "3D Technical Artist",
    company: "Algonquin College of Applied Arts and Technology",
    timeFrame: "June 2017 - November 2017",
    type: 'work',
    description: [
      "Full time contract for Unity VR project. 3D Modeller, Texture Artist, Lighting Artist."
    ],
  },
  {
    year: 2017,
    title: "3D Artist",
    company: "Canada Science and Technology Museums Corporation",
    timeFrame: "April 2017 - May 2017",
    type: 'work',
    description: [
      "National Science & Innovation Gala VR Project. Full time volunteer for Unity VR project. 3D Modeller, Texture Artist, Animator, Sound Designer, Game Designer."
    ],
  },
  {
    year: 2023,
    title: "Software Developer - Upgrade",
    company: "Case IQ",
    timeFrame: "September 2023 - April 2025",
    type: 'work',
    description: [
     "Rejoined Case IQ to upgrade legacy client web applications, improving performance and maintainability."
    ],
  },
  {
    year: 2023,
    title: "Part-time Professor",
    company: "Algonquin College",
    timeFrame: "September 2023 - Present",
    type: 'work',
    description: [
     "Instruct game development courses covering both programming and art disciplines. Taught foundational math and C++ programming for 2D and 3D Unreal Engine games, emphasizing Agile workflows and team collaboration tools like JIRA and GitHub. Also led advanced game asset creation classes, coaching students in industry-standard tools such as 3D Studio Max, ZBrush, and Substance Painter to develop professional-level modeling and texturing skills."
    ],
  },
  {
    year: 2022,
    title: "Software Developer - Delivery",
    company: "Case IQ",
    timeFrame: "January 2022 - March 2023",
    type: 'work',
    description: [
      "Hired as a Software Application Developer at Case IQ following my internship, focused on implementing custom features for client web applications."
    ],
  },
  {
    year: 2020,
    title: "Lead Application Tester",
    company: "Case IQ",
    timeFrame: "January 2020 - December 2021",
    type: 'work',
    description: [
      "Completed a Computer Engineering internship at Case IQ, where I was promoted to Quality Assurance Lead within the first month by demonstrating initiative and leadership."
    ],
  },
  {
    year: 2021,
    title: "Computer Engineering",
    company: "Algonquin College, Ottawa, Ontario",
    type: 'education',
    timeFrame: "September 2018 - December 2021",
    description: [
      <>
      Successfully graduated from the {" "}
      <a
        href="https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >Computer Engineering Technology</a>{" "}
      program!
      </>
    ],
  },
];

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
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const grouped = experiences.reduce((acc, exp) => {
    acc[exp.year] = acc[exp.year] || [];
    acc[exp.year].push(exp);
    return acc;
  }, {} as Record<number, typeof experiences>);

  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <section className="relative bg-[#161d2f] py-12 px-4">
      <div className="relative w-full mx-auto">
       <div className="absolute inset-0 border-3 border-blue-500 z-0 pointer-events-none mt-4" />
           <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            <span className="bg-[#161d2f] text-blue-400 px-3 py-1 rounded">
              My Journey
            </span>
          </h2>
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-grey-500 via-blue-400 to-transparent h-full"></div>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 origin-top"
            style={{ scaleY }}
          />

          {sortedYears.map((year, yearIndex) => (
            <div key={year} className="mb-8 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 text-white text-sm font-medium bg-[#161d2f] rounded-full">
                {year}
              </div>

              {grouped[year].map((item, itemIndex) => {
                const isLeft = (yearIndex + itemIndex) % 2 === 0;
                const Icon = item.type === 'education' ? FaGraduationCap : FaBriefcase;
                const ref = useRef(null);
                const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", once: false });

                return (
                  <motion.div
                    key={itemIndex}
                    ref={ref}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                    className={`flex relative ${isMobile ? 'border-2 border-blue-500 flex-col items-center text-center gap-2 py-6 bg-[#161d2f]' : 'justify-between items-start py-8'}`}
                  >
                    {isMobile ? (
                      <>
                        <motion.div
                          className="z-20 bg-blue-400 border-2 border-[#161d2f] rounded-full w-10 h-10 flex items-center justify-center text-white text-md"
                          initial={{ scale: 0.8 }}
                          animate={isInView ? { scale: 1.15 } : {}}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                          <Icon />
                        </motion.div>
                        <motion.h3 className="text-blue-300 text-lg font-bold">
                          {item.title}
                        </motion.h3>
                        <motion.p className="text-orange-300 text-sm">
                          {item.company}
                        </motion.p>
                        <motion.p className="text-orange-300 text-sm">
                          {item.timeFrame}
                        </motion.p>
                        <motion.div className="text-blue-200 text-sm">
                          {item.description.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </motion.div>
                      </>
                    ) : (
                      isLeft ? (
                        <>
                          <motion.div className="w-[45%] text-right pr-6">
                            <h3 className="text-blue-300 text-lg font-bold md:text-lg">{item.title}</h3>
                            <p className="text-orange-300 text-sm">{item.company}</p>
                            <p className="text-orange-200 italic text-xs">{item.timeFrame}</p>
                          </motion.div>
                          <motion.div
                            className="relative z-20 bg-blue-400 border-2 border-[#161d2f] rounded-full w-9 h-9 flex items-center justify-center text-white text-md my-2"
                            initial={{ scale: 0.8 }}
                            animate={isInView ? { scale: 1.15 } : {}}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          >
                            <Icon />
                          </motion.div>
                          <motion.div className="w-[45%] text-left pl-6 text-blue-200 text-sm">
                            {item.description.map((line, idx) => (
                              <p key={idx}>{line}</p>
                            ))}
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <motion.div className="w-[45%] text-right pr-6 text-blue-200 text-sm">
                            {item.description.map((line, idx) => (
                              <p key={idx}>{line}</p>
                            ))}
                          </motion.div>
                          <motion.div
                            className="relative z-20 bg-blue-400 border-2 border-[#161d2f] rounded-full w-9 h-9 flex items-center justify-center text-white text-md my-2"
                            initial={{ scale: 0.8 }}
                            animate={isInView ? { scale: 1.15 } : {}}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          >
                            <Icon />
                          </motion.div>
                          <motion.div className="w-[45%] text-left pl-6">
                            <h3 className="text-blue-300 text-lg font-bold md:text-lg">{item.title}</h3>
                            <p className="text-orange-300 text-sm">{item.company}</p>
                            <p className="text-orange-200 italic text-xs">{item.timeFrame}</p>
                          </motion.div>
                        </>
                      )
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
