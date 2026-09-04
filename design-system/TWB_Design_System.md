# TWB Designs — Style System

A single-reference export of the TWB Designs visual system: colour, type, spacing,
components, motion, and the copy register that goes with them. Source of truth for the
values below is `design-system/tokens.css`; this document explains *why* each value is
what it is, so it travels on its own.

TWB Designs builds **eMACS**, a trailer-deployed closed-chamber system for munitions and
seized-property destruction. The system reads as a disclosure document from a serious
technical supplier — pragmatic, protective, hard-edged, never decorative. Every rule
below exists to serve that register. If a design choice makes the brand feel like an
ordinary consumer product, it's wrong, regardless of how attractive it looks in
isolation.

---

## 1. Principles

1. **Sage is the only hue.** No second accent colour, anywhere, ever. It carries action,
   material, and proof alike — a button, a metal-recovery card, and a verified stat all
   use the same green. Introducing a second colour (a blue link, a red warning) breaks
   the system's core claim: one voice, one register, nothing decorative.
2. **Status is weight and form, not colour.** A "this is unverified" or "this is the old
   way of doing it" state is never carried by red/amber/traffic-light colour. It's carried
   by a **dashed stroke** and a **dark neutral** ink. This is the single most distinctive
   rule in the system — see §5.
3. **Zero radius, everywhere, no exceptions.** Every box, button, input, and image is
   square-cornered. This is not a preference — it's load-bearing: rounded corners read as
   "consumer software," and this system is explicitly not that.
4. **Corner brackets are the motif**, not decoration. A bracket means "this surface
   carries evidence or proof." Don't apply it to purely decorative containers — that
   dilutes the signal for the surfaces that actually earn it (see §6).
5. **State what you don't claim.** The system has a dedicated visual pattern (the
   signature note, see §7) specifically for saying "we haven't verified this yet." That
   honesty pattern is treated as a brand asset, not a legal-department afterthought.

---

## 2. Colour

Only three colour families exist: **neutral** (ground/ink), **sage** (the one hue), and
**negative** (dark neutral, paired with dashed strokes — not a colour family so much as a
weight-and-form register).

### Ground & ink
```css
--ground:    #FFFFFF   /* page background — always white, no dark mode */
--surface:   #FAFAF8   /* card / panel fill */
--surface-2: #F2F1EC   /* full-width neutral band (section backgrounds) */
--ink:       #000000   /* headings — pure black */
--ink-2:     #33332F   /* body text */
--ink-3:     #6E6C66   /* captions, secondary, muted labels */
--rule:      #E2E1DA   /* hairline — 1px, never heavier */
--rule-2:    #CFCDC4   /* slightly stronger hairline, table borders */
--hair:      rgba(0,0,0,.14)  /* translucent hairline over imagery/media */
```

### Sage — the only hue
```css
--sage:      #66705F   /* text-grade — 5.2:1 contrast on white. Use for ALL type under 18px */
--sage-mark: #788274   /* exact client-sampled value — 4.0:1. Marks, borders, fills, large type ONLY */
--sage-hot:  #8A9585   /* hover/active state */
--sage-wash: #F1F3F0   /* proof-surface background (the "evidence" ground) */
--sage-hair: #D3D9D0   /* hairline inside a proof surface */
```
`--sage` and `--sage-mark` are **not interchangeable** — they're two different sample
points calibrated for different contrast requirements. `--sage` clears accessible body
text; `--sage-mark` is the exact physical/brand sample, used only where its lower
contrast is safe (large type, borders, fills — never small running text).

### Negative register (not a colour — a technique)
```css
--neg:   #3D3D38   /* pair with dashed strokes. "Superseded," "conventional," "unverified" */
--neg-2: #8C8A83   /* large text only — 3.4:1, not for small type */
```
Used for: the old/conventional method in a before/after comparison, an invalid form
field, a "not applicable" table cell. **The pairing rule:** neg colour + dashed stroke,
always together. Dark colour alone (without the dashed form) doesn't read as "negative"
in this system — the two carry the meaning jointly.

### Source & verification
Sage `#788274` was sampled from a client-supplied physical reference; `#66705F` (the
text-grade value) was derived from it specifically to clear WCAG AA. All contrast ratios
are calculated against `#FFFFFF` per WCAG 2.1. **Do not re-sample or "improve" these
values** — they're anchored to a physical reference sample, not a colour-theory choice.

---

## 3. Typography

**Two faces only.** No third font, ever — not even for a single decorative word.

