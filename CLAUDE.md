# TWB Designs — brand project

Working context for this folder. Read before touching any file here.

## What this is

TWB Designs Inc. (Hamilton, Ontario) builds **eMACS** — a trailer-deployed closed-chamber
system that destroys small arms ammunition up to .50 calibre. eMACS is the operating
foothold, not the ceiling: the business is being built, by acquisition, into a
**demilitarization and global secure destruction** platform. Held and operated under CLN
until it reaches scale to sell. **Optimise for the operating business, not the exit.**

## Locked decisions — do not relitigate without being asked

- **Category (reversed 2026-09-01):** demilitarization and global secure destruction —
  pursued through a roll-up/acquisition strategy, not organic throughput on eMACS alone.
  This reverses the prior "small arms only, not demilitarization" rule. eMACS today is the
  small-arms, mobile, on-site tier; the platform reaches large-calibre and artillery demil,
  metals recovery and reclamation, plant and equipment engineering, and secure destruction
  for military and conflict customers by *buying* operating businesses already doing that
  work, not by re-engineering eMACS to do it alone. Ranked target categories, in Tom's
  words: large-calibre & artillery demil, metals recovery & reclamation, plant & equipment
  engineering, secure destruction for military/conflict customers. Geography: North America
  and Europe. Ranked shortlist (detail in project memory, `twb-acquisition-targets`):
  JAKUSZ (Poland), Josef Meissner (Cologne), Alford Technologies / El Dorado Engineering,
  Interco Trading (St. Louis), Lacero Solutions / Gradient Technology.
- **Wedge (demoted to proof point, not the category):** custody — the property never leaves
  the owner's perimeter — stays the sharpest differentiator eMACS itself carries into any
  deal. It is no longer the reason the category is small-arms-only; it is one reason among
  several that the platform's foothold product wins its segment. Every competitor still
  moves the material; that fact keeps its force even though the category framing above it
  has changed.
- **Company name:** TWB Designs (market-facing), TWB Designs Inc. (legal). Machine is
  **eMACS** — this reverses the 2026-08 rename to an alternate product name (since retired,
  and removed from every document repo-wide, 2026-09-03). **eMACS is the name everywhere:
  website, capability brief, templates, design system, decks. Do not introduce any other
  product name anywhere in this folder.** (The investor deck's eMACS naming, previously
  logged as a deck-only override in project memory, is no longer an override — it is now
  the one name used across every track.)
- **CLN:** parent, kept quiet in market. Footer and diligence only.
- **US entity:** planned, not formed. Positioning is US-ready but allied/NATO-forward until it lands.
- **Copy register:** pragmatic, protective, threat-framed. Hard-edged, never martial.
- **Scope of destruction (2026-08-24):** eMACS also destroys **seized narcotics and other
  seized property** — confirmed today-capability per Tom. Ammunition stays the category
  lead everywhere; narcotics appears as capability in LE copy only, never as a referenced
  past-performance claim (all named references are ammunition work). Hero wording is
  "The property never leaves your custody" — "property" chosen to span ammunition,
  narcotics, and seized assets in the buyer's own register. This claim still carries the
  custody wedge above; it does not carry the category.

## Four claims, always in this order

Proof points for **eMACS**, the operating foothold — not a definition of the category.
The category is demilitarization and global secure destruction; these are why eMACS wins
the segment it already operates in, and why it is a credible foothold to build the roll-up on.

1. Same day. On site. Your own people. *(uncontested — nearest competitor deploys in 3 weeks)*
2. Zero transfers. Zero diversion windows.
3. Recovered, not released. *(domestic metal supply, not green virtue)*
4. Nobody stands over it. *(LASD, 18 July 2025 — three detectives killed)*

Claim 3 carries the **cost-recovery** component of the value proposition (elevated
2026-08-22): recovered Pb–Sb / brass / copper sells into existing secondary markets and
comes off the cost of destruction. Discipline: pitch **net cost of destruction** (price
minus verified recovered value), never "cheaper" in the gross — OB/OD runs ~$750/ton and
undercuts everyone, so a raw price-per-ton comparison loses. Conventional-demil cost
anchors allowed: ~$2,000/ton (GAO FY15), $2,890/ton (NAS). No dollar recovery tables
until third-party verification of the 97% figure publishes.

**On the tons/year objection.** eMACS alone is a mobile, on-site tier, not a stockpile-clearing
one — say so on the first call, the same discipline as the four claims above. Do not let that
honesty read as a category limit: it is the reason the roll-up exists. The acquisition
programme is what turns "not competitive on tonnage" into "not yet, and here is how."

## Design system — exact values

```
ground   #FFFFFF   surface #FAFAF8   surface-2 #F2F1EC
ink      #000000   ink-2   #33332F   ink-3     #6E6C66
rule     #E2E1DA   rule-2  #CFCDC4   hair      rgba(0,0,0,.14)

sage       #66705F   text-grade, AA on white — ALL small type
sage-mark  #788274   exact client sample — marks, borders, fills, large type
sage-wash  #F1F3F0   proof-surface ground
sage-hair  #D3D9D0   hairline on proof surfaces
neg        #3D3D38   negative register     neg-2 #8C8A83
```

