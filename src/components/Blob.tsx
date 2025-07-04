'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

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
  isMobile: boolean;
  baseColor: string;
  sideClass: string;
  i: number;
  monthNames: string[];
};

export default function Blob({
  exp,
  globalIndex,
  baseColor,
  sideClass,
  i,
  monthNames,
}: BlobProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-50px' });

    const startDate = `${exp.startMonth ? monthNames[exp.startMonth - 1] : ''} ${exp.startYear}`.trim();
    const endDate = `${exp.endMonth ? monthNames[exp.endMonth - 1] : ''} ${exp.endYear}`.trim();

    const isRightSide = sideClass.includes('right-');

    return (
       <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`absolute p-4 rounded-2xl ${baseColor} ${sideClass} shadow-md cursor-default select-none
                flex items-center justify-between border-2 ${
                exp.type === 'work' ? 'border-blue-500' : 'border-orange-400'
            }`}
            style={{
                top: i * 120,
                minHeight: 160,
                maxHeight: 200,
            }}
            >
            <div
                className={`text-white text-xl ${isRightSide ? 'order-2 ml-4' : 'order-1 mr-4'}`}
            >
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </div>
            <div className="flex-grow text-center order-1">
                <h3 className="text-white text-lg font-bold break-words">{exp.title}</h3>
                <p className="text-sm text-white break-words">{exp.company}</p>
                <p className="italic text-sm text-white">
                {startDate} – {endDate}
                </p>
            </div>
            </motion.div>
    );
}
