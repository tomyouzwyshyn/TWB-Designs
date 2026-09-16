'use strict';

/*
 * Periodic table of elements for the Remediation page.
 *
 * Recoverable set: elements present in munition components in a form that
 * is recovered as a metal, alloy or concentrate stream after destruction.
 * Excluded on purpose even though present: mercury, depleted uranium,
 * cadmium, beryllium, thorium, and pyrotechnic salts (strontium, barium,
 * zirconium) that are consumed or leave a hazardous residue.
 *
 * Price change: USGS Mineral Commodity Summaries annual averages, 2015
 * value vs the 2025 estimate published in MCS 2026. 2015 values come from
 * MCS 2020 (or the same series in MCS 2019 / MCS 2017 where noted). Percent
 * change is computed below from the two published values, never typed in.
 */

const NAMES = ('H Hydrogen|He Helium|Li Lithium|Be Beryllium|B Boron|C Carbon|N Nitrogen|O Oxygen|F Fluorine|Ne Neon|' +
'Na Sodium|Mg Magnesium|Al Aluminium|Si Silicon|P Phosphorus|S Sulfur|Cl Chlorine|Ar Argon|K Potassium|Ca Calcium|' +
'Sc Scandium|Ti Titanium|V Vanadium|Cr Chromium|Mn Manganese|Fe Iron|Co Cobalt|Ni Nickel|Cu Copper|Zn Zinc|' +
'Ga Gallium|Ge Germanium|As Arsenic|Se Selenium|Br Bromine|Kr Krypton|Rb Rubidium|Sr Strontium|Y Yttrium|Zr Zirconium|' +
'Nb Niobium|Mo Molybdenum|Tc Technetium|Ru Ruthenium|Rh Rhodium|Pd Palladium|Ag Silver|Cd Cadmium|In Indium|Sn Tin|' +
'Sb Antimony|Te Tellurium|I Iodine|Xe Xenon|Cs Caesium|Ba Barium|La Lanthanum|Ce Cerium|Pr Praseodymium|Nd Neodymium|' +
'Pm Promethium|Sm Samarium|Eu Europium|Gd Gadolinium|Tb Terbium|Dy Dysprosium|Ho Holmium|Er Erbium|Tm Thulium|Yb Ytterbium|' +
'Lu Lutetium|Hf Hafnium|Ta Tantalum|W Tungsten|Re Rhenium|Os Osmium|Ir Iridium|Pt Platinum|Au Gold|Hg Mercury|' +
'Tl Thallium|Pb Lead|Bi Bismuth|Po Polonium|At Astatine|Rn Radon|Fr Francium|Ra Radium|Ac Actinium|Th Thorium|' +
'Pa Protactinium|U Uranium|Np Neptunium|Pu Plutonium|Am Americium|Cm Curium|Bk Berkelium|Cf Californium|Es Einsteinium|Fm Fermium|' +
'Md Mendelevium|No Nobelium|Lr Lawrencium|Rf Rutherfordium|Db Dubnium|Sg Seaborgium|Bh Bohrium|Hs Hassium|Mt Meitnerium|Ds Darmstadtium|' +
'Rg Roentgenium|Cn Copernicium|Nh Nihonium|Fl Flerovium|Mc Moscovium|Lv Livermorium|Ts Tennessine|Og Oganesson')
  .split('|').map((s, i) => { const [sym, ...n] = s.split(' '); return { z: i + 1, sym, name: n.join(' ') }; });

// Standard 18-column layout; lanthanides on row 9, actinides on row 10.
function position(z){
  if(z === 1) return [1, 1];
  if(z === 2) return [1, 18];
  if(z <= 4) return [2, z - 2];
  if(z <= 10) return [2, z + 3];
  if(z <= 12) return [3, z - 10];
  if(z <= 18) return [3, z - 5];
  if(z <= 36) return [4, z - 18];
  if(z <= 54) return [5, z - 36];
  if(z <= 56) return [6, z - 54];
  if(z <= 71) return [9, z - 54];
  if(z <= 86) return [6, z - 68];
  if(z <= 88) return [7, z - 86];
  if(z <= 103) return [10, z - 86];
  return [7, z - 100];
}

const CATS = {
  base:   { label: 'Base and structural metals', short: 'Base' },
  alloy:  { label: 'Refractory and alloy metals', short: 'Alloy' },
  tech:   { label: 'Precious and electronics metals', short: 'Precious' },
  magnet: { label: 'Rare-earth magnet elements', short: 'Rare earth' },
};

