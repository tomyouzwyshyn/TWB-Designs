'use strict';
const fs = require('fs');
const path = require('path');
const { page } = require('./lib');

const pages = [
  require('./index'),
  require('./detection'),
  require('./identification'),
  require('./remediation'),
];

// Content hygiene: no em dashes, no spaced hyphens used as dashes.
const FORBIDDEN = [
  { re: /—/g, label: 'em dash (—)' },
  { re: / - /g, label: 'spaced hyphen ( - )' },
];

let failed = false;
const outDir = path.join(__dirname, '..');

for(const p of pages){
  const html = page(p);
  for(const rule of FORBIDDEN){
    const matches = html.match(rule.re);
    if(matches){
      console.error(`[build] ${p.file}: forbidden ${rule.label} x${matches.length}`);
      failed = true;
    }
  }
  fs.writeFileSync(path.join(outDir, p.file), html);
  console.log(`[build] wrote ${p.file}`);
}

if(failed){
  console.error('\n[build] FAILED content checks above.');
  process.exit(1);
}
console.log(`\n[build] ${pages.length} pages written cleanly.`);