- **Sage is the ONLY hue.** It carries action, material and proof alike. No second accent.
- The **negative register** (conventional disposal, superseded claims) is carried by
  **weight and form — dark neutral with dashed strokes**, never by hue. No traffic-light palette.
- Sage must own **whole surfaces**, not just labels. An accent bound only to hairlines is invisible.

**Logo** — the mark is an italic geometric TWB wordmark, vectorised from the supplied
original. `brand/twb-logo.svg` uses `currentColor`, so it inherits the colour of whatever
it sits in; black and white variants exist for contexts that need a fixed fill.
The lockup is **[mark] + "Designs"** — cap heights matched, baselines aligned, gap .32em.
In HTML: `.wordmark` sets the type, the SVG runs at `height:.72em` with
`vertical-align:baseline`. Never retype TWB as text — always the mark.

**Type** — single face. `"Helvetica Neue", Helvetica, Arial, sans-serif`.
Neue leads so macOS reaches intermediate weights (plain Helvetica/Arial ship only 400/700).
Headings **400 display / 500 section / 600 sub-head** — weight climbs as size falls.
Body 400, letter-spacing −.008em. Tracking: −.028em display → −.009em sub-head.
UI layer is `IBM Plex Mono`, uppercase, **+.09em** (opposite sign to body, deliberately).

**Components** — zero border radius everywhere. Corner brackets are the motif: 6×6px,
offset −3px outside the box, 1px on two adjacent sides, built from two child elements.
Hover fills sage, brackets scale 1.028. Transitions 120ms `cubic-bezier(.4,0,.2,1)`.
Scroll reveal 620ms / 14px / 70ms stagger. All motion inside `prefers-reduced-motion`.

**Physical:** mark reads single-colour at 40mm on painted steel. Ground inverts on equipment.
Statutory hazard marking (regulatory red/yellow) is NOT part of this system — never restyle it.

## Numbers that must never appear — each is falsifiable in minutes

| Killed | Use instead |
|---|---|
| 400,000 tons stockpile | 296,534 short tons (P-1 book, 4 Dec 2025) — and it is *shrinking*, −37.1% since FY2016. If challenged: 400,000 was the 2019 NASEM baseline — reconcile, don't deny. |
| 7,600 unique items | >7,000 DODICs (July 2025) |
| 70,000–100,000 tons/yr growth | The stockpile is declining, not growing — the old figure conflated *rockets* with *tons*. Kill the backlog-growth driver entirely. |
| $1,800/ton | ~$2,000/ton (GAO FY15) or $2,890/ton (NAS). Defensible only as an ESI contained-thermal *bid price*, footnoted — never as the programme anchor. |
| $34.6B Ukraine demining | $30B (RDNA4, Feb 2025) |
| 30–50% dud rate | 1–2% to 30–40% (GICHD) |
| "$808.8M demil IDIQ" as revenue | Could not be verified anywhere — do not use. Real vehicle: $110.1M, three seats; ended 20 May 2026. |
| "$2.3B Hawthorne demil contract" | 20-yr base-ops contract; demil is 1 of ~15 work statements |
| "$3bn across 2026–27 demil awards" | Army demil line 4099EP1700: $155.1M FY26 / $161.2M FY27. PM Demil plans ~$30M/yr competitive IDIQ 2026–30. |
| "$15bn/yr" global TAM | Honest SAM for mobile on-site small-arms destruction: $75–200M/yr globally. A platform-wide TAM must be labelled *our construction*, never presented as sourced. |

**Unverified, present as ours not as fact:** 97% recovery, "exceeds CA EPA/NATO/EU standards".
Third-party testing commissioned; until it lands these are *our operating figures*.

## Two live risks

1. **Regulatory classification.** "Two-stage combustion" may class eMACS as an *incinerator*
   under 40 CFR 260.10 rather than a Subpart X unit — materially heavier permitting, decided
   partly by our own wording. Needs environmental counsel before copy is locked. Now that
   demilitarization is the explicit category, expect evaluators to test this classification
   harder, not less — do not soften the wording discipline to fit a bigger-sounding pitch.
2. **US standing.** The Canadian entity CANNOT hold US small-business status, an ATF FEL, or
   DDTC registration. Claiming any is False Claims Act exposure. The CAGE claim needs care:
   DLA covers Canadian entities (NCAGE), and a Canadian firm can register in SAM and prime US
   federal work — the real barrier is SBA set-aside status and facility clearance, not the
   CAGE code itself. Canada IS a DFARS 225.872 qualifying country — say that instead; it's
   checkable and underused.

## Repo & deployment

- GitHub: **https://github.com/tomyouzwyshyn/TWB-Designs** (private, branch `main`).
  **Every change set gets committed and pushed** — this is a standing instruction (2026-08-24).
