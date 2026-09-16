'use strict';
// Builds a standalone prompt library page (for the media team) from the live
// ph() calls, so it always matches the placeholders on the site.
const fs = require('fs');
const path = require('path');
const lib = require('./lib');
const pages = [['Home','./index','index.html'],['Detection','./detection','detection.html'],['Identification','./identification','identification.html'],['Remediation','./remediation','remediation.html']];
lib.PH_LOG.length = 0;
const groups = []; let cursor = 0;
for (const [label, mod, file] of pages){ delete require.cache[require.resolve(mod)]; require(mod); groups.push([label, file, lib.PH_LOG.slice(cursor)]); cursor = lib.PH_LOG.length; }
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ratioLabel = r => ({'16/8':'2:1','16/9':'16:9','16/10':'16:10','3/4':'3:4','4/3':'4:3','4/5':'4:5','21/9':'21:9'}[r] || r.replace('/',':'));
const block = (label, text, key) => `
      <div class="blk${key==='neg'?' neg':''}">
        <div class="blk-head"><span>${label}</span><button type="button" class="copy" data-copy>Copy</button></div>
        <p class="blk-text">${esc(text)}</p>
      </div>`;
let total = 0, videos = 0;
const sections = groups.map(([label, file, rows]) => {
  const cards = rows.map(r => { total++; if (r.kind === 'video') videos++;
    return `
    <article class="card" data-page="${label}" data-kind="${r.kind}" id="${r.id}">
      <header class="card-head">
        <div class="ids"><span class="id">${r.id}</span><span class="chip ${r.kind}">${r.kind === 'video' ? 'Video' : 'Image'}</span><span class="chip">${ratioLabel(r.ratio)}</span></div>
        <code class="file">${esc(r.file)}</code>
      </header>
      <p class="brief">${esc(r.shot)}</p>
      ${block(r.kind === 'video' ? 'Prompt (keyframe)' : 'Prompt', r.prompt, 'p')}
      ${r.motion ? block('Motion, for image to video', r.motion, 'm') : ''}
      ${r.negative ? block('Avoid / negative prompt', r.negative, 'neg') : ''}
    </article>`; }).join('');
  return `
  <section class="page-group" data-group="${label}">
    <h2>${label} <span>${rows.length} slot${rows.length===1?'':'s'} · ${file}</span></h2>
    <div class="grid">${cards}</div>
  </section>`;
}).join('');

