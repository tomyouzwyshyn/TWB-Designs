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

Five pages. Page 1: global indicators and the aggregate read, then Europe/Eurasia. Page 2: MENA.
Page 3: Africa. Page 4: Asia-Pacific and the Americas. Page 5: the TWB read (top half) plus
method, exclusions and gaps (bottom half).

Each conflict gets a bolded status line with its establishing source, a dated bullet change log,
and a sage-tinted **ordnance signal** block. Branding follows `design-system/tokens.css` in the
TWB Designs repo: sage is the only hue, zero border radius, Helvetica Neue with IBM Plex Mono for
the UI layer. Delivery is as an HTML email body, not an attachment — inline the CSS, avoid flex,
and do not rely on SVG (Gmail strips it; use the text wordmark as the Letterhead template does).

## Daily update procedure

1. Read the existing brief at `intel/TWB_Global_Conflict_Brief.html`.
2. Research only what has changed since the last edition's date. Do not re-litigate settled
   status lines; do re-check any figure whose source has published a newer edition.
3. **Append** new dated bullets at the top of each conflict's change log. Do not delete history.
4. If a status line changes, write the new one and retain the old with the date it was superseded.
5. Run the verification pass on any new figure before it goes in.
6. Increment the edition number, update the date, refresh the TWB read only where the underlying
   picture actually moved.
7. Send as an HTML email; save the master back to the repo.
8. **Update this skill** with anything learned — a new primary source that proved reliable, a
   figure that turned out to be false, a search route that worked. Append to
   `references/lessons.md` with the date.

## References

- `references/killed-figures.md` — figures that must never appear, and what to use instead.
- `references/lessons.md` — running log of what has been learned, dated. Append daily.
