'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="flex gap-6 justify-center text-lg font-medium">
        <Link href="#about">About Me</Link>
        <Link href="#journey">My Journey</Link>
        <Link href="#projects">My Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}