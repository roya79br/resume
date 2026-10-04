# Resume (Next.js), multiple templates

One-page resume with fake data, static (no backend).

    npm install
    npm run dev      # http://localhost:3000

Templates (switch with the buttons at the top):
- `/` Classic: two columns with a year column
- `/templates/modern`: dark sidebar
- `/templates/compact`: single column, easy for ATS to read
- `/templates/bold`: accent colour header

Edit `data/resume.ts` once: every template uses the same data.
To add a template: create a component in `components/templates/` and add it to `index.ts`.
"Download PDF" opens the print dialog (A4). Turn off Headers and footers.
`npm run build` creates a static site in `out/`.
