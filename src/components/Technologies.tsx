"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaCodeBranch,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaExchangeAlt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaPlug,
  FaPython,
  FaReact,
  FaServer,
  FaShieldAlt,
  FaVial,
} from "react-icons/fa";
import { PiCursorClick, PiFileCpp } from "react-icons/pi";
import {
  SiAmazonec2,
  SiApache,
  SiClaude,
  SiElasticsearch,
  SiGithubcopilot,
  SiGraphql,
  SiJenkins,
  SiNextdotjs,
  SiNginx,
  SiOpenai,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiRobotframework,
  SiSelenium,
  SiSharp,
  SiTypescript,
  SiUnrealengine,
  SiUnity,
} from "react-icons/si";

const groups = [
  {
    title: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "C++",
      "C#",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Application development",
    items: [
      "Node.js",
      "React",
      "Next.js",
      "REST APIs",
      "GraphQL",
      "SOAP",
    ],
  },
  {
    title: "DevOps & infrastructure",
    items: [
      "Linux",
      "Docker",
      "Jenkins",
      "CI/CD",
      "DevSecOps",
      "Git",
      "Apache",
      "Nginx",
      "AWS EC2",
      "Virtual Machines",
    ],
  },
  {
    title: "Data & messaging",
    items: ["PostgreSQL", "Redis", "RabbitMQ", "Elasticsearch", "LDAP"],
  },
  {
    title: "AI & developer tooling",
    items: [
      "ChatGPT",
      "Cursor",
      "Claude Code",
      "GitHub Copilot",
      "OpenAI APIs",
      "LLMs",
    ],
  },
  {
    title: "Test automation",
    items: ["Robot Framework", "Playwright", "Selenium"],
  },
  {
    title: "Game & 3D",
    items: ["Unreal Engine", "Unity", "Three.js", "3ds Max"],
  },
];

const marqueeTechnologies = [
  // Languages
  { icon: FaPython, label: "Python", color: "#3776ab" },
  { icon: FaJsSquare, label: "JavaScript", color: "#d6ad00" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { icon: FaJava, label: "Java", color: "#e76f00" },
  { icon: FaDatabase, label: "SQL", color: "#336791" },
  { icon: PiFileCpp, label: "C++", color: "#659ad2" },
  { icon: SiSharp, label: "C#", color: "#512bd4" },
  { icon: FaHtml5, label: "HTML", color: "#e34f26" },
  { icon: FaCss3Alt, label: "CSS", color: "#1572b6" },

  // DevOps and infrastructure
  { icon: FaLinux, label: "Linux", color: "#c49a00" },
  { icon: FaDocker, label: "Docker", color: "#2496ed" },
  { icon: SiJenkins, label: "Jenkins", color: "#d24939" },
  { icon: FaCodeBranch, label: "CI/CD", color: "#8b5cf6" },
  { icon: FaShieldAlt, label: "DevSecOps", color: "#e85d75" },
  { icon: FaGitAlt, label: "Git", color: "#f05032" },
  { icon: SiApache, label: "Apache", color: "#d22128" },
  { icon: SiNginx, label: "Nginx", color: "#009639" },
  { icon: SiAmazonec2, label: "AWS EC2", color: "#ff9900" },
  { icon: FaServer, label: "Virtual Machines", color: "#7c3aed" },

  // Application development
  { icon: FaNodeJs, label: "Node.js", color: "#339933" },
  { icon: FaReact, label: "React", color: "#00a9c7" },
  { icon: SiNextdotjs, label: "Next.js", color: "var(--text)" },
  { icon: FaPlug, label: "REST APIs", color: "#0ea5e9" },
  { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
  { icon: FaExchangeAlt, label: "SOAP", color: "#8b5cf6" },

  // Data and messaging
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169e1" },
  { icon: SiRedis, label: "Redis", color: "#ff4438" },
  { icon: SiRabbitmq, label: "RabbitMQ", color: "#ff6600" },
  { icon: SiElasticsearch, label: "Elasticsearch", color: "#0077a2" },

  // AI and developer tooling
  { icon: SiOpenai, label: "ChatGPT", color: "#10a37f" },
  { icon: PiCursorClick, label: "Cursor", color: "#8b5cf6" },
  { icon: SiClaude, label: "Claude Code", color: "#d97757" },
  { icon: SiGithubcopilot, label: "GitHub Copilot", color: "var(--text)" },
  { icon: SiOpenai, label: "OpenAI APIs", color: "#10a37f" },
  { icon: FaBrain, label: "LLMs", color: "#ec4899" },

  // Test automation
  { icon: SiRobotframework, label: "Robot Framework", color: "#00a99d" },
  { icon: FaVial, label: "Playwright", color: "#2ead33" },
  { icon: SiSelenium, label: "Selenium", color: "#43b02a" },

  // Game and 3D tools featured elsewhere in the portfolio
  { icon: SiUnrealengine, label: "Unreal Engine", color: "var(--text)" },
  { icon: SiUnity, label: "Unity", color: "var(--text)" },
];

export default function Technologies() {
  return (
    <div className="mt-14 border-t border-theme pt-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3 className="skill-group-title text-secondary text-sm font-bold">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="skill-chip px-3 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="technology-marquee relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden py-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="technology-marquee-track flex w-max">
            {[false, true].map((isDuplicate) => (
              <ul
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate || undefined}
                className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8"
              >
                {marqueeTechnologies.map(({ icon: Icon, label, color }) => (
                  <li
                    key={label}
                    className="group relative flex w-24 shrink-0 items-center justify-center py-6 sm:w-28"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-theme text-2xl transition-transform duration-200 group-hover:-translate-y-1 sm:h-14 sm:w-14 sm:text-3xl"
                      style={{
                        color,
                        background: `color-mix(in srgb, ${color} 14%, var(--surface))`,
                      }}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="text-main pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-theme bg-[var(--surface)] px-2.5 py-1 text-center text-xs font-medium whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
