# TWB — investor deck workstream changelog

Running record of every change, decision and open item. Newest first.
Entries marked PROPOSED are recommendations awaiting Tom's decision.

---

## 2026-09-01 — Category and naming reversed, repo-wide

**Decision from Tom.** While eMACS is the current operating business, the category TWB is
building toward — via a roll-up/acquisition strategy — is demilitarization and global
secure destruction. This reverses two of the CLAUDE.md-locked decisions from August 2026:

- **Category:** was "small arms ammunition destruction, NOT demilitarization." Now:
  demilitarization and global secure destruction, reached by acquiring operating businesses
  (large-calibre & artillery demil, metals recovery & reclamation, plant & equipment
  engineering, secure destruction for military/conflict customers) rather than by declaring
  the larger category out of scope. eMACS stays the small-arms, mobile, on-site foothold —
  the proof of concept the roll-up is built from, not the ceiling on what it sells.
- **Naming:** was "Vault" (renamed from eMACS/MACS, August 2026). Now: **eMACS**, restored
  as the permanent name everywhere — website, capability brief, templates, design system,
  both decks. This also resolves the open question in the 25 August teardown (§ask-10) and
  the investment-narrative track's "deck-only override," which is no longer an override —
  eMACS was never actually replaced in the investor deck, and now nothing else needs to be
  either.
- **Custody:** demoted from "the category" to "the sharpest proof point eMACS carries into
  a deal." The four claims are unchanged in substance and priority order; they are now
  proof points for the foothold product, not a definition of the whole business.

