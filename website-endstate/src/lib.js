'use strict';

// Collected by every ph() call so src/brief.js can regenerate
// assets/media/PLACEHOLDERS.md straight from the pages, never by hand.
const PH_LOG = [];

const SYSTEMS = [
  { key: 'keep', tag: 'KEEP', file: 'keep.html',
    line: 'The central system of record',
    short: 'Every unit, every round, every fraction, unified into one operating picture.' },
  { key: 'warden', tag: 'WARDEN', file: 'warden.html',
    line: 'Chain of custody, sealed at every step',
    short: 'Intake to certified destruction, timestamped, witnessed, and audit-ready.' },
  { key: 'boresight', tag: 'BORESIGHT', file: 'boresight.html',
    line: 'AI verification on the line',
    short: 'Confirms nomenclature, count, and condition before material moves.' },
  { key: 'picket', tag: 'PICKET', file: 'picket.html',
    line: 'Autonomous ground, surface, and underwater',
    short: 'Unmanned platforms that search, mark, and stage for safe recovery.' },
  { key: 'crucible', tag: 'CRUCIBLE', file: 'crucible.html',
    line: 'Materials recovery, weighed and traced',
    short: 'Every fraction tracked from separation to a reportable, certified yield.' },
];

function brk(){
  return `<i class="t"></i><i class="b"></i>`;
}

/**
 * Self-documenting media placeholder.
 * kind: 'video' | 'image'
 * Renders a labelled frame (id, ratio, exact filename, shot brief, and a
 * ready-to-use generation prompt) so nothing is ever a blank grey box.
 * When a real file matching `file` is dropped in assets/media/, js/site.js
 * swaps it in automatically — no markup changes needed.
 */
