
# Academic Portfolio (React + Vite + TypeScript + Tailwind)

Minimal, accessible one-page portfolio with future-ready navigation.
Updated: no Scholar/ORCID; bio reflects Dual Degree (finished Emory; starting EE at GT).

## Quickstart
1) Install Node.js 18+
2) In project folder:
   ```bash
   npm install
   npm run dev
   ```
3) Production:
   ```bash
   npm run build
   npm run preview
   ```

## Customize
- Edit `src/content.ts` to change your name, role, intro, links, About bullets, and Selected Work.
- Replace `public/images/headshot.jpg` with your photo.
- Replace `public/cv/David_Chen_CV.pdf` with your actual CV.

## Notes
- Header uses anchor links now; switch to React Router `<Link>` targets later.
- Tailwind-only styling; add UI libs if needed.
- Good a11y defaults: alt text, focus states, semantic landmarks.
