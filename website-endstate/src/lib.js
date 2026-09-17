'use strict';

// Collected by every ph() call so src/brief.js can regenerate
// assets/media/PLACEHOLDERS.md straight from the pages, never by hand.
const PH_LOG = [];
const PROMPTS = require('./prompts');

// The three operating areas. Each is one page; the named systems that
// power it appear inside that page rather than as pages of their own.
const AREAS = [
  { key: 'detection', tag: 'DETECTION', file: 'detection.html',
    line: 'AI and robotics that find what is hidden',
    short: 'Autonomous platforms and machine intelligence search land and water, so the first thing near a threat is a machine.' },
  { key: 'identification', tag: 'IDENTIFICATION', file: 'identification.html',
    line: 'AI image recognition that knows what it is looking at',
    short: 'Computer vision confirms type, condition and hazard before anyone lifts, moves or signs for an item.' },
  { key: 'remediation', tag: 'REMEDIATION', file: 'remediation.html',
    line: 'Custody, destruction and recovery back to supply',
    short: 'Munitions are destroyed inside the perimeter, the record is kept, and the metal goes back into domestic supply.' },
];

function brk(){
  return `<i class="t"></i><i class="b"></i>`;
}

/**
 * Self-documenting media placeholder.
 * kind: 'video' | 'image'
 * The placeholder itself fills the full size of its slot edge to edge,
 * exactly like the real image/video will, with only a small corner badge
 * on top. The shot brief and generation prompt live behind that badge
 * (native <details>, no JS required) so they never shrink or crop the
 * placeholder to make room for a text panel.
 * When a real file matching `file` is dropped in assets/media/, js/site.js
 * swaps it in automatically — no markup changes needed.
 */
function ph({ id, kind = 'video', ratio = '16/9', file, shot, prompt, alt = '' }){
  const detail = PROMPTS[id] || {};
  const fullPrompt = detail.prompt || prompt;
  // Video slots also take a still photo with the same name as a .jpg. It shows
  // until the .mp4 exists, then becomes the video's poster frame.
  const still = kind === 'video' ? file.replace(/\.[a-z0-9]+$/i, '.jpg') : '';
  PH_LOG.push({ id, kind, ratio, file, still, shot, prompt: fullPrompt, motion: detail.motion || '', negative: detail.negative || '' });
  const altAttr = `data-alt="${alt.replace(/"/g,'&quot;')}"`;
  const dataAttr = kind === 'video' ? `data-video="${file}" data-still="${still}" ${altAttr}` : `data-image="${file}" ${altAttr}`;
  return `
  <div class="media" style="aspect-ratio:${ratio}" ${dataAttr}>
    <details class="ph">
      <summary class="ph-badge">
        <span class="ph-kind">${kind}</span><span class="ph-id">${id}</span><span class="ph-ratio">${ratio}</span>
      </summary>
      <div class="ph-panel">
        <div class="ph-file">${file}${still ? ` &middot; photo: ${still}` : ''}</div>
        <div class="ph-shot">${shot}</div>
        <div class="ph-prompt">
          <div class="ph-prompt-label">${kind === 'video' ? 'Photo prompt (stand-in and video source)' : 'Generation prompt'}</div>
          <div class="ph-prompt-text">${fullPrompt}</div>
        </div>${detail.motion ? `
        <div class="ph-prompt">
          <div class="ph-prompt-label">Motion (image to video)</div>
          <div class="ph-prompt-text">${detail.motion}</div>
        </div>` : ''}${detail.negative ? `
        <div class="ph-prompt">
          <div class="ph-prompt-label">Avoid</div>
          <div class="ph-prompt-text">${detail.negative}</div>
        </div>` : ''}
      </div>
    </details>
  </div>`;
}

function navHtml(current, onDark){
  return `
  <div class="topbar" data-topbar>
    <nav class="nav transparent${onDark ? ' on-dark-page' : ''}">
      <div class="nav-row">
        <a href="index.html" aria-label="END STATE home">
          <img class="nav-logo" src="assets/brand/endstate-logo-white.png" alt="END STATE" data-logo>
        </a>
        <div class="nav-right">
          <a class="btn btn-solid" href="index.html#briefing"><span class="btn-full">Request a Briefing</span><span class="btn-short">Contact Us</span></a>
          <button class="menu-btn" aria-label="Open menu"><span></span><span></span><span></span></button>
        </div>
      </div>
    </nav>
  </div>
  <div class="mmenu">
    <button class="mmenu-close">Close</button>
    <div class="mmenu-links">
      <a href="index.html">Home</a>
      ${AREAS.map(s => `<a href="${s.file}">${s.tag.charAt(0) + s.tag.slice(1).toLowerCase()}</a>`).join('')}
      <a href="index.html#briefing">Request a Briefing</a>
    </div>
    <div class="mmenu-foot"><img src="assets/brand/endstate-logo-white.png" alt="END STATE Solutions"></div>
  </div>`;
}

function footerHtml(){
  const areaLinks = AREAS.map(s => `<a href="${s.file}">${s.tag.charAt(0) + s.tag.slice(1).toLowerCase()}</a>`).join('');
  return `
  <footer class="footer">
    <div class="wrap footer-top">
      <div class="footer-brand">
        <img src="assets/brand/endstate-logo-black-legacy.png" alt="END STATE" style="width:304px">
        <p>End State Solutions. Full-service munitions processing and reclamation for military and law enforcement organizations, operating since 2004.</p>
      </div>
      <div class="footer-col">
        <h4>Areas</h4>
        ${areaLinks}
      </div>
      <div class="footer-col">
        <h4>Built for</h4>
        <a href="index.html#operators">Military organizations</a>
        <a href="index.html#operators">Law enforcement organizations</a>
        <a href="index.html#operators">Allied and coalition partners</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="remediation.html#elements">What we recover</a>
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
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&amp;display=swap">
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
    <div class="swcard-media">${media}</div>
    <div class="swcard-scrim"></div>
    <div class="swcard-text">
      <div class="swcard-idx">/0.${idx}</div>
      <div class="swcard-title">${tag}</div>
      <div class="swcard-desc">${line}</div>
    </div>
  </a>`;
}

module.exports = { PH_LOG, AREAS, brk, ph, navHtml, footerHtml, ctaHtml, page, jumpbarHtml, capRow, swCard };
