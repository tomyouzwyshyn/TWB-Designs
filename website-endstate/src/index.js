'use strict';
const { AREAS, brk, ph, ctaHtml, swCard } = require('./lib');

const heroMedia = ph({
  id: 'H-01', kind: 'video', ratio: '16/9', file: 'home-hero.mp4',
  shot: 'Slow aerial drift over a quiet former conflict landscape at first light: fields, a treeline, a river, low mist. A survey drone flies across the scene, seen from above and behind, its sensor pointed at the ground. Calm, vast, restored.',
  prompt: 'Cinematic slow aerial drift over a quiet rural landscape at first light, patchwork fields, a treeline and a winding river under low mist, a small matte charcoal survey drone flying across the right third with its sensor pod aimed at the ground, muted cold colour grade with a hint of sage, no people, no text, 16:9, photoreal, 4K'
});

const AREA_MEDIA = {
  detection: {
    shot: 'An unmanned ground vehicle and a small uncrewed surface vessel working a coastline at dawn, seen from a distance. The sense of machines going first.',
    prompt: 'Wide cinematic photoreal still of a compact tracked unmanned ground robot on a pebbled shoreline and a small uncrewed surface vessel just offshore at dawn, soft mist over the water, long lens, muted charcoal and sage colour grade, no people, no insignia, no text, 16:8'
  },
  identification: {
    shot: 'A corroded munition on a dark inspection surface, a precise recognition outline traced around it and a classification card beside it. Clinical and certain.',
    prompt: 'Photoreal close still of a corroded cylindrical munition casing on a matte dark inspection surface under cool raking light, a thin sage-green computer-vision outline traced precisely around it and a minimal abstract classification card beside it, no readable text, shallow depth of field, 16:8'
  },
  remediation: {
    shot: 'The eMACS unit inside a secured compound with sorted bins of recovered metal fractions in the foreground. Destruction and recovery in one frame.',
    prompt: 'Photoreal wide still of a matte dark-olive mobile industrial trailer unit inside a secured fenced compound, foreground row of industrial bins holding sorted recovered metal fractions (copper, brass, steel), overcast daylight, restrained charcoal and sage colour grade, no people, no logos, no text, 16:8'
  }
};

const tabCards = AREAS.map((a, i) => {
  const m = AREA_MEDIA[a.key];
  const media = ph({ id: `T-0${i+1}`, kind: 'image', ratio: '16/8', file: `home-area-${a.key}.jpg`, alt: `${a.tag.toLowerCase()}`, shot: m.shot, prompt: m.prompt });
  return `
    <div class="tab-panel${i===0?' active':''}">
      <a href="${a.file}">
        ${media}
        <div class="tp-tag">
          <div class="tp-eyebrow">0${i+1} &nbsp; ${a.tag}</div>
          <div class="tp-title">${a.line}</div>
          <p class="tp-desc">${a.short}</p>
        </div>
      </a>
    </div>`;
}).join('');

const tabBtns = AREAS.map((a,i) => `<button class="tab-btn${i===0?' active':''}">${a.tag}</button>`).join('');

const OUTCOMES = [
  { tag: 'Forces', line: 'Soldiers and technicians kept out of harm’s way, with machines taking the forward position.', file: 'detection.html',
    shot: 'A soldier silhouette at a safe distance watching a robot work in the mid-ground. Protective, calm.',
    prompt: 'Short looping cinematic shot, a distant silhouetted figure in field uniform standing at a safe distance watching a small tracked robot work in the mid-ground of an open field, overcast light, face not visible, no insignia, muted charcoal and sage grade, 3:4 vertical, 8 second loop' },
  { tag: 'Territory', line: 'Land and water cleared, verified and returned to safe use.', file: 'detection.html',
    shot: 'A slow drone rise over a cleared field returning to farmland, a faint survey grid fading away.',
    prompt: 'Short looping aerial rise over green farmland with a faint sage-green survey grid overlay slowly fading away, soft morning light, no people, no text, 3:4 vertical, 8 second seamless loop' },
  { tag: 'Custody', line: 'Every item accounted for, from first contact to certificate of destruction.', file: 'remediation.html',
    shot: 'A tagged item scanned on a bench, a record line completing on a screen.',
    prompt: 'Short looping macro shot of a gloved hand scanning a barcode tag on a sealed item, a nearby screen showing an abstract record timeline completing in sage green, cool light, no faces, no readable text, 3:4 vertical, 8 second loop' },
  { tag: 'Supply', line: 'Strategic metals recovered and returned to domestic industry.', file: 'remediation.html#elements',
    shot: 'Recovered metal ingots being stacked, warm reflections on their surfaces.',
    prompt: 'Short looping photoreal shot of recovered metal ingots being set onto a neat stack on an industrial floor, soft reflections on the metal surfaces, cool daylight, hands in heavy gloves only, no faces, no text, 3:4 vertical, 8 second loop' },
];

