'use strict';
const { buildSystemPage } = require('./system-page');

module.exports = buildSystemPage({
  file: 'picket.html', key: 'picket', tag: 'PICKET', category: 'Robotics',
  title: 'PICKET: Autonomous Ground, Surface, and Underwater',
  description: 'PICKET runs the unmanned platforms that search, mark, and stage ordnance and contamination across land and water for safe recovery.',
  hero: {
    lines: ['Autonomous ground, surface, and underwater', 'Clears ground crews do not have to walk', 'One operator, many platforms'],
    sub: 'Operating System for Autonomous Remediation',
    media: { id: 'P-01', kind: 'video', ratio: '16/9', file: 'picket-hero.mp4',
      shot: 'An unmanned ground vehicle moving slowly across open scrubland at dusk, sensor mast visible, a marker flag deploying behind it. No people in frame.',
      prompt: 'Cinematic tracking shot of a compact tracked unmanned ground vehicle with a sensor mast moving slowly across open scrubland at dusk, a small marker flag deploying behind it, warm low-angle light, shallow depth of field, no people, 16:9' }
  },
  jump: [
    { id:'a', label:'Overview' }, { id:'b', label:'Why it exists' },
    { id:'c', label:'What it does' }, { id:'d', label:'Standing' },
  ],
  intro: {
    eyebrow: 'Overview',
    title: 'Why it exists',
    body: 'Some ground should not be walked and some water should not be dived until it is known to be clear. PICKET runs the unmanned platforms that go first: ground, surface, and underwater, searching, marking, and staging so the recovery crew never has to be the one that finds out the hard way.',
  },
  capabilities: [
    { title: 'Clears ground crews do not have to walk',
      body: 'Ground, surface, and underwater platforms search a site ahead of any crew, so exposure to unknown ordnance and contamination happens to a machine first.',
      media: { id:'P-02', kind:'video', ratio:'16/10', file:'picket-cap-01.mp4',
        shot: 'A top-down map view of a site with a search grid slowly filling in green as an unmanned unit sweeps it.',
        prompt: 'Screen-recording style top-down animation of a site map with a grid pattern filling in with sage-green as a small unit icon sweeps across it in a lawnmower search pattern, dark UI, clean minimal styling, 16:10 loop' } },
    { title: 'One operator, many platforms',
      body: 'A single operator tasks and monitors multiple unmanned platforms at once from one control view, ground, surface, and underwater together.',
      media: { id:'P-03', kind:'image', ratio:'16/10', file:'picket-cap-02.jpg', alt:'Multi-platform control view',
        shot: 'An operator at a rugged laptop with a control interface showing three platform status panels side by side.',
        prompt: 'Photoreal shot from behind an operator at a rugged laptop outdoors, screen showing three simple platform status panels side by side on a dark UI, field environment blurred in background, no visible face, 16:10' } },
    { title: 'Marks it, stages it, hands it to the crew',
      body: 'Every find is geotagged, marked in the field, and logged straight to KEEP, so the recovery crew arrives to a known, staged location rather than a search.',
      media: { id:'P-04', kind:'video', ratio:'16/10', file:'picket-cap-03.mp4',
        shot: 'A marker pin dropping onto a map at the exact moment a physical marker flag is shown planted in the ground nearby, split composition.',
        prompt: 'Split-frame animation: left side a map pin dropping onto a dark UI map with a soft sage-green pulse, right side a photoreal small marker flag planted in open ground, synchronized timing, 16:10 loop' } },
  ],
  standing: {
    eyebrow: 'Standing',
    title: 'Built to go first, so people do not have to.',
    body: 'PICKET is judged on one thing: whether the ground and water it clears stay cleared. Every platform reports back through the same record everything else in the system uses.',
  },
});
