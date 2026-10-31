# Aryan Sharma — Portfolio

Personal portfolio preview built with React, Vite and TypeScript. The redesign preserves the dark card-based identity of the original site and introduces a sticky section rail and a single scrolling page.

## Development

```bash
npm ci
npm run check:data
npm run dev
npm run build
```

The redesign lives on the `portfolio-redesign-v2` branch. The production GitHub Pages site remains on `main` until the redesign is reviewed and approved.

## Current redesign status

- Seven project cards use cohesive conceptual previews and single-open expandable case studies.
- System Monitoring includes genuine repository screenshots. IncidentZero media is explicitly labeled as mocked rehearsal material.
- Project order, links and required case-study fields are covered by `npm run check:data`.
- Open-source contribution is represented concisely in the main introduction without displacing professional experience or project work.
- Desktop, mobile, keyboard and reduced-motion behavior have been checked on the redesign branch.

## Remaining before publishing

- Confirm final contributor-role wording for IncidentZero and any broader origin context for ServiceSync.
- Add an up-to-date resume PDF before changing the experience navigation to a resume download.
- Resolve the current Vite/esbuild development-server audit findings through a separately tested major toolchain upgrade.
- Configure and validate a preview or GitHub Pages build without changing the existing live site prematurely.
