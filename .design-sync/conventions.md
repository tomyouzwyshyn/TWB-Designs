# TWB Designs — building with this system

TWB Designs Inc. builds **Vault**, a trailer-deployed closed chamber that destroys
seized property — ammunition, narcotics, surplus stock — inside the owner's perimeter.
The design language is deliberately austere: it has to read as a defence supplier's
disclosure document, not a marketing site.

## Setup

**No provider or theme wrapper.** Components are plain functions on `window.TWB` and style
themselves from global CSS. Import the stylesheet once and everything works:

```jsx
import { Button, Card, Section, Wrap, Eyebrow } from '@twb/design-system';

<Section tone="proof">
  <Wrap narrow>
    <Eyebrow>Recovery</Eyebrow>
    <h2>Every round comes back as metal.</h2>
    <Card marked title="Cartridge brass">
      <p>Among the highest-value non-ferrous scrap grades, recovered clean.</p>
    </Card>
    <Button variant="solid" href="contact.html">Make an enquiry</Button>
  </Wrap>
</Section>
```

`styles.css` is the entry — it `@import`s `_ds_bundle.css`, which carries the tokens and
every component rule. Read those two files before styling anything yourself.

**Light ground only.** There is no dark mode. The system inverts on physical equipment,
never on screen. The single exception is `CtaBand`, which is black by design.

## The rules that matter

1. **Sage is the only hue.** `--sage` (#66705F, text-grade) and `--sage-mark` (#788274,
   for marks/borders/fills and large type). It carries action, material and proof alike.
   Never introduce a second accent.
2. **Status is never a traffic light.** Negative, superseded or conventional-practice
   content is carried by **weight and form** — `--neg` (#3D3D38) with **dashed** strokes.
   No red, no amber, no green. `Field invalid` and `CustodyStrip` both demonstrate this.
3. **Zero border radius everywhere.** `--radius: 0`, no exceptions.
4. **1px hairlines only** (`--rule` #E2E1DA). No shadows, no gradients except the hero wash.
5. **Corner brackets are the motif** — 6×6px, offset −3px, on two adjacent sides per corner.
   Use `<Brackets/>` inside a positioned element, or the `marked` prop on `Card`. A bracket
   signals *this surface carries evidence*; don't decorate with it.
6. **Sage must own whole surfaces**, not just labels — `Section tone="proof"` is the
   sage-wash ground for recovery, verification and material claims.

## Typography

One face: `"Helvetica Neue", Helvetica, Arial, sans-serif`. **Weight climbs as size falls** —
`h1` 400, `h2` 500, `h3` 600. Tracking tightens as size grows (−.028em display → −.008em body).

The **UI layer is `IBM Plex Mono`, uppercase, +.09em** — the opposite tracking sign to body
text, deliberately. It carries every label, status, spec value and control: `Eyebrow`, `Tag`,
`Chip`, `Button` labels, `SpecTable` values, `Fine`, field labels. If a piece of text is a
*label or a measurement*, it belongs in that register; if it is prose, it does not.

## Token vocabulary

Use `var(--*)` for your own layout glue — never hard-code a hex.

| Group | Tokens |
|---|---|
| Ground | `--ground` `--surface` `--surface-2` |
| Ink | `--ink` `--ink-2` `--ink-3` |
| Rules | `--rule` `--rule-2` `--hair` |
| Sage | `--sage` `--sage-mark` `--sage-hot` `--sage-wash` `--sage-hair` |
| Negative | `--neg` `--neg-2` (pair with dashed strokes) |
| Type | `--display` `--body` `--ui` · `--w-display` `--w-section` `--w-sub` `--w-body` |
| Tracking | `--track-display` `--track-section` `--track-sub` `--track-body` `--track-ui` |
| Space | `--s1`…`--s6` · `--measure` (62ch) · `--radius` (0) |
| Motion | `--ease` `--dur-interaction` (120ms) `--dur-reveal` (620ms) `--stagger` (70ms) |

## Layout

`Wrap` carries the gutters (1280px, or 920px with `narrow`). `Section` sets the ground:
`plain` · `band` (neutral) · `proof` (sage wash). `Grid` takes `cols={2|3|4}` and collapses
to one column under 760px. Page bodies run: `PageHead` → `Section`s → `CtaBand` →
`ClaimLine` → footer `Wordmark`.

## Copy register

Pragmatic, protective, threat-framed. **Hard-edged, never martial.** State the mechanism,
cite the source, stop.

- Not *"innovative, environmentally responsible solutions"* → **"Zero transfers. Zero
  diversion windows. Signed out once, destroyed, weighed, certified."**
- Every unproven claim gets a `Chip status="pending"`, not silence. `Note signature` is
  where the brand states what it does **not** claim — that honesty posture is the brand.
- The **four claims** appear in fixed order and are never reordered: same day · zero
  transfers · recovered not released · nobody stands over it. `ClaimLine` renders them.

Statutory hazard marking (regulatory red/yellow) is prescribed by safety convention, is
**not** part of this system, and must never be restyled to match it.
