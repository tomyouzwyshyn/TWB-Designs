'use strict';
const { buildAreaPage } = require('./area-page');
const { brk, ph } = require('./lib');
const { tableHtml, SOURCE_NOTE } = require('./ptable');

const supplyMedia = ph({
  id: 'R-06', kind: 'image', ratio: '4/5', file: 'remediation-supply.jpg', alt: 'Recovered metal returning to industrial supply',
  shot: 'Stacked ingots and neatly bundled recovered metal on a clean industrial floor, a forklift soft in the background, cool daylight from high windows. Orderly, domestic, industrial.',
  prompt: 'Photoreal industrial still of neatly stacked recovered metal ingots and bundled metal stock on a clean concrete warehouse floor, a forklift softly out of focus in the background, cool daylight from high clerestory windows, restrained charcoal and sage colour grade, no people, no logos, no text, 4:5'
});

const elements = `
<section class="section" id="elements">
  <div class="wrap">
    <div class="intro-split" style="margin-bottom:var(--s4)">
      <div class="rv">
        <div class="eyebrow">${brk()}What comes back</div>
        <h2 class="h2" style="margin-top:.4em">Every munition is a store of strategic metal.</h2>
      </div>
      <div class="rv">
        <p class="lede">Open a round, a shell or a guided weapon and most of what you find is metal: steel and copper in the body, brass in the case, tungsten in the penetrator, precious metals in the electronics, rare earths in the magnets that steer it. These are the elements Remediation recovers and returns.</p>
      </div>
    </div>
    ${tableHtml()}
    <p class="pt-source rv">${SOURCE_NOTE}</p>
  </div>
</section>`;

const extra = `
<section class="section" id="supply" style="padding-top:0">
  <div class="wrap supply-split">
    <div class="rv">${supplyMedia}</div>
    <div class="rv">
      <div class="eyebrow">${brk()}From stockpile to supply chain</div>
      <h2 class="h2" style="margin-top:.4em">Yesterday’s munitions rebuild today’s industrial base.</h2>
      <p class="lede" style="margin-top:.6em">The metals that armies depend on are increasingly concentrated in a small number of foreign sources. Every stockpile a nation retires is also a domestic reserve of the same materials, already inside its borders.</p>
      <div class="steps">
        <div class="step"><div class="step-n">01</div><div><h3 class="h3">Recover</h3><p>Metal is separated from destroyed munitions at up to 95% effective recovery, fraction by fraction.</p></div></div>
        <div class="step"><div class="step-n">02</div><div><h3 class="h3">Certify</h3><p>Each fraction is weighed, graded and traced to the items it came from, with a yield report the owner can audit.</p></div></div>
        <div class="step"><div class="step-n">03</div><div><h3 class="h3">Return</h3><p>Certified material goes back to domestic refiners and manufacturers, reducing reliance on imported supply.</p></div></div>
      </div>
    </div>
  </div>
</section>`;

