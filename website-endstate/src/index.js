'use strict';
const { SYSTEMS, brk, ph, ctaHtml, swCard } = require('./lib');

const heroMedia = ph({
  id: 'H-01', kind: 'video', ratio: '16/9', file: 'home-hero.mp4',
  shot: 'eMACS trailer, rear doors open, parked on a hardstand at last light. Slow push-in, camera low, unit lit from inside so the bay glows against the dark. No people, no faces, no visible hazard placards.',
  prompt: 'Cinematic slow push-in on a matte dark-olive mobile industrial trailer unit, rear doors open revealing an illuminated interior bay, parked on a concrete hardstand at dusk, volumetric haze, low camera angle, shallow depth of field, moody teal-and-amber grade, no people, no logos, no text overlays, 16:9, photoreal, 4K'
});

const tabCards = SYSTEMS.map((s, i) => {
  const media = ph({
    id: `T-0${i+1}`, kind: 'image', ratio: '16/8', file: `home-tab-${s.key}.jpg`, alt: `${s.tag} interface`,
    shot: `Full-bleed still representing ${s.tag}. ${s.key === 'keep' ? 'An operations screen showing a unified map of multiple deployed units.' : s.key === 'warden' ? 'A tablet on a workbench mid chain-of-custody signature, seal and timestamp visible on screen.' : s.key === 'boresight' ? 'A close, top-down view of ordnance items moving on a line under an inspection camera rig, bounding boxes overlaid on a monitor beside it.' : s.key === 'picket' ? 'An unmanned ground vehicle at the edge of a treeline, low afternoon light, one operator at a distance with a control tablet.' : 'Sorted metal fractions in labelled bins on a warehouse floor, overhead light, a tablet showing a weight readout nearby.'} No faces in focus, no hazard placards, no readable classified markings.`,
    prompt: `Photoreal industrial documentary still, ${s.key === 'keep' ? 'a wide operations command screen showing a dark-themed map dashboard with multiple unit markers and status tiles' : s.key === 'warden' ? 'a rugged tablet held at chest height displaying a digital chain-of-custody signature screen with a timestamp and seal icon, blurred workbench background' : s.key === 'boresight' ? 'an overhead industrial camera rig above a conveyor line of ordnance casings, a nearby monitor showing AI bounding-box classification overlays' : s.key === 'picket' ? 'a compact tracked unmanned ground robot at a treeline edge in late afternoon light, a distant operator holding a control tablet, shallow depth of field' : 'neatly sorted metal fraction bins on a concrete warehouse floor under cool overhead light, a tablet displaying a weight and yield readout'}, sage-green and charcoal color grade, no text overlays, no visible faces, 16:9, cinematic lighting`
  });
  return `
    <div class="tab-panel${i===0?' active':''}">
      <a href="${s.file}">
        ${media}
        <div class="tp-tag">
          <div class="tp-eyebrow">${s.tag}</div>
          <div class="tp-title">${s.line}</div>
        </div>
      </a>
    </div>`;
}).join('');

const tabBtns = SYSTEMS.map((s,i) => `<button class="tab-btn${i===0?' active':''}">${s.tag}</button>`).join('');

const swgrid = SYSTEMS.map((s,i) => {
  const media = ph({
    id: `S-0${i+1}`, kind: 'video', ratio: '4/3', file: `sw-${s.key}.mp4`,
    shot: `Short looping interface capture for ${s.tag}: a UI screen recording, dark theme, sage-green accent, slow cursor movement, no real data, no readable classified text.`,
    prompt: `Screen-recording style loop of a dark-themed software dashboard UI in charcoal and sage-green, abstract data tiles and a map or list view relevant to ${s.tag.toLowerCase()}, slow cursor movement, subtle animated transitions, no readable real-world data, clean sans-serif labels, 4:3, 8 second seamless loop`
  });
  return swCard({ idx: i+1, tag: s.tag, line: s.short, media, file: s.file });
}).join('');

const emacsMedia = ph({
  id: 'H-02', kind: 'image', ratio: '16/9', file: 'home-emacs-band.jpg', alt: 'eMACS unit deployed on site',
  shot: 'Three-quarter view of the eMACS trailer on site, crew silhouettes at a working distance, overcast daylight, wide industrial lot.',
  prompt: 'Wide photoreal shot of a mobile industrial trailer unit deployed on a concrete lot under overcast daylight, two silhouetted crew figures at a working distance, wide angle, documentary lighting, no visible faces or hazard placards, 16:9'
});

const teamMedia = ph({
  id: 'H-03', kind: 'image', ratio: '21/9', file: 'home-team-band.jpg', alt: 'Operators at a briefing table',
  shot: 'Overhead or three-quarter shot of a small team at a briefing table with a tablet and printed maps, warm interior light, no visible faces or classified detail.',
  prompt: 'Photoreal overhead shot of a small operations team gathered around a briefing table with a tablet and printed site maps, warm practical lighting, shallow depth of field, hands and gestures in frame rather than faces, 21:9 cinematic'
});

