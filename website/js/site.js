/* ============================================================
   TWB Designs — site behaviour
   No dependencies. All motion respects prefers-reduced-motion
   (CSS handles the suppression; JS still toggles classes).
   ============================================================ */
(function () {
  'use strict';

  /* ------------------------------------------------------------
     FORM ENDPOINT — the one line to change at deployment.
     Point this at Formspree / Web3Forms / your own handler, e.g.
       var FORM_ENDPOINT = 'https://formspree.io/f/XXXXXXXX';
     While empty, the form validates fully but tells the visitor
     it is not yet connected, and shows the enquiry address.
     ------------------------------------------------------------ */
  var FORM_ENDPOINT = '';
  var FALLBACK_EMAIL = 'enquiries@twbdesigns.example'; /* placeholder — replace */

  /* ---------- scroll reveal ---------- */
  function reveal(root) {
    var els = (root || document).querySelectorAll('.rv, .loop, .hline, .hl');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- full-screen menu ---------- */
  function menu() {
    var btn = document.querySelector('.menu-btn');
    var panel = document.getElementById('menu');
    if (!btn || !panel) return;
    var close = panel.querySelector('.m-close');
    function set(open) {
      panel.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open && close) close.focus();
    }
    btn.addEventListener('click', function () { set(true); });
    if (close) close.addEventListener('click', function () { set(false); });
    panel.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) set(false);
    });
  }

  /* ---------- video slots ----------
     <figure class="media" data-video="assets/video/hero.mp4"> …placeholder… </figure>
     If the file exists, a muted looping video fades in over the placeholder.
     If it does not, the labelled placeholder frame stays — the template
     documents itself. Videos pause when scrolled out of view. */
  function media() {
    var slots = document.querySelectorAll('.media[data-video]');
    if (!slots.length) return;
    var vio = ('IntersectionObserver' in window) ?
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = en.target.querySelector('video');
          if (!v || !en.target.classList.contains('has-video')) return;
          if (en.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); }
        });
      }, { threshold: 0.15 }) : null;

    slots.forEach(function (slot) {
      var src = slot.getAttribute('data-video');
      var frame = slot.querySelector('.media-frame') || slot;
      var v = document.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      v.preload = 'metadata'; v.setAttribute('aria-hidden', 'true'); v.tabIndex = -1;
      v.addEventListener('loadeddata', function () {
        slot.classList.add('has-video');
        /* keep the intended-footage recommendation overlaid on interim video */
        var ph = slot.querySelector('.ph-note');
        if (ph && !slot.querySelector('.media-note')) {
          var n = document.createElement('div');
          n.className = 'media-note';
          n.innerHTML = '<b>Interim footage</b> &mdash; intended: ' +
            ph.textContent.replace(/^Suggested footage:\s*/i, '');
          slot.appendChild(n);
        }
        v.play().catch(function () {});
      });
      v.addEventListener('error', function () { v.remove(); });
      v.src = src;
      frame.appendChild(v);
      if (vio) vio.observe(slot);
    });
  }

  /* ---------- enquiry form ---------- */
  function form() {
    var f = document.getElementById('enquiry');
    if (!f) return;

    /* deep-link: contact.html?req=capstat pre-checks the capability-statement box */
    try {
      if (new URLSearchParams(location.search).get('req') === 'capstat') {
        var c = f.querySelector('#f-capstat');
        if (c) c.checked = true;
      }
    } catch (e) {}

    var status = document.getElementById('form-status');

    function setBad(field, bad) {
      var wrap = field.closest('.field');
      if (wrap) wrap.classList.toggle('bad', bad);
      field.setAttribute('aria-invalid', bad ? 'true' : 'false');
      return !bad;
    }
    function validate() {
      var ok = true, first = null;
      f.querySelectorAll('[required]').forEach(function (el) {
        var good;
        if (el.type === 'email') {
          good = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
        } else {
          good = el.value.trim().length > 0;
        }
        setBad(el, !good);
        if (!good) { ok = false; if (!first) first = el; }
      });
      if (first) first.focus();
      return ok;
    }
    f.querySelectorAll('[required]').forEach(function (el) {
      el.addEventListener('input', function () { setBad(el, false); });
      el.addEventListener('change', function () { setBad(el, false); });
    });

    function show(html, neg) {
      status.innerHTML = html;
      status.classList.add('show');
      status.classList.toggle('neg', !!neg);
      status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      /* honeypot — bots fill it, humans never see it */
      var hp = f.querySelector('[name="_gotcha"]');
      if (hp && hp.value) return;
      if (!validate()) return;

      if (!FORM_ENDPOINT) {
        show(
          '<p><strong>This form is not yet connected.</strong> The endpoint has not been ' +
          'configured — see the note at the top of <span class="ui" style="font-size:.78rem;letter-spacing:.05em">js/site.js</span>.</p>' +
          '<p>In the meantime, send the same details to <a href="mailto:' + FALLBACK_EMAIL + '">' + FALLBACK_EMAIL + '</a>.</p>',
          true
        );
        return;
      }

      var btn = f.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Sending…';
      var data = new FormData(f);
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          f.hidden = true;
          show(
            '<p><strong>Received.</strong> Your enquiry is in. We reply within two business days — ' +
            'and if we are the wrong answer for your requirement, we will say so in that reply.</p>'
          );
        })
        .catch(function () {
          show(
            '<p><strong>The form did not send.</strong> Nothing was lost — your entries are still below. ' +
            'Try again, or send the same details to <a href="mailto:' + FALLBACK_EMAIL + '">' + FALLBACK_EMAIL + '</a>.</p>',
            true
          );
        })
        .finally(function () {
          btn.disabled = false; btn.textContent = 'Submit enquiry';
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    reveal();
    menu();
    media();
    form();
  });
})();
