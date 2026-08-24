# TWB Designs — brand project

Working context for this folder. Read before touching any file here.

## What this is

TWB Designs Inc. (Hamilton, Ontario) builds **Vault** — a trailer-deployed closed-chamber
system that destroys small arms ammunition up to .50 calibre. Held and operated under CLN
until it reaches scale to sell. **Optimise for the operating business, not the exit.**

## Locked decisions — do not relitigate without being asked

- **Category:** small arms ammunition destruction. NOT "demilitarization" — that market is
  scored on tons/year, where TWB loses by 3× to 200×. Never let a comparison be scored on
  throughput; reframe to *rounds destroyed without leaving the compound*.
- **Wedge:** custody. The ammunition never leaves the owner's perimeter. Every competitor
  moves the material.
- **Company name:** TWB Designs (market-facing), TWB Designs Inc. (legal). Machine is **Vault**
  (renamed from eMACS/MACS — never use the old names).
- **CLN:** parent, kept quiet in market. Footer and diligence only.
- **US entity:** planned, not formed. Positioning is US-ready but allied/NATO-forward until it lands.
- **Copy register:** pragmatic, protective, threat-framed. Hard-edged, never martial.

## Four claims, always in this order

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
| 400,000 tons stockpile | 303,772 short tons (FY25), forecast 361,220 by FY30 |
| 7,600 unique items | >7,000 DODICs (July 2025) |
| 70,000–100,000 tons/yr growth | ~+10,500 short tons/yr (the old figure adds *rockets* to *tons*) |
| $1,800/ton | ~$2,000/ton (GAO FY15) or $2,890/ton (NAS) |
| $34.6B Ukraine demining | $30B (RDNA4, Feb 2025) |
| 30–50% dud rate | 1–2% to 30–40% (GICHD) |
| "$808.8M demil IDIQ" as revenue | ceiling, not spend — ~$30M/yr actually competed |
| "$2.3B Hawthorne demil contract" | 20-yr base-ops contract; demil is 1 of ~15 work statements |

**Unverified, present as ours not as fact:** 97% recovery, "exceeds CA EPA/NATO/EU standards".
Third-party testing commissioned; until it lands these are *our operating figures*.

## Two live risks

1. **Regulatory classification.** "Two-stage combustion" may class Vault as an *incinerator*
   under 40 CFR 260.10 rather than a Subpart X unit — materially heavier permitting, decided
   partly by our own wording. Needs environmental counsel before copy is locked.
2. **US standing.** The Canadian entity CANNOT hold a US CAGE, small-business status, an ATF
   FEL, or DDTC registration. Claiming any is False Claims Act exposure. Canada IS a DFARS
   225.872 qualifying country — say that instead; it's checkable and underused.

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

design-system/
  TWB_Design_System.html              palette, type, components, motion — source of truth
  tokens.css                          the same values as importable CSS. Use this in code,
                                      don't hard-code hexes.

website/
  index.html · system.html · custody.html · operators.html ·
  contracting.html · contact.html     six-page static site, no build step. Shared chrome is
                                      generated — README.md documents the launch checklist,
                                      the form endpoint (js/site.js FORM_ENDPOINT), and the
                                      five named video slots in assets/video/.
  css/tokens.css                      copy of design-system/tokens.css — keep in sync
  css/site.css · js/site.js           all styles and behaviour

deck/
  TWB_Vault_Capability_Brief.pptx     12 slides, speaker notes included

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
may be behind.

## Open

- Controlled-detonation acquisition live? Changes the roadmap ladder from intent to capability.
- Naming taken to trademark screening? (USPTO/CIPO classes 9, 13, 40.)
- CIM needs rebuilding, not restyling — it carries the killed numbers.
- Certificate of destruction has 4 material rows; high-volume take-back needs a continuation sheet.
