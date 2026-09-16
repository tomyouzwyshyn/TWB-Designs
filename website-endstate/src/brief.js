'use strict';
const fs = require('fs');
const path = require('path');
const lib = require('./lib');

// Re-require every page module fresh so PH_LOG is populated by exactly
// this run's ph() calls, grouped in build order.
for(const key of ['index','keep','warden','boresight','picket','crucible','team']){
  delete require.cache[require.resolve('./' + key)];
}
lib.PH_LOG.length = 0;
const pageOrder = [
  ['Home', './index'],
  ['KEEP', './keep'],
  ['WARDEN', './warden'],
  ['BORESIGHT', './boresight'],
  ['PICKET', './picket'],
  ['CRUCIBLE', './crucible'],
  ['Team', './team'],
];

const rowsByPage = [];
let cursor = 0;
for(const [label, mod] of pageOrder){
  require(mod);
  const rows = lib.PH_LOG.slice(cursor);
  cursor = lib.PH_LOG.length;
  rowsByPage.push([label, rows]);
}

let out = `# END STATE — Media Placeholders (v2, Palantir-register site)\n\n`;
out += `Generated from the live ph() calls in src/*.js — this file cannot drift from the site.\n`;
out += `Drop a file at assets/media/<exact filename> and js/site.js swaps it in automatically. No HTML edits needed.\n\n`;
out += `Every placeholder includes: what to shoot or generate, and a ready-to-paste prompt for image or video generation software.\n\n`;

let total = 0;
for(const [label, rows] of rowsByPage){
  if(!rows.length) continue;
  out += `## ${label}\n\n`;
  for(const r of rows){
    total++;
    out += `### ${r.id} — \`${r.file}\` (${r.kind}, ${r.ratio})\n\n`;
    out += `**What it should be:** ${r.shot}\n\n`;
    out += `**Generation prompt:**\n\`\`\`\n${r.prompt}\n\`\`\`\n\n`;
  }
}

out += `## Not images, still placeholders\n\n`;
out += `- Contact email — footer of every page and \`FALLBACK_EMAIL\` in \`js/site.js\`. Currently \`operations@endstate.example\`.\n`;
out += `- Form endpoint — \`FORM_ENDPOINT\` in \`js/site.js\`. Currently empty; the briefing form tells the visitor to email directly until it is set.\n`;
out += `- Arjun Kochhar bio on the Team page — currently reads "Bio pending."\n`;

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'media', 'PLACEHOLDERS.md'), out);
console.log(`[brief] ${total} media placeholders written to assets/media/PLACEHOLDERS.md`);