const html = `<title>End State Shot Prompts</title>
<meta name="description" content="Image and video generation prompts for every media slot on the End State Solutions website.">
<style>
:root{
  --ground:#F4F5F2; --panel:#FFFFFF; --ink:#141612; --ink-2:#3C4038; --ink-3:#6E736A; --rule:#DDE1D8;
  --sage:#5C6852; --sage-wash:#E9EDE5; --neg:#8A5A44; --neg-wash:#F5ECE7; --code:#EEF0EB; --focus:#5C6852;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --ground:#0F110E; --panel:#171A15; --ink:#EEF0EA; --ink-2:#C6CBC0; --ink-3:#8C9387; --rule:#2A2F27;
    --sage:#A7B59B; --sage-wash:#20261D; --neg:#D2A48E; --neg-wash:#2A201B; --code:#1D211B; --focus:#A7B59B;
  }
}
:root[data-theme="dark"]{
  --ground:#0F110E; --panel:#171A15; --ink:#EEF0EA; --ink-2:#C6CBC0; --ink-3:#8C9387; --rule:#2A2F27;
  --sage:#A7B59B; --sage-wash:#20261D; --neg:#D2A48E; --neg-wash:#2A201B; --code:#1D211B; --focus:#A7B59B;
}
*{ box-sizing:border-box }
body{ margin:0; background:var(--ground); color:var(--ink); font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; font-size:15px; line-height:1.5; padding-inline:clamp(16px,4vw,48px); padding-block:40px 80px }
.wrap{ max-width:1180px; margin:0 auto }
.top{ display:grid; grid-template-columns:1.2fr 1fr; gap:32px; align-items:end; padding-bottom:28px; border-bottom:1px solid var(--rule) }
@media (max-width:820px){ .top{ grid-template-columns:1fr; gap:16px } }
.eyebrow{ font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--sage) }
h1{ margin:.35em 0 0; font-weight:400; font-size:clamp(1.9rem,4vw,2.8rem); letter-spacing:-.02em; line-height:1.05; text-wrap:balance }
.lede{ margin:.7em 0 0; color:var(--ink-2); max-width:58ch }
.how{ margin:0; padding:0; list-style:none; display:grid; gap:10px; font-size:.88rem; color:var(--ink-2) }
.how li{ display:grid; grid-template-columns:92px 1fr; gap:12px }
.how b{ font-weight:600; color:var(--ink); font-size:.72rem; letter-spacing:.06em; text-transform:uppercase; padding-top:.2em }
.bar{ position:sticky; top:env(safe-area-inset-top,0px); z-index:5; background:var(--ground); display:flex; flex-wrap:wrap; gap:8px 16px; align-items:center; padding-block:14px; border-bottom:1px solid var(--rule) }
.seg{ display:flex; flex-wrap:wrap; gap:6px }
.seg button{ font:inherit; font-size:.8rem; padding:.45em .9em; border-radius:999px; border:1px solid var(--rule); background:var(--panel); color:var(--ink-2); cursor:pointer }
.seg button[aria-pressed="true"]{ background:var(--ink); color:var(--ground); border-color:var(--ink) }
.count{ margin-left:auto; font-size:.8rem; color:var(--ink-3); font-variant-numeric:tabular-nums }
.page-group{ margin-top:36px }
.page-group h2{ margin:0 0 14px; font-weight:400; font-size:1.35rem; letter-spacing:-.01em }
.page-group h2 span{ font-size:.78rem; color:var(--ink-3); margin-left:.6em; letter-spacing:0 }
.grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(min(100%,520px),1fr)); gap:16px }
.card{ background:var(--panel); border:1px solid var(--rule); border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:12px; min-width:0 }
.card-head{ display:flex; flex-wrap:wrap; justify-content:space-between; gap:8px; align-items:center }
.ids{ display:flex; gap:6px; align-items:center }
.id{ font-weight:600; font-size:.95rem; margin-right:4px; font-variant-numeric:tabular-nums }
.chip{ font-size:.7rem; letter-spacing:.05em; text-transform:uppercase; padding:.2em .6em; border-radius:4px; background:var(--code); color:var(--ink-2) }
.chip.video{ background:var(--sage-wash); color:var(--sage) }
.file{ font-family:ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size:.78rem; color:var(--ink-3); overflow-wrap:anywhere }
.brief{ margin:0; font-size:.88rem; color:var(--ink-3); font-style:italic }
.blk{ border-top:1px solid var(--rule); padding-top:10px }
.blk-head{ display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px }
.blk-head span{ font-size:.7rem; letter-spacing:.07em; text-transform:uppercase; color:var(--sage); font-weight:600 }
.neg .blk-head span{ color:var(--neg) }
.blk-text{ margin:0; font-size:.9rem; color:var(--ink); background:var(--code); border-radius:6px; padding:10px 12px; overflow-wrap:anywhere }
.neg .blk-text{ background:var(--neg-wash); color:var(--ink-2); font-size:.84rem }
.copy{ font:inherit; font-size:.75rem; padding:.3em .8em; border-radius:999px; border:1px solid var(--rule); background:transparent; color:var(--ink-2); cursor:pointer; min-width:64px }
.copy:hover{ border-color:var(--sage); color:var(--sage) }
.copy.done{ background:var(--sage); border-color:var(--sage); color:var(--panel) }
button:focus-visible{ outline:2px solid var(--focus); outline-offset:2px }
.foot{ margin-top:40px; font-size:.8rem; color:var(--ink-3) }
</style>
<div class="wrap">
  <header class="top">
    <div>
      <div class="eyebrow">End State Solutions · Website media</div>
      <h1>Shot prompts for every photo and video on the site</h1>
      <p class="lede">${total} slots across four pages, ${videos} of them video. Each slot lists the file name the site is waiting for, what the shot needs to show, and prompts ready to paste.</p>
    </div>
    <ul class="how">
      <li><b>Images</b><span>Paste the prompt into Midjourney, Flux, Imagen or Firefly and set the aspect ratio shown on the card.</span></li>
      <li><b>Video</b><span>Generate the keyframe from the prompt, then give it to Runway, Veo, Kling or Sora with the motion line.</span></li>
      <li><b>Avoid</b><span>Paste into the negative prompt field, or add it after the prompt as "Avoid: …".</span></li>
      <li><b>Save as</b><span>Use the exact file name and drop it in assets/media/. The site swaps it in automatically.</span></li>
    </ul>
  </header>
  <nav class="bar" aria-label="Filter slots">
    <div class="seg" data-filter="page">
      <button type="button" aria-pressed="true" data-v="all">All pages</button>
      ${groups.map(([l]) => `<button type="button" aria-pressed="false" data-v="${l}">${l}</button>`).join('')}
    </div>
    <div class="seg" data-filter="kind">
      <button type="button" aria-pressed="true" data-v="all">Images and video</button>
      <button type="button" aria-pressed="false" data-v="image">Images</button>
      <button type="button" aria-pressed="false" data-v="video">Video</button>
    </div>
    <span class="count" id="count">${total} slots</span>
  </nav>
  ${sections}
  <p class="foot">Generated from the website source, so every prompt matches the placeholder panel on the live pages. Keep people's faces, insignia and readable markings out of frame.</p>
</div>
<script>
(function(){
  var state = { page:'all', kind:'all' };
  function apply(){
    var n = 0;
    document.querySelectorAll('.card').forEach(function(c){
      var show = (state.page === 'all' || c.dataset.page === state.page) && (state.kind === 'all' || c.dataset.kind === state.kind);
      c.hidden = !show; if(show) n++;
    });
    document.querySelectorAll('.page-group').forEach(function(g){ g.hidden = !g.querySelector('.card:not([hidden])'); });
    document.getElementById('count').textContent = n + (n === 1 ? ' slot' : ' slots');
  }
  document.querySelectorAll('[data-filter]').forEach(function(seg){
    seg.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      seg.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
      state[seg.dataset.filter] = b.dataset.v; apply();
    });
  });
  function fallbackCopy(text){
    var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly',''); ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch(e){} document.body.removeChild(ta); return ok;
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-copy]'); if(!b) return;
    var text = b.closest('.blk').querySelector('.blk-text').textContent;
    function done(ok){ b.textContent = ok ? 'Copied' : 'Select text'; b.classList.toggle('done', ok); setTimeout(function(){ b.textContent = 'Copy'; b.classList.remove('done'); }, 1600); }
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(function(){ done(true); }, function(){ done(fallbackCopy(text)); }); }
    else done(fallbackCopy(text));
  });
})();
</script>
`;
const out = path.join(process.argv[2] || path.join(__dirname, '..', 'assets', 'media'), 'shot-prompts.html');
fs.writeFileSync(out, html);
console.log('[prompts] ' + total + ' slots (' + videos + ' video) written to ' + out);
