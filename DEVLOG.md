# Gray Technologies — Development Log

**Project:** Personal Portfolio + Gray Technologies Company Website  
**Developer:** David Gyandoh Graham  
**Stack:** React + Vite, Tailwind CSS, Framer Motion, React Router  
**Domain:** graytechnologies.tech  
**Started:** May 2026  

---

## Phase 1 — Project Setup ✅
**Date:** May 23, 2026

### What was done
- Scaffolded React + Vite project using `npm create vite@latest`
- Installed all dependencies:
  - `react-router-dom` — page routing
  - `framer-motion` — animations
  - `lucide-react` — icons
  - `@emailjs/browser` — contact form
  - `tailwindcss@3` — utility-first styling
- Configured Tailwind with brand colors (navy `#0D1B3E` + gold `#C9A84C`)
- Set global styles in `index.css`
- Cleaned up Vite boilerplate

### Concepts learned
- React is a component-based UI library — everything is a reusable function
- JSX is HTML-like syntax written inside JavaScript
- `main.jsx` is the entry point — mounts the App into `index.html`
- Tailwind works by adding utility classes directly to HTML elements
- Vite is the build tool — provides instant hot reload during development

### Key decisions
- Chose React + Vite over plain HTML for component reusability
- Chose Tailwind v3 (not v4) for stability and better documentation
- Hybrid site structure: single scroll homepage + separate /projects and /blog pages
- Brand colors registered as custom Tailwind tokens for consistency

### Project structure
gray-technologies/
├── src/
│   ├── components/    # Reusable UI pieces (Navbar, Footer, etc.)
│   ├── pages/         # Full pages (Home, Projects, Blog)
│   ├── assets/        # Images, logo
│   ├── data/          # Project and blog data
│   ├── App.jsx        # Routes
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles + Tailwind
├── tailwind.config.js
├── vite.config.js
└── package.json
---
*Next phase: Component architecture — Navbar, Hero, About sections*