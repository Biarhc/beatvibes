/* =====================================================
   BEATVIBES LANDING PAGE — APP.JS
   Interactive layer: cursor, navbar, scroll, AOS,
   counters, theme, carousel, filters, form, etc.
   ===================================================== */

'use strict';

// ── DOM CACHE ──────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const html         = document.documentElement;
const navbar       = $('navbar');
const hamburger    = $('hamburger');
const mobileMenu   = $('mobileMenu');
const themeToggle  = $('themeToggle');
const cursor       = $('cursor');
const cursorFollow = $('cursorFollower');
const backTop      = $('backTop');
const toast        = $('toast');
const depTrack     = $('depTrack');
const depDots      = $$('.dep-dot');
const tracksGrid   = $('tracksGrid');

// ── THEME ──────────────────────────────────────────
(function initTheme() {
  // Start in light mode by default
  html.setAttribute('data-theme', 'light');
  const saved = localStorage.getItem('bv-theme');
  if (saved) html.setAttribute('data-theme', saved);
})();

themeToggle && themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('bv-theme', next);
  showToast(next === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado');
});

// ── CUSTOM CURSOR ──────────────────────────────────
let mx = -100, my = -100;
let fx = -100, fy = -100;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursor) {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  }
});

// Smooth follower
function animateCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  if (cursorFollow) {
    cursorFollow.style.left = fx + 'px';
    cursorFollow.style.top  = fy + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
document.addEventListener('mouseover', e => {
  const target = e.target.closest('a, button, .track-card, .feature-card, .dep-card, .sobre-card, .plano-card');
  if (target) {
    cursor && cursor.classList.add('hovering');
    cursorFollow && cursorFollow.classList.add('hovering');
  }
});
document.addEventListener('mouseout', e => {
  const target = e.target.closest('a, button, .track-card, .feature-card, .dep-card, .sobre-card, .plano-card');
  if (target) {
    cursor && cursor.classList.remove('hovering');
    cursorFollow && cursorFollow.classList.remove('hovering');
  }
});

// ── NAVBAR: SCROLL & ACTIVE ────────────────────────
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Glassmorphism on scroll
  if (navbar) {
    if (scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  // Back to top
  if (backTop) {
    if (scrollY > 400) backTop.classList.add('visible');
    else backTop.classList.remove('visible');
  }

  // Scroll hint fade
  const scrollHint = $('scrollHint');
  if (scrollHint && scrollY > 80) scrollHint.style.opacity = '0';
  else if (scrollHint) scrollHint.style.opacity = '1';

  lastScrollY = scrollY;

  // Active nav link
  updateActiveNav();

  // Counter trigger
  triggerCounters();

  // AOS trigger
  triggerAOS();
});

function updateActiveNav() {
  const sections = ['home', 'features', 'biblioteca', 'sobre', 'planos', 'contato'];
  const offset = 120;
  let current = 'home';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - offset) current = id;
  });

  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// ── HAMBURGER / MOBILE MENU ────────────────────────
hamburger && hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
  mobileMenu && mobileMenu.classList.toggle('open', open);
});

// Close mobile menu when link clicked
$$('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
  });
});

// ── BACK TO TOP ────────────────────────────────────
backTop && backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── SMOOTH SCROLL for anchors ──────────────────────
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── AOS (ANIMATE ON SCROLL) ────────────────────────
function triggerAOS() {
  const elements = $$('[data-aos]');
  const viewH = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewH * 0.88) {
      el.classList.add('aos-animate');
    }
  });
}
// Initial call
setTimeout(triggerAOS, 100);
window.addEventListener('load', triggerAOS);

// ── STAT COUNTERS ──────────────────────────────────
let countersTriggered = false;

function triggerCounters() {
  if (countersTriggered) return;
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;

  const rect = heroStats.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    countersTriggered = true;
    animateCounters();
  }
}

function animateCounters() {
  $$('.stat-num').forEach(el => {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step     = 30;
    let current    = 0;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, step);
  });
}

// ── GENRE FILTER ───────────────────────────────────
$$('.genre-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    $$('.genre-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const genre = btn.dataset.genre;

    $$('.track-card').forEach(card => {
      if (genre === 'all' || card.dataset.genre === genre) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeCardIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── TRACK FAV BUTTON ───────────────────────────────
$$('.track-fav').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const loved = btn.classList.toggle('loved');
    showToast(loved ? 'Adicionado aos favoritos' : 'Removido dos favoritos');
  });
});

// ── TRACK PLAY BUTTON ──────────────────────────────
$$('.track-play-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card  = btn.closest('.track-card');
    const title = card.querySelector('.track-title')?.textContent;
    const artist = card.querySelector('.track-artist')?.textContent;
    showToast(`Tocando: ${title} — ${artist}`);
    // Update floating player
    updateFloatingPlayer(title, artist);
  });
});

function updateFloatingPlayer(title, artist) {
  const fpTitle  = document.querySelector('.fp-title');
  const fpArtist = document.querySelector('.fp-artist');
  if (fpTitle)  fpTitle.textContent  = title;
  if (fpArtist) fpArtist.textContent = artist;
}

