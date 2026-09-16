'use strict';
const { buildAreaPage } = require('./area-page');

module.exports = buildAreaPage({
  file: 'detection.html',
  title: 'Detection: AI and Robotics',
  description: 'END STATE Detection puts autonomous robotics and machine intelligence at the front of the search for buried, abandoned and submerged munitions, so people no longer have to be.',
  category: 'Detection',
  system: 'PICKET',

  hero: {
    lines: ['The first thing near a threat should be a machine.', 'Robotics that go first.', 'Intelligence that reads the ground.'],
    sub: 'AI and autonomous robotics for land, littoral and underwater search',
    media: {
      id: 'D-01', kind: 'video', ratio: '16/9', file: 'detection-hero.mp4',
      shot: 'A tracked unmanned ground vehicle moving slowly across open scrubland at first light, sensor mast raised, a faint scan line sweeping the ground ahead of it. No people in frame. Wide, low, patient.',
      prompt: 'Cinematic slow tracking shot of a compact matte charcoal tracked unmanned ground robot with a raised sensor mast crossing open scrubland at dawn, faint sage-green scan line sweeping the ground ahead, low mist, long lens, shallow depth of field, no people, no insignia, no text, 16:9, photoreal, 4K'
    }
  },

  jump: [
    { id: 'why', label: 'Why it exists' },
    { id: 'how', label: 'What it does' },
    { id: 'standing', label: 'Standing' },
    { id: 'matters', label: 'Why it matters' },
  ],

  intro: {
    eyebrow: 'Why it exists',
    title: 'Every conflict leaves something in the ground.',
    body: [
      'Munitions outlast the wars they were made for. They sit in former battlefields, training ranges, depots, ports and seabeds, buried by time and invisible from the surface. Until they are found, the land and water above them cannot safely be used, and every person sent to look for them carries the risk.',
      'Detection changes who carries that risk. Autonomous platforms do the searching. Machine intelligence does the reading. Trained people stay where they are needed most: making decisions, at a safe distance, with a clear picture of what is out there.'
    ]
  },

  capsHead: { eyebrow: 'What it does', title: 'Search at scale, without putting people first in line.' },

  capabilities: [
    {
      title: 'Autonomous platforms on land, on the surface and under water',
      body: 'A single fleet of unmanned ground, surface and underwater vehicles covers terrain and water that is slow, hazardous or impossible to search on foot. Each platform plans its own route, holds a safe standoff, and marks what it finds for recovery, so a survey that once meant weeks of exposed manual work runs continuously and remotely.',
      media: {
        id: 'D-02', kind: 'video', ratio: '16/10', file: 'detection-platforms.mp4',
        shot: 'Split sequence: a ground robot on a range, a small uncrewed surface vessel in a calm harbour, and a torpedo-shaped underwater vehicle gliding over a sandy seabed. Same colour grade across all three.',
        prompt: 'Three-part cinematic sequence, matching muted charcoal and sage colour grade: a tracked unmanned ground robot on a gravel range, a small uncrewed surface vessel moving through a calm grey harbour, a sleek autonomous underwater vehicle gliding low over a sandy seabed in blue-green light, no people, no insignia, no text, 16:10 loop'
      }
    },
    {
      title: 'Many sensors, one picture',
      body: 'Magnetometry, ground-penetrating radar, electromagnetic induction, sonar and electro-optical imaging each see something different. Detection fuses every stream into one geolocated map, and machine learning separates the signature of a munition from the scrap, rock and debris that surround it. Operators see contacts ranked by confidence, not raw data.',
      media: {
        id: 'D-03', kind: 'video', ratio: '16/10', file: 'detection-fusion.mp4',
        shot: 'An interface animation: several translucent sensor layers stack over a terrain map and resolve into a handful of highlighted contacts with confidence rings.',
        prompt: 'Dark-theme geospatial interface animation, several translucent data layers (magnetic field contours, radar slices, sonar returns) stacking over a topographic terrain map and resolving into a few sage-green highlighted contact points with confidence rings, clean sans-serif labels with no readable real data, charcoal background, 16:10 seamless loop'
      }
    },
    {
      title: 'A detection model that learns from every item destroyed',
      body: 'Every munition that passes through Remediation is scanned, identified and recorded before it is destroyed. That verified signature returns to the detection model. The more the system destroys, the better it becomes at finding the next one, in the next field, in the next harbour.',
      media: {
        id: 'D-04', kind: 'image', ratio: '16/10', file: 'detection-library.jpg', alt: 'Signature library feeding the detection model',
        shot: 'A clean diagram-like still: verified items on the left feeding a glowing central model, which points out to a survey map on the right. Minimal, precise, no numbers.',
        prompt: 'Minimal dark-UI conceptual illustration, a row of abstract munition silhouettes on the left connected by thin sage-green lines into a softly glowing central neural network node, which radiates out to a topographic survey map with marked contacts on the right, charcoal background, precise thin lines, no readable text, no numbers, 16:10'
      }
    },
    {
      title: 'Clean handoff to Identification and the record',
      body: 'Every confirmed contact carries its location, sensor evidence, imagery and confidence into Identification and into the program record. Nothing is re-entered, nothing is lost between teams, and the government that owns the site sees one continuous account from first contact onward.',
      media: {
        id: 'D-05', kind: 'image', ratio: '16/10', file: 'detection-handoff.jpg', alt: 'Survey contacts handed off to identification',
        shot: 'A rugged tablet in a gloved hand at the edge of a survey area, screen showing a map with marked contacts and one contact card open. Background soft, no faces.',
        prompt: 'Photoreal close shot of a gloved hand holding a rugged field tablet at the edge of an open survey area, screen showing a dark map interface with several marked contacts and one open detail card, soft overcast light, shallow depth of field, no faces, no readable text, 16:10'
      }
    }
  ],

  standing: {
    eyebrow: 'Standing',
    title: 'Find it before it finds anyone.',
    body: 'Detection exists so that the most dangerous step in the lifecycle is taken by a machine, and so that land and water return to the people they belong to sooner.',
    next: { file: 'identification.html', label: 'Next: Identification' }
  },

  why: {
    eyebrow: 'Why it matters',
    title: 'What military and police organizations gain.',
    items: [
      { label: 'Protecting people', title: 'Fewer people in harm’s way', body: 'Robotic platforms take the forward position in the search, keeping soldiers, technicians and civilians away from undiscovered hazards.' },
      { label: 'Territory', title: 'Land and water released sooner', body: 'Wide-area, continuous survey returns ranges, coastlines and former conflict zones to safe use without years of manual clearance.' },
      { label: 'Sovereignty', title: 'Data that stays under national control', body: 'Survey data, maps and signatures belong to the government that commissions the work and are held under its control.' }
    ]
  }
});
