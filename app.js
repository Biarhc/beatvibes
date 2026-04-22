/* =============================================
   BEATVIBES – APP.JS
   ============================================= */

// ── DATA ─────────────────────────────────────

const SONGS = [
  { id: 1,  title: "Dynamite",              artist: "BTS", genre: "pop",        duration: "3:19", emoji: "💥", color: "#3D0020", url: null },
  { id: 2,  title: "Butter",                artist: "BTS", genre: "pop",        duration: "2:44", emoji: "🧈", color: "#0D1B2A", url: null },
  { id: 3,  title: "Permission to Dance",   artist: "BTS", genre: "pop",        duration: "3:05", emoji: "💃", color: "#1A0033", url: null },
  { id: 4,  title: "Boy With Luv",          artist: "BTS", genre: "pop",        duration: "3:49", emoji: "💗", color: "#1A0A00", url: null },
  { id: 5,  title: "Fake Love",             artist: "BTS", genre: "pop",        duration: "4:02", emoji: "🖤", color: "#1A001A", url: null },
  { id: 6,  title: "DNA",                   artist: "BTS", genre: "pop",        duration: "3:43", emoji: "🧬", color: "#0D1A00", url: null },
  { id: 7,  title: "MIC Drop",              artist: "BTS", genre: "hiphop",     duration: "3:58", emoji: "🎤", color: "#1A1200", url: null },
  { id: 8,  title: "Idol",                  artist: "BTS", genre: "kpop",       duration: "3:43", emoji: "🪩", color: "#001A1A", url: null },
  { id: 9,  title: "Fire",                  artist: "BTS", genre: "hiphop",     duration: "3:23", emoji: "🔥", color: "#001A0D", url: null },
  { id: 10, title: "Dope",                  artist: "BTS", genre: "hiphop",     duration: "4:00", emoji: "😎", color: "#1A0D00", url: null },
  { id: 11, title: "Blood Sweat & Tears",   artist: "BTS", genre: "pop",        duration: "3:37", emoji: "💧", color: "#00001A", url: null },
  { id: 12, title: "Spring Day",            artist: "BTS", genre: "pop",        duration: "4:34", emoji: "🌸", color: "#1A0000", url: null },
  { id: 13, title: "Black Swan",            artist: "BTS", genre: "rb",         duration: "3:18", emoji: "🦢", color: "#0D1A00", url: null },
  { id: 14, title: "Life Goes On",          artist: "BTS", genre: "pop",        duration: "3:27", emoji: "🌿", color: "#1A001A", url: null },
  { id: 15, title: "On",                    artist: "BTS", genre: "pop",        duration: "4:06", emoji: "🥁", color: "#00001A", url: null },
  { id: 16, title: "Run BTS",               artist: "BTS", genre: "hiphop",     duration: "3:24", emoji: "🏃", color: "#1A1200", url: null },
  { id: 17, title: "Save Me",               artist: "BTS", genre: "pop",        duration: "3:16", emoji: "🆘", color: "#0D0D0D", url: null },
  { id: 18, title: "I Need U",              artist: "BTS", genre: "pop",        duration: "3:30", emoji: "💔", color: "#1A0010", url: null },
  { id: 19, title: "Go Go",                 artist: "BTS", genre: "kpop",       duration: "3:55", emoji: "💸", color: "#1A0D00", url: null },
  { id: 20, title: "Anpanman",              artist: "BTS", genre: "kpop",       duration: "3:52", emoji: "🦸", color: "#001A1A", url: null },
  { id: 21, title: "Butterfly",             artist: "BTS", genre: "pop",        duration: "3:58", emoji: "🦋", color: "#1A0D00", url: null },
  { id: 22, title: "Euphoria",              artist: "BTS", genre: "pop",        duration: "3:49", emoji: "✨", color: "#001833", url: null },
  { id: 23, title: "Serendipity",           artist: "BTS", genre: "rb",         duration: "2:19", emoji: "🌙", color: "#1a1a00", url: null },
  { id: 24, title: "Moon",                  artist: "BTS", genre: "pop",        duration: "3:28", emoji: "🌕", color: "#0A0020", url: null },
  { id: 25, title: "Stay Gold",             artist: "BTS", genre: "pop",        duration: "4:03", emoji: "✨", color: "#1A1A00", url: null },
  { id: 26, title: "Not Today",             artist: "BTS", genre: "hiphop",     duration: "3:51", emoji: "🚫", color: "#0D0D1A", url: null },
  { id: 27, title: "Danger",                artist: "BTS", genre: "hiphop",     duration: "4:06", emoji: "⚠️", color: "#1A0000", url: null },
  { id: 28, title: "Just One Day",          artist: "BTS", genre: "pop",        duration: "4:00", emoji: "🌤️", color: "#001A33", url: null },
  { id: 29, title: "We Are Bulletproof Pt.2", artist: "BTS", genre: "hiphop",   duration: "3:27", emoji: "🛡️", color: "#1A1A1A", url: null },
  { id: 30, title: "No More Dream",         artist: "BTS", genre: "hiphop",     duration: "3:42", emoji: "💭", color: "#0D0D0D", url: null },
  { id: 31, title: "War of Hormone",        artist: "BTS", genre: "kpop",       duration: "4:19", emoji: "🧪", color: "#1A0D0D", url: null },
  { id: 32, title: "Boy In Luv",            artist: "BTS", genre: "hiphop",     duration: "3:51", emoji: "💢", color: "#1A0010", url: null },
  { id: 33, title: "Film Out",              artist: "BTS", genre: "pop",        duration: "3:34", emoji: "🎬", color: "#000D1A", url: null },
  { id: 34, title: "Your Eyes Tell",        artist: "BTS", genre: "pop",        duration: "4:04", emoji: "👀", color: "#0A0A2A", url: null },
  { id: 35, title: "Let Me Know",           artist: "BTS", genre: "rb",         duration: "3:56", emoji: "📞", color: "#1A001A", url: null },
  { id: 36, title: "House of Cards",        artist: "BTS", genre: "rb",         duration: "3:46", emoji: "🃏", color: "#0D001A", url: null },
  { id: 37, title: "Love Maze",             artist: "BTS", genre: "rb",         duration: "3:41", emoji: "💘", color: "#1A000A", url: null },
  { id: 38, title: "Paradise",              artist: "BTS", genre: "rb",         duration: "3:30", emoji: "🏝️", color: "#001A0D", url: null },
  { id: 39, title: "Magic Shop",            artist: "BTS", genre: "pop",        duration: "4:35", emoji: "🪄", color: "#001A33", url: null },
  { id: 40, title: "Heartbeat",             artist: "BTS", genre: "pop",        duration: "4:13", emoji: "❤️", color: "#1A0000", url: null }
];

// ── STATE ─────────────────────────────────────
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat  = false;
let favorites  = JSON.parse(localStorage.getItem('bv_favorites')  || '[]');
let playlists  = JSON.parse(localStorage.getItem('bv_playlists')  || '[]');
let currentCategory = 'all';
let searchQuery = '';
let progressTimer = null;
let progressSeconds = 0;
let songDurationSeconds = 0;

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSongGrid();
  populateShareSelects();
  renderFavorites();
  renderPlaylists();
  updatePlayerUI();
  renderLyricsList();
});

// ── VIEW NAVIGATION ───────────────────────────
function showView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.getElementById(`btn-${view}`).classList.add('active');

  if (view === 'favorites')  renderFavorites();
  if (view === 'playlists')  renderPlaylists();
  if (view === 'share')      populateShareSelects();
  if (view === 'lyrics')     renderLyricsList();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── SONG RENDERING ────────────────────────────
function getFilteredSongs() {
  return SONGS.filter(s => {
    const matchCat = currentCategory === 'all' || s.genre === currentCategory;
    const matchQ   = !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });
}

