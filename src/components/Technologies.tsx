"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Application",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "REST APIs"],
  },
  {
    title: "Automation & delivery",
    items: ["Python", "Java", "Jenkins", "Docker", "Linux", "CI/CD"],
  },
  {
    title: "Data & infrastructure",
    items: ["SQL", "PostgreSQL", "Redis", "RabbitMQ", "LDAP", "Nginx"],
  },
  {
    title: "Game & 3D",
    items: ["C++", "C#", "Unreal Engine", "Unity", "Three.js", "3ds Max"],
  },
];

export default function Technologies() {
  return (
    <div className="mt-14 border-t border-theme pt-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3 className="text-secondary text-sm font-bold">{group.title}</h3>
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
    </div>
  );
}