- Vercel: project creation via the MCP connector 403s (same token problem as CLN — see
  memory). The repo is import-ready: root directory `website`, framework Other, no build
  command, `vercel.json` already in place. Once Tom imports it in the dashboard, every
  push auto-deploys.

## Files

```
CLAUDE.md                     this file — read first

strategy/
  TWB_Brand_Strategy_Platform.html    positioning, claims audit, voice, naming
  TWB_Deck_Teardown.html              diligence pass on the original investor deck
  TWB_Investment_Narrative.html       the platform/roll-up story track — full narrative +
                                      slide skeleton + numbers-discipline appendix

brand/
  twb-logo.svg                        the mark. currentColor — inherits its context
  twb-logo-black.svg / -white.svg     fixed-fill variants
  twb-logo-black.png / -white.png     2400px rasters, for PowerPoint and anywhere
                                      vector isn't accepted

design-system/
  TWB_Design_System.html              palette, type, components, motion — source of truth
  tokens.css                          the same values as importable CSS. Use this in code,
                                      don't hard-code hexes.
  react/                              @twb/design-system — React wrapper over the CSS
                                      system, built for Claude Design

website/
  index.html · system.html · custody.html · operators.html ·
  contracting.html · contact.html     six-page static site, no build step. Shared chrome is
                                      generated — README.md documents the launch checklist,
                                      the form endpoint (js/site.js FORM_ENDPOINT), and the
                                      five named video slots in assets/video/.
  css/tokens.css                      copy of design-system/tokens.css — keep in sync
  css/site.css · js/site.js           all styles and behaviour

deck/
  TWB_eMACS_Capability_Brief.pptx     12 slides, speaker notes included — the operating
                                      foothold deck
  TWB_Investment_Deck.pptx            17 slides — the platform/roll-up story, for investors
  DEMIL_BACKLOG_SERIES.md             primary-source US demil stockpile data behind the
                                      investment deck's backlog chart

templates/
  Main.dc.html                        capability statement (US Letter, 816×1056)
  Certificate.dc.html                 certificate of destruction
  Letterhead.dc.html                  letterhead
  SlideTitle.dc.html                  slide — title (1280×720)
  SlideContent.dc.html                slide — content
  EquipmentMark.dc.html               trailer / equipment mark, light + dark finish
  BusinessCard.dc.html                business card (336×192 = 3.5×2in)
  canvas.json                         layout manifest — positions, pages, frame sizes
                                      Claude Design Component format. Print artboards are
                                      authored at 96px/inch.

intel/
  TWB_Competitor_Brief.pdf            46 profiles, 6 tiers — the competitor set
  TWB_Global_Conflict_Brief.html/.pdf daily-updated conflict survey, materiel/market lens
  skill/                              the conflict-brief research skill and its references

archive/                              SUPERSEDED — reference only, do not build from
  TWB_Brand_Strategy_Brief.docx       original brief; its market numbers are wrong
  TWB_Designs_CIM_US_rough for Brad.pdf   old sell-side CIM; carries the killed numbers above
  website_single_file_prototype.html  the original 5-view single-file site (replaced 2026-08-22)
```

Published (Claude Code artifacts, private):
- Strategy https://claude.ai/code/artifact/eae3d844-4e4b-477e-9aef-b288afbaa112
- Website  https://claude.ai/code/artifact/fbffcacd-5f97-40b2-a45d-462fec3325f4
- System   https://claude.ai/code/artifact/5ba86298-1d3b-4cb8-9136-1bb072c30049
- Canvas   https://claude.ai/code/artifact/704cec41-0af3-4f3b-bc81-14faa74a5d2b

**Note:** the strategy and website artifact URLs were last blocked on versions published
outside the authoring session. The files in this folder are current; those two hosted pages
may be behind — and both were published before the 2026-09-01 category/naming reversal, so
treat the hosted copies as stale until republished.

## Open

- Controlled-detonation acquisition live? Changes the roadmap ladder from intent to capability.
- Naming taken to trademark screening? (USPTO/CIPO classes 9, 13, 40 — re-check whether the
  demilitarization category shift adds classes.)
- CIM needs rebuilding, not restyling — it carries the killed numbers.
- Certificate of destruction has 4 material rows; high-volume take-back needs a continuation sheet.
- The acquisition shortlist (JAKUSZ, Josef Meissner, Alford/El Dorado, Interco, Lacero/Gradient)
  needs to move from research to outreach — the category claim above is only as real as the
  pipeline behind it.
- EnviroSafe Demil's mobile deployment lead time is still unknown — the decisive fact for
  whether "same day, on site" survives contact with the nearest direct competitor.


## Investor deck (2026-09-03)

`deck/html/TWB_Investor_Deck.html` — 25-slide investor deck rebuilt in the TWB visual
system from a provided PDF (TWB_Investor_Deck_Sep2026_V4_1.pdf). Self-contained HTML,
arrow-key navigation, prints to PDF at 1280x720/slide. Uses "demilitarization" and a
platform/M&A register that diverges from this file's locked category-word rule for the
market-facing site — deliberately not reconciled; see deck/html/README.md.
