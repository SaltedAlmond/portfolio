"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useId, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

type Experience = {
  year: number;
  title: string;
  company: string;
  timeFrame: string;
  type: "work" | "education";
  description: ReactNode[];
  side?: "left" | "right";
};

const experiences: Experience[] = [
  {
    year: 2017,
    title: "Game Development",
    company: "Algonquin College, Ottawa, Ontario",
    timeFrame: "September 2014 - April 2017",
    type: "education",
    description: [
      <>
        Discovered my passion for building interactive experiences while developing skills in programming, game design, and 3D art. This program sparked my interest in solving technical and creative problems through software.{" "}
        <a
          href="https://www.algonquincollege.com/mediaanddesign/program/game-development/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          Game Development
        </a>{" "}
        program.
      </>,
    ],
  },
  {
    year: 2017,
    title: "3D Artist",
    company: "Canada Science and Technology Museums Corporation",
    timeFrame: "April 2017 - May 2017",
    type: "work",
    description: [
      "My first professional role, where I contributed to a Unity VR experience for the National Science & Innovation Gala. It gave me valuable industry experience and introduced me to the importance of collaboration and professional networking.",
    ],
  },
  {
    year: 2017,
    title: "3D Technical Artist",
    company: "Algonquin College",
    timeFrame: "June 2017 - November 2017",
    type: "work",
    description: [
      <>
        After building relationships through the Game Development program, I was offered a contract at Algonquin College to help recreate the DARE District in Unity VR. This experience strengthened both my technical skills and reinforced how meaningful professional relationships can shape new opportunities.{" "}
        <a
          href="https://www.youtube.com/watch?v=Uis4SCYNjrM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          Watch the tour
        </a>
        .
      </>,
    ],
  },
  {
    year: 2020,
    title: "Lead Application Tester",
    company: "Case IQ",
    timeFrame: "January 2020 - December 2021",
    type: "work",
    description: [
      "My first step into professional software engineering, where I developed a strong foundation in software quality, debugging, and problem solving. The experience led to a promotion to QA Lead within my first month and sparked my interest in improving engineering workflows through automation.",
    ],
  },
  {
    year: 2021,
    title: "Computer Engineering",
    company: "Algonquin College, Ottawa, Ontario",
    timeFrame: "September 2018 - December 2021",
    type: "education",
    description: [
      "Wanting to strengthen my software engineering and programming skills, I returned to Algonquin College to study Computer Engineering Technology. This marked the beginning of my transition from game development into software engineering, backend systems, and automation.",
      <>
        Graduated with honours from the{" "}
        <a
          href="https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          Computer Engineering Technology
        </a>{" "}
        program.
      </>,
    ],
  },
  {
    year: 2022,
    title: "Software Developer",
    company: "Case IQ",
    timeFrame: "January 2022 - March 2025",
    type: "work",
    description: [
      "Transitioned from QA into software development, building enterprise applications, backend integrations, and automation for large-scale customer deployments. As I worked on modernizing legacy customer environments, I discovered how much I enjoyed solving engineering challenges through automation and building tools that make developers more productive.",
    ],
  },
  {
    year: 2023,
    title: "Professor",
    company: "Algonquin College",
    timeFrame: "September 2023 - Present",
    type: "work",
    description: [
      "As my software engineering career grew, I was invited back to Algonquin College to teach Game Development. It has become an opportunity to give back to the program that launched my own career while continually refining my understanding of software engineering through teaching and mentorship.",
    ],
  },
  {
    year: 2025,
    title: "Software Developer - Test Automation & AI Tools",
    company: "Ross Video",
    timeFrame: "October 2025 - June 2026",
    type: "work",
    side: "right",
    description: [
      "Joined Ross Video to build internal engineering platforms that improved developer productivity across QA, DevOps, and software engineering. This role brought together everything I’d learned throughout my career; backend development, automation, infrastructure, AI-assisted tooling, and end-to-end ownership of technical solutions.",
    ],
  },
  {
    year: 2026,
    title: "Software Engineer II - Site Reliability Engineering",
    company: "Warner Bros. Discovery",
    timeFrame: "August 2026 - Present",
    type: "work",
    description: [
      "Building platforms at Ross Video showed me how much I enjoyed the infrastructure underneath them, so I joined Warner Bros. Discovery’s Site Reliability Engineering team supporting CNN. Working on production systems at this scale has become my path to learning AWS and cloud infrastructure in depth; managing resources through Terraform, supporting Kubernetes environments, owning DNS, and keeping the services behind CNN reliable and cost-efficient.",
    ],
  },
];

