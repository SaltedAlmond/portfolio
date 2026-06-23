# Ali Monette Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://motion.dev/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel&logoColor=white)](https://amonette.vercel.app)

A responsive personal portfolio presenting my work as a software developer,
professor, and toolsmith. The site brings together my professional journey,
technical capabilities, selected projects, and resume in one interactive
experience.

**[View the live portfolio](https://amonette.vercel.app)**

## Highlights

- Dark-first theme with a warm, earth-toned light palette and saved preferences
- Responsive layouts designed for desktop, tablet, and mobile
- Scroll-responsive career and education timeline
- Linked company profiles within relevant career entries
- Animated technology marquee with brand icons and edge fades
- Entrance and scroll animations with reduced-motion support
- Project cards enriched with language data from the GitHub REST API
- Always-current Google Docs resume streamed as an inline PDF
- Direct GitHub, LinkedIn, and email contact links

## Built With

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for animation
- [React Icons](https://react-icons.github.io/react-icons/)
- Google Docs PDF export for the live resume
- [Vercel](https://vercel.com/) for deployment

## Local Development

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If that
port is already occupied, Next.js will provide the alternate local URL in the
terminal.

Useful commands:

```bash
npm run lint
npm run build
npm run start # Run the production build after npm run build
```

## Project Structure

```text
src/
  app/                 App Router pages, API routes, layout, and theme styles
    api/resume/        Live Google Docs PDF proxy
  components/          Portfolio sections and reusable interface components
  constants.ts         Shared client-facing URLs
public/
  images/              Profile and project imagery
```

## Resume

The resume buttons open `/api/resume` in a new tab. The route requests the
latest version from Google Docs and returns it as an inline PDF, so resume
updates do not require replacing a file or redeploying the portfolio. The
source document must remain shared as **Anyone with the link — Viewer**.

## Deployment

The production site is deployed through Vercel. Changes pushed to the linked
GitHub repository are built and deployed automatically.
