"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
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
        Graduated from the{" "}
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
      "Contributed 3D modeling, texturing, animation, sound, and game design to a Unity VR experience for the National Science & Innovation Gala.",
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
        Helped recreate Algonquin College&apos;s DARE District in Unity VR,
        contributing modeling, textures, and lighting.{" "}
        <a
          href="https://www.youtube.com/watch?v=Uis4SCYNjrM&list=WL"
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
      "Joined Case IQ through a Computer Engineering internship and was promoted to QA Lead within the first month after demonstrating initiative and strong issue detection.",
    ],
  },
  {
    year: 2021,
    title: "Computer Engineering",
    company: "Algonquin College, Ottawa, Ontario",
    timeFrame: "September 2018 - December 2021",
    type: "education",
    description: [
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
    title: "Software Developer - Delivery",
    company: "Case IQ",
    timeFrame: "January 2022 - March 2023",
    type: "work",
    description: [
      "Moved into software development after the internship, implementing custom features and integrations for client web applications.",
    ],
  },
  {
    year: 2023,
    title: "Software Developer - Upgrade",
    company: "Case IQ",
    timeFrame: "September 2023 - March 2025",
    type: "work",
    description: [
      "Rejoined Case IQ to modernize and upgrade legacy client applications while improving performance, reliability, and maintainability.",
    ],
  },
  {
    year: 2023,
    title: "Part-time Professor",
    company: "Algonquin College",
    timeFrame: "September 2023 - Present",
    type: "work",
    description: [
      "Teach programming, applied math, game development, and asset creation while helping students build practical skills with C++, Unreal Engine, GitHub, JIRA, 3ds Max, ZBrush, and Substance Painter.",
    ],
  },
  {
    year: 2025,
    title: "Tools Developer & Specialist",
    company: "Ross Video",
    timeFrame: "October 2025 - June 2026",
    type: "work",
    side: "left",
    description: [
      "Joined Ross Video to build internal developer and QA tooling across the full project lifecycle. Took solutions from architecture through implementation and deployment, spanning AI-assisted test analysis, documentation automation, security workflows, access control, CI/CD infrastructure, and enterprise integrations.",
    ],
  },
];

const companyUrls: Record<string, string> = {
  "Case IQ": "https://www.caseiq.com/",
  "Ross Video": "https://www.rossvideo.com/",
};

function TimelineItem({
  item,
  titleOnLeft,
}: {
  item: Experience;
  titleOnLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
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

  const description = (
    <div
      className={`text-muted leading-7 ${
        titleOnLeft ? "md:text-left" : "md:text-right"
      }`}
    >
      {item.description.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:items-start md:gap-6"
    >
      <div className="pl-14 md:hidden">{title}</div>

      <div className="hidden md:block">{titleOnLeft ? title : description}</div>

      <div className="absolute left-0 top-9 z-10 md:static md:flex md:justify-center">
        <div className="timeline-marker flex h-10 w-10 items-center justify-center rounded-full text-base">
          <Icon aria-hidden="true" />
        </div>
      </div>

      <div className="hidden md:block">{titleOnLeft ? description : title}</div>

      <div className="pl-14 md:hidden">{description}</div>
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
          <p className="eyebrow mb-3">The path here</p>
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
              <div className="surface-strong text-main relative z-20 ml-14 inline-flex rounded-[4px] px-3 py-1 text-sm font-bold md:left-1/2 md:ml-0 md:-translate-x-1/2">
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
