# TWB Investor Deck — HTML

`TWB_Investor_Deck.html` is a faithful recreation of `TWB_Investor_Deck_Sep2026_V4_1.pdf`
(25 slides) rebuilt entirely in the TWB visual system — the same tokens, Helvetica Neue
+ IBM Plex Mono type, sage-only accent, zero radius, corner-bracket motif, and honesty
chips (held/pending/n.a.) used across the website and design system.

**Open it directly** — double-click the file, no server needed. Arrow keys / space bar
move between slides; the counter bottom-center shows position. **To export to PDF:**
open in Chrome, Print (⌘P), destination "Save as PDF," and the print stylesheet renders
one slide per page at the deck's native 1280×720.

## What was reproduced vs. reconstructed

Every number, claim, and citation is carried over verbatim from the source PDF — nothing
was invented. Two places required a judgment call, both disclosed on the slide itself:

- **The 10-year revenue chart (slide 20).** The source PDF shows a continuous stacked
  bar chart 2026→2036; the extracted text only discloses three data points (current base,
  Year-5 $137M, Year-10 $342M split 46/54 build/buy). Rather than interpolate a curve
  shape the source doesn't state, this version shows only those three bars, labelled as
  such — no fabricated intermediate years.
- **The competitive positioning map (slide 8).** The source's dot placement isn't given
  as coordinates, only as a 2D scatter read from the PDF image plus the sentence "axis
  placement is TWB's own read of public materials, not a scored index" (already in the
  source's own disclaimer). This version's dot positions are an approximate, illustrative
  placement consistent with that same disclaimer — not a pixel trace of the original.

## Register

This deck uses "demilitarization" and frames TWB as a platform / M&A roll-up across a
six-line catalogue (large-calibre demil, metals recovery, sovereign facility engineering,
etc.). That matches the **current** locked category decision in `../../CLAUDE.md`
("Category (reversed 2026-09-01)") — the brand strategy reversed its earlier
small-arms-only rule on 2026-09-01, before this deck was built. No divergence to flag.

**However:** the top-level `website/` in this repo was built earlier (Aug 22–24) under
the *prior* rule — it uses the "Vault" machine name and a custody/property-destruction-only
category, both since superseded (machine is now **eMACS**; category is now
demilitarization/platform). The website was not part of this task and was left as-is, but
it is now stale relative to the current brand decisions and to this deck. Worth a decision:
update the website to match, or confirm it's intentionally frozen at the earlier framing.

## Source

`TWB_Investor_Deck_Sep2026_V4_1.pdf`, 25 pages, provided 2026-09-03. Full reference list
reproduced on slide 25 of this rebuild.
