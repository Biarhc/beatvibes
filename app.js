/* =====================================================
   BEATVIBES LANDING PAGE — APP.JS
   Interactive layer: dynamic catalog, lyrics, albums,
   playlists, theme, player, etc.
   ===================================================== */

'use strict';

// ── DATA ───────────────────────────────────────────
const SONGS_DATA = [
  { id: 'as-it-was', title: 'As It Was', artist: 'Harry Styles', genre: 'pop', duration: '2:47', plays: '2.5B', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161' },
  { id: 'blinding-lights', title: 'Blinding Lights', artist: 'The Weeknd', genre: 'pop', duration: '3:20', plays: '3.2B', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb' },
  { id: 'unholy', title: 'Unholy', artist: 'Sam Smith & Kim Petras', genre: 'pop', duration: '2:36', plays: '1.4B', art: 'linear-gradient(135deg, #1a0030, #4a0070)' },
  { id: 'dynamite', title: 'Dynamite', artist: 'BTS', genre: 'kpop', duration: '3:19', plays: '1.7B', art: 'linear-gradient(135deg, #001a30, #004080)' },
  { id: 'god-did', title: 'God Did', artist: 'DJ Khaled ft. Drake', genre: 'hiphop', duration: '5:07', plays: '1.8B', art: 'linear-gradient(135deg, #0a1530, #1a3060)' },
  { id: 'golden-hour', title: 'Golden Hour', artist: 'JVKE', genre: 'rb', duration: '3:29', plays: '980M', art: 'linear-gradient(135deg, #001810, #004030)' },
  { id: 'anti-hero', title: 'Anti-Hero', artist: 'Taylor Swift', genre: 'pop', duration: '3:20', plays: '1.2B', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3' },
  { id: 'flowers', title: 'Flowers', artist: 'Miley Cyrus', genre: 'pop', duration: '3:20', plays: '1.5B', art: 'linear-gradient(135deg, #705000, #302000)' },
  { id: 'creepin', title: 'Creepin\'', artist: 'Metro Boomin', genre: 'hiphop', duration: '3:41', plays: '800M', art: 'linear-gradient(135deg, #101010, #303030)' },
  { id: 'die-for-you', title: 'Die For You', artist: 'The Weeknd & Ariana Grande', genre: 'rb', duration: '3:52', plays: '1.1B', art: 'linear-gradient(135deg, #400010, #800020)' },
  { id: 'rich-flex', title: 'Rich Flex', artist: 'Drake & 21 Savage', genre: 'hiphop', duration: '3:59', plays: '900M', art: 'linear-gradient(135deg, #000000, #202020)' },
  { id: 'cuff-it', title: 'Cuff It', artist: 'Beyoncé', genre: 'rb', duration: '3:45', plays: '700M', art: 'linear-gradient(135deg, #604000, #907000)' },
  { id: 'kill-bill', title: 'Kill Bill', artist: 'SZA', genre: 'rb', duration: '2:33', plays: '1.3B', art: 'linear-gradient(135deg, #003020, #005030)' },
  { id: 'calm-down', title: 'Calm Down', artist: 'Rema & Selena Gomez', genre: 'pop', duration: '3:59', plays: '1.2B', art: 'linear-gradient(135deg, #806000, #504000)' },
  { id: 'vampire', title: 'Vampire', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:39', plays: '600M', art: 'linear-gradient(135deg, #300040, #1a0020)' },
  { id: 'cruel-summer', title: 'Cruel Summer', artist: 'Taylor Swift', genre: 'pop', duration: '2:58', plays: '1.6B', art: 'linear-gradient(135deg, #904070, #602040)' },
  { id: 'seven', title: 'Seven', artist: 'Jung Kook ft. Latto', genre: 'kpop', duration: '3:04', plays: '900M', art: 'linear-gradient(135deg, #202040, #101030)' },
  { id: 'paint-the-town', title: 'Paint The Town Red', artist: 'Doja Cat', genre: 'hiphop', duration: '3:51', plays: '800M', art: 'linear-gradient(135deg, #800000, #500000)' },
  { id: 'traitor', title: 'Traitor', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:49', plays: '1.1B', art: 'linear-gradient(135deg, #200030, #10001a)' },
  { id: 'starboy', title: 'Starboy', artist: 'The Weeknd', genre: 'electronic', duration: '3:50', plays: '2.4B', art: 'linear-gradient(135deg, #101010, #000000)' },

  // Harry's House Tracks (Hidden from main catalog)
  { id: 'sushi-restaurant', title: 'Music for a Sushi Restaurant', artist: 'Harry Styles', genre: 'pop', duration: '3:14', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'late-night-talking', title: 'Late Night Talking', artist: 'Harry Styles', genre: 'pop', duration: '2:57', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'daylight', title: 'Daylight', artist: 'Harry Styles', genre: 'pop', duration: '2:45', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'little-freak', title: 'Little Freak', artist: 'Harry Styles', genre: 'pop', duration: '3:23', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'matilda', title: 'Matilda', artist: 'Harry Styles', genre: 'pop', duration: '4:05', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'cinema', title: 'Cinema', artist: 'Harry Styles', genre: 'pop', duration: '4:03', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'daydreaming', title: 'Daydreaming', artist: 'Harry Styles', genre: 'pop', duration: '3:07', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'keep-driving', title: 'Keep Driving', artist: 'Harry Styles', genre: 'pop', duration: '2:19', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'satellite', title: 'Satellite', artist: 'Harry Styles', genre: 'pop', duration: '3:43', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'boyfriends', title: 'Boyfriends', artist: 'Harry Styles', genre: 'pop', duration: '3:12', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },
  { id: 'love-of-my-life', title: 'Love of My Life', artist: 'Harry Styles', genre: 'pop', duration: '3:11', art: 'https://i.scdn.co/image/ab67616d0000b273b42903524b8159a6747ef161', hideFromCatalog: true },

  // Dawn FM Tracks (Hidden)
  { id: 'dawn-fm-track', title: 'Dawn FM', artist: 'The Weeknd', genre: 'pop', duration: '1:36', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'gasoline', title: 'Gasoline', artist: 'The Weeknd', genre: 'pop', duration: '3:32', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'how-do-i-make-love', title: 'How Do I Make You Love Me?', artist: 'The Weeknd', genre: 'pop', duration: '3:34', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'take-my-breath-full', title: 'Take My Breath', artist: 'The Weeknd', genre: 'pop', duration: '5:39', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'sacrifice', title: 'Sacrifice', artist: 'The Weeknd', genre: 'pop', duration: '3:08', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'tale-by-quincy', title: 'A Tale by Quincy', artist: 'The Weeknd', genre: 'pop', duration: '1:36', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'out-of-time', title: 'Out of Time', artist: 'The Weeknd', genre: 'pop', duration: '3:34', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'here-we-go', title: 'Here We Go... Again', artist: 'The Weeknd', genre: 'pop', duration: '3:29', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'best-friends', title: 'Best Friends', artist: 'The Weeknd', genre: 'pop', duration: '2:43', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'is-there-someone', title: 'Is There Someone Else?', artist: 'The Weeknd', genre: 'pop', duration: '3:19', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },
  { id: 'less-than-zero', title: 'Less Than Zero', artist: 'The Weeknd', genre: 'pop', duration: '3:31', art: 'https://i.scdn.co/image/ab67616d0000b2734130009581f1d17d120a32cb', hideFromCatalog: true },

  // Midnights Tracks (Hidden)
  { id: 'lavender-haze', title: 'Lavender Haze', artist: 'Taylor Swift', genre: 'pop', duration: '3:22', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'maroon', title: 'Maroon', artist: 'Taylor Swift', genre: 'pop', duration: '3:38', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'snow-on-beach', title: 'Snow on the Beach', artist: 'Taylor Swift', genre: 'pop', duration: '4:16', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'on-your-own', title: 'You\'re on Your Own, Kid', artist: 'Taylor Swift', genre: 'pop', duration: '3:14', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'midnight-rain', title: 'Midnight Rain', artist: 'Taylor Swift', genre: 'pop', duration: '3:08', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'question-mark', title: 'Question...?', artist: 'Taylor Swift', genre: 'pop', duration: '3:30', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'bejeweled', title: 'Bejeweled', artist: 'Taylor Swift', genre: 'pop', duration: '3:14', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'karma', title: 'Karma', artist: 'Taylor Swift', genre: 'pop', duration: '3:24', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },
  { id: 'mastermind', title: 'Mastermind', artist: 'Taylor Swift', genre: 'pop', duration: '3:11', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3', hideFromCatalog: true },

  // DeBÍ TiRAR MáS FOToS Tracks (Hidden)
  { id: 'dtmf-track', title: 'DeBÍ TiRAR MáS FOToS', artist: 'Bad Bunny', genre: 'pop', duration: '3:45', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true },
  { id: 'si-de-veras', title: 'Si De Veras Te Quisiera', artist: 'Bad Bunny', genre: 'pop', duration: '3:12', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true },
  { id: 'y-que', title: 'Y Qué?', artist: 'Bad Bunny', genre: 'pop', duration: '2:58', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true },
  { id: 'puerto-rico', title: 'Puerto Rico', artist: 'Bad Bunny', genre: 'pop', duration: '4:05', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true },
  { id: 'solita-bb', title: 'Solita', artist: 'Bad Bunny', genre: 'pop', duration: '3:20', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true },
  { id: 'manana-bb', title: 'Mañana', artist: 'Bad Bunny', genre: 'pop', duration: '3:15', art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127', hideFromCatalog: true }
];

const ALBUMS_DATA = [
  { 
    id: 'harrys-house', title: 'Harry\'s House', artist: 'Harry Styles', 
    released: '20 de maio de 2022', duration: '41:48', 
    art: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png',
    tracks: [
      { title: 'Music for a Sushi Restaurant', duration: '3:14' },
      { title: 'Late Night Talking', duration: '2:57' },
      { title: 'As It Was', duration: '2:47' },
      { title: 'Daylight', duration: '2:45' },
      { title: 'Little Freak', duration: '3:23' },
      { title: 'Matilda', duration: '4:05' },
      { title: 'Cinema', duration: '4:03' },
      { title: 'Daydreaming', duration: '3:07' },
      { title: 'Keep Driving', duration: '2:19' },
      { title: 'Satellite', duration: '3:37' },
      { title: 'Boyfriends', duration: '3:12' },
      { title: 'Love of My Life', duration: '3:11' }
    ]
  },
  { 
    id: 'dawn-fm', title: 'Dawn FM', artist: 'The Weeknd', 
    released: '7 de janeiro de 2022', duration: '51:49', 
    art: 'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png',
    tracks: [
      { title: 'Dawn FM', duration: '1:36' },
      { title: 'Gasoline', duration: '3:32' },
      { title: 'How Do I Make You Love Me?', duration: '3:34' },
      { title: 'Take My Breath', duration: '5:39' },
      { title: 'Sacrifice', duration: '3:08' },
      { title: 'A Tale by Quincy', duration: '1:36' },
      { title: 'Out of Time', duration: '3:34' },
      { title: 'Here We Go... Again', duration: '3:29' },
      { title: 'Best Friends', duration: '2:43' },
      { title: 'Is There Someone Else?', duration: '3:19' },
      { title: 'Less Than Zero', duration: '3:31' }
    ]
  },
  { 
    id: 'midnights', title: 'Midnights', artist: 'Taylor Swift', 
    released: '21 de outubro de 2022', duration: '44:02', 
    art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3',
    tracks: [
      { title: 'Lavender Haze', duration: '3:22' },
      { title: 'Maroon', duration: '3:38' },
      { title: 'Anti-Hero', duration: '3:20' },
      { title: 'Snow on the Beach', duration: '4:16' },
      { title: 'You\'re on Your Own, Kid', duration: '3:14' },
      { title: 'Midnight Rain', duration: '3:08' },
      { title: 'Question...?', duration: '3:30' },
      { title: 'Bejeweled', duration: '3:14' },
      { title: 'Karma', duration: '3:24' },
      { title: 'Mastermind', duration: '3:11' }
    ]
  },
  { 
    id: 'dtmf-album', title: 'DeBÍ TiRAR MáS FOToS', artist: 'Bad Bunny', 
    released: '5 de janeiro de 2025', duration: '64:12', 
    art: 'https://i.scdn.co/image/ab67616d0000b273468532442e975558908f5127',
    tracks: [
      { title: 'DeBÍ TiRAR MáS FOToS', duration: '3:45' },
      { title: 'Si De Veras Te Quisiera', duration: '3:12' },
      { title: 'Y Qué?', duration: '2:58' },
      { title: 'Puerto Rico', duration: '4:05' },
      { title: 'Solita', duration: '3:20' },
      { title: 'Mañana', duration: '3:15' }
    ]
  }
];

const FULL_LYRICS = {
  'As It Was': [
    "Hold on, Harry, you're no good alone", "Why are you sitting on the floor?", "What kind of pills are you on?", "Ringin' the bell, nobody's coming to help", "Your daddy lives by himself", "He just wants to know that you're well", "In this world, it's just us", "You know it's not the same as it was", "In this world, it's just us", "You know it's not the same as it was", "As it was, as it was", "You know it's not the same"
  ],
  'Blinding Lights': [
    "I've been on my own for long enough", "Maybe you can show me how to love, maybe", "I'm going through withdrawals", "You don't even have to do too much", "You can turn me on with just a touch, baby", "I look around and Sin City's cold and empty", "No one's around to judge me", "I can't see clearly when you're gone", "I said, ooh, I'm blinded by the lights", "No, I can't sleep until I feel your touch", "I said, ooh, I'm drowning in the night", "Oh, when I'm like this, you're the one I trust", "I'm running out of time", "Cause I can see the sun light up the sky", "So I hit the road in overdrive, baby", "Oh, the city's cold and empty", "No one's around to judge me", "I can't see clearly when you're gone", "I said, ooh, I'm blinded by the lights", "No, I can't sleep until I feel your touch", "I said, ooh, I'm drowning in the night", "Oh, when I'm like this, you're the one I trust"
  ],
  'Unholy': [
    "Lucky, lucky girl, she got a married man", "She don't give a damn, she's unholy", "Mummy don't know Daddy's getting hot", "At the body shop, doing something unholy", "He's lucky, lucky girl, she got a married man", "She don't give a damn, she's unholy", "Mummy don't know Daddy's getting hot", "At the body shop, doing something unholy", "Lucky, lucky girl, she got a married man", "She don't give a damn, she's unholy", "Mummy don't know Daddy's getting hot", "At the body shop, doing something unholy"
  ],
  'Dynamite': [
    "Cos ah, ah, I'm in the stars tonight", "So watch me bring the fire and set the night alight", "Shoes on, get up in the morn", "Cup of milk, let's rock and roll", "King Kong, kick the drum, rolling on like a rolling stone", "Sing song when I'm walking home", "Jump up to the top, LeBron", "Ding dong, call me on my phone", "Ice tea and a game of ping pong", "This is getting heavy", "Can you hear the bass boom, I'm ready", "Life is sweet as honey", "Yeah this beat cha ching like money", "Disco overload, I'm into that, I'm good to go", "I'm diamond, you know I glow up", "Hey, so let's go", "Cos ah, ah, I'm in the stars tonight", "So watch me bring the fire and set the night alight", "Shining through the city with a little funk and soul", "So I'ma light it up like dynamite, woah"
  ],
  'default': ["Instrumental...", "Letras completas não disponíveis para esta faixa.", "Aproveite o ritmo vibrante do BeatVibes!"]
};

// ── STATE ──────────────────────────────────────────
let playing = false;
let currentSongId = null;
let favoriteSongs = JSON.parse(localStorage.getItem('bv-favorites') || '[]');
let userPlaylists = JSON.parse(localStorage.getItem('bv-playlists') || '[{"id":"pl-1","name":"Favoritas da Galera","songIds":["as-it-was","blinding-lights"]}]');

// ── DOM CACHE ──────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const html         = document.documentElement;
const navbar       = $('navbar');
const hamburger    = $('hamburger');
const mobileMenu   = $('mobileMenu');
const themeToggle  = $('themeToggle');
const backTop      = $('backTop');
const toast        = $('toast');
const tracksGrid   = $('tracksGrid');
const libTabs      = $$('.lib-tab-btn');
const libPanes     = $$('.lib-content-pane');
const modalOverlay = $('modalOverlay');
const modalContent = $('modalContent');
const modalClose   = $('modalClose');
const lyricsPanel  = $('lyricsPanel');
const lyricsContent = $('lyricsContent');

// ── THEME ──────────────────────────────────────────
(function initTheme() {
  const saved = localStorage.getItem('bv-theme') || 'light';
  html.setAttribute('data-theme', saved);
})();

themeToggle && themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('bv-theme', next);
});

// ── HERO SLIDER ────────────────────────────────────
(function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const btnPrev = $('heroPrev');
  const btnNext = $('heroNext');
  if (!slides.length) return;

  let currentHeroSlide = 0;
  let heroInterval;

  function showHeroSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    
    const dots = document.querySelectorAll('.h-dot');
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
    
    currentHeroSlide = index;
  }

  function nextHeroSlide() {
    let next = (currentHeroSlide + 1) % slides.length;
    showHeroSlide(next);
  }

  function prevHeroSlide() {
    let prev = (currentHeroSlide - 1 + slides.length) % slides.length;
    showHeroSlide(prev);
  }

  function startHeroAuto() {
    heroInterval = setInterval(nextHeroSlide, 5000);
  }

  const dots = document.querySelectorAll('.h-dot');
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showHeroSlide(i);
      clearInterval(heroInterval);
      startHeroAuto();
    });
  });

  if (btnPrev) btnPrev.addEventListener('click', () => { prevHeroSlide(); clearInterval(heroInterval); startHeroAuto(); });
  if (btnNext) btnNext.addEventListener('click', () => { nextHeroSlide(); clearInterval(heroInterval); startHeroAuto(); });

  startHeroAuto();
})();

// ── SCROLL EFFECTS ──────────────────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    if (navbar) navbar.classList.add('scrolled');
    if (backTop) backTop.classList.add('visible');
  } else {
    if (navbar) navbar.classList.remove('scrolled');
    if (backTop) backTop.classList.remove('visible');
  }
  updateActiveNav();
  triggerAOS();
}, { passive: true });

