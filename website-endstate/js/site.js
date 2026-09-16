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

  function tabs(){
    document.querySelectorAll('[data-tabs]').forEach(function(root){
      var btns = root.querySelectorAll('.tab-btn');
      var panels = root.querySelectorAll('.tab-panel');
      var i = 0, timer;
      function show(n){
        i = n;
        btns.forEach(function(b,bi){ b.classList.toggle('active', bi===n); });
        panels.forEach(function(p,pi){ p.classList.toggle('active', pi===n); });
      }
      btns.forEach(function(b, bi){ b.addEventListener('click', function(){ show(bi); restart(); }); });
      function restart(){
        clearInterval(timer);
        timer = setInterval(function(){ show((i+1)%btns.length); }, 6000);
      }
      if(btns.length){ show(0); restart(); }
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

  document.addEventListener('DOMContentLoaded', function(){
    nav(); menu(); reveal(); tabs(); xfade(); media(); jumpbar(); form(); year();
  });
})();
