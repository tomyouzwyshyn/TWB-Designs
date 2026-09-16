# END STATE website, v2 (Palantir register)

A ground-up redesign: same brand, same logo and typography, a different reference point.
Built off a teardown of palantir.com (home + the Gotham platform page) rather than Anduril's
Thunder page. Clean, blank white/near-white background throughout, no grid texture. Dark is
used only for the hero band on every page, the closing statement band, and the footer.

## Pages (7)
`index.html` (Home), `keep.html`, `warden.html`, `boresight.html`, `picket.html`,
`crucible.html` (the five named systems), `team.html` (Company).

## The five systems
Named the way Palantir names Gotham / Foundry / AIP / Ontology / Apollo: short, industrious,
defence-flavoured, and specific to what each one actually does. eMACS remains the physical
hardware line (covered on the home page, `index.html#emacs`) rather than a named software system.

- **KEEP** — the central system of record. Ties every other system together.
- **WARDEN** — chain-of-custody and compliance software.
- **BORESIGHT** — AI verification and inspection engine.
- **PICKET** — autonomous ground/surface/underwater robotics and remediation control.
- **CRUCIBLE** — materials recovery, yield, and reporting platform.

## Content rules followed
- No industry statistics, no regulatory citations, no incident references, no competitor
  comparisons — this was the standing rule from the first build and it still applies.
- No investor figures, projections, valuation, or comps.
- Copy is written as if the roadmap is complete and every system described is in place and
  operating today (per this round's brief) — present tense throughout, no "in development"
  language, no roadmap ladder.
- No fabricated testimonials or client quotes. Palantir's homepage leans heavily on named-client
  quotes; END STATE has none to publish, and inventing quotes attributed to real or implied
  clients would misrepresent them as genuine, so that section was replaced with a "who we build
  for" capability grid (law enforcement / military & allied / industrial & environmental) instead.

## Build
`node src/build.js` — requires all seven page modules, wraps each in the shared chrome from
`src/lib.js`, and fails the build on an em dash or a spaced hyphen used as a dash.

`node src/brief.js` — walks the same page modules and regenerates `assets/media/PLACEHOLDERS.md`
from the live `ph()` calls, so the brief can never drift from what the pages actually show.

## Media placeholders
40 slots, all in `assets/media/PLACEHOLDERS.md`. Every placeholder frame on the live pages shows,
in place: the kind (image/video), the aspect ratio, the exact filename it is waiting for, a shot
brief in plain English, and a ready-to-paste prompt for image or video generation software. Drop
a file at that exact path under `assets/media/` and `js/site.js` swaps it in automatically — no
HTML changes needed.

Six of the forty are the Team page headshots (`team-*.jpg`).

## Open items for Tom
1. Contact email — footer of every page and `FALLBACK_EMAIL` in `js/site.js`. Currently the
   placeholder `operations@endstate.example`.
2. `FORM_ENDPOINT` in `js/site.js` — currently empty, so the briefing form tells the visitor to
   email directly until it's set.
3. Media per `assets/media/PLACEHOLDERS.md` — 40 slots, prompts included.
4. Arjun Kochhar bio on the Team page — currently reads "Bio pending."
5. Sign off on the five system names (KEEP, WARDEN, BORESIGHT, PICKET, CRUCIBLE) as final before
   they go anywhere public — renaming later means new logos/marks wherever they get used.
6. `git push` from Terminal if this build was committed locally rather than pushed directly.

## Deploy
Vercel-ready as-is: `vercel.json` sets clean URLs and no trailing slash, no build command needed
(static HTML). Root directory `website-endstate`, same as the existing `website/` folder in this
repo.