// ── FLOATING PLAYER BUTTON ─────────────────────────
const fpPlay = $('fpPlay');
let playing = true;
fpPlay && fpPlay.addEventListener('click', () => {
  playing = !playing;
  const vinyl = document.querySelector('.fp-vinyl');
  const fill  = document.querySelector('.fp-fill');

  if (playing) {
    fpPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 5l7 4-7 4V5z" fill="currentColor"/></svg>`;
    if (vinyl) vinyl.style.animationPlayState = 'running';
    if (fill)  fill.style.animationPlayState  = 'running';
  } else {
    fpPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="4" width="3" height="10" rx="1" fill="currentColor"/><rect x="11" y="4" width="3" height="10" rx="1" fill="currentColor"/></svg>`;
    if (vinyl) vinyl.style.animationPlayState = 'paused';
    if (fill)  fill.style.animationPlayState  = 'paused';
  }
  showToast(playing ? 'Tocando' : 'Pausado');
});

// ── DEPOIMENTOS CAROUSEL ───────────────────────────
let depIndex  = 0;
let depAuto;
const depCards = document.querySelectorAll('.dep-card');
const depTotal = depCards.length;

function goToSlide(idx) {
  if (!depTrack) return;
  depIndex = (idx + depTotal) % depTotal;

  // Each card width + gap
  const cardW = depCards[0]?.offsetWidth || 0;
  const gap   = 24;
  const perView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  // Clamp index so we don't show empty space
  const maxIndex = Math.max(0, depTotal - perView);
  const clampedIdx = Math.min(depIndex, maxIndex);

  depTrack.style.transform = `translateX(-${clampedIdx * (cardW + gap)}px)`;

  // Dots
  depDots.forEach((dot, i) => dot.classList.toggle('active', i === depIndex));
}

$('depNext') && $('depNext').addEventListener('click', () => { goToSlide(depIndex + 1); restartAuto(); });
$('depPrev') && $('depPrev').addEventListener('click', () => { goToSlide(depIndex - 1); restartAuto(); });

depDots.forEach(dot => {
  dot.addEventListener('click', () => { goToSlide(parseInt(dot.dataset.idx)); restartAuto(); });
});

function startAuto() {
  depAuto = setInterval(() => goToSlide(depIndex + 1), 4500);
}
function restartAuto() {
  clearInterval(depAuto);
  startAuto();
}
startAuto();

// Touch swipe for carousel
let touchStartX = 0;
depTrack && depTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
depTrack && depTrack.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    goToSlide(depIndex + (dx > 0 ? -1 : 1));
    restartAuto();
  }
});

// ── CONTACT FORM ───────────────────────────────────
const contatoForm = $('contatoForm');
contatoForm && contatoForm.addEventListener('submit', e => {
  e.preventDefault();
  const name  = $('ctName')?.value.trim();
  const email = $('ctEmail')?.value.trim();
  const msg   = $('ctMsg')?.value.trim();

  // Simple validation
  if (!name)  { shakeField($('ctName'));  return showToast('⚠️ Por favor, informe seu nome.'); }
  if (!email || !email.includes('@')) { shakeField($('ctEmail')); return showToast('⚠️ Email inválido.'); }
  if (!msg)   { shakeField($('ctMsg'));   return showToast('⚠️ Por favor, escreva uma mensagem.'); }

  // Simulate send
  const btn = $('ctSubmitBtn');
  if (btn) {
    btn.querySelector('.btn-inner').textContent = 'Enviando...';
    btn.disabled = true;
  }

  setTimeout(() => {
    showToast('✅ Mensagem enviada com sucesso!');
    contatoForm.reset();
    if (btn) {
      btn.querySelector('.btn-inner').textContent = 'Enviar Mensagem →';
      btn.disabled = false;
    }
  }, 1500);
});

function shakeField(el) {
  if (!el) return;
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.4s ease';
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
  el.focus();
}

// Shake keyframe (injected once)
(function injectShake() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      75% { transform: translateX(8px); }
    }
    @keyframes fadeCardIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
})();

// ── MAGNETIC BUTTONS REMOVED ────────────────────────
/* 
$$('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.transition = 'transform 0.4s ease';
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.1s ease';
  });
});
*/

// ── TOAST NOTIFICATION ─────────────────────────────
let toastTimer;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── HERO PARALLAX REMOVED ──────────────────────────
/*
const heroImg = $('heroImg');
window.addEventListener('scroll', () => {
  if (heroImg) {
    const scrolled = window.scrollY;
    heroImg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
  }
}, { passive: true });
*/

// ── INITIAL LOAD ANIMATIONS ────────────────────────
window.addEventListener('load', () => {
  // Hero entrance  
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeUp 0.8s 0.3s ease both';
  }

  triggerAOS();
  triggerCounters();
  updateActiveNav();
});

// ── RESIZE: recalculate carousel ───────────────────
window.addEventListener('resize', () => {
  goToSlide(depIndex);
});

// ── PLANO BUTTONS ──────────────────────────────────
$$('.plano-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.href && btn.href.includes('app.html')) return; // let normal link proceed
    e.preventDefault();
    showToast('🚀 Em breve! Cadastre-se para ser notificado.');
  });
});

// Log a friendly note in console
console.log('%c🎧 BeatVibes', 'font-size:28px; font-weight:900; color:#DC143C; font-family:Outfit,sans-serif;');
console.log('%cSinta Cada Batida — beatvibes.app', 'font-size:14px; color:#9494B0; font-family:Outfit,sans-serif;');
