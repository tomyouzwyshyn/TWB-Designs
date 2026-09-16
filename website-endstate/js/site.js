(function(){
  var FORM_ENDPOINT = ''; // TODO: set before launch (see README)
  var FALLBACK_EMAIL = 'operations@endstate.example'; // TODO: replace with real contact address

  function nav(){
    var el = document.querySelector('.nav');
    if(!el) return;
    var logo = el.querySelector('[data-logo]');
    function set(){
      var solid = window.scrollY > 40;
      el.classList.toggle('solid', solid);
      el.classList.toggle('transparent', !solid);
      if(logo) logo.src = solid
        ? 'assets/brand/endstate-logo-black.png'
        : 'assets/brand/endstate-logo-white.png';
    }
    set();
    window.addEventListener('scroll', set, { passive:true });
  }

  // Measures the combined announcement-bar + nav height so the hero and
  // sticky jump bar can offset around whatever the header currently is,
  // including after the announcement bar gets dismissed, and wires the
  // announcement bar's own close control.
  function header(){
    var topbar = document.querySelector('[data-topbar]');
    var announceBar = document.querySelector('[data-announce]');
    var close = document.querySelector('[data-announce-close]');
    if(!topbar) return;
    function recalc(){
      document.documentElement.style.setProperty('--header-h', topbar.offsetHeight + 'px');
    }
    recalc();
    window.addEventListener('resize', recalc);
    if(announceBar && close){
      close.addEventListener('click', function(){
        announceBar.classList.add('hidden');
        recalc();
      });
    }
  }

  function menu(){
    var btn = document.querySelector('.menu-btn');
    var m = document.querySelector('.mmenu');
    var close = document.querySelector('.mmenu-close');
    if(!btn || !m) return;
    btn.addEventListener('click', function(){ m.classList.add('open'); document.body.style.overflow='hidden'; });
    if(close) close.addEventListener('click', function(){ m.classList.remove('open'); document.body.style.overflow=''; });
    m.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ m.classList.remove('open'); document.body.style.overflow=''; });
    });
  }

  function reveal(){
    var items = document.querySelectorAll('.rv');
    if(!items.length) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e, i){
        if(e.isIntersecting){
          setTimeout(function(){ e.target.classList.add('in'); }, (i%6)*70);
          io.unobserve(e.target);
        }
      });
    }, { threshold:.14 });
    items.forEach(function(el){ io.observe(el); });
  }

  // Palantir-style story rail: tab buttons and prev/next arrows scroll the
  // active card into view (scroll-snap handles the rest), rather than
  // swapping a single full-bleed panel underneath.
  function tabs(){
    document.querySelectorAll('.tabs-head').forEach(function(head){
      var wrap = head.parentElement.querySelector('.tab-rail-wrap');
      if(!wrap) return;
      var rail = wrap.querySelector('[data-tabs]');
      var btns = head.querySelectorAll('.tab-btn');
      var panels = wrap.querySelectorAll('.tab-panel');
      var prev = wrap.querySelector('[data-tab-prev]');
      var next = wrap.querySelector('[data-tab-next]');
      var i = 0, timer;
      function setActive(n){
        i = ((n % panels.length) + panels.length) % panels.length;
        btns.forEach(function(b,bi){ b.classList.toggle('active', bi===i); });
      }
      function goTo(n){
        setActive(n);
        var p = panels[i];
        if(p) rail.scrollTo({ left: p.offsetLeft - rail.offsetLeft, behavior:'smooth' });
      }
      btns.forEach(function(b, bi){ b.addEventListener('click', function(){ goTo(bi); restart(); }); });
      if(prev) prev.addEventListener('click', function(){ goTo(i-1); restart(); });
      if(next) next.addEventListener('click', function(){ goTo(i+1); restart(); });
      function restart(){
        clearInterval(timer);
        timer = setInterval(function(){ goTo(i+1); }, 6000);
      }
      var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){
            var idx = Array.prototype.indexOf.call(panels, e.target);
            if(idx > -1) setActive(idx);
          }
        });
      }, { root: rail, threshold:.6 }) : null;
      if(io) panels.forEach(function(p){ io.observe(p); });
      if(btns.length){ setActive(0); restart(); }
    });
  }

  function xfade(){
    document.querySelectorAll('.xfade').forEach(function(el){
      var spans = el.querySelectorAll('span');
      if(spans.length < 2) return;
      var i = 0;
      setInterval(function(){
        spans[i].classList.remove('on');
        i = (i+1) % spans.length;
        spans[i].classList.add('on');
      }, 3600);
    });
  }

  // Auto-loads real media into placeholder slots once files matching the
  // documented filename exist at assets/media/<file>. Until then the
  // labelled placeholder frame (see PLACEHOLDERS.md) renders instead.
  function media(){
    document.querySelectorAll('[data-video]').forEach(function(el){
      var file = 'assets/media/' + el.getAttribute('data-video');
      var v = document.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'none';
      v.addEventListener('error', function(){ v.remove(); });
      v.addEventListener('loadeddata', function(){
        el.innerHTML = ''; el.appendChild(v); v.play().catch(function(){});
      });
      v.src = file;
    });
    document.querySelectorAll('[data-image]').forEach(function(el){
      var file = 'assets/media/' + el.getAttribute('data-image');
      var img = new Image();
      img.onload = function(){ el.innerHTML = ''; img.alt = el.getAttribute('data-alt')||''; el.appendChild(img); };
      img.src = file;
    });
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        var v = e.target.querySelector('video');
        if(!v) return;
        if(e.isIntersecting) v.play().catch(function(){}); else v.pause();
      });
    }) : null;
    if(io) document.querySelectorAll('[data-video]').forEach(function(el){ io.observe(el); });
  }

  function jumpbar(){
    var bar = document.querySelector('.jumpbar');
    if(!bar) return;
    var links = bar.querySelectorAll('a');
    var targets = Array.prototype.map.call(links, function(a){ return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if(!targets.length) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var id = '#' + e.target.id;
          links.forEach(function(a){ a.style.color = (a.getAttribute('href')===id) ? 'var(--ink)' : ''; });
        }
      });
    }, { threshold:.5, rootMargin:'-30% 0px -50% 0px' });
    targets.forEach(function(t){ io.observe(t); });
  }

  function form(){
    var f = document.querySelector('.form');
    if(!f) return;
    f.addEventListener('submit', function(ev){
      ev.preventDefault();
      var note = f.parentElement.querySelector('.form-note');
      if(FORM_ENDPOINT){
        fetch(FORM_ENDPOINT, { method:'POST', body:new FormData(f) })
          .then(function(){ if(note) note.textContent = 'Request received. We will follow up shortly.'; })
          .catch(function(){ if(note) note.textContent = 'Something went wrong. Email ' + FALLBACK_EMAIL + ' directly.'; });
      } else if(note){
        note.textContent = 'Form endpoint not yet configured. Email ' + FALLBACK_EMAIL + ' directly.';
      }
    });
  }

  function year(){
    document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });
  }


  // Remediation periodic table: assembles tile by tile when scrolled into
  // view, then lights the recoverable elements category by category. Hover,
  // keyboard focus or tap on a lit element shows its 10-year price change.
  function ptable(){
    var grid = document.querySelector('[data-ptable]');
    var dataEl = document.getElementById('pt-data');
    if(!grid || !dataEl) return;
    var data = JSON.parse(dataEl.textContent);
    var tip = grid.querySelector('.pt-tip');
    var recs = Array.prototype.slice.call(grid.querySelectorAll('.pt-rec'));
    var order = ['pt-base','pt-alloy','pt-tech','pt-magnet'];
    function catOf(el){ for(var i=0;i<order.length;i++){ if(el.classList.contains(order[i])) return order[i]; } return ''; }

    recs.sort(function(a,b){ return order.indexOf(catOf(a)) - order.indexOf(catOf(b)); });
    recs.forEach(function(el, i){
      el.style.setProperty('--d2', (950 + i*75) + 'ms');
      el.style.setProperty('--d3', (2600 + i*160) + 'ms');
    });
    var total = 950 + recs.length*75 + 700;

    function start(){
      grid.classList.add('pt-in');
      recs.forEach(function(el){ el.classList.add('pt-lit'); });
      setTimeout(function(){ grid.classList.add('pt-ready'); }, total);
    }
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ start(); io.disconnect(); } });
      }, { threshold:.12 });
      io.observe(grid);
    } else { start(); }

    var active = null;
    function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

    function show(el){
      var d = data[el.getAttribute('data-sym')];
      if(!d) return;
      if(active && active !== el) active.classList.remove('pt-active');
      active = el; el.classList.add('pt-active');
      var max = Math.max(d.r15, d.r25) || 1;
      var dir = d.pct > 0 ? 'up' : (d.pct < 0 ? 'down' : '');
      tip.className = 'pt-tip ' + catOf(el);
      tip.innerHTML =
        '<div class="tip-head"><div class="tip-badge"><small>' + d.z + '</small><b>' + esc(el.getAttribute('data-sym')) + '</b></div>' +
        '<div><div class="tip-name">' + esc(d.name) + '</div><div class="tip-cat">' + esc(d.cat) + '</div></div></div>' +
        '<div class="tip-chg ' + dir + '">' + esc(d.change) + '</div>' +
        '<div class="tip-lbl">Price change, 2015 to 2025</div>' +
        '<div class="tip-bars">' +
          '<div class="tip-bar"><span>2015</span><span class="track"><span class="fill" data-w="' + (d.r15/max*100) + '"></span></span><span>' + esc(d.p15) + '</span></div>' +
          '<div class="tip-bar now"><span>2025e</span><span class="track"><span class="fill" data-w="' + (d.r25/max*100) + '"></span></span><span>' + esc(d.p25) + '</span></div>' +
        '</div>' +
        '<div class="tip-meta"><b>' + esc(d.series) + '</b>, ' + esc(d.unit) + '<br>Recovered from: ' + esc(d.from) + '</div>' +
        (d.note ? '<div class="tip-note">' + esc(d.note) + '</div>' : '');
      tip.hidden = false;

      var tw = tip.offsetWidth, th = tip.offsetHeight, gw = grid.clientWidth, gh = grid.clientHeight;
      var left = el.offsetLeft + el.offsetWidth/2 - tw/2;
      left = Math.max(0, Math.min(left, gw - tw));
      var top = el.offsetTop - th - 12;
      if(top < 0) top = el.offsetTop + el.offsetHeight + 12;
      if(top + th > gh) top = Math.max(0, gh - th);
      tip.style.left = left + 'px';
      tip.style.top = top + 'px';
      requestAnimationFrame(function(){
        tip.classList.add('show');
        tip.querySelectorAll('.fill').forEach(function(f){ f.style.width = f.getAttribute('data-w') + '%'; });
      });
    }
    function hide(){
      if(active) active.classList.remove('pt-active');
      active = null;
      tip.classList.remove('show');
    }

    recs.forEach(function(el){
      el.addEventListener('pointerenter', function(e){ if(e.pointerType === 'mouse') show(el); });
      el.addEventListener('pointerleave', function(e){ if(e.pointerType === 'mouse') hide(); });
      el.addEventListener('focus', function(){ show(el); });
      el.addEventListener('blur', hide);
      el.addEventListener('click', function(e){
        e.stopPropagation();
        if(active === el && tip.classList.contains('show')) hide(); else show(el);
      });
    });
    document.addEventListener('click', function(e){ if(!grid.contains(e.target)) hide(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') hide(); });

    // legend: hover previews a category, click pins it
    var pinned = null;
    var legs = document.querySelectorAll('.pt-leg');
    function filter(cat){
      grid.classList.toggle('pt-filtering', !!cat);
      recs.forEach(function(el){ el.classList.toggle('pt-match', !!cat && el.classList.contains('pt-' + cat)); });
      legs.forEach(function(l){ l.classList.toggle('on', !!cat && l.getAttribute('data-cat') === cat); });
    }
    legs.forEach(function(l){
      var cat = l.getAttribute('data-cat');
      l.addEventListener('mouseenter', function(){ if(!pinned) filter(cat); });
      l.addEventListener('mouseleave', function(){ filter(pinned); });
      l.addEventListener('click', function(){ pinned = (pinned === cat) ? null : cat; filter(pinned); });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    header(); nav(); menu(); reveal(); tabs(); xfade(); media(); jumpbar(); ptable(); form(); year();
  });
})();
