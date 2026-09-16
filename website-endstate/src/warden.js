'use strict';
const { buildSystemPage } = require('./system-page');

module.exports = buildSystemPage({
  file: 'warden.html', key: 'warden', tag: 'WARDEN', category: 'Software',
  title: 'WARDEN: Chain of Custody, Sealed at Every Step',
  description: 'WARDEN timestamps, witnesses, and seals every transfer from intake to certified destruction, so the record defends itself.',
  hero: {
    lines: ['Chain of custody, sealed at every step', 'A record that defends itself', 'Witnessed, signed, closed'],
    sub: 'Operating System for Custody and Compliance',
    media: { id: 'W-01', kind: 'video', ratio: '16/9', file: 'warden-hero.mp4',
      shot: 'A gloved hand signing a digital custody transfer on a rugged tablet at an intake bench, a seal icon animating closed on screen. Warm work light, shallow depth of field, no visible faces.',
      prompt: 'Cinematic close-up of a gloved hand signing a digital signature field on a rugged tablet at an industrial intake bench, a seal icon animating to a locked state on screen, warm practical work light, shallow depth of field, no visible faces, 16:9' }
  },
  jump: [
    { id:'a', label:'Overview' }, { id:'b', label:'Why it exists' },
    { id:'c', label:'What it does' }, { id:'d', label:'Standing' },
  ],
  intro: {
    eyebrow: 'Overview',
    title: 'Why it exists',
    body: 'A custody record is only as strong as its weakest handoff. WARDEN closes every gap between intake and disposition: who touched it, when, and what changed hands, sealed the moment it happens, not reconstructed after the fact.',
  },
  capabilities: [
    { title: 'Intake to disposition, sealed at every step',
      body: 'Every transfer, from the first intake to final destruction, is timestamped and sealed the instant it happens. Nothing waits for end-of-day paperwork.',
      media: { id:'W-02', kind:'video', ratio:'16/10', file:'warden-cap-01.mp4',
        shot: 'A timeline UI filling in step by step as items move through intake, storage, and destruction stages, each step locking with a seal icon.',
        prompt: 'Screen-recording style animation of a dark-UI horizontal timeline filling left to right through stages labelled with generic icons (intake, storage, destruction), each stage locking with a small padlock seal icon on completion, sage-green progress fill, 16:10 loop' } },
    { title: 'Witnessed and signed, digitally, on site',
      body: 'Two-party sign-off happens on the tablet at the bench, not on a form that gets filed later. The witness signature is part of the record, not a separate piece of paper.',
      media: { id:'W-03', kind:'image', ratio:'16/10', file:'warden-cap-02.jpg', alt:'Digital witness signature',
        shot: 'Two hands, from different people, signing the same digital form on one tablet screen, side by side.',
        prompt: 'Overhead photoreal shot of two hands from different people signing adjacent digital signature fields on one rugged tablet screen at an industrial bench, warm light, no visible faces, shallow depth of field, 16:10' } },
    { title: 'Court-ready and audit-ready on demand',
      body: 'The full custody trail exports as a single document, formatted for counsel, for the customer, or for an auditor, the moment it is requested.',
      media: { id:'W-04', kind:'image', ratio:'16/10', file:'warden-cap-03.jpg', alt:'Certified record export',
        shot: 'A printed or on-screen custody record with a visible seal or stamp mark, resting on a desk beside a laptop.',
        prompt: 'Clean flat-lay photo of a formal custody record document with a seal stamp graphic in the corner, resting beside a closed laptop on a plain desk, soft daylight, minimal styling, 16:10' } },
  ],
  standing: {
    eyebrow: 'Standing',
    title: 'Built for the record that has to hold up.',
    body: 'WARDEN exists because a custody gap is not a paperwork problem, it is an operational one. Every seal it writes is built to stand up to the question that comes later.',
  },
});
