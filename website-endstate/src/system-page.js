'use strict';
const { brk, ph, ctaHtml, jumpbarHtml, capRow } = require('./lib');

function buildSystemPage(cfg){
  const heroMedia = ph(cfg.hero.media);

  const heroLines = cfg.hero.lines.map((l, i) => `<span${i===0?' class="on"':''}>${l}</span>`).join('');

  const capsHtml = cfg.capabilities.map((c, i) => capRow({
    idx: i+1,
    total: cfg.capabilities.length,
    title: c.title,
    body: c.body,
    media: ph(c.media),
    reverse: i % 2 === 1,
  })).join('');

  const jump = jumpbarHtml(cfg.jump);

  const body = `
<section class="hero sub" id="a">
  <div class="hero-media" style="position:absolute;inset:0">${heroMedia}</div>
  <div class="hero-scrim"></div>
  <div class="hero-body wrap">
    <div class="hero-tagrow">
      <div class="tag on-dark">${brk()}${cfg.category}</div>
      <div class="tag on-dark">{ ${cfg.tag} }</div>
    </div>
    <h1 class="hero-title xfade">${heroLines}</h1>
    <div class="hero-sub">${cfg.hero.sub}</div>
  </div>
  <div class="hero-foot wrap">
    <div class="scroll-cue"><span class="arrow">&#8595;</span> Scroll to explore</div>
  </div>
</section>

${jump}

<section class="section" id="b">
  <div class="wrap">
    <div class="rv" style="max-width:680px;margin-bottom:var(--s3)">
      <div class="eyebrow">${brk()}${cfg.intro.eyebrow}</div>
      <h2 class="h2" style="margin-top:.4em">${cfg.intro.title}</h2>
      <p class="lede" style="margin-top:.6em">${cfg.intro.body}</p>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0" id="c">
  <div class="wrap">${capsHtml}</div>
</section>

<section class="band-light section" id="d">
  <div class="wrap rv" style="max-width:760px">
    <div class="eyebrow">${brk()}${cfg.standing.eyebrow}</div>
    <h2 class="h2" style="margin-top:.4em">${cfg.standing.title}</h2>
    <p class="lede" style="margin-top:.6em;color:var(--ink-2)">${cfg.standing.body}</p>
  </div>
</section>

${ctaHtml()}
`;

  return { file: cfg.file, title: cfg.title, description: cfg.description, body, dark: true };
}

module.exports = { buildSystemPage };
