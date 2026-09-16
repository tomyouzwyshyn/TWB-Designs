'use strict';
const { buildAreaPage } = require('./area-page');

module.exports = buildAreaPage({
  file: 'identification.html',
  title: 'Identification: AI Image Recognition',
  description: 'END STATE Identification uses AI image recognition to confirm the type, condition and hazard of every munition before anyone lifts it, moves it or signs for it.',
  category: 'Identification',
  system: 'BORESIGHT',

  hero: {
    lines: ['Know exactly what it is.', 'Before anyone lifts it.', 'Before it moves an inch.'],
    sub: 'AI image recognition for munitions and materiel',
    media: {
      id: 'I-01', kind: 'video', ratio: '16/9', file: 'identification-hero.mp4',
      shot: 'Macro camera move across a weathered munition casing under cool light while a thin recognition outline traces its profile and a classification tag resolves beside it. No readable real markings.',
      prompt: 'Cinematic macro dolly shot along a weathered, corroded cylindrical munition casing resting on a matte dark surface under cool raking light, a thin sage-green computer-vision outline tracing its profile and a small abstract classification tag resolving beside it, no readable markings or text, shallow depth of field, 16:9, photoreal, 4K'
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
    title: 'Risk lives in the unknown item.',
    body: [
      'A munition found in the field, pulled from an aging stockpile or handed over from a seizure rarely arrives with a reliable label. Its markings may be corroded, its fuze state uncertain, its fill unknown. Every decision that follows, how to handle it, how to move it, how to destroy it, depends on getting that first identification right.',
      'Identification removes the guesswork. Computer vision trained on ordnance reads every item at the point of contact and gives it a confirmed identity, a condition assessment and a handling recommendation, with a qualified person confirming every call.'
    ]
  },

  capsHead: { eyebrow: 'What it does', title: 'Every item seen, named and assessed.' },

  capabilities: [
    {
      title: 'Recognition at the point of contact',
      body: 'Imagery from a robot camera, a handheld device or a fixed line camera is read in real time. The model classifies type, calibre, family and markings, even when an item is dirty, damaged or partially buried, and returns a confident identification in the moment it is needed rather than after a specialist review.',
      media: {
        id: 'I-02', kind: 'video', ratio: '16/10', file: 'identification-recognition.mp4',
        shot: 'Over-the-shoulder view of a handheld device pointed at a partially buried item; on screen a bounding box locks on and a classification card appears.',
        prompt: 'Over-the-shoulder shot of a gloved hand holding a rugged handheld device aimed at a partially buried corroded cylindrical object in dry earth, device screen showing a sage-green bounding box locking on and an abstract classification card appearing, soft daylight, shallow depth of field, no faces, no readable text, 16:10 loop'
      }
    },
    {
      title: 'Condition and hazard, assessed before handling',
      body: 'Beyond what an item is, Identification reads the state it is in: corrosion, deformation, leakage and visible fuze condition. Each assessment produces a handling class and a recommended next step. The model advises; a qualified technician decides, and every decision is recorded.',
      media: {
        id: 'I-03', kind: 'image', ratio: '16/10', file: 'identification-condition.jpg', alt: 'Condition assessment overlay on a munition',
        shot: 'A still of an interface: a munition image with small annotated regions highlighting corrosion and deformation, and a handling class badge at the side.',
        prompt: 'Dark-theme inspection interface still, a photographic image of a weathered munition casing with several small sage-green and amber annotated regions highlighting corrosion and surface deformation, a minimal handling-class badge and a confirm button to the side, clean sans-serif UI, no readable real data, 16:10'
      }
    },
    {
      title: 'Verification on the line',
      body: 'At remediation intake, every item passes under a camera before it moves toward destruction. Identification confirms it against the manifest, counts it, and holds anything that does not match. What goes into the chamber is exactly what the record says goes into the chamber.',
      media: {
        id: 'I-04', kind: 'video', ratio: '16/10', file: 'identification-line.mp4',
        shot: 'Top-down view of items moving slowly under a scanning bar, each receiving a confirmation mark; one item is highlighted and the line pauses.',
        prompt: 'Top-down industrial camera view of cylindrical casings moving slowly along a conveyor under a thin scanning light bar, each item receiving a small sage-green confirmation mark as it passes, one item highlighted with an amber outline as the line pauses, cool industrial lighting, no people, no readable markings, 16:10 loop'
      }
    },
    {
      title: 'Every image becomes part of the record',
      body: 'The images behind each identification stay attached to the item for its entire lifecycle, from first contact to certificate of destruction. They also return to the model as verified examples, so recognition grows sharper and broader with every program it supports.',
      media: {
        id: 'I-05', kind: 'image', ratio: '16/10', file: 'identification-record.jpg', alt: 'Item record with attached imagery',
        shot: 'An item record screen: a vertical timeline of events from first contact to destruction, each with a thumbnail image.',
        prompt: 'Minimal dark-UI record screen showing a vertical timeline of events for a single item, each step with a small photographic thumbnail and an abstract label, sage-green timeline line, charcoal background, clean sans-serif type, no readable real data, 16:10'
      }
    }
  ],

  standing: {
    eyebrow: 'Standing',
    title: 'Every decision starts with certainty.',
    body: 'Identification exists so that no one handles, moves or destroys an item on a guess, and so that the account of what was found is complete, verified and illustrated.',
    next: { file: 'remediation.html', label: 'Next: Remediation' }
  },

  why: {
    eyebrow: 'Why it matters',
    title: 'What a contracting government gains.',
    items: [
      { label: 'Protecting people', title: 'Technicians who know what they face', body: 'A confirmed identity and condition before contact means every handling decision is made on evidence, not assumption.' },
      { label: 'Accountability', title: 'An inventory that can be trusted', body: 'Every item is verified against its manifest and backed by imagery, giving command and oversight bodies an account they can stand behind.' },
      { label: 'Tempo', title: 'Faster decisions in the field', body: 'Recognition in the moment replaces waiting for specialist review, so programs move at the pace the mission demands.' }
    ]
  }
});