const body = `
<section class="hero" id="top">
  <div class="hero-media" style="position:absolute;inset:0">${heroMedia}</div>
  <div class="hero-scrim"></div>
  <div class="hero-body wrap">
    <h1 class="hero-title">One operating system for the full lifecycle.</h1>
    <div class="hero-sub xfade">
      <span class="on">Custody.</span><span>Recovery.</span><span>Remediation.</span>
    </div>
  </div>
  <div class="hero-foot wrap">
    <div class="scroll-cue"><span class="arrow">&#8595;</span> Scroll to explore</div>
    <div class="hero-jump"><a href="#systems">Systems</a><a href="#operators">Who we build for</a><a href="#briefing">Request a briefing</a></div>
  </div>
</section>

<section class="section" id="systems">
  <div class="wrap">
    <div class="tabs-head rv">
      <div>
        <div class="eyebrow">${brk()}The systems</div>
        <h2 class="h2" style="margin-top:.4em">Five systems. One closed loop.</h2>
      </div>
      <div class="tabs-list">${tabBtns}</div>
    </div>
    <div class="tab-rail-wrap rv">
      <div class="tab-panels" data-tabs>${tabCards}</div>
      <button class="tab-nav prev" data-tab-prev aria-label="Previous">&#8592;</button>
      <button class="tab-nav next" data-tab-next aria-label="Next">&#8594;</button>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="rv" style="max-width:640px;margin-bottom:var(--s4)">
      <div class="eyebrow">${brk()}Our software</div>
      <h2 class="h2" style="margin-top:.4em">Built to run the whole chain, end to end.</h2>
      <p class="lede" style="margin-top:.6em">Every system talks to KEEP. Nothing has to be re-entered, re-keyed, or reconciled by hand.</p>
    </div>
  </div>
  <div class="swgrid">${swgrid}</div>
</section>

<section class="section" id="emacs" style="background:var(--surface-2)">
  <div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s5);align-items:center">
    <div class="rv">
      <div class="eyebrow">${brk()}The hardware</div>
      <h2 class="h2" style="margin-top:.4em">eMACS. The platform every system runs on.</h2>
      <p style="margin-top:.8em">A mobile ammunition and materials conversion system that deploys directly to the site, no fixed plant, no transport chain, no second location for the record to break. KEEP, WARDEN, BORESIGHT, and CRUCIBLE run on every unit in the fleet from day one.</p>
      <p style="margin-top:.8em">One trailer, one crew, one system of record. eMACS arrives, sets up, and starts a job that used to take a convoy and a fixed site down to a single stop.</p>
    </div>
    <div class="rv">${emacsMedia}</div>
  </div>
</section>

<section class="section" id="operators">
  <div class="wrap">
    <div class="rv" style="max-width:640px">
      <div class="eyebrow">${brk()}Who we build for</div>
      <h2 class="h2" style="margin-top:.4em">Built for the agencies that carry the record.</h2>
    </div>
    <div class="aud-grid rv">
      <div class="aud-card">
        <div class="ui">Law enforcement</div>
        <h3 class="h3">Evidence and seized property</h3>
        <p style="margin-top:.6em">Every intake logged, every disposition witnessed, every certificate ready before the property room asks for it.</p>
      </div>
      <div class="aud-card">
        <div class="ui">Military &amp; allied forces</div>
        <h3 class="h3">Stockpile and surplus</h3>
        <p style="margin-top:.6em">A deployable system that goes where the material is, run by the crew already there.</p>
      </div>
      <div class="aud-card">
        <div class="ui">Industrial &amp; environmental</div>
        <h3 class="h3">Site remediation</h3>
        <p style="margin-top:.6em">Legacy ordnance and contaminated ground cleared, recovered, and reported as one program.</p>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s5);align-items:center">
    <div class="rv">
      <div class="tag on-dark">${brk()}Built by operators</div>
      <h2 class="h2" style="margin-top:.5em">The people who close the loop.</h2>
      <p class="lede on-dark" style="margin-top:.6em">Operating team and advisors who have run this work in the field, in command, and in the room where the standard gets written.</p>
      <a class="btn btn-line on-dark" href="team.html" style="margin-top:var(--s3);display:inline-block">Meet the team</a>
    </div>
    <div class="rv">${teamMedia}</div>
  </div>
</section>

${ctaHtml()}
`;

module.exports = { file: 'index.html', title: 'The Full Lifecycle System', description: 'END STATE runs custody, recovery, and remediation as one closed loop: KEEP, WARDEN, BORESIGHT, PICKET, and CRUCIBLE, deployed on the eMACS platform.', body, dark: true };