**Files updated:** `CLAUDE.md`, project memory (`twb-brand-strategy`,
`twb-investment-narrative`), the six-page website, `strategy/TWB_Brand_Strategy_Platform.html`
(superseded-notice + targeted section rewrites, historical recommendation for "VAULT" left
visible and marked reversed rather than deleted), `strategy/TWB_Deck_Teardown.html` (banner +
question 10 marked resolved — the rest of its findings on the *original* 21-slide deck are
left as written, since they document that deck's actual August content), the capability deck
(renamed `TWB_eMACS_Capability_Brief.pptx`, old file moved to `_to_delete/`), all seven
print templates, the design-system React source (`chrome.tsx`) and its `ds-bundle/README.md`,
and the conflict brief's "what this means for TWB" section. `TWB_Master_Reference.html`
(the 1 September folder-review summary) also rewritten and republished.

**Not touched, deliberately:** `archive/` (superseded, do not build from — includes the old
CIM which still needs a full rebuild, not a rename); `ds-bundle/` generated build cache
(gitignored, regenerates from the fixed React source on next build); the historical body of
`TWB_Deck_Teardown.html`'s 162 questions, which quote and analyse the deck as it existed on
25 August and would misrepresent that analysis if silently renamed.

---

## 2026-08-25 — Decisions from Tom (supersede findings below where they conflict)

- **D1. LOI signed back by the seller. Treat TWB Designs Inc. + CADS as owned.**
  Resolves F3. The deck may now speak in the first person ("TWB is..."). The $700K
  entry price becomes a *disclosed acquisition basis* rather than a pending negotiation
  — still the strongest fact in the package, now with no race risk attached.
- **D2. Audience: any outside investor, most likely private equity.**
  Resolves F1 in favour of the raise narrative. The archive CIM (sell-to-strategic) is
  retired as the active thesis. Deck to be written for a lower-mid-market PE reader.
- **D3. Raise amount stays open — no stated ask, no stated valuation in the deck.**
  PROPOSED consequence: the deck still needs a "capital required to execute" view
  (uses, phasing, ranges) because a PE reader will price the plan regardless. The
  *ask* is left to the conversation; the *cost of the plan* is not optional.
- **D4. Do not use the "Vault" name.**
  Reverses the CLAUDE.md rename for this workstream. Retaining eMACS/MACS in the
  investor deck is defensible on its own terms: 25 years of contract history, the IACP
  award and every customer reference attach to that name, and past performance is the
  asset being sold to an investor.
  OPEN: does this reverse the Vault decision everywhere (website, capability brief,
  equipment marks), or only in investor-facing material? CLAUDE.md still records the
  rename as locked and needs updating either way.

---

## 2026-08-25 — Investor deck review (session 1)

### Inputs read
- `TWB_Investor_Deck_editable (2).pptx` — 21 slides, full text extracted
- `TWB_Supporting_Memo (1).docx` — added by Tom mid-session
- `TWB_10-15yr_Forecast (1).xlsx` — added by Tom mid-session, 9 tabs
- `CLAUDE.md`, `archive/TWB_Designs_CIM_US_rough for Brad.pdf`, project memory

### Findings — no changes made

**F1. Three documents describe three different companies.**
- CLAUDE.md / brand strategy: small arms ammunition destruction, explicitly NOT demil;
  operating business; do not optimise for exit.
- archive CIM: 100% equity sale to a US strategic, timed to a US contract award.
- Investor deck + workbook: global demil platform, 7-acquisition roll-up, 2027 go-public
  at $150M EV raising $75M gross.
Any investor with the data room sees all three.

**F2. Disclosure gap between deck and memo — the priority item.**
The deck presents a $235.9M implied fair value and a modeled Y0 of $3.5M. Real combined
2025 actuals are $862,856 CAD revenue / ~$235K EBITDA, declining (CADS -20% over 3 years).
The memo discloses this and states it is "the only place in the package where the real
baseline is disclosed." A deck used to raise capital should not depend on a companion
memo travelling with it to be accurate.

**F3. TWB/CADS is an acquisition target, not a held asset.**
Offered at $700,000 CAD all-in (equipment, IP, MOE approvals) by the retiring owner.
~1.2x book, ~1.8-3.0x EBITDA. The deck's voice ("TWB is positioned to...") assumes
ownership that does not yet exist. PROPOSED: this is the strongest fact in the package
and should lead, not be omitted.

**F4. Numbers in the deck that CLAUDE.md lists as must-never-appear.**
- "$808.8M Army demil IDIQ" — a ceiling, ~$30M/yr actually competed. Slides 7, 21.
- "$2.30B Hawthorne award" — 20-yr base-ops contract, demil is 1 of ~15 work statements.
- Slide 21 "over $3bn across its 2026-27 demil awards" — built from the two above.

**F5. Machine still named eMACS/MACS throughout the deck.** Renamed **Vault** per
CLAUDE.md locked decisions. Slides 9, 13, 14, plus the workbook and memo.

**F6. Model issues (workbook).**
- Acquisitions priced at 1.2x revenue ($151.2M cumulative spend for $465M acquired
  revenue). Likely materially understated vs real defence-services transaction multiples.
- 20% discount rate too low for the risk profile; 25-35% is the realistic underwriting
  band. At 30% the DFV midpoint falls from ~$236M to ~$106M.
- 14% metals-recovery multiplier is an acknowledged placeholder applied to a revenue base,
  and assumes material-recovery rights TWB may not hold under existing contracts.
- $150M illustrative pre-money is an acknowledged standalone placeholder. Against a $700K
  entry price it implies a ~214x step-up in ~12 months with no stated bridge.
- Deck states no capital requirement, no use of proceeds, no ask, no structure.

**F7. Missing slides.** Team, use of proceeds / the ask, named competition, current
financials, contracted backlog, risk register, capital plan.

**F8. Material fact omitted from the deck.** The CIM states a US DoD contracting
engagement is "in progress." Nothing about it appears in the investor deck.

### Open questions put to Tom
1. Who is the deck for and what is the ask — $75M raise, Series A, or strategic sale?
2. Is the TWB/CADS acquisition signed, under LOI, or a conversation? Exclusivity?
3. Rebuild honest, or restyle as-is? (Recommendation: rebuild.)
4-10. US DoD contract status; US entity formation and FOCI; 3-yr financials; controlled-
detonation acquisition status; team; whether the "U.S. university (TBC)" dissolution
licence and "MIT partnership" are real; throughput vs addressable market arithmetic;
definition of the "during and post conflict" service set.

### Research in flight
20-agent research fleet: competitive landscape (US demil base, Europe/NATO, small-arms
and mobile, mine action/UXO, chem demil and energetics, metals recovery, roll-up targets),
institutional research (energetics dissolution, sensing and robotics, propellant/rocket
motor, regulatory and funding programmes), claim verification (market, valuation,
technical), and adversarial diligence (growth PE, defence-tech VC, defence operator,
CEO/strategy, compliance counsel).

---

## 2026-08-25 — Research complete, diligence pack delivered

**Deliverable:** TWB Deck Teardown (artifact)
https://claude.ai/code/artifact/6b015595-8f7f-4e67-83ba-b9ff1306e401

**Research run:** 20 agents, 910 tool calls, 7 competitive segments + 4 institutional
topics + 3 verification passes + 4 diligence lenses. 18 completed; the compliance-counsel
lens and the automated synthesis step hit a session limit — an export-control / FCPA /
CFPOA pass is still OUTSTANDING and should be run.

### New findings that change the plan

**Competition — three direct collisions, two of them new**
- EnviroSafe Demil: primary NAICS 332992 (Small Arms Ammunition) — TWB's exact category.
  Markets mobile on-site deployment to .50 cal. SDB + CAGE + Rock Island IDIQ seat.
  Backed by Banyan Growth Partners. Their mobile deployment lead time is UNKNOWN and is
  the single most important open question in the competitive set — it decides whether
  "same day, on site" survives.
- Arcwood Environmental (EQT Infrastructure): names "Law Enforcement: Small arms
  ammunition" as an explicit service line. Fixed-site, so the custody wedge holds.
- LSC Destruction (Las Vegas): NEW. On-site mobile narcotics + firearms + ammunition to
  .50 cal, chain-of-custody and certificate-of-destruction language nearly identical to
  the Aug 2026 repositioning. The narcotics expansion walks into an occupied position.
- Dynasafe markets DEMIL 100 for narcotics too — narcotics is not a European differentiator.
- Dynasafe BACTEC is no longer Dynasafe (became SafeLane Global, now Igne). Chemring has
  no demil business — remove from any competitor set.
- The three-week claim is now SOURCEABLE: Dynasafe's own SDC 1000 datasheet. Cite it.

**Roadmap — the technology picks are wrong**
- Dissolution is the wrong process. Washout and meltout are the industry standard
  (NASEM 2019; IATG 10.10). Solvent washout is a downstream HMX purification step, not a
  front end. Replace with high-pressure abrasive waterjet cut-and-washout.
- Gradient Technology's core patent (US6777586B1) EXPIRED May 2023 — no licence needed.
  They are the real Year-1 counterparty and a plausible acquisition.
- MIT is the WRONG institution for metals-discrimination sensing — no lab, no PI, no
  programme. The field is NRL / Berkeley Lab / Dartmouth (Shubitidze) / Duke (Collins),
  and it has been DAGCAP-accredited and procurable since 2017. Black Tusk Geophysics
  (Vancouver) is Canadian and already accredited — one call replaces the Year-2 milestone.
- Robotics belongs in Year 1, not Year 3. Sandia has fielded it for 14+ years.
- Chemical weapons: market closed 7 July 2023. Drop entirely.
- Adding an energetics front end DESTROYS the custody wedge (FDHS precedent: 10-day setup,
  15 crew/shift, multi-container). The wedge and the roadmap are in direct conflict.

**Numbers**
- Army demil is $155.1M (FY26) / $161.2M (FY27) — Exhibit P-1. The deck's "$3bn" is ~10x over.
- Live solicitation W519TC-26-R-0007 is NAICS 332993 "except Small Arms," set-aside NONE.
  No CLIN is inside a .50 cal ceiling.
- Stockpile is SHRINKING (~48,000 tons/yr), not growing. Kill the backlog demand driver.
- Honest SAM for mobile on-site small-arms destruction: $75-200M/yr globally.
- Metals: the $1,000/1,000 lb figure is LOW (~$1,268 at Aug-2026 scrap) but gross, and it
  is a margin line not a revenue line — one unit yields ~$317K/yr.
- 10 USC 2576(a): US law prefers SELLING excess small arms ammo over destroying it.
  10 USC 7690: in government work assume the recovered metal is the CUSTOMER'S.
- Capital required: $150M+ committed by Year 4. Cadre's realised cost is ~$2.50 of capital
  per $1.00 of acquired revenue. Model prices deals at 1.2x revenue; real market is
  5.5-7.5x EBITDA.

**Sharpest technical finding — not previously known**
The 850F primary chamber sits at the top edge of the PCDD/PCDF de novo synthesis window
(200-450C) and the feedstock is copper, the most effective dioxin catalyst known, present
in bulk by design. The chamber cannot be run hotter without destroying the brass recovery
that funds the cost-recovery claim. EMISSIONS RISK AND REVENUE MODEL ARE IN PHYSICAL
CONFLICT. Commission EPA Method 23 testing before any further thermal claim.

**Corrections to our own house rules (CLAUDE.md)**
- "Canadian entity CANNOT hold a US CAGE" — contested. DLA covers US and Canadian entities
  (CAGE / NCAGE); a Canadian firm can register in SAM and prime US federal work. The real
  barriers are SBA set-aside status and facility clearance. Fix the sentence.
- Berry Amendment (10 USC 4862) covers food, clothing, textiles, tools and flatware. It has
  nothing to do with demil services. Delete from the risk list.
- ITAR: USML Cat V is NOT on Canada's exclusion list; the s126.5 Canadian exemption applies.
  Better than assumed. But SBIR/STTR is CLOSED (13 CFR 121.702) and must not be listed as a route.
- "$1,800/ton" is wrong as a conventional-demil program anchor but RIGHT as an ESI contained-
  thermal bid price. Add the footnote rather than the flat kill.
- Prepare the NASEM reconciliation: 400,000 tons is the 2019 NASEM baseline, not folklore.

**Two contradictions in our own materials**
- The CADS site sells "at your site or at ours" with per-km travel pricing — the opposite
  of the custody wedge.
- CADS page states 100 lb/hr and 482C/982C; the deck states 60 lb/hr and 850F/1750F.

**Underused, checkable advantages currently absent from the deck**
- Canada-EU SAFE (signed 14 Feb 2026): Canada is the first non-European participant in the
  EUR150bn instrument, 80% Canadian content allowed vs 35% for other third countries.
  Europe should move forward from 2028 to now.
- NSPA vendor registration: free, online, open to Canada today.
- Canadian Commercial Corporation: the DFARS 225.870-1(c) prime channel into US DoD.
- SERDP/ESTCP explicitly fund Canadian organisations — the only clean US federal R&D door.
- All four recovered metals are on the Final 2025 US Critical Minerals List (90 FR 50494).
- Germany's EUR100M North Sea/Baltic UXO programme has stated its next phase is a floating
  disposal facility so recovered ordnance never comes ashore — our custody wedge, in the
  buyer's own words, with appropriated money behind it, reachable via the Nordic-Baltic
  relationship.

### Still to do
1. Export-control / FCPA / CFPOA diligence pass (agent failed on session limit).
2. Rebuild the deck once Tom answers the 12 open items in section 09 of the artifact.
3. Rebuild the model: margin 8-12%, discount rate 30-35%, acquisitions on EBITDA multiples,
   capital requirement stated.
4. Decide the Vault-vs-eMACS naming question repo-wide and update CLAUDE.md either way.
