"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

type Experience = {
  title: string;
  company: string;
  details: string[];
  startYear: number;
  endYear: number;
  startMonth?: number;
  endMonth?: number;
  type: "work" | "education";
};

type BlobProps = {
  exp: Experience;
  year: number;
  globalIndex: number;
  isMobile: boolean;
  baseColor: string;
  sideClass: string;
  i: number;
  monthNames: string[];
  top: number;
};

export default function Blob({
  exp,
  baseColor,
  sideClass,
  monthNames,
  top,
  isMobile,
}: BlobProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  const startDate = `${exp.startMonth ? monthNames[exp.startMonth - 1] : ""} ${
    exp.startYear
  }`.trim();
  const endDate = `${exp.endMonth ? monthNames[exp.endMonth - 1] : ""} ${
    exp.endYear
  }`.trim();

  const isLeft = sideClass === "left";
  const isRight = sideClass === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="absolute w-full"
      style={{ top }}
    >
      <div className="relative w-full flex items-center justify-center">
        {/* Marker */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#161d2f] border-2 border-white rounded-full w-10 h-10 flex items-center justify-center z-20 text-white text-xl">
          {exp.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
        </div>

        {/* Text box */}
        <div
          className={`rounded-2xl p-4 shadow-md border-2 ${baseColor} ${
            isLeft
              ? "mr-auto ml-[calc(50%+2rem)] text-left"
              : isRight
              ? "ml-auto mr-[calc(50%+2rem)] text-right"
              : "mx-auto w-[90%] text-center"
          } ${exp.type === "work" ? "border-blue-500" : "border-orange-400"}`}
          style={{ maxWidth: "45%" }}
        >
          <h3 className="text-white text-lg font-bold break-words">
            {exp.title}
          </h3>
          <p className="text-sm text-white break-words">{exp.company}</p>
          <p className="italic text-sm text-white">
            {startDate} – {endDate}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
