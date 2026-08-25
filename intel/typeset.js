// Typesets the conflict brief into a fixed 5-page, two-column PDF.
// CSS multicol is not honoured by this Chromium build in print, so we pack
// blocks into measured columns ourselves and binary-search the type scale.
const { chromium } = require('playwright-core');
const fs = require('fs');

const SRC = '/home/claude/brief/TWB_Global_Conflict_Brief.html';
const OUT = '/home/claude/brief/TWB_Global_Conflict_Brief.pdf';
const PAGES = parseInt(process.env.PG||'5'), COLS = 2;

// Letter at 96dpi = 816 x 1056. Margins 9mm side / 8mm top-bottom.
const PW = 816, PH = 1056, MX = 26, MY = 24, GAP = 16;
const COLW = Math.floor((PW - 2 * MX - GAP) / COLS);
const COLH = PH - 2 * MY;

const src = fs.readFileSync(SRC, 'utf8');
const styleMatch = src.match(/<style>([\s\S]*?)<\/style>/);
let css = styleMatch[1];
// strip the screen/print media blocks — the artboard supplies its own geometry
css = css.replace(/@page\{[\s\S]*?\}/g, '')
         .replace(/@media print\{[\s\S]*?\n  \}/g, '')
         .replace(/@media \(max-width:600px\)\{[^}]*\}/g, '');

const body = src.split('<body')[1].split('>').slice(1).join('>').split('</body>')[0];

function scaled(factor) {
  const shrink = s => s
    .replace(/font-size:\s*([\d.]+)px/g, (m, v) => `font-size:${(parseFloat(v) * factor).toFixed(2)}px`)
    .replace(/line-height:\s*([\d.]+)/g, (m, v) => `line-height:${Math.max(1.24, parseFloat(v) * 0.87).toFixed(2)}`);
  return {
    css: shrink(css) + `
      body{margin:0;background:#fff}
      .sheet{width:${PW}px;height:${PH}px;position:relative;overflow:hidden;
             background:#fff;page-break-after:always;break-after:page}
      .sheet:last-child{page-break-after:auto;break-after:auto}
      .colwrap{position:absolute;top:${MY}px;left:${MX}px;
               width:${PW - 2 * MX}px;height:${COLH}px;
               display:flex;gap:${GAP}px;align-items:flex-start}
      .col{width:${COLW}px;height:${COLH}px;overflow:hidden}
      .wrap{max-width:none;padding:0;margin:0}
      .page{border-top:0;padding-top:0;margin-top:0}
      .item{margin:0 0 9px;padding-bottom:7px}
      h2{margin:11px 0 6px;padding-bottom:4px}
      .col > :first-child h2, .col > h2:first-child{margin-top:0}
      table{margin-bottom:9px}
      .pgnum{position:absolute;bottom:${Math.round(MY / 2.2)}px;left:${MX}px;
             right:${MX}px;display:flex;justify-content:space-between}
    `,
    body: shrink(body)
  };
}

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 } });

  async function attempt(factor) {
    const { css, body } = scaled(factor);
    await page.setContent(
      `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head>` +
      `<body><div id="source" style="display:none">${body}</div><div id="book"></div></body></html>`,
      { waitUntil: 'load' });

    return await page.evaluate(({ PAGES, COLS, COLH }) => {
      const src = document.getElementById('source');
      const book = document.getElementById('book');
      book.innerHTML = '';

      // Flatten the document into atomic blocks in reading order.
      // .item containers are opened up — a whole conflict entry is taller than a
      // column — but a heading is welded to the block that follows it so no
      // conflict name is ever orphaned at the foot of a column.
      const blocks = [];
      const pushItem = (item) => {
        const kids = Array.from(item.children);
        for (let k = 0; k < kids.length; k++) {
          if (kids[k].tagName === 'H3' && kids[k + 1]) {
            const weld = document.createElement('div');
            weld.appendChild(kids[k].cloneNode(true));
            weld.appendChild(kids[k + 1].cloneNode(true));
            blocks.push(weld);
            k++;
          } else blocks.push(kids[k]);
        }
        const rule = document.createElement('div');
        rule.style.cssText = 'border-bottom:1px solid #E2E1DA;margin:7px 0 9px';
        blocks.push(rule);
      };
      const walk = (node) => {
        if (node.classList && node.classList.contains('item')) return pushItem(node);
        blocks.push(node);
      };
      const wrap = src.querySelector('.wrap');
      for (const node of Array.from(wrap.children)) {
        if (node.classList.contains('page') || node.classList.contains('cols-host')) {
          for (const inner of Array.from(node.children)) {
            if (inner.classList && inner.classList.contains('cols')) {
              for (const b of Array.from(inner.children)) walk(b);
            } else walk(inner);
          }
        } else walk(node);
      }

      // Build empty sheets.
      const cols = [];
      for (let p = 0; p < PAGES; p++) {
        const sheet = document.createElement('div');
        sheet.className = 'sheet';
        const cw = document.createElement('div');
        cw.className = 'colwrap';
        for (let c = 0; c < COLS; c++) {
          const col = document.createElement('div');
          col.className = 'col';
          cw.appendChild(col);
          cols.push(col);
        }
        sheet.appendChild(cw);
        const num = document.createElement('div');
        num.className = 'pgnum ui';
        num.innerHTML = `<span>TWB Designs · Global Conflict Brief</span><span>${p + 1} / ${PAGES}</span>`;
        sheet.appendChild(num);
        book.appendChild(sheet);
      }

      // Greedy pack: place each block, move to the next column when it overflows.
      let i = 0, overflow = 0;
      for (const b of blocks) {
        if (i >= cols.length) { overflow++; continue; }
        cols[i].appendChild(b);
        if (cols[i].scrollHeight > COLH) {
          cols[i].removeChild(b);
          i++;
          if (i >= cols.length) { overflow++; continue; }
          cols[i].appendChild(b);
          // A block taller than a whole column cannot be placed anywhere.
          if (cols[i].scrollHeight > COLH) overflow++;
        }
      }
      const lastUsed = i;
      const fill = cols.map(c => c.scrollHeight / COLH);
      return { overflow, lastUsed, fill: fill.map(f => +f.toFixed(2)) };
    }, { PAGES, COLS, COLH });
  }

  // Binary-search the largest type scale that fits with nothing dropped.
  let lo = 0.55, hi = 1.30, best = null;
  if(process.env.FIX){const r=await attempt(parseFloat(process.env.FIX));console.log('FIXED',process.env.FIX,'pages',PAGES,'overflow',r.overflow);await browser.close();return;}
  for (let step = 0; step < 12; step++) {
    const mid = (lo + hi) / 2;
    const r = await attempt(mid);
    const fits = r.overflow === 0;
    if (fits) { best = mid; lo = mid; } else { hi = mid; }
    console.log(`scale ${mid.toFixed(3)}  overflow ${r.overflow}  cols used ${r.lastUsed + 1}/${PAGES * COLS}`);
  }
  if (best === null) { console.error('no scale fits'); await browser.close(); process.exit(1); }

  const final = await attempt(best);
  console.log('CHOSEN scale', best.toFixed(3), 'fill per column', final.fill.join(' '));
  await page.pdf({ path: OUT, width: `${PW}px`, height: `${PH}px`,
                   printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();

  const d = fs.readFileSync(OUT);
  const n = (d.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log('PDF pages', n, 'bytes', d.length);
})();