function renderSongGrid() {
  const grid = document.getElementById('songGrid');
  const songs = getFilteredSongs();

  if (songs.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <span class="empty-icon">🔍</span>
      <p>Nenhuma música encontrada.</p>
    </div>`;
    return;
  }

  grid.innerHTML = songs.map(s => {
    const isFav  = favorites.includes(s.id);
    const isPlay = SONGS[currentSongIndex]?.id === s.id && isPlaying;
    return `
    <div class="song-card ${isPlay ? 'playing' : ''}" id="card-${s.id}" onclick="playSongById(${s.id})">
      <div class="song-art" style="background: radial-gradient(circle at 30% 30%, ${s.color}cc, #0D0D0F);">
        <span style="position:relative;z-index:1">${s.emoji}</span>
        <div class="song-play-overlay">
          ${isPlay
            ? `<div class="eq-bars"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`
            : '▶'}
        </div>
      </div>
      <div class="song-title">${s.title}</div>
      <div class="song-artist">${s.artist}</div>
      <div class="song-meta">
        <span class="song-duration">${s.duration}</span>
        <div class="song-actions">
          <button class="song-action-btn ${isFav ? 'fav-active' : ''}" 
            id="fav-btn-${s.id}"
            onclick="event.stopPropagation(); toggleFav(${s.id})"
            title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
            <span class="heart-icon">${isFav ? '❤️' : '🤍'}</span>
          </button>
          <button class="song-action-btn" onclick="event.stopPropagation(); addToPlaylistFlow(${s.id})" title="Adicionar à playlist">➕</button>
        </div>
      </div>
    </div>`;
  }).join('');

  updateFeaturedBanner();
}

function renderFavorites() {
  const list = document.getElementById('favoritesList');
  const favSongs = SONGS.filter(s => favorites.includes(s.id));

  if (favSongs.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <span class="empty-icon">🎵</span>
      <p>Você ainda não favoritou nenhuma música.</p>
      <p>Clique no ❤️ em qualquer faixa para começar!</p>
    </div>`;
    return;
  }

  list.innerHTML = favSongs.map(s => {
    const isPlay = SONGS[currentSongIndex]?.id === s.id;
    return `
    <div class="song-row ${isPlay ? 'playing' : ''}" onclick="playSongById(${s.id})">
      <div class="row-art" style="background: radial-gradient(circle, ${s.color}cc, #0D0D0F);">${s.emoji}</div>
      <div class="row-info">
        <div class="row-title">${s.title}</div>
        <div class="row-artist">${s.artist}</div>
      </div>
      <div class="row-duration">${s.duration}</div>
      <div class="row-actions">
        <button class="song-action-btn fav-active" onclick="event.stopPropagation(); toggleFav(${s.id})" title="Remover dos favoritos">❤️</button>
        <button class="song-action-btn" onclick="event.stopPropagation(); addToPlaylistFlow(${s.id})" title="Adicionar à playlist">➕</button>
      </div>
    </div>`;
  }).join('');
}

// ── PLAYBACK ──────────────────────────────────
function playSongById(id) {
  const idx = SONGS.findIndex(s => s.id === id);
  if (idx === -1) return;
  currentSongIndex = idx;
  startPlaying();
}

function startPlaying() {
  isPlaying = true;
  resetProgress();
  updatePlayerUI();
  renderSongGrid();
  renderFavorites();
  simulateProgress();
  showToast(`▶ Tocando: ${SONGS[currentSongIndex].title}`);
  // Auto-sync lyrics view if open
  const song = SONGS[currentSongIndex];
  if (song && document.getElementById('view-lyrics').classList.contains('active')) {
    showLyricsForSong(song.id);
  } else if (song && !selectedLyricsSongId) {
    selectedLyricsSongId = song.id;
  }
}

function togglePlay() {
  if (SONGS.length === 0) return;
  isPlaying = !isPlaying;
  if (isPlaying) {
    simulateProgress();
  } else {
    clearInterval(progressTimer);
  }
  updatePlayerUI();
}

function prevSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * SONGS.length);
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
  }
  if (isPlaying) startPlaying();
  else { resetProgress(); updatePlayerUI(); }
}

function nextSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * SONGS.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
  }
  if (isPlaying) startPlaying();
  else { resetProgress(); updatePlayerUI(); }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('active', isShuffle);
  showToast(isShuffle ? '🔀 Modo aleatório ativado' : '🔀 Modo aleatório desativado');
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  document.getElementById('repeatBtn').classList.toggle('active', isRepeat);
  showToast(isRepeat ? '🔁 Repetir ativado' : '🔁 Repetir desativado');
}

function setVolume(val) {
  const icon = document.getElementById('volIcon');
  if (val == 0) icon.textContent = '🔇';
  else if (val < 0.4) icon.textContent = '🔈';
  else if (val < 0.7) icon.textContent = '🔉';
  else icon.textContent = '🔊';
}

// ── PROGRESS SIMULATION ───────────────────────
function durationToSeconds(str) {
  const [m, s] = str.split(':').map(Number);
  return m * 60 + s;
}

function secondsToTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function resetProgress() {
  clearInterval(progressTimer);
  progressSeconds = 0;
  const song = SONGS[currentSongIndex];
  songDurationSeconds = song ? durationToSeconds(song.duration) : 0;
  updateProgressBar();
}

function simulateProgress() {
  clearInterval(progressTimer);
  progressTimer = setInterval(() => {
    if (!isPlaying) return;
    progressSeconds++;
    updateProgressBar();
    if (progressSeconds >= songDurationSeconds) {
      clearInterval(progressTimer);
      onSongEnd();
    }
  }, 1000);
}

function onSongEnd() {
  if (isRepeat) {
    resetProgress(); simulateProgress();
  } else {
    nextSong();
  }
}

function updateProgressBar() {
  const pct = songDurationSeconds > 0 ? (progressSeconds / songDurationSeconds) * 100 : 0;
  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('progressThumb').style.left  = pct + '%';
  document.getElementById('currentTime').textContent   = secondsToTime(progressSeconds);
  document.getElementById('totalTime').textContent     = secondsToTime(songDurationSeconds);
  updateLyricsHighlight();
}

function seekSong(e) {
  const bar = document.getElementById('progressBar');
  const rect = bar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  progressSeconds = Math.floor(pct * songDurationSeconds);
  updateProgressBar();
}

// ── PLAYER UI ─────────────────────────────────
function updatePlayerUI() {
  const song = SONGS[currentSongIndex];
  const playBtn = document.getElementById('playBtn');

  if (song) {
    document.getElementById('npTitle').textContent  = song.title;
    document.getElementById('npArtist').textContent = song.artist;
    const art = document.getElementById('npArt');
    art.textContent = song.emoji;
    art.style.background = `radial-gradient(circle, ${song.color}cc, #0D0D0F)`;
    art.classList.toggle('active', isPlaying);
  }

  playBtn.textContent = isPlaying ? '⏸' : '▶';
  playBtn.style.fontSize = isPlaying ? '20px' : '18px';

  const isFav = favorites.includes(song?.id);
  const npFavBtn = document.getElementById('npFavBtn');
  npFavBtn.classList.toggle('active', isFav);
}

// ── FEATURED BANNER ─────────────────────────
const featuredSong = SONGS[0];
function updateFeaturedBanner() {
  document.getElementById('featuredTitle').textContent  = featuredSong.title;
  document.getElementById('featuredArtist').textContent = featuredSong.artist;
  document.getElementById('featFavBtn').textContent =
    favorites.includes(featuredSong.id) ? '❤️ Favoritada' : '❤️ Favoritar';
}

function playFeatured() {
  playSongById(featuredSong.id);
}

function toggleFavFeatured() {
  toggleFav(featuredSong.id);
  updateFeaturedBanner();
}

// ── FAVORITES ─────────────────────────────────
function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    showToast('❤️ Adicionada aos favoritos!');
  } else {
    favorites.splice(idx, 1);
    showToast('💔 Removida dos favoritos.');
  }
  localStorage.setItem('bv_favorites', JSON.stringify(favorites));
  renderSongGrid();
  renderFavorites();
  updatePlayerUI();
  updateFeaturedBanner();
  populateShareSelects();
}

function toggleFavFromPlayer() {
  const song = SONGS[currentSongIndex];
  if (song) toggleFav(song.id);
}

// ── CATEGORY FILTER ───────────────────────────
function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSongGrid();
}

function filterSongs() {
  searchQuery = document.getElementById('searchInput').value;
  renderSongGrid();
}

// ── PLAYLISTS ─────────────────────────────────
function createPlaylist() {
  const input = document.getElementById('playlistNameInput');
  const name  = input.value.trim();
  if (!name) { showToast('⚠️ Digite um nome para a playlist!'); return; }
  if (playlists.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    showToast('⚠️ Já existe uma playlist com esse nome!'); return;
  }
  const pl = { id: Date.now(), name, songs: [] };
  playlists.push(pl);
  savePlaylists();
  input.value = '';
  renderPlaylists();
  populateShareSelects();
  showToast(`📋 Playlist "${name}" criada!`);
}

