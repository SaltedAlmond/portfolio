'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const { href } of sections) {
        const section = document.querySelector(href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(href.substring(1));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAboutSection = activeSection === 'about';

  return (
    <header className="bg-[#303237] sticky top-0 z-50 p-4">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto gap-4">
        
        {/* Name/Profile Image container with transition */}
        <div className="w-[150px] h-10 relative">
          {/* Name fades out */}
          <p
            className={`absolute inset-0 text-2xl text-blue-300 font-bold whitespace-nowrap flex items-center transition-opacity duration-500 ${
              isAboutSection ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Ali Monette
          </p>

          {/* Image fades in */}
          <div
            className={`absolute justify-end inset-0 flex items-center transition-opacity duration-500 ${
              isAboutSection ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="w-12 h-12 rounded-full border-2 border-blue-300 flex items-center justify-center">
            <Image
              src="/images/Ali-Chill.png"
              alt="Ali Monette"
              width={36}
              height={36}
              className="rounded-full object-cover"
              priority
            />
            </div>
          </div>
        </div>

        {/* Navigation + Progress Bar */}
{/* Navigation + Progress Meter with Aligned Dots */}
<div className="flex flex-col flex-grow">
  {/* Grid-based nav bar */}
  <div className="grid grid-cols-4 gap-4 mb-1">
    {sections.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`text-center text-sm ${
          activeSection === href.substring(1) ? 'text-blue-300 font-bold' : 'text-white'
        }`}
      >
        {label}
      </Link>
    ))}
  </div>

  {/* Aligned progress bar within dot bounds */}
  <div className="relative w-full h-6">
    {/* The meter range (from first dot to last) */}
    <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-1 bg-gray-200 rounded-full -translate-y-1/2" />

    {/* Blue fill, based on active section */}
    <div
      className="absolute left-[12.5%] top-1/2 h-1 bg-blue-300 rounded-full transition-all duration-500 -translate-y-1/2"
      style={{
        width: `${(sections.findIndex(s => s.href.substring(1) === activeSection) / (sections.length - 1)) * 75}%`, // 75% is the space between first and last dots
      }}
    />

    {/* Dots */}
    <div className="absolute top-1/2 w-full grid grid-cols-4 -translate-y-1/2">
      {sections.map(({ href }) => (
        <div key={href} className="flex justify-center">
          <div
            className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
              activeSection === href.substring(1)
                ? 'bg-blue-300 border-blue-300'
                : 'bg-gray-200 border-gray-400'
            }`}
          />
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </header>
  );
}
