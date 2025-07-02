'use client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { GiJourney } from 'react-icons/gi';
import { FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fixed circle size for all icons
  const circleSize = 40; // px

  // Negative margin between circles when scrolled to make them touch
  const negativeMargin = 5; // px, adjust for perfect touch

  return (
    <header className={`bg-[#9296a1] p-4 sticky top-0 z-50 border-b border-gray-200 flex items-center px-8 transition-all 
      ${ scrolled ? 'bg-transparent shadow-none border-none' : 'bg-white shadow-md border-b border-gray-200'}`}>
      <p className={`text-4xl font-bold flex-shrink-0 transition-opacity duration-500
        ${ scrolled ? 'opacity-0' : 'opacity-100'}`}>
        Ali Monette
      </p>

      <nav
        className={`flex flex-grow items-center text-lg font-semibold text-gray-700 uppercase tracking-wide transition-all duration-300 ${
          scrolled ? 'text-white justify-end pr-4' : 'justify-center gap-8 pl-50'
        }`}
        style={{ gap: scrolled ? 0 : undefined }}
      >
        {/* Reusable Link component for icon + label */}
        {[
          { href: '#about', Icon: FaUser, label: 'About' },
          { href: '#journey', Icon: GiJourney, label: 'Journey' },
          { href: '#projects', Icon: FaFolderOpen, label: 'Projects' },
          { href: '#contact', Icon: FaEnvelope, label: 'Contact' },
        ].map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center group hover:text-blue-600 transition duration-300"
            style={{
              marginLeft: scrolled ? negativeMargin : 0,
            }}
          >
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: circleSize,
                height: circleSize,
                border: '2px solid',
                borderColor: 'currentColor',
                padding: 0,
              }}
            >
              <Icon size={15} />
            </div>

            {/* Show label only when not scrolled */}
            {!scrolled && (
              <span
                className="border-2 border-l-0 rounded-r-full px-5 py-1 font-medium -ml-4"
                style={{ userSelect: 'none' }}
              >
                {label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
