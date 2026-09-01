# TWB Designs — website

Static site. No build step, no dependencies. Open `index.html` directly or serve
the folder; deploy by uploading the folder as-is to any static host.

```
index.html         Overview          system.html      eMACS
custody.html       Custody protocol  operators.html   Who it serves
contracting.html   Contracting       contact.html     Enquiry form
css/tokens.css     design tokens — kept in sync with design-system/tokens.css
css/site.css       all site styles
js/site.js         reveal, menu, video slots, form
assets/video/      drop video files here (see below)
```

The only external request is IBM Plex Mono from Google Fonts. Everything else is local.

**`all-pages.html`** is the whole site in a single double-clickable file (view switcher,
same design). It is *generated* from the six pages — after editing any page, regenerate it
rather than editing it directly. Keep it next to `assets/` or its videos won't load.
The per-page files remain the deployable source of truth.

## Before publication — the checklist

1. **Contact details.** Every placeholder is visibly unfilled: `enquiries@twbdesigns.example`,
   `+1 (___) ___–____`, `[Street address]`. They appear in the footer of every page and on
   `contact.html`. Search the folder for `example`, `(___)`, and `[Street` — replace all.
2. **Form endpoint.** Set `FORM_ENDPOINT` at the top of `js/site.js` (Formspree, Web3Forms,
   or your own handler). Set `FALLBACK_EMAIL` to the real enquiries address. Until then the
   form validates but tells the visitor it is not connected.
3. **Status chips.** Every "In progress / Pending / Commissioned" chip must be re-verified
   as of launch day. They are trust infrastructure — a stale one is worse than none.
4. **Counsel review.** Technology claims → export counsel. Contracting page → government-
   contracts counsel. (The former footer "Note on this site" disclaimer was replaced by the
   wordmark on 2026-08-22 — this checklist now carries that discipline instead.)
5. **Add `og:image`** once a real photograph or mark exists.

## Video slots

Drop files into `assets/video/` with these exact names. The page finds them
automatically — no markup changes. Until a file exists, a labelled placeholder frame
shows in its place. Keep files H.264 MP4, under ~12 MB, 8–20 s, no audio track needed
(they play muted and looped).

| File           | Page        | Placement           | What to put there |
|----------------|-------------|---------------------|-------------------|
| `hero.mp4`     | Overview    | Hero, right side    | Trailer under tow, arrival through a gate, pad set-up. Wide, steady, daylight. |
| `cycle.mp4`    | System      | Top of page         | Chamber running, burner detail, control readouts, heat shimmer at the stack. |
| `recovery.mp4` | System      | Recovery band       | Graded brass / Pb–Sb ingots being weighed, gloved hands, scale readouts. |
| `control.mp4`  | Custody     | Remote operation    | Operators at the remote panel; one wide shot showing standoff distance. |
| `onsite.mp4`   | Operators   | After audiences     | Arrival at a secure gate, escort, supervised loading. |

**Interim footage note.** `hero.mp4` currently holds temporary stock footage (transcoded
to 1080p/30 from `13208148_3840_2160_60fps.mp4`) so the layout can be judged with motion
in it. Whenever a slot plays a video, the intended shot list stays overlaid on the frame
in a dashed annotation chip — it disappears only when you delete the `.ph-note` element
for that slot, which is the deliberate final step of accepting the footage as real.

**The rule for all footage: machinery, material and procedure — never combat.**
The brand register is hard-edged, not martial. No muzzle flashes, no soldiers in
contact, no explosions, no stock "tactical" footage. Steel, flame behind glass,
gloved hands, scales, signatures, gates. If using interim stock footage, choose
industrial/process clips and treat them as temporary.

Anonymise anything identifying (patches, plates, faces) unless released in writing.

## Editing notes

- Colours, type and spacing come from `css/tokens.css`. Don't hard-code hexes.
- Sage is the only hue. Negative/superseded content is dark neutral + dashed stroke.
- Zero border radius everywhere. 1px rules. Corner brackets are the motif.
- The numbers discipline in `../CLAUDE.md` applies to every copy edit on this site.
