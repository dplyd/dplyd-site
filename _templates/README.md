# Case study template

`case-study-template.html` is the source for every case study on the site. This directory is
intentionally **not published** — nothing links to it, and `robots.txt` disallows `/_templates/`.

## To publish a new case study

1. Copy the template:
   ```
   cp _templates/case-study-template.html case-studies/<slug>/index.html
   ```
2. Replace every `{{TOKEN}}` placeholder in the new file with real content:
   - `{{VERTICAL_LABEL}}`, `{{TITLE}}`, `{{DECK}}`, `{{REDACTION_NOTE}}`, `{{INDUSTRY}}`, `{{CHALLENGE}}`
   - `{{PROBLEM_BODY}}` — one or more `<p>` paragraphs
   - `{{SOLUTION_INTRO}}` — one sentence
   - `{{SOLUTION_POINTS}}` — 2-4 `<div class="card"><h3>...</h3><p>...</p></div>` blocks
   - `{{OUTCOME_BODY}}` — one or more `<p>` paragraphs
   - `{{PULLQUOTE}}` — one memorable sentence
   - `{{WHY_BROADLY}}` — one or more `<p>` paragraphs
   - `{{RELATED_VERTICAL_HREF}}` — usually `../../#verticals`
3. Add a card for it to `case-studies/index.html` (the hub page).
4. Optionally link to it from the relevant vertical card on the homepage (`index.html`,
   `#verticals` section).

Keep this template free of real customer content — placeholders and filler only.
