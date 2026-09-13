# Shavisha Thiloshini — Personal Portfolio

A modern, interactive personal portfolio website built with React and Vite. Features a 3D hero section, scroll-reveal animations, and a fully responsive design.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| 3D | Three.js + React Three Fiber |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque, Instrument Sans |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
shavisha-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── Shavisha_Thiloshini_CV.pdf
├── src/
│   ├── components/
│   │   ├── 3d/           # Three.js / React Three Fiber scene
│   │   ├── common/       # Layout, Footer, SocialIcon
│   │   └── navigation/   # Sticky navigation
│   ├── data/             # Structured portfolio content (projects, skills, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── sections/         # Page sections (Home, About, Skills, …)
│   └── styles/           # Design tokens, base styles, utilities
├── index.html
└── vite.config.js
```

## Deployment

The `dist/` directory contains the complete production build and can be deployed to any static hosting service:

- **Netlify** — drag and drop `dist/` or connect the GitHub repo
- **Vercel** — connect GitHub repo, set Framework to Vite
- **GitHub Pages** — push `dist/` to `gh-pages` branch

### Environment Variables

No environment variables are required for the base portfolio. If adding a contact form service, copy `.env.example` to `.env.local` and add the relevant keys.

## Content Updates

Portfolio content lives in `src/data/` as plain JavaScript files:

| File | Contains |
|---|---|
| `projects.js` | Featured and additional projects |
| `skills.js` | Skill categories and levels |
| `education.js` | Education timeline |
| `experience.js` | Experience entries |
| `beyondCode.js` | Beyond Code section cards |
| `socialLinks.js` | Email, GitHub, LinkedIn URLs |
| `navLinks.js` | Navigation structure |

## CV

The CV PDF is served from `public/Shavisha_Thiloshini_CV.pdf`. Replace this file to update the downloadable CV — the filename must remain the same.