function ph({ id, kind = 'video', ratio = '16/9', file, shot, prompt, alt = '' }){
  PH_LOG.push({ id, kind, ratio, file, shot, prompt });
  const dataAttr = kind === 'video' ? `data-video="${file}"` : `data-image="${file}" data-alt="${alt.replace(/"/g,'&quot;')}"`;
  return `
  <div class="media" style="aspect-ratio:${ratio.replace('/', '/')}" ${dataAttr}>
    <div class="ph">
      <div class="ph-head">
        <span class="ph-kind">${kind} &middot; ${id}</span>
        <span class="ph-ratio">${ratio}</span>
      </div>
      <div>
        <div class="ph-file">${file}</div>
        <div class="ph-shot">${shot}</div>
        <div class="ph-prompt">
          <div class="ph-prompt-label">Generation prompt</div>
          <div class="ph-prompt-text">${prompt}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function navHtml(current, onDark){
  const dropItems = SYSTEMS.map(s => `
    <a href="${s.file}"><span class="drop-code">${s.tag}</span>${s.line}</a>`).join('');
  return `
  <nav class="nav transparent${onDark ? ' on-dark-page' : ''}">
    <div class="wrap nav-row">
      <a href="index.html" aria-label="END STATE home">
        <img class="nav-logo" src="assets/brand/endstate-logo-white.png" alt="END STATE" data-logo>
      </a>
      <div class="nav-mid">
        <div class="nav-item" style="position:relative">
          <span class="nav-link">Systems<span class="care">&#9662;</span></span>
          <div class="nav-drop">${dropItems}
            <a href="index.html#emacs"><span class="drop-code">HARDWARE</span>eMACS platform</a>
          </div>
        </div>
        <a class="nav-link" href="team.html">Company</a>
      </div>
      <div class="nav-right">
        <a class="btn btn-solid" href="index.html#briefing">Request a Briefing</a>
        <button class="menu-btn" aria-label="Open menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>
  <div class="mmenu">
    <button class="mmenu-close">Close</button>
    <div class="mmenu-links">
      <a href="index.html">Home</a>
      ${SYSTEMS.map(s => `<a href="${s.file}">${s.tag}</a>`).join('')}
      <a href="index.html#emacs">eMACS</a>
      <a href="team.html">Company</a>
      <a href="index.html#briefing">Request a Briefing</a>
    </div>
  </div>`;
}

function footerHtml(){
  const sysLinks = SYSTEMS.map(s => `<a href="${s.file}">${s.tag}</a>`).join('');
  return `
  <footer class="footer">
    <div class="wrap footer-top">
      <div class="footer-brand">
        <img src="assets/brand/endstate-logo-white.png" alt="END STATE" style="height:18px">
        <p>The full lifecycle system for munitions custody, materials recovery, and site remediation. Built for the agencies, forces, and contractors who close the loop.</p>
      </div>
      <div class="footer-col">
        <h4>Systems</h4>
        ${sysLinks}
        <a href="index.html#emacs">eMACS</a>
      </div>
      <div class="footer-col">
        <h4>Built for</h4>
        <a href="index.html#operators">Law enforcement</a>
        <a href="index.html#operators">Military &amp; allied forces</a>
        <a href="index.html#operators">Industrial &amp; environmental</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="team.html">Team</a>
        <a href="index.html#briefing">Request a briefing</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:operations@endstate.example">operations@endstate.example</a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span class="ui">&copy; <span data-year></span> END STATE</span>
      <div class="footer-rail">
        <span>DETECT</span><span>&middot;</span><span>NEUTRALIZE</span><span>&middot;</span><span>DESTROY</span><span>&middot;</span><span>RECOVER</span>
      </div>
    </div>
  </footer>`;
}

function ctaHtml(){
  return `
  <section class="band" id="briefing">
    <div class="wrap">
      <div class="band-inner rv">
        <div class="tag on-dark">${brk()}Get in touch</div>
        <h2 class="h2" style="margin-top:.5em">Request a deployment briefing</h2>
        <p class="lede on-dark" style="margin-top:.6em">Tell us the mission and we will walk your team through the system, on site or over a secure call.</p>
      </div>
      <form class="form rv">
        <div class="field"><label for="name">Name</label><input id="name" name="name" type="text" required></div>
        <div class="field"><label for="org">Organization</label><input id="org" name="org" type="text" required></div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required></div>
        <div class="field">
          <label for="role">Capacity</label>
          <select id="role" name="role">
            <option>Law enforcement</option>
            <option>Military / defence</option>
            <option>Allied ministry of defence</option>
            <option>Contractor / integrator</option>
            <option>Other</option>
          </select>
        </div>
        <div class="field full"><label for="msg">What are you looking to deploy</label><textarea id="msg" name="msg" rows="3"></textarea></div>
        <div class="field full form-submit">
          <button class="btn btn-solid" type="submit">Submit request</button>
        </div>
      </form>
      <p class="form-note small" style="color:var(--dark-ink-2)"></p>
    </div>
  </section>`;
}

function page({ file, title, description, body, dark = false }){
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | END STATE</title>
<meta name="description" content="${description}">
<link rel="icon" href="data:,">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css">
</head>
<body class="${dark ? 'on-dark-entry' : ''}">
${navHtml(file, dark)}
<main>
${body}
</main>
${footerHtml()}
<script src="js/site.js"></script>
</body>
</html>`;
}

function jumpbarHtml(items){
  return `
  <div class="jumpbar">
    <div class="wrap">
      ${items.map(i => `<a href="#${i.id}">${i.label}</a>`).join('')}
    </div>
  </div>`;
}

function capRow({ idx, total, title, body, media, reverse = false }){
  return `
  <div class="caprow${reverse ? ' rev' : ''} rv">
    <div>
      <div class="cap-idx"><b>0.${idx}</b>&nbsp;/&nbsp;0.${total}</div>
      <h3 class="h3">${title}</h3>
      <p style="margin-top:.7em">${body}</p>
    </div>
    <div class="cap-media">${media}</div>
  </div>`;
}

function swCard({ idx, tag, line, media, file }){
  return `
  <a class="swcard rv" href="${file}">
    <div class="swcard-idx">/0.${idx}</div>
    <div class="swcard-media">${media}</div>
    <div class="swcard-title">${tag}</div>
    <div class="swcard-desc">${line}</div>
  </a>`;
}

module.exports = { PH_LOG, SYSTEMS, brk, ph, navHtml, footerHtml, ctaHtml, page, jumpbarHtml, capRow, swCard };
