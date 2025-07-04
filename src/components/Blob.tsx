'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

type BlobProps = {
  exp: Experience;
  year: number;
  globalIndex: number;
  isOpen: boolean;
  setOpenIndex: (id: string | null) => void;
  isMobile: boolean;
  baseColor: string;
  sideClass: string;
  i: number;
  monthNames: string[];
};

export default function Blob({
  exp,
  year,
  globalIndex,
  isOpen,
  setOpenIndex,
  isMobile,
  baseColor,
  sideClass,
  i,
  monthNames,
}: BlobProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.div
      key={globalIndex}
      ref={ref}
      onClick={() => setOpenIndex(isOpen ? null : `${year}-${globalIndex}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setOpenIndex(isOpen ? null : `${year}-${globalIndex}`);
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className={`cursor-pointer rounded-2xl shadow-md transition-all duration-500 ease-in-out overflow-auto
        ${baseColor}
        ${isOpen
          ? "fixed top-4 left-4 right-4 bottom-4 z-50 p-4 md:p-8 w-auto max-w-[95vw] max-h-[90vh]"
          : `absolute p-4 ${sideClass}`
        }
      `}
      style={{
        top: isOpen ? undefined : i * 120,
        minHeight: isOpen ? undefined : 160,
        maxHeight: isOpen ? undefined : 200,
        overflow: isOpen ? 'auto' : 'hidden',
      }}
    >
      <h3 className="text-white text-lg font-bold break-words">{exp.title}</h3>
      <p className="text-sm text-white break-words">{exp.company}</p>
      <p className="italic text-sm text-white">
        {exp.startMonth && monthNames[exp.startMonth - 1]} {exp.startYear} - {exp.endMonth && monthNames[exp.endMonth - 1]} {exp.endYear}
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
}
