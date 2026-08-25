# TWB Designs — design-sync notes

## Repo shape

This repo is **not** a normal component library. The source of truth is a static
HTML/CSS site (`website/`), and `design-system/react/` is a React wrapper package
authored specifically so Claude Design can consume the system. Two generated files
keep the wrapper honest — both are gitignored and rebuilt by `buildCmd`:

- `design-system/react/styles/twb.css` — `scripts/sync-css.mjs` concatenates
  `website/css/tokens.css` + `website/css/site.css` (+ `styles/fonts.css`) into one
  compiled stylesheet. **The converter copies `cssEntry` verbatim and does NOT follow
  `@import`s**, so an `@import`-only entry ships an empty stylesheet and every preview
  renders unstyled while still passing the render check.
- `design-system/react/src/logo.ts` — `scripts/sync-logo.mjs` inlines `brand/*.svg` as
  data URIs. Rendered designs have no access to repo asset paths, so a relative logo
  href silently breaks the mark.

**If you edit `website/css/` or `brand/`, just re-run the build** — `buildCmd` regenerates
both before `tsc`.

## Gotchas hit (and fixed)

- **The `@import` semicolon trap.** A Google Fonts URL contains semicolons
  (`wght@400;500;600`). The original hoist regex `/@import[^;]+;/` truncated mid-URL,
  producing invalid CSS that killed the *entire* 32 KB stylesheet. Every component then
  rendered unstyled — and the render check still passed, because the DOM was non-empty.
  `sync-css.mjs` now matches the quoted `url()` as a unit. **Lesson: the render check
  cannot catch "renders, but unstyled" — always eyeball the contact sheets.**
- **First `package-validate.mjs` run raced chromium's first launch** and reported
  `[BUNDLE_EXPORT] 29/29 not a component on window.TWB`. The bundle was fine; a plain
  re-run passed. Don't chase this — re-run once before diagnosing.
- **`label` is in the mono UI register.** `Checkbox` consent text needs the same inline
  `text-transform:none; letter-spacing:0` reset the site's own markup carries, or it
  renders uppercase mono. Field labels *should* stay mono — that's correct there.
- **Grade files are `<Name>.grade.json`**, not `<Name>.json` (that one is capture
  bookkeeping). Writing verdicts into the wrong file silently re-captures everything.

## Known render warns

- `[FONT_REMOTE] "IBM Plex Mono"` — expected and correct. Helvetica Neue is a system
  face and needs no shipping; only the mono UI layer is fetched from Google Fonts.
- 14 components carry `cfg.overrides.<Name>.cardMode = "column"` — they are full-width
  by nature (tables, bands, grids, the signature wordmark) and would crop in a
  multi-column card cell. Not a defect.

## Re-sync risks

- **The wrapper can drift from the site.** `design-system/react/src/*.tsx` hand-mirrors
  the class structure in `website/css/site.css`. A CSS rename or a markup change on the
  site does **not** automatically reach the wrapper — re-check the affected component.
- **Copy in `.design-sync/previews/*.tsx` is real site copy** and is subject to the
  claims discipline in `../CLAUDE.md` (the killed-numbers table, the four claims in
  locked order). Don't "improve" it casually.
- `tokens/` and `fonts/` ship empty — tokens live inside the compiled `_ds_bundle.css`
  and the only web font is remote. Harmless, but don't read it as a missing step.
- Toolchain: node 24, TypeScript via `npx tsc`, playwright chromium installed under
  `.ds-sync/`. `.ds-sync/` and `ds-bundle/` are gitignored and regenerated.