function updateActiveNav() {
  const sections = $$('section');
  const navLinks = $$('.nav-link');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href')?.includes(current)) link.classList.add('active');
  });
}

backTop && backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── HAMBURGER MENU ──────────────────────────────────
hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  if (mobileMenu) mobileMenu.classList.toggle('open');
});

$$('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
  });
});

// Helper to format background (url or gradient)
function getArtBg(art) {
  if (art.startsWith('http')) return `url('${art}')`;
  return art;
}

// ── DYNAMIC CATALOG & ALBUMS ───────────────────────
function renderCatalog(filter = 'all') {
  if (!tracksGrid) return;
  tracksGrid.innerHTML = '';

  SONGS_DATA.forEach((song, index) => {
    if (song.hideFromCatalog) return;
    if (filter !== 'all' && song.genre !== filter) return;
    const isLoved = favoriteSongs.includes(song.id);
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="track-art" style="background-image: ${getArtBg(song.art)}; background-size: cover; background-position: center;">
        <!-- Top Actions (Side by Side Style) -->
        <button class="track-action-btn btn-left" onclick="shareContent('${song.title}', '${song.artist}')" title="Compartilhar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
        </button>
        <button class="track-action-btn btn-right" onclick="showAddToPlaylistModal('${song.id}')" title="Adicionar à Playlist">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>

        <div class="track-play-btn" onclick="playSongById('${song.id}')">
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none"><path d="M8 6l9 5-9 5V6z" fill="white"/></svg>
        </div>
        <div class="track-rank">#${index + 1}</div>
      </div>
      <div class="track-info">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <h4 class="track-title">${song.title}</h4>
            <p class="track-artist">${song.artist}</p>
          </div>
          <button class="track-fav-mini ${isLoved ? 'loved' : ''}" onclick="toggleFavorite('${song.id}', this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="track-meta">
          <span class="track-duration">${song.duration}</span>
          <span class="track-plays">${song.plays} plays</span>
        </div>
      </div>
    `;
    tracksGrid.appendChild(card);
  });
}

function renderAlbums() {
  const grid = $('albumsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  ALBUMS_DATA.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.onclick = () => openAlbumDetail(album.id);
    card.innerHTML = `
      <div class="album-art" style="aspect-ratio: 1; background-image: ${getArtBg(album.art)}; background-size: cover; background-position: center; border-radius: 16px; margin-bottom: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.4);"></div>
      <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 6px;">${album.title}</h4>
      <p style="font-size: 14px; color: var(--txt-2);">${album.artist}</p>
    `;
    grid.appendChild(card);
  });
}

function renderUserPlaylists() {
  const container = $('userPlaylists');
  if (!container) return;
  container.innerHTML = '';
  userPlaylists.forEach(pl => {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    card.onclick = () => openPlaylistDetail(pl.id);
    card.innerHTML = `
      <div class="pl-art" style="background: linear-gradient(135deg, #333, #111)">
        <span>${pl.name.charAt(0)}</span>
      </div>
      <div class="pl-info">
        <h4>${pl.name}</h4>
        <p>${pl.songIds.length} músicas</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ── PLAYBACK ───────────────────────────────────────
window.playSongById = (id) => {
  const song = SONGS_DATA.find(s => s.id === id);
  if (!song) return;
  currentSongId = id;
  playing = true;
  showToast(`Tocando: ${song.title}`);
  updateFloatingPlayer(song);
  updateLyricsUI(song.title);
  updatePlayPauseUI();
};

function updateFloatingPlayer(song) {
  const fpTitle = document.querySelector('.fp-title');
  const fpArtist = document.querySelector('.fp-artist');
  const fpTime = document.querySelector('.fp-time');
  if (fpTitle) fpTitle.textContent = song.title;
  if (fpArtist) fpArtist.textContent = song.artist;
  if (fpTime) fpTime.textContent = `0:00 / ${song.duration}`;
}

function updateLyricsUI(title) {
  if (!lyricsContent) return;
  const lines = FULL_LYRICS[title] || FULL_LYRICS['default'];
  lyricsContent.innerHTML = lines.map((l, i) => `<div class="lyrics-line" data-line="${i}">${l}</div>`).join('');
  let currentLine = 0;
  clearInterval(window.lyricsTimer);
  window.lyricsTimer = setInterval(() => {
    if (playing) {
      const allLines = $$('.lyrics-line');
      allLines.forEach(l => l.classList.remove('active'));
      if (allLines[currentLine]) {
        allLines[currentLine].classList.add('active');
        allLines[currentLine].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      currentLine = (currentLine + 1) % lines.length;
    }
  }, 3500);
}

function updatePlayPauseUI() {
  const fpPlay = $('fpPlay');
  if (!fpPlay) return;
  const vinyl = document.querySelector('.fp-vinyl');
  if (playing) {
    fpPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="4" width="3" height="10" rx="1" fill="currentColor"/><rect x="11" y="4" width="3" height="10" rx="1" fill="currentColor"/></svg>`;
    if (vinyl) vinyl.style.animationPlayState = 'running';
  } else {
    fpPlay.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 4l9 5-9 5V4z" fill="currentColor"/></svg>`;
    if (vinyl) vinyl.style.animationPlayState = 'paused';
  }
}

$('fpPlay') && $('fpPlay').addEventListener('click', () => {
  playing = !playing;
  updatePlayPauseUI();
});

$('fpPrev') && $('fpPrev').addEventListener('click', () => {
  const currentIndex = SONGS_DATA.findIndex(s => s.id === currentSongId);
  if (currentIndex > 0) {
    playSongById(SONGS_DATA[currentIndex - 1].id);
  } else {
    playSongById(SONGS_DATA[SONGS_DATA.length - 1].id); // Loop to end
  }
});

$('fpNext') && $('fpNext').addEventListener('click', () => {
  const currentIndex = SONGS_DATA.findIndex(s => s.id === currentSongId);
  if (currentIndex !== -1 && currentIndex < SONGS_DATA.length - 1) {
    playSongById(SONGS_DATA[currentIndex + 1].id);
  } else {
    playSongById(SONGS_DATA[0].id); // Loop to start
  }
});

// ── MODALS ─────────────────────────────────────────
function openAlbumDetail(albumId) {
  const album = ALBUMS_DATA.find(a => a.id === albumId);
  if (!album) return;
  modalContent.innerHTML = `
    <div class="album-detail-view" style="padding:20px; color:var(--txt);">
      <!-- Header -->
      <div class="album-detail-header" style="display:flex; gap:25px; align-items:flex-end; margin-bottom:30px; flex-wrap:wrap;">
        <div class="album-detail-art" style="width:180px; height:180px; background: ${album.art}; border-radius:20px; box-shadow:0 25px 50px rgba(0,0,0,0.4); flex-shrink:0;"></div>
        <div class="album-detail-info" style="flex:1; min-width:250px;">
          <span style="font-size:12px; color:var(--crimson-light); text-transform:uppercase; font-weight:800; letter-spacing:2px;">Álbum</span>
          <h2 style="margin:10px 0; font-size:38px; font-weight:900; color:var(--txt); line-height:1;">${album.title}</h2>
          <p style="color:var(--txt-2); font-size:18px; margin-bottom:15px;"><strong>${album.artist}</strong> • ${album.released}</p>
          
          <button onclick="const first = SONGS_DATA.find(s => s.title === '${album.tracks[0].title.replace(/'/g, "\\'")}'); if(first) playSongById(first.id); modalOverlay.classList.remove('active');"
            style="background:var(--grad-crimson); border:none; color:white; padding:12px 28px; border-radius:50px; font-weight:800; display:flex; align-items:center; gap:10px; cursor:pointer; box-shadow:0 10px 20px var(--crimson-glow); transition:0.3s;"
            onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Ouvir Álbum
          </button>
        </div>
      </div>

      <!-- Tracks -->
      <div class="album-tracklist" style="max-height:350px; overflow-y:auto; padding-right:10px;">
        ${album.tracks.map((t, i) => {
          const song = SONGS_DATA.find(s => s.title.toLowerCase() === t.title.toLowerCase());
          const isAvailable = !!song;
          
          return `
            <div class="album-track-item" 
                 style="display:flex; align-items:center; gap:15px; padding:12px 15px; border-radius:12px; transition:0.3s; cursor:${isAvailable ? 'pointer' : 'default'}; border-bottom:1px solid var(--border-soft); ${!isAvailable ? 'opacity:0.4;' : ''}"
                 ${isAvailable ? `onclick="playSongById('${song.id}'); modalOverlay.classList.remove('active');"` : ''}
                 onmouseover="if(${isAvailable}) this.style.background='var(--bg-card-h)'" onmouseout="this.style.background='transparent'">
              
              <span style="width:25px; color:var(--txt-3); font-weight:700; font-size:14px;">${i + 1}</span>
              
              <div style="flex:1;">
                <div style="font-weight:700; color:var(--txt); font-size:15px;">${t.title}</div>
                <div style="font-size:12px; color:var(--txt-2);">${album.artist}</div>
              </div>

              <div style="display:flex; align-items:center; gap:20px;">
                <span style="color:var(--txt-3); font-size:13px; font-variant-numeric:tabular-nums;">${t.duration}</span>
                ${isAvailable ? `
                  <div style="color:var(--crimson-light); width:32px; height:32px; display:flex; align-items:center; justify-content:center; background:var(--crimson-soft); border-radius:50%;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
}


window.showAddToPlaylistModal = (songId) => {
  const song = SONGS_DATA.find(s => s.id === songId);
  const isLoved = favoriteSongs.includes(songId);
  
  modalContent.innerHTML = `
    <div class="playlist-selector" style="padding:30px; color:var(--txt);">
      <div style="text-align:center; margin-bottom:30px;">
        <h3 style="font-size:26px; font-weight:800; margin-bottom:10px; color:var(--txt);">Onde quer salvar?</h3>
        <p style="color:var(--txt-2); font-size:15px;">Adicionando "${song.title}" à sua coleção.</p>
      </div>

      <div class="pl-options-list" style="display:flex; flex-direction:column; gap:12px;">
        <!-- Option: Liked Songs (Fundo Rosa, Texto Preto) -->
        <button class="pl-action-btn" onclick="toggleFavorite('${songId}', this); modalOverlay.classList.remove('active');" 
          style="background:var(--crimson); border:2px solid var(--crimson); padding:18px; color:#000; border-radius:15px; text-align:left; cursor:pointer; font-size:16px; display:flex; align-items:center; gap:12px; font-weight:800;">
          <span style="font-size:20px;">${isLoved ? '❤️' : '🤍'}</span>
          <span>${isLoved ? 'Remover dos Favoritos' : 'Adicionar às Curtidas'}</span>
        </button>

        <div style="height:1px; background:rgba(255,255,255,0.1); margin:10px 0;"></div>

        <!-- List existing playlists (Fundo Branco, Borda Rosa, Texto Preto) -->
        ${userPlaylists.map(pl => `
          <button class="pl-select-btn" onclick="addSongToPlaylist('${songId}', '${pl.id}')" 
            style="background:#ffffff; border:2px solid var(--crimson); padding:18px; color:#000; border-radius:15px; text-align:left; cursor:pointer; font-size:16px; transition:0.3s; display:flex; align-items:center; gap:12px; font-weight:700;">
            <div style="width:32px; height:32px; background:rgba(0,0,0,0.05); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:900; color:#000;">${pl.name.charAt(0)}</div>
            <span>${pl.name}</span>
          </button>
        `).join('')}

        <!-- Option: Create New -->
        <button onclick="promptCreatePlaylist('${songId}')" 
          style="background:var(--grad-crimson); border:none; padding:18px; color:white; border-radius:15px; text-align:center; cursor:pointer; font-weight:800; margin-top:15px; font-size:16px; box-shadow:0 10px 20px var(--crimson-glow);">
          + Criar Nova Playlist
        </button>
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
};

window.addSongToPlaylist = (songId, plId) => {
  const pl = userPlaylists.find(p => p.id === plId);
  if (pl && !pl.songIds.includes(songId)) {
    pl.songIds.push(songId);
    localStorage.setItem('bv-playlists', JSON.stringify(userPlaylists));
    showToast(`Adicionado à ${pl.name}`);
    modalOverlay.classList.remove('active');
    renderUserPlaylists();
  } else {
    showToast('Música já está na playlist');
  }
};

function openPlaylistDetail(plId) {
  const pl = userPlaylists.find(p => p.id === plId);
  if (!pl) return;
  const songs = SONGS_DATA.filter(s => pl.songIds.includes(s.id));
  modalContent.innerHTML = `
    <div style="color:var(--txt);">
      <!-- Playlist Header (Sempre texto branco pois o fundo é gradiente rosa) -->
      <div style="background:var(--grad-crimson); padding:32px 28px 24px; border-radius:20px 20px 0 0; color: white;">
        <span style="font-size:11px; font-weight:800; letter-spacing:2px; opacity:0.8; text-transform:uppercase;">Sua Playlist</span>
        <h2 style="font-size:32px; font-weight:900; margin:8px 0 4px; line-height:1.1; color: white;">${pl.name}</h2>
        <p style="opacity:0.9; font-size:14px;">${songs.length} ${songs.length === 1 ? 'música' : 'músicas'}</p>
      </div>

      <!-- Track List -->
      <div style="padding:16px 20px; max-height:340px; overflow-y:auto; background:var(--bg-card);">
        ${songs.length ? songs.map((s, i) => `
          <div style="display:flex; align-items:center; gap:12px; padding:12px 8px; border-radius:10px; transition:0.2s; border-bottom:1px solid var(--border-soft);"
            onmouseover="this.style.background='var(--bg-card-h)'" onmouseout="this.style.background='transparent'">
            <span style="color:var(--txt-3); font-size:13px; min-width:20px; text-align:center;">${i + 1}</span>
            <div style="flex:1; min-width:0; cursor:pointer;" onclick="playSongById('${s.id}'); modalOverlay.classList.remove('active');">
              <div style="font-weight:700; font-size:15px; color:var(--txt); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${s.title}</div>
              <div style="font-size:12px; color:var(--txt-2); margin-top:2px;">${s.artist}</div>
            </div>
            <span style="color:var(--txt-3); font-size:13px; font-variant-numeric:tabular-nums; flex-shrink:0;">${s.duration}</span>
            <button title="Remover" onclick="removeSongFromPlaylist('${s.id}', '${pl.id}')"
              style="background:none; border:none; color:var(--txt-3); cursor:pointer; font-size:16px; padding:4px 6px; border-radius:6px; flex-shrink:0; transition:0.2s;"
              onmouseover="this.style.color='var(--crimson)'; this.style.background='var(--crimson-soft)'"
              onmouseout="this.style.color='var(--txt-3)'; this.style.background='none'">✕</button>
          </div>
        `).join('') : `
          <div style="padding:50px 20px; text-align:center;">
            <div style="font-size:48px; margin-bottom:16px;">🎵</div>
            <p style="font-size:17px; font-weight:700; margin-bottom:8px; color:var(--txt);">Playlist vazia</p>
            <p style="color:var(--txt-3); font-size:13px;">Vá ao catálogo e adicione músicas usando o botão +</p>
          </div>
        `}
      </div>

      <!-- Delete Button -->
      <div style="padding:12px 20px 20px; background:var(--bg-card); border-radius: 0 0 20px 20px;">
        <button onclick="deletePlaylist('${pl.id}')"
          style="width:100%; padding:14px; background:transparent; border:1px solid var(--border); color:var(--crimson); border-radius:12px; font-weight:700; font-size:14px; cursor:pointer; transition:0.3s; display:flex; align-items:center; justify-content:center; gap:8px;"
          onmouseover="this.style.background='var(--crimson-soft)'; this.style.borderColor='var(--crimson)';"
          onmouseout="this.style.background='transparent'; this.style.borderColor='var(--border)';"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          Apagar Playlist
        </button>
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
}

window.removeSongFromPlaylist = (songId, plId) => {
  const pl = userPlaylists.find(p => p.id === plId);
  if (!pl) return;
  pl.songIds = pl.songIds.filter(id => id !== songId);
  localStorage.setItem('bv-playlists', JSON.stringify(userPlaylists));
  showToast('Música removida da playlist');
  renderUserPlaylists();
  openPlaylistDetail(plId); // re-render modal
};

window.deletePlaylist = (plId) => {
  userPlaylists = userPlaylists.filter(p => p.id !== plId);
  localStorage.setItem('bv-playlists', JSON.stringify(userPlaylists));
  renderUserPlaylists();
  modalOverlay.classList.remove('active');
  showToast('Playlist apagada');
};

window.promptCreatePlaylist = (initialSongId) => {
  modalContent.innerHTML = `
    <div class="playlist-create-modal" style="padding:30px; color:white; text-align:center;">
      <h3 style="font-size:24px; margin-bottom:10px; font-weight:800;">Nova Playlist</h3>
      <p style="opacity:0.8; margin-bottom:25px; font-size:14px;">Dê um nome inspirador para sua coleção.</p>
      <input type="text" id="newPlName" placeholder="Ex: Melhores do Rock, Vibe Verão..." 
        style="width:100%; padding:15px; background:#fff; border:2px solid var(--crimson); border-radius:12px; color:#000; font-size:16px; margin-bottom:20px; outline:none; transition:0.3s; font-weight:600;">
      <div style="display:flex; gap:12px;">
        <button onclick="modalOverlay.classList.remove('active')" 
          style="flex:1; padding:15px; background:rgba(255,255,255,0.1); border:none; color:white; border-radius:12px; font-weight:700; cursor:pointer;">Cancelar</button>
        <button id="confirmCreatePl" 
          style="flex:2; padding:15px; background:var(--grad-crimson); border:none; color:white; border-radius:12px; font-weight:700; cursor:pointer; box-shadow:0 10px 20px var(--crimson-glow);">Criar Playlist</button>
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
  
  const input = $('newPlName');
  const confirmBtn = $('confirmCreatePl');
  
  input.focus();
  
  confirmBtn.onclick = () => {
    const name = input.value.trim();
    if (name) {
      const newPl = { id: 'pl-' + Date.now(), name: name, songIds: initialSongId ? [initialSongId] : [] };
      userPlaylists.push(newPl);
      localStorage.setItem('bv-playlists', JSON.stringify(userPlaylists));
      renderUserPlaylists();
      showToast('Playlist criada: ' + name + ' 🎵');
      modalOverlay.classList.remove('active');
    } else {
      input.style.borderColor = 'var(--crimson)';
      setTimeout(() => input.style.borderColor = 'rgba(255,255,255,0.1)', 1000);
    }
  };
};

// ── UTILS ──────────────────────────────────────────
window.toggleFavorite = (id, btn) => {
  const index = favoriteSongs.indexOf(id);
  if (index === -1) {
    favoriteSongs.push(id);
    btn.classList.add('loved');
    showToast('Favoritado! ❤️');
  } else {
    favoriteSongs.splice(index, 1);
    btn.classList.remove('loved');
    showToast('Removido dos favoritos');
  }
  localStorage.setItem('bv-favorites', JSON.stringify(favoriteSongs));
  syncLikedTracks();
};

function syncLikedTracks() {
  const grid = $('likedTracksGrid');
  const noLikedMsg = $('noLikedMsg');
  if (!grid) return;
  const likedSongs = SONGS_DATA.filter(s => favoriteSongs.includes(s.id));
  if (likedSongs.length > 0) {
    if (noLikedMsg) noLikedMsg.style.display = 'none';
    grid.innerHTML = '';
    likedSongs.forEach(song => {
      const card = document.createElement('div');
      card.className = 'track-card';
      card.innerHTML = `
        <div class="track-art" style="background: ${song.art}">
          <button class="track-action-btn btn-left" onclick="shareContent('${song.title}', '${song.artist}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
          </button>
          <button class="track-action-btn btn-right" onclick="showAddToPlaylistModal('${song.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <div class="track-play-btn" onclick="playSongById('${song.id}')">
            <svg width="24" height="24" viewBox="0 0 22 22" fill="none"><path d="M8 6l9 5-9 5V6z" fill="white"/></svg>
          </div>
        </div>
        <div class="track-info">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <h4 class="track-title">${song.title}</h4>
              <p class="track-artist">${song.artist}</p>
            </div>
            <button class="track-fav-mini loved" onclick="toggleFavorite('${song.id}', this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  } else {
    if (noLikedMsg) noLikedMsg.style.display = 'block';
    grid.innerHTML = '';
  }
}

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

window.shareContent = (title, artist) => {
  navigator.clipboard.writeText(`Confira ${title} de ${artist} no BeatVibes!`);
  showToast('Link de compartilhamento copiado!');
};

window.toggleLyrics = () => {
  const active = lyricsPanel.classList.toggle('active');
  const btn = $('fpLyrics');
  if (btn) btn.classList.toggle('active', active);
};

// ── INITIAL LOAD ───────────────────────────────────
window.addEventListener('load', () => {
  renderCatalog();
  renderAlbums();
  renderUserPlaylists();
  syncLikedTracks();
  triggerAOS();
  
  // Randomize Daily Mix bars
  $$('.dm-visualizer span').forEach(bar => {
    bar.style.height = Math.random() * 20 + 10 + 'px';
    bar.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
  });

  const heroContent = document.querySelector('.hero-content');
  if (heroContent) heroContent.style.animation = 'fadeUp 0.8s 0.3s ease both';
});

// Event Listeners
$('fpLyrics') && $('fpLyrics').addEventListener('click', toggleLyrics);
$('modalClose') && $('modalClose').addEventListener('click', () => modalOverlay.classList.remove('active'));
$('btnCreatePlaylist') && $('btnCreatePlaylist').addEventListener('click', () => promptCreatePlaylist());

$$('.genre-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.genre-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(btn.dataset.genre);
  });
});

$$('.lib-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.lib-tab-btn').forEach(b => b.classList.remove('active'));
    $$('.lib-content-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const paneId = btn.getAttribute('data-target');
    const pane = $(paneId);
    if (pane) pane.classList.add('active');
  });
});

// ── REVIEWS CAROUSEL ──────────────────────────────
(function initReviewsSlider() {
  const track = $('depTrack');
  const btnPrev = $('depPrev');
  const btnNext = $('depNext');
  const dots = $$('.dep-dot');
  if (!track || !btnPrev || !btnNext) return;

  let currentIdx = 0;
  const cards = $$('.dep-card');
  const totalCards = cards.length;

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function updateSlider() {
    const cardsPerView = getCardsPerView();
    const maxIdx = Math.max(0, totalCards - cardsPerView);
    if (currentIdx > maxIdx) currentIdx = maxIdx;
    
    const offset = currentIdx * (100 / cardsPerView);
    track.style.transform = `translateX(-${offset}%)`;

    // Update dots visibility and active state
    dots.forEach((dot, i) => {
      // Show only dots up to maxIdx
      if (i <= maxIdx) {
        dot.style.display = 'block';
        dot.classList.toggle('active', i === currentIdx);
      } else {
        dot.style.display = 'none';
      }
    });
  }

  btnNext.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    if (currentIdx < totalCards - cardsPerView) {
      currentIdx++;
    } else {
      currentIdx = 0; // Loop
    }
    updateSlider();
  });

  btnPrev.addEventListener('click', () => {
    if (currentIdx > 0) {
      currentIdx--;
    } else {
      const cardsPerView = getCardsPerView();
      currentIdx = Math.max(0, totalCards - cardsPerView); // Loop to end
    }
    updateSlider();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIdx = i;
      updateSlider();
    });
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
})();

function triggerAOS() {
  const elements = $$('[data-aos]');
  const viewH = window.innerHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewH * 0.95) el.classList.add('aos-animate');
  });
}
window.addEventListener('scroll', triggerAOS);
window.addEventListener('load', triggerAOS);
setTimeout(triggerAOS, 200);