const swgrid = OUTCOMES.map((o, i) => {
  const key = o.tag.toLowerCase();
  const media = ph({ id: `S-0${i+1}`, kind: 'image', ratio: '3/4', file: `home-protect-${key}.jpg`, alt: key, shot: o.shot, prompt: o.prompt });
  return swCard({ idx: i+1, tag: o.tag, line: o.line, media, file: o.file });
}).join('');

const emacsMedia = ph({
  id: 'H-02', kind: 'image', ratio: '16/9', file: 'home-emacs-band.jpg', alt: 'eMACS unit deployed on site',
  shot: 'Three-quarter view of the eMACS trailer set up inside a depot fence, crew silhouettes at a working distance, overcast daylight.',
  prompt: 'Wide photoreal shot of a matte dark-olive mobile industrial trailer unit set up inside a fenced depot compound under overcast daylight, two silhouetted crew figures at a working distance, documentary lighting, no visible faces, no hazard placards, no logos, no text, 16:9'
});

const sovereignMedia = ph({
  id: 'H-03', kind: 'image', ratio: '4/3', file: 'home-sovereign-band.jpg', alt: 'A secured munitions depot at dusk',
  shot: 'A secured, orderly munitions depot at dusk: rows of earth-covered storage bunkers under floodlights, perimeter fence in the foreground. Quiet and controlled.',
  prompt: 'Photoreal wide dusk shot of an orderly military storage depot with rows of earth-covered bunkers under soft floodlights, perimeter fence in the foreground, deep blue sky, calm and controlled mood, no people, no insignia, no text, 4:3'
});

