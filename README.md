# AI Workshop

Hands-on AI training for teams that want to build with AI — not just watch
talks about it. This is the marketing / landing site for the AI Workshop
product.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- `lucide-react` for icons
- Turbopack (dev and build)

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

## Project structure

```
src/
  app/
    layout.tsx     Root layout + Metadata API
    page.tsx       Landing page sections (hero, offerings, how-it-works, ...)
    globals.css    Tailwind entry + design tokens + reduced-motion support
  components/
    contact-form.tsx  Client demo contact form
```

The site is intentionally static — no backend, auth, payments, or deployment
configuration.