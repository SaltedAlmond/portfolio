import type { Metadata } from "next";
import { Jura, Open_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-console",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-soft",
});

export const metadata: Metadata = {
  title: "Ali Monette | Software Developer & Professor",
  description:
    "Portfolio of Ali Monette, a software developer, tools specialist, professor, and game technology creator.",
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    document.documentElement.dataset.theme = savedTheme || preferredTheme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jura.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
