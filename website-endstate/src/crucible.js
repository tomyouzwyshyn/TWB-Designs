'use strict';
const { buildSystemPage } = require('./system-page');

module.exports = buildSystemPage({
  file: 'crucible.html', key: 'crucible', tag: 'CRUCIBLE', category: 'Software',
  title: 'CRUCIBLE: Materials Recovery, Weighed and Traced',
  description: 'CRUCIBLE tracks every recovered fraction from separation to certificate and turns recovery into a reportable, auditable yield.',
  hero: {
    lines: ['Materials recovery, weighed and traced', 'Every fraction, accounted for', 'Recovery you can report on'],
    sub: 'Operating System for Materials Recovery',
    media: { id: 'C-01', kind: 'video', ratio: '16/9', file: 'crucible-hero.mp4',
      shot: 'Slow overhead shot of sorted metal fractions in labelled bins on a warehouse floor, a scale readout visible nearby. No faces.',
      prompt: 'Slow overhead tracking shot across neatly sorted metal fraction bins on a concrete warehouse floor under cool industrial light, a digital scale readout glowing nearby, shallow depth of field, no people, 16:9' }
  },
  jump: [
    { id:'a', label:'Overview' }, { id:'b', label:'Why it exists' },
    { id:'c', label:'What it does' }, { id:'d', label:'Standing' },
  ],
  intro: {
    eyebrow: 'Overview',
    title: 'Why it exists',
    body: 'Material that gets separated and never gets counted is material that never shows up on a report. CRUCIBLE weighs, traces, and certifies every fraction the moment it moves, so recovery is a number someone can stand behind, not an estimate.',
  },
  capabilities: [
    { title: 'Every fraction, weighed and traced',
      body: 'Lead, antimony, copper, iron, and every other recovered fraction is weighed at separation and tracked through to final disposition.',
      media: { id:'C-02', kind:'video', ratio:'16/10', file:'crucible-cap-01.mp4',
        shot: 'A dashboard bar chart of material fractions filling in one by one as items are weighed.',
        prompt: 'Screen-recording style animation of a dark-UI dashboard with several vertical bars labelled with generic material-fraction icons, each bar filling upward in sage-green as a weight value increases, clean minimal type, 16:10 loop' } },
    { title: 'Certificates issued the day material moves',
      body: 'A certificate of recovery generates automatically the same day material changes hands, no waiting on a monthly reconciliation.',
      media: { id:'C-03', kind:'image', ratio:'16/10', file:'crucible-cap-02.jpg', alt:'Certificate of recovery',
        shot: 'A formal certificate document with a seal, sitting beside sorted metal samples on a clean surface.',
        prompt: 'Clean flat-lay photo of a formal certificate document with a seal graphic, arranged beside a few small sorted metal fraction samples on a plain light surface, soft daylight, minimal styling, 16:10' } },
    { title: 'One report, every stakeholder',
      body: 'Customer, regulator, and command all read from the same underlying figures, formatted for what each of them needs to see.',
      media: { id:'C-04', kind:'image', ratio:'16/10', file:'crucible-cap-03.jpg', alt:'Report distribution',
        shot: 'A single report icon branching into three formatted outputs, represented simply on a dark UI panel.',
        prompt: 'Minimal flat dark-UI illustration of a single document icon branching into three differently formatted output icons, sage-green connecting lines, charcoal background, clean iconography, 16:10' } },
  ],
  standing: {
    eyebrow: 'Standing',
    title: 'Recovery that holds up as a number, not just a claim.',
    body: 'CRUCIBLE exists so that every ton recovered is a ton someone can trace back to a weight, a timestamp, and a certificate.',
  },
});
