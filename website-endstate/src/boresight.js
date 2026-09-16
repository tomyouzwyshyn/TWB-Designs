'use strict';
const { buildSystemPage } = require('./system-page');

module.exports = buildSystemPage({
  file: 'boresight.html', key: 'boresight', tag: 'BORESIGHT', category: 'Software',
  title: 'BORESIGHT: AI Verification on the Line',
  description: 'BORESIGHT confirms nomenclature, count, and condition on every item before it moves, and flags anything that does not belong.',
  hero: {
    lines: ['AI verification on the line', 'Confirms what is really there', 'Flags it before it becomes a problem'],
    sub: 'Operating System for Verification and Inspection',
    media: { id: 'B-01', kind: 'video', ratio: '16/9', file: 'boresight-hero.mp4',
      shot: 'A top-down industrial camera view of ordnance items moving slowly on a line, bounding boxes and classification labels drawing in real time over the feed. No faces, no readable classified markings.',
      prompt: 'Overhead industrial camera feed of cylindrical ordnance casings moving slowly on a conveyor line, live AI bounding-box overlays and small classification tags drawing over each item in sage-green, cool industrial lighting, shallow motion blur, no people, no readable markings, 16:9' }
  },
  jump: [
    { id:'a', label:'Overview' }, { id:'b', label:'Why it exists' },
    { id:'c', label:'What it does' }, { id:'d', label:'Standing' },
  ],
  intro: {
    eyebrow: 'Overview',
    title: 'Why it exists',
    body: 'A manifest tells you what is supposed to be there. BORESIGHT tells you what actually is. It reads every item on the line in real time, confirms it against expectation, and catches the exception before it reaches the chamber.',
  },
  capabilities: [
    { title: 'Confirms what is really on the line',
      body: 'Every item is read, classified, and counted as it moves, checked against the manifest in real time rather than reconciled afterward.',
      media: { id:'B-02', kind:'video', ratio:'16/10', file:'boresight-cap-01.mp4',
        shot: 'Close view of items passing under a scan bar, each one getting a green confirmation tick as it passes.',
        prompt: 'Close-up screen-recording style animation of items passing left to right under a scanning line, each item receiving a small green checkmark confirmation icon as it crosses, dark UI, sage-green accents, 16:10 loop' } },
    { title: 'Flags anomalies before they become incidents',
      body: 'A mismatched item, an unexpected fill, or an out-of-spec condition is flagged and held automatically, before a crew member has to notice it by eye.',
      media: { id:'B-03', kind:'video', ratio:'16/10', file:'boresight-cap-02.mp4',
        shot: 'An item on the line getting a highlighted amber outline and pausing the line, a small alert card appearing beside it.',
        prompt: 'Screen-recording style animation of one item on a conveyor line getting highlighted with an amber outline as the line pauses, a small alert notification card sliding in beside it, dark UI, minimal iconography, 16:10 loop' } },
    { title: 'Learns the line, gets faster every cycle',
      body: 'Each verified cycle sharpens the model against that specific line, that specific material mix, so throughput climbs without adding inspectors.',
      media: { id:'B-04', kind:'image', ratio:'16/10', file:'boresight-cap-03.jpg', alt:'Model confidence trend',
        shot: 'A simple upward confidence or accuracy curve on a dark dashboard panel.',
        prompt: 'Minimal dark-UI dashboard panel showing a smooth upward trend line labelled generically, sage-green line on charcoal background, clean sans-serif, no readable specific numbers, 16:10' } },
  ],
  standing: {
    eyebrow: 'Standing',
    title: 'A second set of eyes that never gets tired.',
    body: 'BORESIGHT exists to catch what a long shift makes easy to miss, and to do it the same way on item one and item ten thousand.',
  },
});