```css
--display: "Helvetica Neue", Helvetica, Arial, sans-serif;
--body:    "Helvetica Neue", Helvetica, Arial, sans-serif;
--ui:      "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

- **Helvetica Neue** leads the stack (not bare Helvetica) specifically so macOS resolves
  intermediate weights (500, 600) — plain Helvetica and Arial ship only 400/700 on most
  systems, which silently breaks the weight rule below.
- **Font availability:** Helvetica is a system face on macOS, no licence needed for web
  or print. On Windows/most Linux it resolves to Arial or Liberation Sans — metrically
  identical, so layouts hold exactly; only minor letterform differences (R, G, the
  terminals on C and S). **IBM Plex Mono is the only web-served font**, from Google Fonts.
- **A naming note:** there is no sans-serif Times — Times is defined by its serifs and
  Linotype never issued a sans companion. A knockoff called "Times Sans Serif" circulates
  in some font packs; it's a Helvetica derivative and must not be used. Specify Helvetica.

### The weight rule: weight climbs as size falls
```css
--w-display: 400   /* h1 / largest display type */
--w-section: 500   /* h2 / section headings */
--w-sub:     600   /* h3 / sub-heads, card titles */
--w-body:    400   /* running body text */
```
Counter-intuitive on purpose: the biggest text is the *lightest* weight in the system.
This is what keeps large display type from feeling shouty, and gives small sub-heads
enough weight to hold their own at a glance.

### The tracking rule: tightens as size grows — except the UI layer, which inverts it
```css
--track-display: -.028em   /* h1 — tightest, because it's biggest */
--track-section: -.019em   /* h2 */
--track-sub:     -.009em   /* h3 */
--track-body:    -.008em   /* body copy */
--track-ui:       .09em    /* UI/mono layer — POSITIVE, the opposite sign, deliberately */
```
The mono UI layer (labels, buttons, nav, specs, status) is always **uppercase** and
tracked **open** (+.09em) — this is the one place tracking goes positive, and it's what
visually separates "this is a label/control" from "this is prose" at a glance, without
needing a second colour or a box around it.

### Where each face goes
| Content | Face | Weight | Tracking |
|---|---|---|---|
| H1 / hero headline | Display | 400 | −.028em |
| H2 / section heading | Display | 500 | −.019em |
| H3 / card title, sub-head | Display | 600 | −.009em |
| Body copy, paragraphs | Body | 400 | −.008em |
| Labels, buttons, nav, specs, status chips, table values | Mono (UI) | 400–600 | **+.09em, uppercase** |

If a piece of text is a *label or a measurement*, it belongs in the mono UI register at
positive tracking. If it's *prose*, it belongs in Helvetica Neue at negative tracking.
Never mix the two conventions on the same piece of text.

---

## 4. Spacing & layout

```css
--s1: .5rem     /* 8px  — tight internal gaps */
--s2: .875rem   /* 14px — default gap between related elements */
--s3: 1.375rem  /* 22px — gap between a label and its content block */
--s4: 2.25rem   /* 36px — gap between distinct content groups */
--s5: 3.5rem    /* 56px — section-level breathing room */
--s6: 6rem      /* 96px — major section separation */

