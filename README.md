# Ali Monette Portfolio

A responsive personal portfolio presenting my work as a software developer,
professor, and toolsmith. The site brings together my professional journey,
technical capabilities, selected projects, and resume in one interactive
experience.

**[View the live portfolio](https://amonette.vercel.app)**

## Highlights

- Distinct dark and light themes with locally saved preferences
- Responsive layouts designed for desktop, tablet, and mobile
- Scroll-responsive career and education timeline
- One-time entrance animations with reduced-motion support
- Project cards enriched with language data from the GitHub REST API
- Downloadable resume and direct contact links

## Built With

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for animation
- [React Icons](https://react-icons.github.io/react-icons/)
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
npm run start
```

## Project Structure

```text
src/
  app/                 App Router pages, layout, and global theme styles
  components/          Portfolio sections and reusable interface components
public/
  images/              Profile and project imagery
  resume.pdf           Downloadable resume
```

## Deployment

The production site is deployed through Vercel. Changes pushed to the linked
GitHub repository are built and deployed automatically.