const companyUrls: Record<string, string> = {
  "Case IQ": "https://www.caseiq.com/",
  "Ross Video": "https://www.rossvideo.com/",
  "Warner Bros. Discovery": "https://www.wbd.com/",
};

function TimelineItem({
  item,
  titleOnLeft,
}: {
  item: Experience;
  titleOnLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const descriptionId = useId();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [0.3, 0.68, 1, 0.68, 0.3]
  );
  const Icon = item.type === "education" ? FaGraduationCap : FaBriefcase;
  const companyUrl = companyUrls[item.company];

  const title = (
    <div className={titleOnLeft ? "md:text-right" : "md:text-left"}>
      <h3 className="journey-role text-accent text-xl font-bold sm:text-2xl">
        {item.title}
      </h3>
      <p className="text-secondary mt-1 font-semibold">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/35 underline-offset-4 transition-[text-decoration-color] hover:decoration-current"
          >
            {item.company}
          </a>
        ) : (
          item.company
        )}
      </p>
      <p className="text-muted mt-1 text-sm italic">{item.timeFrame}</p>
    </div>
  );

  const toggle = () => setExpanded((value) => !value);

  // Clicking anywhere on the entry toggles it, except on links inside it.
  const handleRowClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    toggle();
  };

  const renderDescription = (variant: "mobile" | "desktop") => {
    const panelId = `${descriptionId}-${variant}`;
    // On desktop, keep the toggle icon next to the timeline line.
    const iconTowardLine = variant === "desktop" && !titleOnLeft;

    return (
      <div
        className={`text-muted leading-7 ${
          titleOnLeft ? "md:text-left" : "md:text-right"
        }`}
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          className={`journey-toggle text-accent inline-flex min-h-11 cursor-pointer items-center gap-3 text-sm font-semibold ${
            iconTowardLine ? "flex-row-reverse" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="journey-toggle-icon relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current"
          >
            <span className="absolute h-0.5 w-3 rounded-full bg-current" />
            <span
              className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                expanded ? "scale-y-0" : ""
              }`}
            />
          </span>
          <span className="journey-toggle-label">
            {expanded ? "Hide the story" : "Read the story"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-2">
                {item.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onClick={handleRowClick}
      className="journey-item relative grid cursor-pointer gap-4 py-8 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:items-start md:gap-6"
    >
      <div className="pl-14 md:hidden">{title}</div>

      <div className="hidden md:block">{titleOnLeft ? title : renderDescription("desktop")}</div>

      <div className="absolute left-0 top-9 z-10 md:static md:flex md:justify-center">
        <div className="timeline-marker flex h-10 w-10 items-center justify-center rounded-full text-base">
          <Icon aria-hidden="true" />
        </div>
      </div>

      <div className="hidden md:block">{titleOnLeft ? renderDescription("desktop") : title}</div>

      <div className="pl-14 md:hidden">{renderDescription("mobile")}</div>
    </motion.div>
  );
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const grouped = experiences.reduce<Record<number, Experience[]>>(
    (result, experience) => {
      result[experience.year] ??= [];
      result[experience.year].push(experience);
      return result;
    },
    {}
  );

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  let itemIndex = 0;

  return (
    <section id="journey" className="section-band px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow mb-3">How I Got Here</p>
          <h2 className="section-title">My journey</h2>
          <p className="section-copy mt-4">
            A career shaped by creative technology, software engineering,
            teaching, and the tools that connect them.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mx-auto mt-14 max-w-5xl">
          <div className="timeline-line absolute bottom-0 left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="timeline-progress absolute bottom-0 left-5 top-0 w-px origin-top md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY }}
          />

          {years.map((year) => (
            <div key={year} className="relative">
              <div className="timeline-year text-main relative z-20 ml-14 inline-flex rounded-[4px] px-3 py-1 text-sm font-bold md:left-1/2 md:ml-0 md:-translate-x-1/2">
                {year}
              </div>

              {grouped[year].map((item) => {
                const titleOnLeft =
                  item.side === "left" ||
                  (item.side !== "right" && itemIndex % 2 === 0);
                itemIndex += 1;

                return (
                  <TimelineItem
                    key={`${item.company}-${item.title}-${item.timeFrame}`}
                    item={item}
                    titleOnLeft={titleOnLeft}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
