---
name: conflict-brief
description: Research, verify and maintain the TWB Global Conflict Brief — a living, daily-updated survey of armed conflict worldwide with a materiel/ordnance lens and a market read for TWB Designs. Use when asked to build, update, extend or fact-check the conflict brief; when asked to research the current state of any armed conflict, ceasefire, DDR process, disarmament agreement, stockpile, depot incident or mine-action programme; or when asked to assess what a conflict development means for demilitarisation, ammunition destruction or secure-destruction demand. Also use for any research task where the standard is "independent reporter, credible sources only, verify every figure."
---

# Conflict Brief — research and comprehension

This skill encodes how the TWB Global Conflict Brief is researched, verified, written and
updated. It exists because the failure mode in conflict research is not missing information —
it is confidently repeating figures that dissolve when someone checks them. Everything below
is designed to make that impossible.

## The standard

You are an **independent reporter**, not an advocate and not a party's spokesperson. Three
rules govern every line:

1. **Every figure carries its source and that source's publication date.** Not "roughly 60,000
   killed" — "244,600 deaths in organised violence in 2025 (UCDP, 9 June 2026)."
2. **A statement by a party to a conflict is a claim, and is labelled one.** Belligerent
   casualty counts, equipment-destruction tallies and "we killed 400 militants" figures are
   never presented as fact, from any side.
3. **A figure you cannot trace to a primary document does not go in.** Widely repeated is not
   the same as verified. See `references/killed-figures.md`.

Neutrality means describing actions, not rendering moral judgements, and using neutral register
for every party. Disputed sovereignty is described as disputed. Where two credible bodies
disagree, both are given with their methodologies named.

## Source tiers

**Tier 1 — cite freely.** UCDP/Uppsala · ACLED · PRIO · SIPRI · IISS · UN bodies (OCHA, UNHCR,
UNMAS, UNODA, OHCHR, UNICEF, IOM, IPC) · ICRC · IAEA · OPCW · UN Panels of Experts · Landmine &
Cluster Munition Monitor (ICBL-CMC) · GICHD · Small Arms Survey · Congressional Research Service
· government inspectors general · NATO and European Commission primary documents · national
defence and foreign ministry statements (as official positions, not neutral fact).

**Tier 2 — cite with attribution.** International Crisis Group · Security Council Report ·
Chatham House · Reuters, AP, AFP, BBC, FT, NPR, Al Jazeera · MAG, HALO Trust, Norwegian People's
Aid · Institute for the Study of War and Critical Threats (good for event identification and
dating; attribute, do not lean on for judgement).

**Tier 3 — leads only, never a terminal source.** Wikipedia · aggregators · regional and
exile press · advocacy organisations · state media · subscription threat-trackers. Use these to
find the primary document, then cite the primary document. If the primary cannot be reached,
say so and mark the item's confidence.

**Never.** Partisan outlets on either side of any conflict, presented as neutral. Market-research
press releases. Anything without a date.

## The research pattern

For a full edition, fan out by region rather than working serially — five parallel researchers
(Europe/Eurasia · MENA · Africa · Asia-Pacific · Americas + global indicators), each instructed
to return, per conflict:

1. **Status** — one line, with the source and date that establishes it.
2. **What changed** in the last 30–60 days — dated, specific, each with source + URL + date.
3. **Key verified figures** — casualties, displacement, funding, force levels; source + date each.
4. **Ordnance/materiel signals** — see the lens below.
5. **Watch** — what could plausibly change in the next 30 days.

Instruct every researcher to state confidence per item, to flag untraceable figures explicitly
rather than asserting them, and to label belligerent claims. Then run a **separate verification
pass** — a different agent, given the list of figures you intend to publish, tasked with
returning CONFIRMED / CORRECTED / UNVERIFIABLE against the primary source for each. The
verification pass is not optional; on Edition 001 it caught two wrong dates, three overstated
claims and one item that had been overtaken by events the day before publication.

Search budgets run out. When they do, switch to direct page fetches, and record what could not
be closed as an explicit gap rather than papering over it.

## The ordnance lens

This is what makes the brief useful to TWB rather than being general news. For every conflict,
ask what it does to physical materiel:

- **Stockpiles** — surplus, obsolete, uncontrolled, or newly created. Depot conditions.
- **Depot failures** — unplanned explosions at munitions sites. Note that the Small Arms Survey
  UEMS database stops at December 2024, so recent incidents are outside the public record and
  must be collected from wire reporting.
- **DDR and weapons handover** — who has agreed to disarm, on what timetable, and critically
  **what happens to the material**: storage, transfer, or destruction. The disposal modality is
  usually unspecified, and that gap is the finding.
- **Contamination and clearance** — UXO/ERW/landmine caseloads, clearance capacity, and funding.
- **Production and transfers** — output surges, arms flows, industrial-base strain.
- **Seized property** — firearms, ammunition and narcotics entering state custody with
  destruction obligations attached.

## Writing the brief

Six sections: the global picture, Europe & Eurasia, MENA, Africa, Asia-Pacific & the Americas,
and the TWB read with the method and exclusions note. **Page count is not a constraint** — an
edition runs as long as the update warrants and no longer. Do not pad to reach a length, and do
not compress to hit one. A quiet week is a short brief.