const SRC = {
  mcs2026: 'https://pubs.usgs.gov/periodicals/mcs2026/',
  mcs2020: 'https://pubs.usgs.gov/periodicals/mcs2020/',
};

// p15 = 2015 annual average, p25 = 2025 estimate (USGS). ed15 = edition used for 2015.
const RECOVERABLE = {
  Fe: { cat:'base', from:'Shell bodies, bomb casings, fragmentation liners and penetrator tips', series:'Iron and steel scrap, No. 1 heavy melting, delivered', unit:'$/t', p15:213, p25:319, ed15:'MCS 2020' },
  Al: { cat:'base', from:'Missile airframes, fuze bodies and aluminium cartridge cases', series:'Aluminium ingot, U.S. market spot', unit:'¢/lb', p15:88.2, p25:180, ed15:'MCS 2020', note:'The 2025 figure includes an elevated regional market premium.' },
  Cu: { cat:'base', from:'Bullet jackets, driving bands, shaped-charge liners and wiring', series:'Copper cathode, producer (COMEX plus premium)', unit:'¢/lb', p15:256.2, p25:490, ed15:'MCS 2020' },
  Zn: { cat:'base', from:'Brass cartridge cases', series:'Special high-grade zinc, North American', unit:'¢/lb', p15:95.5, p25:149, ed15:'MCS 2019' },
  Pb: { cat:'base', from:'Small-arms projectile cores', series:'Lead, North American', unit:'¢/lb', p15:91.2, p25:106, ed15:'MCS 2020' },
  Sn: { cat:'base', from:'Circuit-board solder and bronze components', series:'Tin, New York dealer', unit:'¢/lb', p15:756, p25:1600, ed15:'MCS 2019' },
  Ni: { cat:'base', from:'Tungsten heavy-alloy binder, superalloys and legacy jackets', series:'Nickel, LME cash', unit:'$/t', p15:11831, p25:15000, ed15:'MCS 2020' },
  Sb: { cat:'base', from:'Antimonial-lead projectile cores', series:'Antimony metal, 99.65%, CIF', unit:'$/lb', p15:3.27, p25:25, ed15:'MCS 2019', note:'Price assessor changed between editions; grade and delivery basis are the same.' },
  W:  { cat:'alloy', from:'Kinetic-energy penetrators and armour-piercing cores', series:'Tungsten concentrate, per metric ton unit WO₃', unit:'$/mtu', p15:302, p25:380, ed15:'MCS 2019', note:'2015 is a U.S. spot price; 2025 is Rotterdam in-warehouse.' },
  Co: { cat:'alloy', from:'Tungsten-alloy binder and samarium-cobalt magnets', series:'Cobalt cathode, U.S. spot', unit:'$/lb', p15:13.44, p25:21, ed15:'MCS 2017' },
  Mo: { cat:'alloy', from:'Alloy-steel shell bodies and penetrators', series:'Molybdic oxide, per kg molybdenum content', unit:'$/kg', p15:15.10, p25:51, ed15:'MCS 2019', note:'Price assessor changed between editions.' },
  Ta: { cat:'alloy', from:'Explosively formed penetrator liners and capacitors', series:'Tantalite, per kg Ta₂O₅ content', unit:'$/kg', p15:193, p25:180, ed15:'MCS 2020' },
  Ag: { cat:'tech', from:'Batteries, brazes and electrical contacts', series:'Silver, industrial bullion', unit:'$/troy oz', p15:15.72, p25:38, ed15:'MCS 2020' },
  Au: { cat:'tech', from:'Connectors and circuit boards in guidance electronics', series:'Gold, annual average', unit:'$/troy oz', p15:1163, p25:3300, ed15:'MCS 2020' },
  Pd: { cat:'tech', from:'Capacitors and electrical contacts', series:'Palladium, unfabricated metal', unit:'$/troy oz', p15:694.99, p25:1100, ed15:'MCS 2019' },
  Pt: { cat:'tech', from:'Contacts and sensors', series:'Platinum, unfabricated metal', unit:'$/troy oz', p15:1056.09, p25:1200, ed15:'MCS 2019' },
  Ge: { cat:'tech', from:'Infrared lenses and seeker windows', series:'Germanium metal, 99.999%, Europe', unit:'$/kg', p15:1792, p25:4100, ed15:'MCS 2020' },
  Nd: { cat:'magnet', from:'Permanent magnets in fin actuators and guidance motors', series:'Neodymium oxide, 99.5%', unit:'$/kg', p15:48, p25:73, ed15:'MCS 2020' },
  Pr: { cat:'magnet', from:'Permanent magnets in fin actuators and guidance motors', series:'Praseodymium oxide', unit:'$/kg', p15:76, p25:74, ed15:'USGS Minerals Yearbook 2016', note:'2015 quote is 99.5% grade; 2025 is 99.99% grade.' },
  Dy: { cat:'magnet', from:'High-temperature permanent magnets in guidance motors', series:'Dysprosium oxide, 99.5%', unit:'$/kg', p15:279, p25:239, ed15:'MCS 2020' },
  Tb: { cat:'magnet', from:'High-temperature permanent magnets in guidance motors', series:'Terbium oxide, 99.99%', unit:'$/kg', p15:564, p25:1010, ed15:'MCS 2020' },
  Sm: { cat:'magnet', from:'Samarium-cobalt magnets in precision guidance', series:'Samarium oxide, 99.5%', unit:'$/kg', p15:3, p25:2.82, ed15:'USGS Minerals Yearbook 2016', flat:true, note:'The 2015 figure is published rounded to the nearest dollar, so the change reads as approximately flat.' },
};