function renderPlaylists() {
  const container = document.getElementById('playlistsContainer');
  if (playlists.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <span class="empty-icon">📋</span>
      <p>Nenhuma playlist criada ainda.</p>
      <p>Crie sua primeira playlist acima!</p>
    </div>`;
    return;
  }

  const emojis = ['🎵','🎶','🔥','💿','🎸','🎤','🎧','🎹'];
  container.innerHTML = playlists.map((pl, i) => `
    <div class="playlist-card">
      <div class="playlist-card-icon">${emojis[i % emojis.length]}</div>
      <div class="playlist-card-name">${escapeHtml(pl.name)}</div>
      <div class="playlist-card-count">${pl.songs.length} música${pl.songs.length !== 1 ? 's' : ''}</div>
      <div class="playlist-card-actions">
        <button class="pl-btn" onclick="openPlaylistDetail(${pl.id})">▶ Ver</button>
        <button class="pl-btn pl-btn-danger" onclick="deletePlaylist(${pl.id})">🗑 Deletar</button>
      </div>
    </div>
  `).join('');
}

function openPlaylistDetail(plId) {
  const pl = playlists.find(p => p.id === plId);
  if (!pl) return;

  document.getElementById('playlistDetailTitle').textContent = pl.name;
  const body = document.getElementById('playlistDetailBody');

  if (pl.songs.length === 0) {
    body.innerHTML = `<div class="empty-state">
      <p>Esta playlist está vazia. Adicione músicas usando o botão ➕ nas faixas.</p>
    </div>`;
  } else {
    const songs = pl.songs.map(id => SONGS.find(s => s.id === id)).filter(Boolean);
    body.innerHTML = songs.map(s => `
      <div class="modal-song-row" onclick="playSongById(${s.id}); closeModal('playlistDetailModal')">
        <div style="font-size:22px">${s.emoji}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600">${s.title}</div>
          <div style="font-size:11px;color:var(--text-secondary)">${s.artist}</div>
        </div>
        <div style="font-size:11px;color:var(--text-muted)">${s.duration}</div>
        <button class="song-action-btn" title="Remover" onclick="event.stopPropagation();removeSongFromPlaylist(${plId},${s.id})">✕</button>
      </div>
    `).join('');
  }

  openModal('playlistDetailModal');
}

function removeSongFromPlaylist(plId, songId) {
  const pl = playlists.find(p => p.id === plId);
  if (!pl) return;
  pl.songs = pl.songs.filter(id => id !== songId);
  savePlaylists();
  openPlaylistDetail(plId);
  renderPlaylists();
  showToast('Música removida da playlist.');
}

function deletePlaylist(plId) {
  playlists = playlists.filter(p => p.id !== plId);
  savePlaylists();
  renderPlaylists();
  populateShareSelects();
  showToast('🗑 Playlist deletada.');
}

// ── ADD TO PLAYLIST FLOW ──────────────────────
let targetSongId = null;

function addToPlaylistFlow(songId) {
  targetSongId = songId;
  const body = document.getElementById('modalPlaylistList');

  if (playlists.length === 0) {
    body.innerHTML = `<div class="empty-state"><p>Nenhuma playlist encontrada.<br>Crie uma na aba Playlists!</p></div>`;
  } else {
    body.innerHTML = playlists.map(pl => {
      const inPl = pl.songs.includes(songId);
      return `
        <div class="modal-pl-item">
          <div>
            <div class="modal-pl-name">${escapeHtml(pl.name)}</div>
            <div class="modal-pl-count">${pl.songs.length} música${pl.songs.length !== 1 ? 's' : ''}</div>
          </div>
          ${inPl
            ? `<span style="font-size:12px;color:var(--text-muted)">✓ Já adicionada</span>`
            : `<button class="modal-pl-add" onclick="addSongToPlaylist(${pl.id}, ${songId})">+ Adicionar</button>`
          }
        </div>`;
    }).join('');
  }

  openModal('addToPlaylistModal');
}

function addSongToPlaylist(plId, songId) {
  const pl = playlists.find(p => p.id === plId);
  if (!pl) return;
  if (pl.songs.includes(songId)) { showToast('⚠️ Música já está na playlist!'); return; }
  pl.songs.push(songId);
  savePlaylists();
  closeModal('addToPlaylistModal');
  renderPlaylists();
  populateShareSelects();
  const song = SONGS.find(s => s.id === songId);
  showToast(`✅ "${song?.title}" adicionada a "${pl.name}"!`);
}

function addToPlaylistFromPlayer() {
  const song = SONGS[currentSongIndex];
  if (song) addToPlaylistFlow(song.id);
}

function savePlaylists() {
  localStorage.setItem('bv_playlists', JSON.stringify(playlists));
}

// ── SHARE ─────────────────────────────────────
function populateShareSelects() {
  const selects = ['shareSongSelect', 'shareWaSongSelect'];
  selects.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = `<option value="">Selecione uma música...</option>` +
      SONGS.map(s => `<option value="${s.id}">${s.title} – ${s.artist}</option>`).join('');
  });

  const plSel = document.getElementById('sharePlaylistSelect');
  if (plSel) {
    plSel.innerHTML = `<option value="">Selecione uma playlist...</option>` +
      playlists.map(pl => `<option value="${pl.id}">${escapeHtml(pl.name)} (${pl.songs.length} músicas)</option>`).join('');
  }
}

function generateLink() {
  const sel = document.getElementById('shareSongSelect');
  const id  = parseInt(sel.value);
  if (!id) { showToast('⚠️ Selecione uma música primeiro!'); return; }
  const song = SONGS.find(s => s.id === id);
  const link = `https://beatvibes.app/song/${id}?t=${encodeURIComponent(song.title)}&a=${encodeURIComponent(song.artist)}`;
  document.getElementById('shareLinkInput').value = link;
  document.getElementById('shareLinkBox').style.display = 'flex';
  showToast('🔗 Link gerado!');
}

function copyLink() {
  const input = document.getElementById('shareLinkInput');
  navigator.clipboard.writeText(input.value).then(() => {
    document.getElementById('copyBtn').textContent = '✅ Copiado!';
    setTimeout(() => { document.getElementById('copyBtn').textContent = '📋 Copiar'; }, 2000);
    showToast('📋 Link copiado para a área de transferência!');
  }).catch(() => {
    input.select(); document.execCommand('copy');
    showToast('📋 Link copiado!');
  });
}

function shareWhatsApp() {
  const sel  = document.getElementById('shareWaSongSelect');
  const id   = parseInt(sel.value);
  const phone = document.getElementById('sharePhoneInput').value.replace(/\D/g,'');
  if (!id)    { showToast('⚠️ Selecione uma música!'); return; }
  if (!phone) { showToast('⚠️ Digite um número de WhatsApp!'); return; }
  const song = SONGS.find(s => s.id === id);
  const msg  = `🎵 Ouça *${song.title}* de *${song.artist}* no BeatVibes!\nhttps://beatvibes.app/song/${id}`;
  const url  = `https://wa.me/55${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function sharePlaylist() {
  const sel = document.getElementById('sharePlaylistSelect');
  const id  = parseInt(sel.value);
  if (!id) { showToast('⚠️ Selecione uma playlist!'); return; }
  const pl   = playlists.find(p => p.id === id);
  const link = `https://beatvibes.app/playlist/${id}?n=${encodeURIComponent(pl.name)}`;
  document.getElementById('playlistLinkInput').value = link;
  document.getElementById('playlistLinkBox').style.display = 'flex';
  showToast('🎶 Link da playlist gerado!');
}

function copyPlaylistLink() {
  const input = document.getElementById('playlistLinkInput');
  navigator.clipboard.writeText(input.value).then(() => {
    showToast('📋 Link da playlist copiado!');
  }).catch(() => {
    input.select(); document.execCommand('copy');
    showToast('📋 Link copiado!');
  });
}

// ── MODALS ────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ── TOAST ─────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── UTILS ─────────────────────────────────────
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── KEYBOARD SHORTCUTS ────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  if (e.code === 'ArrowRight') nextSong();
  if (e.code === 'ArrowLeft')  prevSong();
});

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  if (sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ============================================================
// ── LYRICS ──────────────────────────────────────────────────
// ============================================================

let selectedLyricsSongId = null;

// label = section title (CHORUS, VERSE…), text = lyric line, t = seconds
const LYRICS = {
  1: [ // Dynamite
    {t:0,  label:"INTRODUÇÃO / CHORUS"},
    {t:4,  text:"'Cause I, I, I'm in the stars tonight"},
    {t:8,  text:"So watch me bring the fire and set the night alight"},
    {t:13, label:"VERSE 1"},
    {t:15, text:"Shoes on, get up in the morn'"},
    {t:17, text:"Cup of milk, let's rock and roll"},
    {t:19, text:"King Kong, kick the drum"},
    {t:21, text:"Rolling on like a Rolling Stone"},
    {t:23, text:"Sing song when I'm walking home"},
    {t:25, text:"Jump up to the top, LeBron"},
    {t:27, text:"Ding dong, call me on my phone"},
    {t:29, text:"Ice tea and a game of ping pong"},
    {t:32, label:"PRE-CHORUS"},
    {t:34, text:"This is getting heavy"},
    {t:36, text:"Can you hear the bass boom? I'm ready"},
    {t:39, text:"Life is sweet as honey"},
    {t:41, text:"Yeah, this beat cha-ching like money"},
    {t:44, text:"Disco overload, I'm into that, I'm good to go"},
    {t:48, text:"I'm diamond, you know I glow up"},
    {t:51, text:"Hey, so let's go"},
    {t:54, label:"CHORUS"},
    {t:56, text:"'Cause I, I, I'm in the stars tonight"},
    {t:60, text:"So watch me bring the fire and set the night alight"},
    {t:65, text:"Shining through the city with a little funk and soul"},
    {t:70, text:"So I'ma light it up like dynamite, woah"},
    {t:75, label:"POST-CHORUS"},
    {t:77, text:"Dy-na-na-na, na-na, na-na-na, na-na"},
    {t:80, text:"Light it up like dynamite"},
    {t:83, text:"Dy-na-na-na, na-na, na-na-na, na-na"},
    {t:86, text:"Light it up like dynamite"},
    {t:90, label:"VERSE 2"},
    {t:92, text:"Bring a friend, join the crowd"},
    {t:95, text:"Whoever wanna come along"},
    {t:98, text:"Word up, talk the talk"},
    {t:100,text:"Just move like we off the wall"},
    {t:102,text:"Day or night the sky's alight"},
    {t:104,text:"So we dance to the break of dawn"},
    {t:107,text:"Ladies and gentlemen, I got the medicine"},
    {t:110,text:"So you should keep ya eyes on the ball"},
    {t:114,label:"PRE-CHORUS"},
    {t:116,text:"This is getting heavy"},
    {t:118,text:"Can you hear the bass boom? I'm ready"},
    {t:121,text:"Life is sweet as honey"},
    {t:123,text:"Yeah, this beat cha-ching like money"},
    {t:126,text:"Disco overload, I'm into that, I'm good to go"},
    {t:130,text:"I'm diamond, you know I glow up"},
    {t:133,text:"Hey, so let's go"},
    {t:136,label:"CHORUS"},
    {t:138,text:"'Cause I, I, I'm in the stars tonight"},
    {t:142,text:"So watch me bring the fire and set the night alight"},
    {t:147,text:"Shining through the city with a little funk and soul"},
    {t:152,text:"So I'ma light it up like dynamite, woah"},
    {t:156,label:"BRIDGE"},
    {t:158,text:"Dy-na-na-na, na-na, na-na-na, na-na"},
    {t:161,text:"Light it up like dynamite"},
    {t:164,text:"Dy-na-na-na, na-na, na-na-na, na-na"},
    {t:167,text:"Light it up like dynamite"},
    {t:171,label:"OUTRO"},
    {t:173,text:"'Cause I, I, I'm in the stars tonight"},
    {t:177,text:"So watch me bring the fire and set the night alight"},
    {t:181,text:"Dy-na-na-na, na-na, na-na-na, na-na"},
    {t:185,text:"Life is dynamite"},
    {t:191,text:"Light it up like dynamite 💥"},
  ],
  2: [ // Butter
    {t:0,  label:"VERSE 1"},
    {t:3,  text:"Smooth like butter"},
    {t:6,  text:"Like a criminal undercover"},
    {t:9,  text:"Gon' pop like trouble"},
    {t:12, text:"Breakin' into your heart like that"},
    {t:15, text:"Cool shade stunner"},
    {t:18, text:"Yeah I owe it all to my mother"},
    {t:21, text:"Hot like summer"},
    {t:24, text:"Yeah I'm making you sweat like that"},
    {t:27, label:"PRE-CHORUS"},
    {t:29, text:"Don't need no Kryptonite"},
    {t:32, text:"Move to the left, move to the right"},
    {t:35, text:"Wanna be yours all night"},
    {t:38, text:"Pull you in with all my might"},
    {t:41, label:"CHORUS"},
    {t:43, text:"We gonna bring the fire to the mountain"},
    {t:47, text:"We gonna light it up like the sun"},
    {t:51, text:"Smooth like butter, pull you in like no other"},
    {t:55, text:"Don't need no Kryptonite, be mine tonight"},
    {t:59, text:"Smooth like butter"},
    {t:62, label:"VERSE 2"},
    {t:65, text:"Second to none"},
    {t:68, text:"Making you feel like a work of art"},
    {t:72, text:"Tailor-fitted, every stitch is who we are"},
    {t:76, text:"We'll vibe, don't you wanna be a part?"},
    {t:80, text:"Got it good, just trust us"},
    {t:85, label:"PRE-CHORUS"},
    {t:87, text:"Don't need no Kryptonite"},
    {t:90, text:"Move to the left, move to the right"},
    {t:93, text:"Wanna be yours all night"},
    {t:96, text:"Pull you in with all my might"},
    {t:99, label:"CHORUS"},
    {t:101,text:"We gonna bring the fire to the mountain"},
    {t:105,text:"We gonna light it up like the sun"},
    {t:109,text:"Smooth like butter, pull you in like no other"},
    {t:113,text:"Don't need no Kryptonite, be mine tonight"},
    {t:117,text:"Smooth like butter"},
    {t:120,label:"BRIDGE"},
    {t:123,text:"Side step, right, left to my beat"},
    {t:126,text:"High like the moon, rock with me, baby"},
    {t:129,text:"Know that I got that heat"},
    {t:132,text:"Let me show you 'cause talk is cheap"},
    {t:136,text:"Side step, right, left to my beat"},
    {t:139,text:"Get it, let it roll"},
    {t:142,label:"CHORUS"},
    {t:145,text:"We gonna bring the fire to the mountain"},
    {t:149,text:"We gonna light it up like the sun"},
    {t:153,text:"Smooth like butter, pull you in like no other"},
    {t:157,text:"Don't need no Kryptonite, be mine tonight"},
    {t:161,text:"Smooth like butter 🧈"},
  ],
  3: [ // Permission to Dance
    {t:0,  label:"VERSE 1"},
    {t:4,  text:"When the music hits I forget the day"},
    {t:8,  text:"I wanna move and feel alive"},
    {t:12, text:"Leave all my sadness and regret behind"},
    {t:16, label:"PRE-CHORUS"},
    {t:18, text:"We don't need to worry"},
    {t:21, text:"'Cause when we fall, we know how to land"},
    {t:25, text:"Don't need to talk the talk"},
    {t:28, text:"Just walk the walk tonight"},
    {t:31, label:"CHORUS"},
    {t:33, text:"'Cause we don't need permission to dance"},
    {t:37, text:"Dance! To the music"},
    {t:40, text:"To the music"},
    {t:43, text:"'Cause we don't need permission to dance"},
    {t:47, text:"Dance! To the music"},
    {t:50, text:"To the music"},
    {t:53, label:"VERSE 2"},
    {t:55, text:"There are days when I hate myself"},
    {t:59, text:"Nothing I do matters anyway"},
    {t:63, text:"But when I hear the music play"},
    {t:67, text:"I feel myself come alive again"},
    {t:71, label:"PRE-CHORUS"},
    {t:73, text:"We don't need to worry"},
    {t:76, text:"'Cause when we fall, we know how to land"},
    {t:80, text:"Don't need to talk the talk"},
    {t:83, text:"Just walk the walk tonight"},
    {t:86, label:"CHORUS"},
    {t:88, text:"'Cause we don't need permission to dance"},
    {t:92, text:"Dance! To the music"},
    {t:95, text:"To the music"},
    {t:98, text:"'Cause we don't need permission to dance"},
    {t:102,text:"Dance! To the music"},
    {t:105,text:"To the music"},
    {t:109,label:"BRIDGE"},
    {t:111,text:"When it all gets heavy"},
    {t:114,text:"We can leave it all behind"},
    {t:118,text:"We can be ourselves tonight"},
    {t:122,text:"Let's take it one step at a time"},
    {t:126,label:"OUTRO"},
    {t:128,text:"'Cause we don't need permission to dance"},
    {t:132,text:"Dance! To the music"},
    {t:135,text:"To the music"},
    {t:140,text:"Let's dance, dance, dance 💃"},
    {t:145,text:"All night long"},
    {t:150,text:"We don't need permission"},
  ],
  5: [ // Fake Love
    {t:0,  label:"INTRO"},
    {t:3,  text:"I wanna be a good man just for you"},
    {t:8,  text:"I wanna be a better man than I am"},
    {t:13, label:"VERSE 1"},
    {t:15, text:"Eodume gancheon nae boyeojin kkum"},
    {t:19, text:"Neoreul mannana modu gasine"},
    {t:23, text:"Nae anae sumeo isseotdeon areum"},
    {t:27, text:"Neoreul mannamyeo neon kkotpieonne"},
    {t:31, label:"PRE-CHORUS"},
    {t:33, text:"Uh, love you so bad, love you so bad"},
    {t:37, text:"Nae sseulmo eomneun ege neun nomu saanghan sungan"},
    {t:42, label:"CHORUS"},
    {t:44, text:"I'm so sick of this fake love, fake love, fake love"},
    {t:48, text:"I'm so done with this fake love, fake love, fake love"},
    {t:53, text:"Nan momeul bakkwohya haesseo"},
    {t:57, text:"Neo wihan saram in cheok"},
    {t:61, text:"Gaseul gireoya haesseo"},
    {t:65, text:"Nae an ae neoreul chaewo"},
    {t:70, label:"VERSE 2"},
    {t:72, text:"Nae gaseui ipgugeseo"},
    {t:76, text:"Imi kkeutnasseo, imi kkeutnasseo"},
    {t:80, text:"Nae gasemin tto nomchyeo, nomchyeo"},
    {t:84, text:"Neo ttaemune, neo ttaemune"},
    {t:88, label:"PRE-CHORUS"},
    {t:90, text:"Uh, love you so bad, love you so bad"},
    {t:94, text:"Nae sseulmo eomneun ege neun nomu saanghan sungan"},
    {t:99, label:"CHORUS"},
    {t:101,text:"I'm so sick of this fake love, fake love, fake love"},
    {t:105,text:"I'm so done with this fake love, fake love, fake love"},
    {t:110,text:"Nan momeul bakkwohya haesseo"},
    {t:114,text:"Neo wihan saram in cheok"},
    {t:118,label:"BRIDGE"},
    {t:121,text:"널 위해서라면 난"},
    {t:125,text:"뭐든 될 수 있다 생각했어"},
    {t:129,text:"널 위해서라면 난"},
    {t:133,text:"고통도 견딜 수 있다 생각했어"},
    {t:138,label:"CHORUS"},
    {t:140,text:"I'm so sick of this fake love, fake love, fake love"},
    {t:144,text:"I'm so done with this fake love, fake love, fake love 🖤"},
  ],
  9: [ // Fire
    {t:0,  label:"INTRO"},
    {t:2,  text:"Bultago isseo, Fire!"},
    {t:5,  text:"Bultago isseo, Fire!"},
    {t:8,  label:"VERSE 1"},
    {t:10, text:"Jamdo anjago meokdo anko"},
    {t:13, text:"Naljagari gatchi haengdonghago"},
    {t:16, text:"Niga mwora haedo nan sanggwaneopgo"},
    {t:19, text:"Michindeutsi norabweo"},
    {t:22, text:"Seo-reul nwado igeon nae inseong"},
    {t:25, text:"Miryeon ttawin eobsi bureum soge"},
    {t:28, text:"Taeyang arae seo-seo chwigo sipeo"},
    {t:31, text:"Ije bultago isseo, Fire!"},
    {t:34, label:"CHORUS"},
    {t:36, text:"We rollin', we rollin', we rollin'"},
    {t:39, text:"Despite what they sayin'"},
    {t:42, text:"We rollin', we rollin', we rollin'"},
    {t:45, text:"Don't care what they sayin'"},
    {t:48, text:"Live your life, man"},
    {t:51, text:"Bultago isseo, Fire!"},
    {t:54, text:"Fire! Fire! Fire! Fire!"},
    {t:58, label:"VERSE 2"},
    {t:60, text:"Oneul haru-do sugo haesseo"},
    {t:63, text:"Meomchujima, keep running"},
    {t:66, text:"Geudaero da swipge po-gihaji ma"},
    {t:70, text:"Neon meomchuji ma, Fire!"},
    {t:74, label:"CHORUS"},
    {t:76, text:"We rollin', we rollin', we rollin'"},
    {t:79, text:"Despite what they sayin'"},
    {t:82, text:"We rollin', we rollin', we rollin'"},
    {t:85, text:"Don't care what they sayin'"},
    {t:88, text:"Bultago isseo, Fire! 🔥"},
    {t:92, label:"BRIDGE"},
    {t:94, text:"Eottae, eottae, eottae"},
    {t:97, text:"Neowa na sai-e eottae"},
    {t:101,text:"Na jigeum chungbunhi haengbokhae"},
    {t:105,text:"Gwaenchanha, Fire!"},
    {t:109,label:"OUTRO"},
    {t:111,text:"Burn it up, burn it up!"},
    {t:114,text:"Bultago isseo, Fire!"},
    {t:118,text:"Na bultago isseo, Fire! 🔥"},
  ],
  12: [ // Spring Day
    {t:0,  label:"VERSE 1"},
    {t:4,  text:"Bogoshipda, igeon bogoship-eo"},
    {t:8,  text:"Neol bogoshipda, igeon bogoship-eo"},
    {t:12, text:"Joheun geo da buchajugo sipeo"},
    {t:16, text:"Joheun geot mani deo algo sipeo"},
    {t:20, label:"PRE-CHORUS"},
    {t:22, text:"Oneul nal seo eonje naleul bol su itgetni"},
    {t:26, text:"Neol gidalin mal do hal su itgetni"},
    {t:30, text:"Eodinagen gakketji neol an go sipeo"},
    {t:34, label:"CHORUS"},
    {t:36, text:"I miss you (I miss you)"},
    {t:39, text:"When I say that I miss you more"},
    {t:43, text:"All the memories, I can feel them"},
    {t:47, text:"They're here, still with me"},
    {t:51, text:"I miss you through a field of flowers"},
    {t:55, text:"I can almost see you 🌸"},
    {t:59, label:"VERSE 2"},
    {t:62, text:"Eotteon yeonjeonhwa kkotchi"},
    {t:66, text:"Yeong hanji moleuge pieoisseo"},
    {t:70, text:"Geogireun naeril nundamseo"},
    {t:74, text:"Neoye ireumileul buchyeo"},
    {t:78, label:"PRE-CHORUS"},
    {t:80, text:"Oneul nal seo eonje naleul bol su itgetni"},
    {t:84, text:"Neol gidalin mal do hal su itgetni"},
    {t:88, text:"Eodinagen gakketji neol an go sipeo"},
    {t:92, label:"CHORUS"},
    {t:94, text:"I miss you (I miss you)"},
    {t:97, text:"When I say that I miss you more"},
    {t:101,text:"All the memories, I can feel them"},
    {t:105,text:"They're here, still with me"},
    {t:109,text:"I miss you through a field of flowers"},
    {t:113,text:"I can almost see you"},
    {t:117,label:"BRIDGE"},
    {t:119,text:"You know it all, you're my best friend"},
    {t:123,text:"The morning will come again"},
    {t:127,text:"No darkness, no season"},
    {t:131,text:"Is eternal"},
    {t:135,text:"Cherry blossoms are blooming"},
    {t:139,text:"Go through the winter, winter"},
    {t:143,text:"I miss you, I miss you"},
    {t:147,label:"OUTRO"},
    {t:149,text:"I miss you (I miss you)"},
    {t:153,text:"When I say that I miss you more 🌸"},
    {t:157,text:"All the memories are still with me..."},
  ],
  14: [ // Life Goes On
    {t:0,  label:"VERSE 1"},
    {t:4,  text:"Like an echo in the forest"},
    {t:7,  text:"One day this world stopped"},
    {t:10, text:"Without me, without you"},
    {t:13, text:"Without notice, game over"},
    {t:17, label:"PRE-CHORUS"},
    {t:19, text:"Nomad wandering, nomad wandering"},
    {t:23, text:"Those good old days"},
    {t:26, label:"CHORUS"},
    {t:28, text:"Life goes on, like this again"},
    {t:32, text:"On my pillow, on my table"},
    {t:36, text:"Yeah, life goes on like that"},
    {t:40, text:"Like us 🌿"},
    {t:44, label:"VERSE 2"},
    {t:46, text:"Like an arrow made of time"},
    {t:49, text:"The days keep flowing away"},
    {t:52, text:"Into the deep I breathe"},
    {t:55, text:"But I'm not afraid"},
    {t:59, label:"CHORUS"},
    {t:61, text:"Life goes on, like this again"},
    {t:65, text:"On my pillow, on my table"},
    {t:69, text:"Yeah, life goes on like that"},
    {t:73, text:"Like us"},
    {t:77, label:"BRIDGE"},
    {t:79, text:"I can't hold on, just like a stop motion"},
    {t:83, text:"On my pillow, on my table"},
    {t:87, text:"Yeah, life goes on"},
    {t:91, label:"OUTRO"},
    {t:93, text:"One day the world stopped without any warning"},
    {t:97, text:"Life goes on as usual, yeah"},
    {t:101,text:"Life goes on like this, like us 🌿"},
  ],
  22: [ // Euphoria
    {t:0,  label:"INTRO"},
    {t:4,  text:"You are the cause of my euphoria"},
    {t:9,  label:"VERSE 1"},
    {t:11, text:"Eomainareul sijakhaesseo"},
    {t:15, text:"Neon naeman ui eurieumman"},
    {t:19, text:"Nan gyeokke yuriwa gatdeon"},
    {t:23, text:"Kkum i eotteo"},
    {t:27, label:"PRE-CHORUS"},
    {t:29, text:"I want to keep running without any pause"},
    {t:33, text:"Even if I fall and get hurt"},
    {t:37, text:"With you, I'm not afraid"},
    {t:41, label:"CHORUS"},
    {t:43, text:"I want to see you, I want to hold you"},
    {t:47, text:"I want to run to you now"},
    {t:51, text:"You're the one, euphoria"},
    {t:55, text:"Like a dream called euphoria ✨"},
    {t:59, label:"VERSE 2"},
    {t:61, text:"Jamdeulgi jeone sonyeol reuchyeo"},
    {t:65, text:"Neoye nunbit mami meomuleo"},
    {t:69, text:"Jamgieun chameul su eomneun haengbok"},
    {t:73, text:"Geu angeseo naega sumswimyeo"},
    {t:77, label:"CHORUS"},
    {t:79, text:"I want to see you, I want to hold you"},
    {t:83, text:"I want to run to you now"},
    {t:87, text:"You're the one, euphoria"},
    {t:91, text:"Like a dream called euphoria"},
    {t:95, label:"BRIDGE"},
    {t:97, text:"Neon naege isseo"},
    {t:100,text:"You are my euphoria"},
    {t:104,text:"You are my galaxy"},
    {t:108,text:"You are my forever"},
    {t:112,label:"OUTRO"},
    {t:115,text:"You are the cause of my euphoria"},
    {t:119,text:"You are my euphoria ✨"},
    {t:123,text:"You are my euphoria..."},
  ],
  4: [ // Boy With Luv
    {t:0,  label:"INTRO"},
    {t:3,  text:"Oh my, my, my"},
    {t:6,  text:"Oh my, my, my"},
    {t:9,  label:"VERSE 1"},
    {t:11, text:"Eotteon jeonhwaga neol sijakhaenneun geotcheoreom"},
    {t:15, text:"Neol michidorok geuriwodo gwaenchanheunjeol"},
    {t:19, text:"Soehan gobaegiran geol araunikka"},
    {t:23, text:"Nae maeumeul junbihalkke"},
    {t:27, label:"PRE-CHORUS"},
    {t:29, text:"I want something stronger"},
    {t:32, text:"Than a moment, just a moment of your love"},
    {t:36, text:"Oh, a simple little thing is all I'm asking of"},
    {t:40, label:"CHORUS"},
    {t:42, text:"Hey girl, I want to be your you"},
    {t:46, text:"Nae seontaegi doego sipeo"},
    {t:50, text:"I want to be your tear, I want to be your hope"},
    {t:54, text:"I want to be everything you need"},
    {t:58, text:"Oh my, my, my"},
    {t:62, text:"A boy with luv"},
    {t:65, label:"VERSE 2"},
    {t:67, text:"From the small things I want to know"},
    {t:71, text:"All of your everyday life"},
    {t:75, text:"Even your small worries"},
    {t:79, text:"I wanna hear them all"},
    {t:83, label:"PRE-CHORUS"},
    {t:85, text:"I want something stronger"},
    {t:88, text:"Than a moment, just a moment of your love"},
    {t:92, text:"Oh, a simple little thing is all I'm asking of"},
    {t:96, label:"CHORUS"},
    {t:98, text:"Hey girl, I want to be your you"},
    {t:102,text:"Nae seontaegi doego sipeo"},
    {t:106,text:"I want to be your tear, I want to be your hope"},
    {t:110,text:"I want to be everything you need"},
    {t:114,text:"Oh my, my, my"},
    {t:118,text:"A boy with luv"},
    {t:122,label:"BRIDGE"},
    {t:124,text:"Ttollin soljikham ttaeron"},
    {t:128,text:"Bul piryo hanikka"},
    {t:132,text:"Oh my my my, oh my my my"},
    {t:136,label:"OUTRO"},
    {t:138,text:"Hey girl, I want to be your you"},
    {t:142,text:"I want to be everything you need"},
    {t:146,text:"Oh my, my, my..."},
    {t:150,text:"A boy with luv 💗"},
  ],
  6: [ // DNA
    {t:0,  label:"INTRO"},
    {t:3,  text:"Neorang na, uri mannameon"},
    {t:7,  text:"Ubyeonhi ga aniya"},
    {t:11, label:"VERSE 1"},
    {t:13, text:"Uri duri cheoeumbuteo"},
    {t:17, text:"Unmyeongi yeotgess-eo"},
    {t:21, text:"Neoye sonskkeutedo neoye sumi"},
    {t:25, text:"Neoye soksangimae"},
    {t:29, text:"Nan imi da algo isseotji"},
    {t:33, text:"Mueungeoptge ireol su bakke"},
    {t:37, label:"PRE-CHORUS"},
    {t:39, text:"Neoye nunbit soge"},
    {t:42, text:"Nan ijeonbuteo sarang haetji"},
    {t:46, text:"Cheot sungan buteo"},
    {t:49, text:"Baby I loved you"},  
    {t:52, label:"CHORUS"},
    {t:54, text:"Universe, universe, universe"},
    {t:57, text:"I can see it in your eyes"},
    {t:61, text:"Universe, universe, universe"},
    {t:64, text:"My DNA tells me, I love you 🧬"},
    {t:68, text:"Baby I need you"},
    {t:72, text:"In this universe"},
    {t:76, label:"VERSE 2"},
    {t:78, text:"Seoro dareun geot gateun uri"},
    {t:82, text:"Neon nae ban jjok gateun ireum"},
    {t:86, text:"Na uriduri mannameon"},
    {t:90, text:"Ubyeonhi ga ani ya"},
    {t:94, label:"PRE-CHORUS"},
    {t:96, text:"Neoye nunbit soge"},
    {t:99, text:"Nan ijeonbuteo sarang haetji"},
    {t:103,text:"Cheot sungan buteo"},
    {t:106,text:"Baby I loved you"},
    {t:109,label:"CHORUS"},
    {t:111,text:"Universe, universe, universe"},
    {t:114,text:"I can see it in your eyes"},
    {t:118,text:"Universe, universe, universe"},
    {t:121,text:"My DNA tells me, I love you"},
    {t:125,text:"Baby I need you"},
    {t:129,text:"In this universe"},
    {t:133,label:"BRIDGE"},
    {t:135,text:"Baby let me give you all my love"},
    {t:139,text:"I was made for you"},
    {t:143,text:"Ever since the beginning of time"},
    {t:147,text:"Only you, only you"},
    {t:151,label:"OUTRO"},
    {t:153,text:"Universe, universe, universe"},
    {t:156,text:"My DNA tells me, I love you 🧬"},
  ],
  7: [ // MIC Drop
    {t:0,  label:"INTRO"},
    {t:3,  text:"Did you see my bag? Did you see my bag?"},
    {t:7,  text:"Mic drop, mic drop"},
    {t:10, label:"VERSE 1"},
    {t:12, text:"Naneun nae gilman gasseo"},
    {t:16, text:"Geugeosi naui hyugsinja"},
    {t:20, text:"Neohuideul gwaenchankke"},
    {t:24, text:"Naneun geoksijeonghaji aba"},
    {t:28, text:"Neohuideul mal daeleo haesseo"},
    {t:32, text:"Ijedo mangseosseo"},
    {t:36, label:"PRE-CHORUS"},
    {t:38, text:"Am I wrong? Am I wrong?"},
    {t:41, text:"Am I wrong? Am I wrong?"},
    {t:44, text:"Keep calm and drop da mic"},
    {t:47, label:"CHORUS"},
    {t:50, text:"Mic drop, mic drop"},
    {t:53, text:"Mic mic bam bam, mic drop"},
    {t:56, text:"Nohad-an haendeu"},
    {t:60, text:"Mic drop, mic drop"},
    {t:63, text:"Mic mic bam bam, mic drop 🎤"},
    {t:67, label:"VERSE 2"},
    {t:69, text:"Naega baraen geon imi iwo"},
    {t:73, text:"Neoneun anya, nan an jamhae"},
    {t:77, text:"Bam was dark and new was gone"},
    {t:81, text:"Simjangi meomsul ge gata"},
    {t:85, label:"PRE-CHORUS"},
    {t:87, text:"Am I wrong? Am I wrong?"},
    {t:90, text:"Am I wrong? Am I wrong?"},
    {t:93, text:"Keep calm and drop da mic"},
    {t:96, label:"CHORUS"},
    {t:99, text:"Mic drop, mic drop"},
    {t:102,text:"Mic mic bam bam, mic drop"},
    {t:105,text:"Nohad-an haendeu"},
    {t:109,text:"Mic drop, mic drop"},
    {t:112,text:"Mic mic bam bam, mic drop"},
    {t:116,label:"BRIDGE"},
    {t:118,text:"Sorry, sorry"},
    {t:121,text:"Babe, you should be left"},
    {t:124,text:"Modu da michyeo"},
    {t:127,text:"Mic drop"},
    {t:130,label:"OUTRO"},
    {t:132,text:"Mic drop, mic drop"},
    {t:135,text:"Mic mic bam bam, mic drop 🎤"},
  ],
  11: [ // Blood Sweat & Tears
    {t:0,  label:"VERSE 1"},
    {t:4,  text:"Nae pi ttam nunmul"},
    {t:8,  text:"Nae majimak chum"},
    {t:12, text:"Georeoingneun yeon-gi"},
    {t:16, text:"Miso handanttae"},
    {t:20, label:"PRE-CHORUS"},
    {t:22, text:"Tabeomgat-eun neoye ib"},
    {t:26, text:"Neoye sonkkeut"},
    {t:30, text:"Na dubeonjae nareul jungyeo"},
    {t:34, text:"Hayan geommaekin nae nunbit"},
    {t:38, label:"CHORUS"},
    {t:40, text:"Nae pi ttam nunmul"},
    {t:43, text:"Beolyeo, beolyeo"},
    {t:46, text:"Nae pi ttam nunmul"},
    {t:49, text:"Gajyeoga, gajyeoga"},
    {t:52, text:"Blood, sweat and tears 💧"},
    {t:56, text:"Take it all away"},
    {t:60, label:"VERSE 2"},
    {t:62, text:"Cheonsa-inyang geunyeoneun"},
    {t:66, text:"Nae gaseum-e geuge gwa"},
    {t:70, text:"Jiokgana cheonggukina"},
    {t:74, text:"Nae sogeseo sumswineun"},
    {t:78, label:"PRE-CHORUS"},
    {t:80, text:"Tabeomgat-eun neoye ib"},
    {t:84, text:"Neoye sonkkeut"},
    {t:88, text:"Na dubeonjae nareul jungyeo"},
    {t:92, text:"Hayan geommaekin nae nunbit"},
    {t:96, label:"CHORUS"},
    {t:98, text:"Nae pi ttam nunmul"},
    {t:101,text:"Beolyeo, beolyeo"},
    {t:104,text:"Nae pi ttam nunmul"},
    {t:107,text:"Gajyeoga, gajyeoga"},
    {t:110,text:"Blood, sweat and tears"},
    {t:114,text:"Take it all away"},
    {t:118,label:"BRIDGE"},
    {t:120,text:"Cover me"},
    {t:123,text:"Neoye son-euro"},
    {t:127,text:"Nae nune mog-eul gamgajwo"},
    {t:131,text:"Nae ib-e kiseu haejwo"},
    {t:135,text:"Nae ipsur-e dagawa"},
    {t:139,label:"OUTRO"},
    {t:141,text:"Nae pi ttam nunmul 💧"},
    {t:145,text:"Beolyeo, beolyeo"},
    {t:149,text:"Nae pi ttam nunmul"},
    {t:153,text:"Gajyeoga, gajyeoga"},
  ],
  17: [ // Save Me
    {t:0,  label:"INTRO"},
    {t:4,  text:"I know it's too late"},
    {t:8,  text:"Naneun algo isseo"},
    {t:12, label:"VERSE 1"},
    {t:14, text:"Nae simjangi meomchul geot gata"},
    {t:18, text:"I can't take it anymore"},
    {t:22, text:"Geureon nareul wonhae"},
    {t:26, text:"Nege waseo neol wonhae"},
    {t:30, label:"PRE-CHORUS"},
    {t:32, text:"Gibun joheun nal"},
    {t:35, text:"On the happy days"},
    {t:38, text:"Gibun nappeun nal"},
    {t:41, text:"On the rainy days"},
    {t:44, text:"Neo-ege gago sipeo"},
    {t:47, text:"I want to go to you"},
    {t:50, label:"CHORUS"},
    {t:52, text:"Save me, save me"},
    {t:55, text:"I need your love before I fall, fall"},
    {t:59, text:"Save me, save me"},
    {t:62, text:"I need your love before I fall, fall 🆘"},
    {t:66, label:"VERSE 2"},
    {t:68, text:"Maeil bamjima-daganeun"},
    {t:72, text:"Nal sseulgo ganneun baram"},
    {t:76, text:"No more, no more"},
    {t:79, text:"You need to save me tonight"},
    {t:83, label:"PRE-CHORUS"},
    {t:85, text:"Gibun joheun nal"},
    {t:88, text:"On the happy days"},
    {t:91, text:"Gibun nappeun nal"},
    {t:94, text:"On the rainy days"},
    {t:97, text:"Neo-ege gago sipeo"},
    {t:100,text:"I want to go to you"},
    {t:103,label:"CHORUS"},
    {t:105,text:"Save me, save me"},
    {t:108,text:"I need your love before I fall, fall"},
    {t:112,text:"Save me, save me"},
    {t:115,text:"I need your love before I fall, fall"},
    {t:119,label:"BRIDGE"},
    {t:121,text:"Neoneun nae bom"},
    {t:124,text:"You are my spring"},
    {t:127,text:"In this cold winter"},
    {t:131,text:"Wonhae haejwo, save me"},
    {t:135,label:"OUTRO"},
    {t:137,text:"Save me, save me"},
    {t:140,text:"I need your love before I fall 🆘"},
  ],
  18: [ // I Need U
    {t:0,  label:"INTRO"},
    {t:4,  text:"Baby, I need you"},
    {t:8,  text:"Baby, I need you"},
    {t:12, label:"VERSE 1"},
    {t:14, text:"Jalmothan ge isseo"},
    {t:18, text:"Nae tteona bolkka"},
    {t:22, text:"Ani ani"},
    {t:25, text:"Neon nadeul tteona"},
    {t:29, text:"Nan hana nada"},
    {t:33, text:"Oneul do apeun haru"},
    {t:37, label:"PRE-CHORUS"},
    {t:39, text:"Nal bureojweo"},
    {t:42, text:"Naege waseo"},
    {t:45, text:"Baby hajima"},
    {t:48, text:"Geurae hajima"},
    {t:51, label:"CHORUS"},
    {t:53, text:"I need you girl"},
    {t:56, text:"Wae ireoni, wae ireoni"},
    {t:60, text:"I need you girl"},
    {t:63, text:"Wae ireoni, wae ireoni 💔"},
    {t:67, text:"Baby, I need you"},
    {t:71, text:"I need u, I need u"},
    {t:75, label:"VERSE 2"},
    {t:77, text:"Jamdeulgi jeone"},
    {t:81, text:"Neoye saenggak haesseo"},
    {t:85, text:"I feel so alone"},
    {t:89, text:"Negal wonhae"},
    {t:93, label:"PRE-CHORUS"},
    {t:95, text:"Nal bureojweo"},
    {t:98, text:"Naege waseo"},
    {t:101,text:"Baby hajima"},
    {t:104,text:"Geurae hajima"},
    {t:107,label:"CHORUS"},
    {t:109,text:"I need you girl"},
    {t:112,text:"Wae ireoni, wae ireoni"},
    {t:116,text:"I need you girl"},
    {t:119,text:"Wae ireoni, wae ireoni"},
    {t:123,text:"Baby, I need you"},
    {t:127,text:"I need u, I need u"},
    {t:131,label:"OUTRO"},
    {t:133,text:"Baby, I need you"},
    {t:137,text:"I need you 💔"},
  ],
  21: [ // Butterfly
    {t:0,  label:"INTRO"},
    {t:5,  text:"Hana duriget-ji"},
    {t:9,  text:"Na hoksi sumswineun geol ija burigo"},
    {t:13, label:"VERSE 1"},
    {t:15, text:"Neoreul bomyeon ipsuganeun"},
    {t:19, text:"Jakku meomchwo"},
    {t:23, text:"Neol bapgo sipeo"},
    {t:27, text:"Urineun dareun saram"},
    {t:31, text:"Naega mwol haneun genji"},
    {t:35, text:"Oneureun neukkil su itge haejwo"},
    {t:39, label:"CHORUS"},
    {t:41, text:"Baby, are you okay? Are you okay?"},
    {t:45, text:"Geureom dahaenyeon dwae"},
    {t:49, text:"Just let me love you let me love you"},
    {t:53, text:"Butterfly, butterfly 🦋"},
    {t:57, text:"Like a dream, don't wake me up"},
    {t:61, text:"Don't wake me up"},
    {t:65, label:"VERSE 2"},
    {t:67, text:"Neol boneun nun-i"},
    {t:71, text:"Ttteolligo isseosseo"},
    {t:75, text:"Neon kkumcheoreom"},
    {t:79, text:"Miso jitsji ama"},
    {t:83, text:"Cheoncheonhi"},
    {t:87, text:"Gashil ttae"},
    {t:91, label:"CHORUS"},
    {t:93, text:"Baby, are you okay? Are you okay?"},
    {t:97, text:"Geureom dahaenyeon dwae"},
    {t:101,text:"Just let me love you let me love you"},
    {t:105,text:"Butterfly, butterfly 🦋"},
    {t:109,text:"Like a dream, don't wake me up"},
    {t:113,text:"Don't wake me up"},
    {t:117,label:"BRIDGE"},
    {t:119,text:"Nae soneul jabajwo"},
    {t:123,text:"Nal isseo"},
    {t:127,text:"Kkum-e seomyeon"},
    {t:131,text:"Butterfly, don't fly away"},
    {t:135,label:"OUTRO"},
    {t:137,text:"Butterfly, butterfly 🦋"},
    {t:141,text:"Like a dream, don't wake me up"},
    {t:145,text:"Please don't wake me up..."},
  ],
  23: [ // Serendipity
    {t:0,  label:"INTRO"},
    {t:5,  text:"Gwaenchana"},
    {t:8,  text:"Naembeokeseo"},
    {t:11, label:"VERSE 1"},
    {t:13, text:"Nal gatna, seomgwang"},
    {t:17, text:"Dwidol-abwa, seomgwang"},
    {t:21, text:"I know, I know, I know"},
    {t:25, text:"Neon nae unmyeong"},
    {t:29, label:"PRE-CHORUS"},
    {t:31, text:"Nae soneul jabajwo"},
    {t:34, text:"Oh nae soneul jabajwo"},
    {t:37, text:"Ni son jabgo sipeo"},
    {t:40, label:"CHORUS"},
    {t:42, text:"Baby, serendipity"},
    {t:45, text:"Every day and night"},
    {t:48, text:"Neoye nuneul tteugo isseo"},
    {t:52, text:"Baby, serendipity 🌙"},
    {t:55, text:"Just let me love you"},
    {t:58, text:"Let me love you"},
    {t:61, label:"VERSE 2"},
    {t:63, text:"Nal gatna, jeosseomgwang"},
    {t:67, text:"Utgo isseo, jeosseomgwang"},
    {t:71, text:"I know, I know, I know"},
    {t:75, text:"Neon nae unmyeong"},
    {t:79, label:"PRE-CHORUS"},
    {t:81, text:"Nae soneul jabajwo"},
    {t:84, text:"Oh nae soneul jabajwo"},
    {t:87, text:"Ni son jabgo sipeo"},
    {t:90, label:"CHORUS"},
    {t:92, text:"Baby, serendipity"},
    {t:95, text:"Every day and night"},
    {t:98, text:"Neoye nuneul tteugo isseo"},
    {t:102,text:"Baby, serendipity 🌙"},
    {t:105,text:"Just let me love you"},
    {t:108,text:"Let me love you"},
    {t:111,label:"OUTRO"},
    {t:113,text:"Oh, serendipity"},
    {t:117,text:"Baby, serendipity"},
    {t:121,text:"Let me love you 🌙"},
  ],
};

// ── LYRICS FUNCTIONS ──────────────────────────

function renderLyricsList() {
  const list = document.getElementById('lyricsSongList');
  if (!list) return;
  list.innerHTML = SONGS.map(s => {
    const hasLyrics = !!LYRICS[s.id];
    return `
    <div class="lyrics-list-item ${selectedLyricsSongId === s.id ? 'active' : ''}"
         onclick="showLyricsForSong(${s.id})"
         title="${hasLyrics ? s.title : s.title + ' (letra em breve)'}">
      <span class="lyrics-list-emoji">${s.emoji}</span>
      <span class="lyrics-list-title">${s.title}${hasLyrics ? '' : ' <span style=\'opacity:.4;font-size:10px\'>✎</span>'}</span>
    </div>`;
  }).join('');
}

function showLyricsForSong(id) {
  selectedLyricsSongId = id;
  const song = SONGS.find(s => s.id === id);
  if (!song) return;

  // Update header panel
  const art = document.getElementById('lyricsArt');
  art.textContent = song.emoji;
  art.style.background = `radial-gradient(circle, ${song.color}cc, #0D0D0F)`;
  document.getElementById('lyricsSongTitle').textContent  = song.title;
  document.getElementById('lyricsSongArtist').textContent = song.artist;

  // Highlight selected in sidebar
  renderLyricsList();

  // Render lyrics body
  const body   = document.getElementById('lyricsBody');
  const lines  = LYRICS[id];

  if (!lines) {
    body.innerHTML = `
      <div class="lyrics-idle">
        <span class="lyrics-idle-icon">📝</span>
        <p>A letra de <strong>${song.title}</strong> ainda não está disponível.</p>
        <p style="font-size:12px;margin-top:6px;color:var(--crimson-light)">Em breve! 💜</p>
      </div>`;
    return;
  }

  body.innerHTML = lines.map((line, i) => {
    if (line.label) {
      return `<div class="lyric-line section-label" data-idx="${i}">${line.label}</div>`;
    }
    return `<div class="lyric-line" data-idx="${i}">${line.text}</div>`;
  }).join('');

  updateLyricsHighlight();
}

function updateLyricsHighlight() {
  if (!selectedLyricsSongId) return;
  const lines = LYRICS[selectedLyricsSongId];
  if (!lines) return;

  const isCurrentSong = SONGS[currentSongIndex]?.id === selectedLyricsSongId;
  const lyricEls = document.querySelectorAll('#lyricsBody .lyric-line:not(.section-label)');
  if (!lyricEls.length) return;

  if (!isCurrentSong || !isPlaying) {
    lyricEls.forEach(el => el.classList.remove('active', 'past'));
    return;
  }

  // Map only non-label lines
  const lyricLines = lines.filter(l => !l.label);
  let curIdx = -1;
  for (let i = 0; i < lyricLines.length; i++) {
    if (progressSeconds >= lyricLines[i].t) curIdx = i;
    else break;
  }

  let scrolled = false;
  lyricEls.forEach((el, i) => {
    el.classList.remove('active', 'past');
    if (i < curIdx)       el.classList.add('past');
    else if (i === curIdx) {
      el.classList.add('active');
      if (!scrolled) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        scrolled = true;
      }
    }
  });
}

function openLyricsForCurrent() {
  showView('lyrics');
  const song = SONGS[currentSongIndex];
  if (song) showLyricsForSong(song.id);
}

function playFromLyrics() {
  if (selectedLyricsSongId) playSongById(selectedLyricsSongId);
}