--measure: 62ch /* max-width for a block of running prose — never wider */
--radius:  0    /* zero everywhere, no exceptions */
```

The scale is geometric-ish rather than a strict multiplier — each step is a deliberate
jump, not a formula, so pick the nearest step rather than interpolating.

**Reading measure.** Body copy is capped at `62ch`. A paragraph wider than that becomes
hard to track line-to-line — this is a readability floor, not a stylistic preference.

---

## 5. The negative register (in detail)

This is the system's signature disambiguation technique, worth calling out on its own.
Most design systems reach for red/amber/green to mean "bad / pending / good." This system
refuses that palette entirely — sage is the only hue, full stop — so status has to be
carried by something else:

| Meaning | Technique |
|---|---|
| Verified / current / good | Solid sage border or fill, solid stroke |
| Pending / unverified (not bad, just not yet proven) | Sage, but marked with a status chip — see §7 |
| Superseded / conventional / wrong answer | **Dark neutral (`--neg`) + dashed stroke**, together |
| Not applicable | Muted ink-3, no colour signal at all |

Concretely: in a before/after comparison (the old disposal method vs. the new one), the
"old method" side is rendered in `--neg` with dashed borders and connecting lines, while
the "new method" side is solid `--sage`. An invalid form field gets a dashed `--neg`
border, never a red one. This reads as considered and technical rather than alarmist —
consistent with a supplier who handles genuinely hazardous material and doesn't need to
manufacture urgency with colour.

---

## 6. Components

### Corner brackets — the motif
```css
.brk > i::before, .brk > i::after {
  width: 6px; height: 6px;
  border-color: currentColor; border-style: solid; border-width: 0;
}
/* top-left: border-top + border-left, offset -3px outside the box on both edges */
/* repeated for all four corners, 1px stroke, two adjacent sides per corner */
```
- **Digital/print:** 6×6px marks, offset 3px *outside* the box, 1px stroke, one or two
  child `<i>` elements (`.t` top pair, `.b` bottom pair).
- **Physical (equipment, plates, case labels):** brackets scale up to ~14px at 2px stroke
  — has to survive distance and paint, so the digital proportions don't translate 1:1.
- **Use it to mean something.** Apply `.brk` (or the "marked" card variant) only to
  surfaces that carry evidence, verified material, or proof — a card of decorative
  content in brackets dilutes the signal. If everything is bracketed, nothing is.

### Buttons
- Zero radius, 1px border, mono uppercase label at +.09em tracking.
- Two variants: **solid** (black fill, white text — the one primary action per view) and
  **outline** (transparent/tinted fill, ink text — secondary actions).
- Hover: fill transitions to sage, corner brackets scale to 1.028×, 120ms.
- **Never have two solid buttons in the same view** — solid means "the one thing you want
  acted on here." More than one and neither reads as the action.

### Cards
- Plain card: `--surface` background, `--rule` border, no brackets.
- **Marked** card (evidence/proof): `--sage-wash` background, `--sage-hair` border,
  corner brackets. Reserve for cards that carry a verifiable claim, recovered material,
  or a named reference — not for generic content.
- Status tag (mono, uppercase, small) sits above the card title when the card needs a
  category label ("Shipping today," "Intent — gated").

### Status chips
- Small pill: 1px border matching the text colour, a small square marker, mono uppercase
  label.
- Three states only: **held** (sage — we have it), **pending** (sage — in progress, not
  a failure state), **n/a** (muted ink-3 — blocked on something named). No red/amber
  variant exists by design — see §5.

### Tables
- 1px hairline row dividers, no zebra striping, no cell backgrounds except to highlight
  one column (e.g., "this is our own row" in a competitive matrix).
- Numeric/spec values render in the mono UI face, sage, with tabular numerals
  (`font-variant-numeric: tabular-nums`) so figures align vertically.

---

## 7. The honesty pattern (copy register)

This is the most brand-defining part of the system and the easiest for a design agent or
new contributor to miss, because it's a *content* pattern expressed through components,
not a purely visual rule.

**The signature note.** A bordered block (sage border, sage-wash background) reserved
specifically for stating what the company does **not** yet claim — an unverified
statistic, a pending certification, a rate that hasn't been third-party-audited. This
block is never hidden in fine print; it's given the same visual weight as a positive
claim. Treat "here is what we can't prove yet" as a first-class piece of content, not an
apologetic footnote.

**Status chips on every unverified figure.** Any number that hasn't cleared independent
verification carries a `pending` chip inline, right next to the number — not deferred to
a disclaimer at the bottom of the page.

**Copy examples — not this / this:**

| Not this | This |
|---|---|
| "TWB delivers innovative, environmentally responsible demilitarization solutions for the modern warfighter." | "Zero transfers. Zero diversion windows. Signed out once, destroyed, weighed, certified." |
| "Committed to the highest standards of safety and environmental stewardship." | "Remote start. Remote stop. Nobody stands over it while it runs." |
| "Terrorists are buying out of your evidence room." *(unevidenced threat language)* | "Poorly secured and surplus stockpiles are a documented source of diverted small arms ammunition." |

The pattern in all three: replace a generic corporate-marketing claim with a **specific,
checkable, mechanism-level statement**. Threat framing is allowed, but only when it's
sourced — an unsupported threat claim costs more credibility than the entire honesty
register gains elsewhere. Name the mechanism, cite the source, stop.

---

## 8. Motion

```css
--ease:            cubic-bezier(.4, 0, .2, 1);
--dur-interaction: 120ms;   /* hover, focus, button states */
--dur-reveal:      620ms;   /* scroll-triggered content reveal */
--stagger:         70ms;    /* delay between successive revealed elements */
```
- Interaction feedback (hover, click) is fast — 120ms. Content reveal on scroll is
  slower and more deliberate — 620ms, staggered 70ms between siblings so a group of cards
  or stats appears in a considered sequence rather than all at once.
- **All motion respects `prefers-reduced-motion: reduce`** — transitions and animations
  are disabled wholesale for users who've opted out. This is a hard requirement, not an
  enhancement.

---

## 9. Physical application (equipment, print, signage)

- The mark must read **single-colour at 40mm on painted steel** — no gradient, no fine
  detail that would be lost at that scale or in a single ink pass.
- **On equipment, the ground inverts**: white or sage mark on the machine's own dark
  finish. This inversion is tolerated *only* on physical surfaces — **digital surfaces
  never invert; there is no dark mode.**
- Corner brackets scale up as a physical registration mark on panels, plates, and case
  labels (see §6).
- **Statutory hazard marking is the one exception to the whole system.** Regulatory
  red/yellow hazard marking is prescribed by safety convention, is not part of this
  brand system, and must **never** be restyled to match it. Don't sage-wash a hazard
  label.

---

## 10. Quick reference — do / don't

| Do | Don't |
|---|---|
| Use sage for every accent purpose | Introduce a second accent colour for "variety" |
| Mark status with weight + dashed stroke | Use red/amber/green for status |
| Reserve corner brackets for evidence-bearing surfaces | Bracket decorative containers |
| Keep tracking negative on prose, positive on the mono/UI layer | Track body copy open, or set labels in tight negative tracking |
| State unverified figures with a `pending` chip, inline | Bury caveats in a footnote |
| Cite the mechanism and source behind a threat claim | Use unsupported threat language |
| Zero radius, always | Round a corner "just this once" |
| One solid button per view | Multiple solid (primary) buttons competing for attention |

---

*Source files: `design-system/tokens.css` (canonical values), `design-system/TWB_Design_System.html`
(full illustrated reference), `website/css/site.css` (implementation). This document is a
portable summary — if it and `tokens.css` ever disagree, `tokens.css` wins.*
