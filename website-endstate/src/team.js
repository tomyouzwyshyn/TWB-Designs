'use strict';
const { brk, ph, ctaHtml } = require('./lib');

function person({ id, name, role, bio, file }){
  const media = ph({ id, kind: 'image', ratio: '4/5', file, alt: `${name}, ${role}`,
    shot: `Professional headshot of ${name}, ${role}. Plain neutral background, even studio light, three-quarter or straight-on framing, no props.`,
    prompt: `Professional studio headshot portrait, plain neutral grey background, soft even key light, three-quarter angle, shallow depth of field, business-appropriate attire, photoreal, 4:5` });
  return `
    <div class="person rv">
      <div class="person-media">${media}</div>
      <div class="person-body">
        <div class="person-name">${name}</div>
        <div class="person-role">${role}</div>
        <p class="person-bio">${bio}</p>
      </div>
    </div>`;
}

const heroMedia = ph({ id: 'TM-01', kind: 'image', ratio: '21/9', file: 'team-hero.jpg', alt: 'Operating team at a briefing table',
  shot: 'Wide shot of a small team gathered at a briefing table with a tablet and maps, warm interior light, hands and gestures in frame, no visible faces in sharp focus.',
  prompt: 'Wide photoreal shot of a small team gathered around a briefing table with a tablet and printed maps, warm practical lighting, hands and gestures in focus, faces softly out of focus or turned away, 21:9 cinematic' });

const operating = [
  person({ id:'TM-02', file:'team-johnston.jpg', name:'Tim Johnston', role:'Chief Executive Officer',
    bio:'Leads the operating company and the fleet. Sets the standard every unit, every system, and every record is built to.' }),
  person({ id:'TM-03', file:'team-kochhar.jpg', name:'Arjun Kochhar', role:'Chief Financial Officer',
    bio:'Bio pending.' }),
  person({ id:'TM-04', file:'team-braithwaite.jpg', name:'Tom Braithwaite', role:'Founder &amp; President',
    bio:'Founded END STATE around a simple standard: custody, recovery, and remediation run as one closed loop, not three separate contracts.' }),
];

const advisors = [
  person({ id:'TM-05', file:'team-kasper.jpg', name:'Joe Kasper', role:'Advisor',
    bio:'Advises on defence and government engagement.' }),
  person({ id:'TM-06', file:'team-morris.jpg', name:'Brad Morris', role:'Advisor',
    bio:'Advises on operations and program delivery.' }),
  person({ id:'TM-07', file:'team-dumont.jpg', name:'Stephen duMont', role:'Advisor',
    bio:'Advises on industry standing and regulatory relationships.' }),
];

const body = `
<section class="hero sub" id="top">
  <div class="hero-media" style="position:absolute;inset:0">${heroMedia}</div>
  <div class="hero-scrim"></div>
  <div class="hero-body wrap">
    <div class="hero-tagrow"><div class="tag on-dark">${brk()}Company</div></div>
    <h1 class="hero-title">The people who close the loop.</h1>
    <div class="hero-sub">Operating team and advisors</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="rv" style="max-width:640px">
      <div class="eyebrow">${brk()}Operating team</div>
      <h2 class="h2" style="margin-top:.4em">Run by people who have done this work in the field.</h2>
    </div>
    <div class="people">${operating.join('')}</div>
  </div>
</section>

<section class="section" style="background:var(--surface-2)">
  <div class="wrap">
    <div class="rv" style="max-width:640px">
      <div class="eyebrow">${brk()}Advisors</div>
      <h2 class="h2" style="margin-top:.4em">Standing in the rooms where the standard gets written.</h2>
    </div>
    <div class="people">${advisors.join('')}</div>
  </div>
</section>

${ctaHtml()}
`;

module.exports = { file: 'team.html', title: 'Team', description: 'The operating team and advisors behind END STATE.', body, dark: true };
