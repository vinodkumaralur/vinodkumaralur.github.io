# Vinod Kumar Aluru — Portfolio

An interactive personal portfolio with two complete looks, dark and light, switched by pulling a hanging cord in the top-right corner.

Built with React, TypeScript, Vite, Tailwind CSS, GSAP, Framer Motion and Lenis.

## Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Deploy from GitHub (free, automatic)

1. Create a new **public** repository on GitHub (for example `portfolio`) and push this folder to it (see below).
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site. The first run takes about a minute; the address appears under **Actions** and in **Settings → Pages**, e.g. `https://<your-username>.github.io/portfolio/`.

```bash
git init -b main
git add .
git commit -m "Portfolio"
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Tip: name the repository `<your-username>.github.io` and the site lives at `https://<your-username>.github.io/` with no folder name.

## Build for hosting

```bash
npm run build
```

The finished site is written to `dist/`. Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). No server code is needed.

## Edit the content

Every fact on the site lives in **`src/data/portfolio.ts`**: name, links, roles, stats, education, skills, projects, experience, industries and certifications (the Certifications block appears once you add some). Change it there and the whole site follows.

Other things you may want to change:

| What | Where |
|---|---|
| Résumé PDF (download buttons) | `public/assets/Vinod_Kumar_Aluru_Resume.pdf` |
| Theme colours (dark and light) | top of `src/index.css` |
| Your photo (hero and Skills orbit) | `public/assets/vinod-standing.webp` — a background-free full-length cutout. Swap in a sharper one and update `cutout.width` / `cutout.height` in `portfolio.ts` |

## How the site is put together

| File | What it does |
|---|---|
| `src/components/PullCord.tsx` | The pull cord that switches dark / light mode |
| `src/lib/theme.ts` | Theme switching, saved between visits, with the circular reveal |
| `src/components/Hero.tsx`, `HeroVideo.tsx` | Hero with the giant name and the portrait |
| `src/components/Expertise.tsx`, `fx/TechOrbit.tsx` | Skills, with three skill orbits that spin around the portrait as you scroll |
| `src/components/Projects.tsx`, `ProjectVisual.tsx` | Project cards and case-study overlays |
| `src/components/Experience.tsx` | Timeline, recognition and certifications |
| `src/components/Contact.tsx` | Contact links and footer |

## Notes

- The portrait has a transparent background, so it sits directly on the page in both themes.
- Built on the theme-changing portfolio template by Sushmita Dasari (github.com/Sushmitadasari/theme_changing_portfolio).
- Visitors who have "reduce motion" turned on get still images and no auto-animation; the cord still works.
