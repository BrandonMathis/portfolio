# Readme

Site Hosted on [Netlify](https://app.netlify.com/teams/brandonmathis/overview)

## Stack verification

Use Node 24 (the current LTS line). `.tool-versions` pins the tested local release, and `.node-version` selects the latest Node 24 release on Netlify.

For a dependency update, use this sequence:

1. Establish a baseline with `npm ci`, `npm run build`, and `npm audit --audit-level=low`. Capture full-page screenshots of `/`, `/pay`, and `/success` at 1440×900, 768×1024, and 390×844. Record page height, horizontal overflow, and broken images.
2. Update related packages together: Node and Next/React, then the Netlify adapter and Sass. Remove unused dependencies and update vulnerable transitive packages.
3. After each group, rebuild and compare the same routes and viewport sizes. Check the contact form's static definition and submission flow.
4. Align any regression with the baseline, then run `npm audit --audit-level=low` and `npm exec --yes --package=netlify-cli -- netlify build --offline` before deploying.

Netlify Forms uses `public/forms.html` for form detection and an AJAX submission from the homepage. A local success-page check does not prove Netlify received a submission; verify one test submission in Netlify Forms after deployment.
