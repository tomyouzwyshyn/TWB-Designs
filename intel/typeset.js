// Typesets the conflict brief into a full-width, single-column PDF at readable size.
// CSS multicolumn AND CSS pagination are both unreliable in this Chromium build's print
// path, so blocks are packed into measured fixed-size artboards here instead. Page count
// is whatever the content needs at the chosen type scale — legibility over page count.
const { chromium } = require('playwright-core');
const fs = require('fs');

const SRC   = '/home/claude/brief/TWB_Global_Conflict_Brief.html';
const OUT   = '/home/claude/brief/TWB_Global_Conflict_Brief.pdf';
const SCALE = parseFloat(process.env.SCALE || '1.22');  // multiplier on the master's type sizes
const MAXP  = 40;

// Letter at 96dpi. Generous side margins keep the measure sane at full width.
const PW = 816, PH = 1056, MX = 76, MY = 62, FOOT = 26;
const COLW = PW - 2 * MX;
const COLH = PH - 2 * MY - FOOT;

const src = fs.readFileSync(SRC, 'utf8');
let css = src.match(/<style>([\s\S]*?)<\/style>/)[1];
css = css.replace(/@page\{[\s\S]*?\}/g, '')
         .replace(/@media print\{[\s\S]*?\n  \}/g, '')
         .replace(/@media \(max-width:600px\)\{[^}]*\}/g, '');
const body = src.split('<body')[1].split('>').slice(1).join('>').split('</body>')[0];

const shrink = s => s.replace(/font-size:\s*([\d.]+)px/g,
  (m, v) => `font-size:${(parseFloat(v) * SCALE).toFixed(2)}px`);

const sheetCss = shrink(css) + `
  body{margin:0;background:#fff}
  .sheet{width:${PW}px;height:${PH}px;position:relative;overflow:hidden;background:#fff;
         page-break-after:always;break-after:page}
  .sheet:last-child{page-break-after:auto;break-after:auto}
  .colwrap{position:absolute;top:${MY}px;left:${MX}px;width:${COLW}px;height:${COLH}px}
  .col{width:${COLW}px;height:${COLH}px;overflow:hidden}
  .wrap{max-width:none;padding:0;margin:0}
  .page{border-top:0;padding-top:0;margin-top:0}
  .item{margin:0 0 16px;padding-bottom:13px}
  h2{margin:20px 0 11px;padding-bottom:6px}
  .col > :first-child h2,.col > h2:first-child{margin-top:0}
  p,li{max-width:none}
  .pgnum{position:absolute;bottom:${Math.round(MY * 0.55)}px;left:${MX}px;right:${MX}px;
         display:flex;justify-content:space-between}
`;

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage({ viewport: { width: 1100, height: 1400 } });
  await page.setContent(
    `<!doctype html><html><head><meta charset="utf-8"><style>${sheetCss}</style></head>` +
    `<body><div id="source" style="display:none">${shrink(body)}</div><div id="book"></div></body></html>`,
    { waitUntil: 'load' });

  const report = await page.evaluate(({ COLH, MAXP }) => {
    const src = document.getElementById('source'), book = document.getElementById('book');

    // Flatten to atomic blocks. .item containers are opened up (a whole conflict entry is
    // taller than a page), but each heading is welded to the block after it so no conflict
    // name is ever left stranded at the foot of a page.
    const blocks = [];
    const pushItem = (item) => {
      const kids = Array.from(item.children);
      for (let k = 0; k < kids.length; k++) {
        if (kids[k].tagName === 'H3' && kids[k + 1]) {
          const weld = document.createElement('div');
          weld.appendChild(kids[k].cloneNode(true));
          weld.appendChild(kids[k + 1].cloneNode(true));
          blocks.push(weld); k++;
        } else blocks.push(kids[k]);
      }
      const rule = document.createElement('div');
      rule.style.cssText = 'border-bottom:1px solid #E2E1DA;margin:13px 0 16px';
      blocks.push(rule);
    };
    const walk = n => n.classList && n.classList.contains('item') ? pushItem(n) : blocks.push(n);
    for (const node of Array.from(src.querySelector('.wrap').children)) {
      if (node.classList.contains('page') || node.classList.contains('cols-host')) {
        for (const inner of Array.from(node.children)) {
          if (inner.classList && inner.classList.contains('cols'))
            for (const b of Array.from(inner.children)) walk(b);
          else walk(inner);
        }
      } else walk(node);
    }

    const sheets = [];
    const newSheet = () => {
      const sheet = document.createElement('div'); sheet.className = 'sheet';
      const cw = document.createElement('div'); cw.className = 'colwrap';
      const col = document.createElement('div'); col.className = 'col';
      cw.appendChild(col); sheet.appendChild(cw);
      const num = document.createElement('div'); num.className = 'pgnum ui';
      sheet.appendChild(num); book.appendChild(sheet); sheets.push({ sheet, col, num });
      return col;
    };

    let col = newSheet(), oversize = 0;
    for (const b of blocks) {
      col.appendChild(b);
      if (col.scrollHeight > COLH) {
        col.removeChild(b);
        if (sheets.length >= MAXP) { oversize++; continue; }
        col = newSheet();
        col.appendChild(b);
        if (col.scrollHeight > COLH) oversize++;   // taller than a whole page
      }
    }
    sheets.forEach((s, i) => {
      s.num.innerHTML = `<span>TWB Designs · Global Conflict Brief · Edition 001</span>` +
                        `<span>${i + 1} / ${sheets.length}</span>`;
    });
    return { pages: sheets.length, oversize,
             lastFill: +(sheets[sheets.length - 1].col.scrollHeight / COLH).toFixed(2) };
  }, { COLH, MAXP });

  console.log(`scale ${SCALE}  pages ${report.pages}  oversize-blocks ${report.oversize}  last-page fill ${report.lastFill}`);
  await page.pdf({ path: OUT, width: `${PW}px`, height: `${PH}px`, printBackground: true,
                   margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();

  const d = fs.readFileSync(OUT);
  console.log('PDF pages', (d.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length,
              'bytes', d.length);
})();