module.exports = buildAreaPage({
  file: 'remediation.html',
  title: 'Remediation: Custody, Destruction and Recovery',
  description: 'END STATE Remediation destroys munitions inside the owner’s perimeter under an unbroken chain of custody, recovers up to 95% of the metal, and returns it to domestic supply.',
  category: 'Remediation',

  hero: {
    lines: ['Destroyed on site.', 'Recovered to supply.', 'Accounted for at every step.'],
    sub: 'Custody, closed-chamber destruction and materials recovery',
    media: {
      id: 'R-01', kind: 'video', ratio: '16/9', file: 'remediation-hero.mp4',
      shot: 'The eMACS unit at dusk inside a secured compound, doors open and the chamber lit from within, a slow push-in. Perimeter fence softly visible behind. No people, no placards.',
      prompt: 'Cinematic slow push-in on a matte dark-olive mobile industrial trailer unit parked inside a secured fenced compound at dusk, side doors open revealing a softly glowing interior chamber, perimeter fence and floodlights soft in the background, light haze, low camera angle, no people, no logos, no hazard placards, no text, 16:9, photoreal, 4K'
    }
  },

  jump: [
    { id: 'why', label: 'Why it exists' },
    { id: 'elements', label: 'What we recover' },
    { id: 'how', label: 'What it does' },
    { id: 'supply', label: 'Supply' },
    { id: 'matters', label: 'Why it matters' },
  ],

  intro: {
    eyebrow: 'Why it exists',
    title: 'Every war ends. Every stockpile ages. Every round must one day be unmade.',
    body: [
      'Surplus, obsolete and recovered munitions are a liability for as long as they exist: to the people who guard them, to the communities near them, and to the military and police organizations accountable for them. Moving them to be destroyed somewhere else adds risk at every mile and every handoff.',
      'Remediation brings the destruction to the munitions. It keeps every item inside the owner’s custody, destroys it in a closed chamber on site, and recovers the metal it was made from, so that a standing hazard becomes a certified record and a return to domestic supply.'
    ]
  },

  capsHead: { eyebrow: 'What it does', title: 'Custody, destruction and recovery as one unbroken process.' },

  capabilities: [
    {
      title: 'Custody that never leaves the perimeter',
      body: 'Every item is scanned, photographed and weighed at intake, where it already sits, and carries that identity through every step that follows. There are no convoys, no transfers to a third site and no gaps between signatures. The owner’s people witness the work, and a certificate of destruction closes each item’s record.',
      media: {
        id: 'R-02', kind: 'image', ratio: '16/10', file: 'remediation-custody.jpg', alt: 'Item scanned and weighed at intake',
        shot: 'Gloved hands scanning a tagged item on a bench scale inside a secure facility, a tablet showing the item record beside it. Cool light, macro, no faces.',
        prompt: 'Photoreal macro shot of gloved hands scanning a barcode tag on a sealed item resting on an industrial bench scale inside a secure facility, a rugged tablet beside it showing an abstract item record, cool clinical lighting, shallow depth of field, no faces, no readable text, 16:10'
      }
    },
    {
      title: 'Closed-chamber destruction, on site',
      body: 'eMACS is a mobile, trailer-deployed destruction system that arrives at the stockpile and sets up inside the fence. Munitions are destroyed in a sealed, controlled chamber with managed emissions, not in an open pit or an open detonation. Operators run the cycle from the control panel, away from live material.',
      media: {
        id: 'R-03', kind: 'video', ratio: '16/10', file: 'remediation-chamber.mp4',
        shot: 'Close on the closed chamber door with its indicator panel lit, then a slow pull back to an operator watching a readout from a safe distance.',
        prompt: 'Cinematic close shot of a sealed industrial chamber door with a softly lit indicator panel, slow pull-back revealing an operator in coveralls watching a control readout from a safe distance, quiet procedural mood, cool industrial lighting, face not visible, no text, 16:10 loop'
      }
    },
    {
      title: 'Recovery at up to 95% effectiveness',
      body: 'What remains after destruction is separated into graded metal fractions: steel, copper and brass, lead and antimony, tungsten and alloy metals, the precious metals in electronics and the rare earths in guidance magnets. Up to 95% of the recoverable metal comes back.',
      media: {
        id: 'R-04', kind: 'image', ratio: '16/10', file: 'remediation-fractions.jpg', alt: 'Graded metal fractions after recovery',
        shot: 'Top-down view of several bins of sorted metal fractions in a row, each visibly different in colour and texture, hard even light, small blank tags on each bin.',
        prompt: 'Top-down photoreal view of a neat row of industrial bins holding sorted metal fractions (grey steel fragments, reddish copper, yellow brass, dull grey lead, dark tungsten pieces), hard even overhead light, small blank tags on each bin, clean concrete floor, no text, 16:10'
      }
    },
    {
      title: 'One record, from first contact to final yield',
      body: 'Detection, identification, custody, destruction and recovery all write to the same record. For every program the owner sees what was found, what it was, where it went, when it was destroyed, and what came back, by weight and by fraction.',
      media: {
        id: 'R-05', kind: 'video', ratio: '16/10', file: 'remediation-record.mp4',
        shot: 'Interface capture: a program dashboard showing a lifecycle timeline from detection through recovery, with a recovered-fractions panel filling in.',
        prompt: 'Dark-theme program dashboard screen recording, a horizontal lifecycle timeline with stages from detection to recovery lighting up in sequence, a side panel of recovered metal fractions filling in as bars, sage-green accents on charcoal, clean sans-serif labels, no readable real data, slow cursor movement, 16:10 seamless loop'
      }
    }
  ],

  beforeCaps: elements,
  extra,

  standing: {
    eyebrow: 'Standing',
    title: 'Nothing leaves your custody except the metal, and it comes back certified.',
    body: 'Remediation exists so that retiring a stockpile ends a risk, strengthens a supply chain, and leaves behind a record that answers every question anyone will ever ask about it.',
    next: { file: 'index.html#briefing', label: 'Request a deployment briefing' }
  },

  why: {
    eyebrow: 'Why it matters',
    title: 'What military and police organizations gain.',
    items: [
      { label: 'Sovereign supply', title: 'Less reliance on foreign sources', body: 'Critical and strategic metals recovered from national stockpiles return to domestic industry instead of being lost or exported.' },
      { label: 'Custody', title: 'No transfers, no diversion windows', body: 'Munitions are destroyed where they are held, whether a military depot or a police property room, under the owner’s supervision, with an item-level record from intake to certificate.' },
      { label: 'Safety', title: 'Destruction without open burning', body: 'A sealed chamber replaces open pits and open detonation, protecting the people on site, the surrounding community and the ground beneath.' }
    ]
  }
});
