'use strict';
const { buildSystemPage } = require('./system-page');

module.exports = buildSystemPage({
  file: 'keep.html', key: 'keep', tag: 'KEEP', category: 'Software',
  title: 'KEEP: The Central System of Record',
  description: 'KEEP is the operating system for the full lifecycle, one record for every unit, every round, and every fraction across the fleet.',
  hero: {
    lines: ['The central system of record', 'One picture, every unit', 'Nothing re-entered, nothing lost'],
    sub: 'Operating System for the Full Lifecycle',
    media: { id: 'K-01', kind: 'video', ratio: '16/9', file: 'keep-hero.mp4',
      shot: 'A dark-themed operations dashboard on a large monitor, a map view with several unit markers pulsing gently, a side panel of status tiles. Slow camera drift, no readable real data, no faces.',
      prompt: 'Cinematic slow dolly across a large dark-themed command dashboard monitor showing a map with pulsing unit markers and a right-hand panel of status tiles, charcoal and sage-green color scheme, shallow depth of field, soft ambient room light reflected on the glass, no readable text, no people, 16:9' }
  },
  jump: [
    { id:'a', label:'Overview' }, { id:'b', label:'Why it exists' },
    { id:'c', label:'What it does' }, { id:'d', label:'Standing' },
  ],
  intro: {
    eyebrow: 'Overview',
    title: 'Why it exists',
    body: 'Every deployed unit used to keep its own paperwork, its own spreadsheet, its own version of the truth. KEEP replaces all of it with one live record: what came in, what moved, what was destroyed, what was recovered, on every eMACS unit in the fleet, in one place.',
  },
  capabilities: [
    { title: 'Unified operating picture',
      body: 'Every site, every unit, every open job on one screen. Command sees the whole fleet the way an operator sees one trailer.',
      media: { id:'K-02', kind:'video', ratio:'16/10', file:'keep-cap-01.mp4',
        shot: 'Close screen capture of the map view zooming from a single site to a regional view showing multiple sites.',
        prompt: 'Screen-recording style zoom-out animation on a dark UI map, starting on a single pulsing site marker and pulling back to reveal several more across a region, sage-green accent lines connecting them, clean minimal labels, no readable real text, 16:10 loop' } },
    { title: 'Command and control',
      body: 'Task any unit, any crew, from anywhere. Assign a job, reroute a unit, or pull a unit offline without a phone call chain.',
      media: { id:'K-03', kind:'video', ratio:'16/10', file:'keep-cap-02.mp4',
        shot: 'A hand on a tablet dragging a task card from an unassigned column into an assigned column on a kanban-style board.',
        prompt: 'Overhead shot of a hand dragging a dark-themed digital task card across a kanban board on a rugged tablet, sage-green highlight on drop, workbench blurred in background, no readable text, 16:10' } },
    { title: 'Interoperable record',
      body: 'Hands off one clean, verified record to command, counsel, and the customer at the same time, in the format each one needs.',
      media: { id:'K-04', kind:'image', ratio:'16/10', file:'keep-cap-03.jpg', alt:'Export screen',
        shot: 'A UI screen showing a record being exported into several formats at once, represented as branching icons.',
        prompt: 'Clean dark-UI screenshot-style illustration of a single record icon branching into three export format icons (document, spreadsheet, certificate), sage-green connecting lines on charcoal background, minimal flat icon style, 16:10' } },
  ],
  standing: {
    eyebrow: 'Standing',
    title: 'One system of record, built for the agencies that answer for it.',
    body: 'KEEP is built to the standard of the record it produces: complete, timestamped, and ready to hand to anyone who asks for it, on the day they ask.',
  },
});
