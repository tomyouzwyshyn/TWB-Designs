'use strict';
const { brk, ph, ctaHtml, jumpbarHtml, capRow } = require('./lib');

/**
 * Shared layout for the three area pages (Detection, Identification,
 * Remediation). Mirrors Palantir's product-page rhythm: centred dark hero
 * with a { SYSTEM } tag, sticky jump bar, a problem statement, numbered
 * capability rows, a "why it matters" grid for the contracting government,
 * any page-specific sections, a standing statement, then the briefing CTA.
 */
function buildAreaPage(cfg){
  const heroLines = cfg.hero.lines.map((l, i) => `<span${i===0?' class="on"':''}>${l}</span>`).join('');

  const capsHtml = cfg.capabilities.map((c, i) => capRow({
    idx: i+1,
    total: cfg.capabilities.length,
    title: c.title,
    body: c.body,
    media: ph(c.media),
    reverse: i % 2 === 1,
  })).join('');

  const whyHtml = cfg.why.items.map(w => `
      <div class="aud-card">
        <div class="ui">${w.label}</div>
        <h3 class="h3">${w.title}</h3>
        <p style="margin-top:.6em">${w.body}</p>
      </div>`).join('');

  const body = `
<section class="hero sub" id="top">
  <div class="hero-media" style="position:absolute;inset:0">${ph(cfg.hero.media)}</div>
  <div class="hero-scrim"></div>
  <div class="hero-body wrap">
    <div class="hero-tagrow">
      <div class="tag on-dark">${brk()}${cfg.category}</div>
    </div>
    <h1 class="hero-title xfade">${heroLines}</h1>
    <div class="hero-sub">${cfg.hero.sub}</div>
  </div>
  <div class="hero-foot wrap">
    <div class="scroll-cue"><span class="arrow">&#8595;</span> Scroll to explore</div>
  </div>
</section>

${jumpbarHtml(cfg.jump)}

<section class="section" id="why">
  <div class="wrap intro-split">
    <div class="rv">
      <div class="eyebrow">${brk()}${cfg.intro.eyebrow}</div>
      <h2 class="h2" style="margin-top:.4em">${cfg.intro.title}</h2>
    </div>
    <div class="rv">
      ${cfg.intro.body.map(p => `<p class="lede" style="margin-bottom:.8em">${p}</p>`).join('')}
    </div>
  </div>
</section>

${cfg.beforeCaps || ''}

<section class="section" style="padding-top:0" id="how">
  <div class="wrap">
    <div class="rv" style="max-width:680px;margin-bottom:var(--s2)">
      <div class="eyebrow">${brk()}${cfg.capsHead.eyebrow}</div>
      <h2 class="h2" style="margin-top:.4em">${cfg.capsHead.title}</h2>
    </div>
    ${capsHtml}
  </div>
</section>

${cfg.extra || ''}

<section class="band" id="standing">
  <div class="wrap rv" style="max-width:860px">
    <div class="tag on-dark">${brk()}${cfg.standing.eyebrow}</div>
    <h2 class="h2" style="margin-top:.5em">${cfg.standing.title}</h2>
    <p class="lede on-dark" style="margin-top:.6em">${cfg.standing.body}</p>
    ${cfg.standing.next ? `<a class="btn btn-line on-dark" href="${cfg.standing.next.file}" style="margin-top:var(--s3);display:inline-block">${cfg.standing.next.label}</a>` : ''}
  </div>
</section>

<section class="section" id="matters" style="background:var(--surface-2)">
  <div class="wrap">
    <div class="rv" style="max-width:680px">
      <div class="eyebrow">${brk()}${cfg.why.eyebrow}</div>
      <h2 class="h2" style="margin-top:.4em">${cfg.why.title}</h2>
    </div>
    <div class="aud-grid rv">${whyHtml}</div>
  </div>
</section>

${ctaHtml()}
`;

  return { file: cfg.file, title: cfg.title, description: cfg.description, body, dark: true };
}

module.exports = { buildAreaPage };
