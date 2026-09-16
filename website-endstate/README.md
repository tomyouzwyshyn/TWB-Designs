# END STATE website, v3 (four areas)

Palantir-register design (floating header, centred dark heroes, story rail, numbered capability
rows, sticky jump bar), Helvetica only, sage as the only hue, clean white background.

## Pages (4)
- `index.html`: Home. Mission, the three areas, how the loop closes, what it protects, eMACS,
  who we serve, sovereign safety.
- `detection.html`: AI and autonomous robotics for land, littoral and underwater search.
- `identification.html`: AI image recognition for munitions and materiel.
- `remediation.html`: custody, closed-chamber destruction, recovery at up to 95%, the animated
  periodic table of recoverable elements, and return to domestic supply.

The individual system pages and the Team page were removed in v3, and the invented platform names (KEEP, WARDEN, BORESIGHT, PICKET, CRUCIBLE) were removed from all copy at Tom's request. eMACS, the mobile destruction unit, is still named. Earlier versions are recoverable from git history.

## Content rules
- Written as if the roadmap is complete: present tense, no "in development" language.
- No industry statistics, regulatory citations, incident references or competitor comparisons.
  Two deliberate exceptions, both requested: the "up to 95% effective recovery" claim, and the
  10-year price change on the periodic table.
- No specific government, alliance or country is named as a customer. Audience is written as
  defence ministries, armed forces, allied and coalition partners.
- No fabricated testimonials.

## Periodic table (`src/ptable.js`)
22 highlighted elements, chosen from research into munition components (small arms, artillery,
bombs, missiles, guidance electronics, magnets). Present but deliberately NOT highlighted:
mercury, depleted uranium, cadmium, beryllium, thorium, and pyrotechnic salts (strontium,
barium, zirconium). Chromium and titanium were dropped because USGS changed their price series
and there is no clean 10-year comparison.

Price change = USGS Mineral Commodity Summaries, 2015 annual average vs 2025 estimate (MCS 2026).
2015 values from MCS 2020, or the same series in MCS 2019 / MCS 2017 / the 2016 Minerals Yearbook
where the 2020 chapter was not retrievable. The percentage is computed in code from the two
published values. Elements with a series caveat (Al, Sb, W, Mo, Pr, Sm) show a note in the tooltip.
Refresh these when MCS 2027 revises the 2025 estimates (early 2027).

## Build
`node src/build.js` builds the 4 pages and fails on an em dash or a spaced hyphen.
`node src/brief.js` regenerates `assets/media/PLACEHOLDERS.md` from the live `ph()` calls.

## Media placeholders
26 slots in `assets/media/PLACEHOLDERS.md`, each with a shot brief and a generation prompt.
Drop a file at the exact filename under `assets/media/` and `js/site.js` swaps it in.

## Open items for Tom
1. Contact email (footer and `FALLBACK_EMAIL` in `js/site.js`), currently a placeholder.
2. `FORM_ENDPOINT` in `js/site.js`, currently empty.
3. Media per `assets/media/PLACEHOLDERS.md`.
4. Confirm the "up to 95%" recovery claim is one you can substantiate for buyers.

## Deploy
Vercel-ready static folder, root directory `website-endstate`, no build command.
