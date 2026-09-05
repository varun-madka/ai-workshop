# Varun Madka — Personal Resume Website

Single-page personal resume website for **Varun Madka**, built with
[Next.js](https://nextjs.org) (App Router) + TypeScript and
[Tailwind CSS](https://tailwindcss.com).

- **Live site:** https://ai-workshop.vercel.app
- **Repository:** https://github.com/varun-madka/ai-workshop

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- No component library, no animation library, no analytics

## Content

All content is drawn from the resume attached to the workshop task. Nothing is
invented. Sections: header, summary, experience, skills, projects,
certifications, education, and a footer with the current year.

## Privacy

Per the workshop privacy requirements, this public site deliberately omits:

- The phone number that appears in the resume (`+1 405 856-8439`) — no
  `INCLUDE PHONE` override was provided.
- No residential/street address appeared in the resume, so none is published.
  Location details shown are organization locations from employment/education.
- The published email and LinkedIn URL are exactly the ones on the resume.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the development server   |
| `npm run build`  | Create a production build      |
| `npm run start`  | Serve the production build     |
| `npm run lint`   | Run ESLint                     |

## Deployment

Vercel is connected to this GitHub repository, so every push to `main` triggers
a production build and deployment to https://ai-workshop.vercel.app.

## Deliberately skipped

- The repo previously held an "AI Workshop" marketing landing page with a demo
  contact form; that content and the form were removed (a contact form is
  explicitly out of scope for this phase).
- No authentication, CMS, database, analytics, multiple routes, or PDF
  generation — all out of scope for phase 1.