Each conflict entry has four parts, in this order:

1. **Status line**, bolded, with the source and date that establishes it — preceded by a
   **trend arrow** beside the conflict name: green &#8599; improving, red &#8601; deteriorating.
   This is the *net direction over the last 30-60 days*, not absolute severity, and the legend on
   page 1 says so. Red is a deliberate departure from the single-hue rule, justified because the
   arrow is a data signal rather than decoration.
2. **Change log** — dated entries, newest first. No bullet markers; the date leads in bold.
3. **Ordnance signal** — sage-tinted block. What this conflict does to physical materiel.
4. **Why it started** — a short origin block on a hairline rule. Neutral, dated, and explicit
   about which framings are contested. This is what makes the brief readable by someone who has
   not been following the file, and it is where the reader learns whether a conflict is likely to
   produce a disarmament process or just more of itself.

On the closing TWB page, the **watch items come before** the "what this brief does not support"
caveat — the actionable list should not sit underneath the disclaimer.

Branding follows `design-system/tokens.css`: sage is the only hue, zero border radius, Helvetica
Neue with IBM Plex Mono for the uppercase UI layer, hairline rules, no rounded anything.

### Producing the PDF

**CSS multicolumn is not honoured by the available Chromium build when printing** — `column-count`
is silently ignored in the print path, so a two-column brief cannot be produced with CSS alone.
`typeset.js` solves this: it loads the master HTML, flattens it into atomic blocks (opening up
each `.item`, since a whole conflict entry is taller than a page, while welding each heading to
the block after it so no conflict name is orphaned), and packs those blocks into measured
**full-width, single-column** 816×1056 artboards, adding pages as the content needs them.

The layout is **one column at full width**, not two, and type is set at `SCALE` (default 1.22 of
the master's sizes — roughly 9pt body) for comfortable reading. Override with the `SCALE`
environment variable. Run `node typeset.js` and check that `oversize-blocks` is 0 and that the
last page ends with the footer before shipping.

### Delivery

The **email body is a changes-by-section digest**, not the full brief: a one-line read, one short
paragraph per region bolding only what actually moved, a watch list ordered by consequence to
TWB, and the sourcing note. The **full brief goes as the attached PDF**. Inline all CSS in the
email, avoid flex, and do not rely on SVG — Gmail strips it, so use the text wordmark as the
Letterhead template does.

**Sending with the PDF attached — the working method.** The Gmail connector takes attachments
only as inline base64, which no model can reproduce byte-exact for a 240KB binary. The route that
works is a hand-off between the connector and the browser:

1. **Create the draft through the Gmail connector** (`create_draft`) with the full HTML body. This
   is the only way to get the branded HTML in intact — typing or pasting into Gmail's compose
   loses it.
2. **Open Gmail in the connected Chrome at `mail.google.com/mail/u/1/#drafts`.** The connector is
   authenticated as tom@tmcapitalgroup.co, which is profile **u/1** in that browser; **u/0 is
   tyouzwyshyn@gmail.com and will not show the draft**. If the draft seems missing, you are on
   the wrong profile.
3. **Hit the refresh button in the draft list before clicking anything.** A newly created draft
   does not appear until the list refreshes, and clicking the top row blind opens an unrelated
   draft belonging to someone else.
4. **Attach with `file_upload`.** Find the hidden `type=file` input in the compose toolbar and
   upload to its ref — never click the paperclip, which opens a native picker you cannot see.
   The path must be one this session may read: copy the PDF to **`/mnt/user-data/outputs/`** and
   upload from there. A path inside the user's connected folder is **rejected**.
5. **Send**, then confirm in Sent that the attachment chip is present.

If the draft body needs correcting after a compose window has been opened on it, **discard and
recreate the draft** — `update_draft` does not refresh an open compose window, and Gmail will
autosave the stale copy back over your correction.

## Daily update procedure

1. Read the existing brief at `intel/TWB_Global_Conflict_Brief.html`.
2. Research only what has changed since the last edition's date. Do not re-litigate settled
   status lines; do re-check any figure whose source has published a newer edition.
3. **Append** new dated entries at the top of each conflict's change log. Do not delete history.
4. If a status line changes, write the new one and retain the old with the date it was superseded.
   Origin blocks change only if the origin account itself was wrong.
5. Run the verification pass on any new figure before it goes in.
6. Increment the edition number, update the date, refresh the TWB read only where the underlying
   picture actually moved.
7. Rebuild the PDF with `typeset.js` and confirm `oversize-blocks` is 0 and the last page
   ends with the footer. Whatever page count that comes to is the right one.
8. Send the changes-by-section digest email; save the master and PDF back to the repo; commit.
9. **Update this skill** with anything learned — a new primary source that proved reliable, a
   figure that turned out to be false, a search route that worked. Append to
   `references/lessons.md` with the date.

## References

- `references/killed-figures.md` — figures that must never appear, and what to use instead.
- `references/lessons.md` — running log of what has been learned, dated. Append daily.
