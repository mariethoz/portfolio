# Portfolio

An Astro portfolio site with content-driven project pages, responsive layouts,
light and dark themes, and static GitHub Pages deployment.

## Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## Checks

```bash
npm run check
npm run lint
npm run format:check
npm run test
npm run build
```

## Content

Site-wide information and homepage project selection live in
`src/data/site.json`. The project Markdown files in `src/content/projects/`
are the source of truth for project details.

To add a project:

1. Create a Markdown file in `src/content/projects/` with the required frontmatter.
2. Add any images under `public/images/`.
3. Add its slug to `projects.featured` or `projects.other` in `src/data/site.json`.

Configured project slugs are validated during the build and missing projects
will fail the build with an explicit error.

Replace the placeholder values in `src/data/site.json` and add the real CV at
`public/documents/cv.pdf` before publishing.

## Deployment

Pushes to `main` run the checks and build in GitHub Actions. A successful run
deploys the generated `dist/` directory to GitHub Pages. Enable GitHub Pages
for the repository with **GitHub Actions** as the source.
