// Regenerates src/logo.ts from brand/*.svg as data URIs.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const brand = resolve(here, '../../../brand');
const enc = (p) => 'data:image/svg+xml,' + encodeURI(readFileSync(resolve(brand, p), 'utf8').trim().replace(/>\s+</g, '><')).replace(/#/g, '%23');
writeFileSync(resolve(here, '../src/logo.ts'),
`// TWB logotype, inlined as data URIs.
// Generated from brand/*.svg by scripts/sync-logo.mjs — do not hand-edit.
// Inlined deliberately: designs rendered from this bundle have no access to
// the repo's asset paths, so a relative href would silently break the mark.
export const LOGO_BLACK = ${JSON.stringify(enc('twb-logo-black.svg'))};
export const LOGO_WHITE = ${JSON.stringify(enc('twb-logo-white.svg'))};
`);
console.log('  regenerated src/logo.ts');