function pctChange(r){ return Math.round((r.p25 / r.p15 - 1) * 100); }

function fmt(v){
  return v >= 1000 ? v.toLocaleString('en-US', { maximumFractionDigits: 0 }) : String(v);
}

function changeLabel(r){
  if(r.flat) return '≈ flat';
  const p = pctChange(r);
  return (p > 0 ? '+' : p < 0 ? '−' : '') + Math.abs(p) + '%';
}

function tableHtml(){
  const tiles = NAMES.map(el => {
    const [row, col] = position(el.z);
    const r = RECOVERABLE[el.sym];
    const delay = Math.min(el.z * 7, 820);
    if(!r){
      return `<div class="pt-el" style="grid-row:${row};grid-column:${col};--d:${delay}ms" title="${el.name}"><span class="pt-z">${el.z}</span><span class="pt-sym">${el.sym}</span></div>`;
    }
    return `<button type="button" class="pt-el pt-rec pt-${r.cat}" data-sym="${el.sym}" style="grid-row:${row};grid-column:${col};--d:${delay}ms" aria-label="${el.name}, recoverable, 10-year price change ${changeLabel(r)}"><span class="pt-z">${el.z}</span><span class="pt-sym">${el.sym}</span><span class="pt-name">${el.name}</span><span class="pt-chg">${changeLabel(r)}</span></button>`;
  }).join('');

  const markers = `
    <div class="pt-marker" style="grid-row:6;grid-column:3">57–71</div>
    <div class="pt-marker" style="grid-row:7;grid-column:3">89–103</div>
    <div class="pt-flabel" style="grid-row:9;grid-column:1 / span 2">Lanthanides</div>
    <div class="pt-flabel" style="grid-row:10;grid-column:1 / span 2">Actinides</div>`;

  const legend = Object.entries(CATS).map(([k, c]) =>
    `<button type="button" class="pt-leg pt-${k}" data-cat="${k}"><i></i>${c.label}</button>`).join('');

  const data = {};
  for(const el of NAMES){
    const r = RECOVERABLE[el.sym];
    if(!r) continue;
    data[el.sym] = {
      z: el.z, name: el.name, cat: CATS[r.cat].label, from: r.from, series: r.series, unit: r.unit,
      p15: fmt(r.p15), p25: fmt(r.p25), r15: r.p15, r25: r.p25, change: changeLabel(r), pct: r.flat ? 0 : pctChange(r),
      ed15: r.ed15, note: r.note || ''
    };
  }

  return `
  <div class="pt-legend rv" role="group" aria-label="Filter recoverable elements by category">
    ${legend}
    <span class="pt-hint">Hover or tap a highlighted element for its 10-year price change</span>
  </div>
  <div class="pt-scroll rv">
    <div class="pt-grid" data-ptable>
      ${markers}
      ${tiles}
      <div class="pt-tip" role="status" aria-live="polite" hidden></div>
    </div>
  </div>
  <script type="application/json" id="pt-data">${JSON.stringify(data)}</script>`;
}

const SOURCE_NOTE = `Price change compares the 2015 annual average with the 2025 estimated annual average published by the U.S. Geological Survey in its Mineral Commodity Summaries (2026 edition for 2025; 2020, 2019 and 2017 editions and the 2016 Minerals Yearbook for 2015). Each element shows the exact price series and unit used. Figures are indicative of market direction, not a forecast or a valuation of recovered material.`;

module.exports = { tableHtml, SOURCE_NOTE, RECOVERABLE, NAMES, position, pctChange, changeLabel, SRC };