const body = `
<section class="hero" id="top">
  <div class="hero-media" style="position:absolute;inset:0">${heroMedia}</div>
  <div class="hero-scrim"></div>
  <div class="hero-body wrap">
    <h1 class="hero-title" data-scramble><span class="hero-line">One platform for demilitarization and secure destruction.</span></h1>
    <div class="hero-sub hero-words" data-hero-words aria-label="Detection, Identification, Remediation">
      <span>Detection</span><span>Identification</span><span>Remediation</span>
      <i class="hero-pulse" aria-hidden="true"></i>
    </div>
  </div>
  <div class="hero-foot wrap">
    <div class="scroll-cue"><span class="arrow">&#8595;</span> Scroll to explore</div>
    <div class="hero-jump"><a href="#areas">Systems</a><a href="#operators">Who we build for</a><a href="#briefing">Request a briefing</a></div>
  </div>
</section>

<section class="section" id="mission">
  <div class="wrap intro-split">
    <div class="rv">
      <div class="eyebrow">${brk()}The company</div>
      <h2 class="h2" style="margin-top:.4em">One solution for military and police organizations, after the mission.</h2>
      <div class="since"><span>End State Solutions</span><span>Operating since 2004</span></div>
    </div>
    <div class="rv">
      <p class="lede" style="margin-bottom:.8em">End State Solutions is a full-service munitions processing and reclamation company, operating since 2004. When the mission is over, what remains still has to be dealt with: surplus and expired ammunition, seized and surrendered munitions, ordnance left in the ground and under the water, and materiel that has to be retired safely, verifiably and on the owner’s terms.</p>
      <p class="lede">Military and police organizations should not need a different contractor for every step of that work. End State is the single solution. We find what is hidden, identify what is found, destroy it inside the owner’s custody, and return the metal it was made from to domestic supply. One partner, one record, from the first signal in the ground to the last certified kilogram.</p>
    </div>
  </div>
</section>

<section class="section" id="areas" style="padding-top:0">
  <div class="wrap">
    <div class="tabs-head rv">
      <div>
        <div class="eyebrow">${brk()}The areas</div>
        <h2 class="h2" style="margin-top:.4em">Three areas. One closed loop.</h2>
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

<section class="section" id="loop" style="background:var(--surface-2)">
  <div class="wrap">
    <div class="rv" style="max-width:680px">
      <div class="eyebrow">${brk()}How the loop closes</div>
      <h2 class="h2" style="margin-top:.4em">Each area makes the next one safer, faster and more certain.</h2>
    </div>
    <div class="loop rv">
      <a class="loop-step" href="detection.html"><div class="loop-n">01</div><h3 class="h3">Detect</h3><p>Autonomous robotics and AI search land and water, so machines face the unknown first.</p></a>
      <a class="loop-step" href="identification.html"><div class="loop-n">02</div><h3 class="h3">Identify</h3><p>Image recognition confirms what every item is and the condition it is in before anyone handles it.</p></a>
      <a class="loop-step" href="remediation.html"><div class="loop-n">03</div><h3 class="h3">Remediate</h3><p>Munitions are destroyed on site in a closed chamber, under an unbroken chain of custody.</p></a>
      <a class="loop-step" href="remediation.html#supply"><div class="loop-n">04</div><h3 class="h3">Return</h3><p>Recovered metal goes back to domestic industry, and every item destroyed teaches detection what to look for next.</p></a>
    </div>
    <p class="loop-note rv">Every step writes to a single system of record the owner holds from first contact to final yield.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="rv" style="max-width:640px;margin-bottom:var(--s4)">
      <div class="eyebrow">${brk()}What it protects</div>
      <h2 class="h2" style="margin-top:.4em">Forces, territory, custody and supply.</h2>
      <p class="lede" style="margin-top:.6em">Demilitarization done well is not a disposal contract. It is a way of protecting the things a nation cannot afford to lose.</p>
    </div>
  </div>
  <div class="swgrid swgrid-4">${swgrid}</div>
</section>

<section class="section" id="emacs">
  <div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:var(--s5);align-items:center">
    <div class="rv">
      <div class="eyebrow">${brk()}The platform</div>
      <h2 class="h2" style="margin-top:.4em">eMACS. Remediation that travels to the stockpile.</h2>
      <p style="margin-top:.8em">A mobile, closed-chamber destruction and recovery system that deploys directly to the site. No fixed plant, no convoy to a second location, and no break in the chain of custody. It arrives, sets up inside the fence, and runs with the owner’s people present.</p>
      <p style="margin-top:.8em">Every unit carries the full system with it: identification at intake, custody at every step, recovery at the end, and one record the whole way through.</p>
      <a class="btn btn-line" href="remediation.html" style="margin-top:var(--s3);display:inline-block">Explore Remediation</a>
    </div>
    <div class="rv">${emacsMedia}</div>
  </div>
</section>

<section class="section" id="operators" style="padding-top:0">
  <div class="wrap">
    <div class="rv" style="max-width:640px">
      <div class="eyebrow">${brk()}Who we serve</div>
      <h2 class="h2" style="margin-top:.4em">Built for military and police organizations.</h2>
      <p class="lede" style="margin-top:.6em">The organizations that carry the risk during the mission carry the responsibility after it. End State takes that work off their hands as one accountable partner.</p>
    </div>
    <div class="aud-grid rv">
      <div class="aud-card">
        <div class="ui">Military</div>
        <h3 class="h3">Armed forces and defence ministries</h3>
        <p style="margin-top:.6em">Stockpile retirement, surplus disposal and range clearance delivered at the base, the depot or the former conflict zone, with custody and recovery accounted for in full.</p>
      </div>
      <div class="aud-card">
        <div class="ui">Police</div>
        <h3 class="h3">Police and law enforcement agencies</h3>
        <p style="margin-top:.6em">Seized, surrendered and expired ammunition destroyed inside the agency’s own custody, with an item-level record and a certificate of destruction for every piece of property.</p>
      </div>
      <div class="aud-card">
        <div class="ui">Allied partners</div>
        <h3 class="h3">Allied and coalition partners</h3>
        <p style="margin-top:.6em">A deployable capability that travels to the partner nation and works alongside the unit or agency that holds the material, to the same standard everywhere.</p>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:var(--s5);align-items:center">
    <div class="rv">
      <div class="tag on-dark">${brk()}Sovereign safety</div>
      <h2 class="h2" style="margin-top:.5em">A nation’s munitions are its own business, from first to last.</h2>
      <p class="lede on-dark" style="margin-top:.6em">The work happens inside national borders, under national custody, with the data and the recovered materials remaining under the control of the government that owns them.</p>
      <a class="btn btn-line on-dark" href="remediation.html#elements" style="margin-top:var(--s3);display:inline-block">See what we recover</a>
    </div>
    <div class="rv">${sovereignMedia}</div>
  </div>
</section>

${ctaHtml()}
`;

module.exports = { file: 'index.html', title: 'Detection, Identification and Remediation', description: 'End State Solutions is a full-service munitions processing and reclamation company operating since 2004, and the single solution for military and police organizations after the mission.', body, dark: true };
