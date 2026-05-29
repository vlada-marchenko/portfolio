# Dev Portfolio — Terminal / Code Aesthetic

A dark-mode developer portfolio built with **Vite + React + Tailwind**, styled to feel like a code editor.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build       # output goes to /dist
npm run preview     # preview the production build
```

## Structure

```
src/
  App.jsx            # composes the page
  main.jsx           # React entry
  index.css          # Tailwind directives + global styles
  components/
    Navbar.jsx       # sticky top nav with active-section tracking
    Hero.jsx         # name + animated terminal code window
    About.jsx        # bio styled as a JSDoc comment block
    Skills.jsx       # skills as array literals
    Projects.jsx     # project cards styled as code windows
    Contact.jsx      # email + simple form
    Footer.jsx
```

## Where to edit your content

| What | File |
|------|------|
| Your name / title / GitHub link | `src/components/Hero.jsx` |
| Bio paragraphs | `src/components/About.jsx` |
| Quick-info sidebar (status, location, etc.) | `src/components/About.jsx` |
| Skill groups | `src/components/Skills.jsx` (`groups` array) |
| Projects list | `src/components/Projects.jsx` (`projects` array) |
| Email + social links | `src/components/Contact.jsx` |

## Styling notes

- Font: **JetBrains Mono** loaded from Google Fonts in `index.html`.
- Colors are defined in `tailwind.config.js` under `theme.extend.colors` (`bg`, `panel`, `border`, `accent`, etc.) — tweak there to re-theme everything.
- The faint background grid is in `src/index.css` (`body::before`).

## Wiring up the contact form

The form in `Contact.jsx` currently just shows an alert. To make it real, point `onSubmit` at a service like Formspree, Resend, or your own endpoint.

## Deploy

Any static host works: Vercel, Netlify, GitHub Pages, Cloudflare Pages. Build with `npm run build` and serve `/dist`.
