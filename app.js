/* =====================================================
   BEATVIBES LANDING PAGE — APP.JS
   Interactive layer: dynamic catalog, lyrics, albums,
   playlists, theme, player, etc.
   ===================================================== */

'use strict';

// ── DATA ───────────────────────────────────────────
const SONGS_DATA = [
  { id: 'bad-wte', title: 'bad', artist: 'wave to earth', genre: 'rb', duration: '3:20', plays: '150M', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301'},
  { id: 'peach-eyes-wte', title: 'peach eyes', artist: 'wave to earth', genre: 'rb', duration: '3:12', plays: '95M', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301' },
  { id: 'mantra-jennie', title: 'Mantra', artist: 'JENNIE', genre: 'pop', duration: '3:15', plays: '200M', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179' },
  { id: 'seoul-city-jennie', title: 'Seoul City', artist: 'JENNIE', genre: 'pop', duration: '3:45', plays: '120M', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179' },
  { id: 'golden-hour', title: 'Golden Hour', artist: 'JVKE', genre: 'rb', duration: '3:29', plays: '980M', art: 'https://i.scdn.co/image/ab67616d0000b273970477142436f5610842e23d' },
  { id: 'anti-hero', title: 'Anti-Hero', artist: 'Taylor Swift', genre: 'pop', duration: '3:20', plays: '1.2B', art: 'https://i.scdn.co/image/ab67616d0000b273bb0e0863cc745b159fa21ef3' },
  { id: 'flowers', title: 'Flowers', artist: 'Miley Cyrus', genre: 'pop', duration: '3:20', plays: '1.5B', art: 'https://i.scdn.co/image/ab67616d0000b273f421f4575971ef0841584c6c' },
  { id: 'creepin', title: 'Creepin\'', artist: 'Metro Boomin', genre: 'hiphop', duration: '3:41', plays: '800M', art: 'https://i.scdn.co/image/ab67616d0000b273926f4362d1373fc34ea40d04' },
  { id: 'die-for-you', title: 'Die For You', artist: 'The Weeknd & Ariana Grande', genre: 'rb', duration: '3:52', plays: '1.1B', art: 'https://i.scdn.co/image/ab67616d0000b27388a3db4441094380b06b251d' },
  { id: 'rich-flex', title: 'Rich Flex', artist: 'Drake & 21 Savage', genre: 'hiphop', duration: '3:59', plays: '900M', art: 'https://i.scdn.co/image/ab67616d0000b273cd94d2d2d86cae4a4d71d03e' },
  { id: 'cuff-it', title: 'Cuff It', artist: 'Beyoncé', genre: 'rb', duration: '3:45', plays: '700M', art: 'https://i.scdn.co/image/ab67616d0000b273e970163351d45136ed057d39' },
  { id: 'kill-bill', title: 'Kill Bill', artist: 'SZA', genre: 'rb', duration: '2:33', plays: '1.3B', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c' },
  { id: 'calm-down', title: 'Calm Down', artist: 'Rema & Selena Gomez', genre: 'pop', duration: '3:59', plays: '1.2B', art: 'https://i.scdn.co/image/ab67616d0000b27386057a79e60742129759ba0e' },
  { id: 'vampire', title: 'Vampire', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:39', plays: '600M', art: 'https://i.scdn.co/image/ab67616d0000b273e735d469f41759b3636780c3' },
  { id: 'cruel-summer', title: 'Cruel Summer', artist: 'Taylor Swift', genre: 'pop', duration: '2:58', plays: '1.6B', art: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a0962f4484' },
  { id: 'seven', title: 'Seven', artist: 'Jung Kook ft. Latto', genre: 'kpop', duration: '3:04', plays: '900M', art: 'https://i.scdn.co/image/ab67616d0000b2739343510e40285a8647c2966e' },
  { id: 'paint-the-town', title: 'Paint The Town Red', artist: 'Doja Cat', genre: 'hiphop', duration: '3:51', plays: '800M', art: 'https://i.scdn.co/image/ab67616d0000b273e66014e760ef164c98862808' },
  { id: 'traitor', title: 'Traitor', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:49', plays: '1.1B', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562' },
  { id: 'pink-wte', title: 'pink', artist: 'wave to earth', genre: 'rb', duration: '3:30', plays: '80M', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301' },
  { id: 'espresso', title: 'Espresso', artist: 'Sabrina Carpenter', genre: 'pop', duration: '2:55', plays: '500M', art: 'https://i.scdn.co/image/ab67616d0000b273449339798544257121287c94' },

  // 0.1 flaws and all. Tracks (Hidden from main catalog)
  { id: 'sunny-days', title: 'sunny days', artist: 'wave to earth', genre: 'rb', duration: '3:45', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'evening-glow', title: 'evening glow', artist: 'wave to earth', genre: 'rb', duration: '4:01', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'pink-horizon', title: 'pink horizon', artist: 'wave to earth', genre: 'rb', duration: '3:58', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'calla', title: 'calla', artist: 'wave to earth', genre: 'rb', duration: '3:15', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'love-wte', title: 'love.', artist: 'wave to earth', genre: 'rb', duration: '4:20', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'homesick', title: 'homesick', artist: 'wave to earth', genre: 'rb', duration: '3:55', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'dried-flower', title: 'dried flower', artist: 'wave to earth', genre: 'rb', duration: '3:40', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'sunburn', title: 'sunburn', artist: 'wave to earth', genre: 'rb', duration: '3:25', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'akira', title: 'akira', artist: 'wave to earth', genre: 'rb', duration: '4:10', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'nouvelle-vague', title: 'nouvelle vague', artist: 'wave to earth', genre: 'rb', duration: '3:50', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },
  { id: 'so-real', title: 'so real', artist: 'wave to earth', genre: 'rb', duration: '3:35', art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301', hideFromCatalog: true },

  // RUBY Tracks (Hidden)
  { id: 'intro-jane', title: 'Intro: JANE', artist: 'JENNIE', genre: 'pop', duration: '1:45', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'like-jennie', title: 'like JENNIE', artist: 'JENNIE', genre: 'pop', duration: '3:20', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'start-a-war', title: 'start a war', artist: 'JENNIE', genre: 'pop', duration: '3:10', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'handlebars', title: 'Handlebars', artist: 'JENNIE', genre: 'pop', duration: '3:55', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'with-the-ie', title: 'with the IE', artist: 'JENNIE', genre: 'pop', duration: '3:05', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'extral', title: 'ExtraL', artist: 'JENNIE', genre: 'pop', duration: '3:40', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'love-hangover', title: 'Love Hangover', artist: 'JENNIE', genre: 'pop', duration: '3:50', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'zen', title: 'ZEN', artist: 'JENNIE', genre: 'pop', duration: '3:25', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'damn-right', title: 'Damn Right', artist: 'JENNIE', genre: 'pop', duration: '4:05', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'fts', title: 'F.T.S.', artist: 'JENNIE', genre: 'pop', duration: '3:10', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'filter-jennie', title: 'Filter', artist: 'JENNIE', genre: 'pop', duration: '3:30', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'starlight', title: 'Starlight', artist: 'JENNIE', genre: 'pop', duration: '3:20', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },
  { id: 'twin', title: 'twin', artist: 'JENNIE', genre: 'pop', duration: '3:15', art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179', hideFromCatalog: true },

  // SOUR Tracks (Hidden)
  { id: 'brutal', title: 'brutal', artist: 'Olivia Rodrigo', genre: 'pop', duration: '2:23', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },
  { id: 'traitor-album', title: 'traitor', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:49', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },
  { id: 'drivers-license-album', title: 'drivers license', artist: 'Olivia Rodrigo', genre: 'pop', duration: '4:02', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },
  { id: 'deja-vu', title: 'deja vu', artist: 'Olivia Rodrigo', genre: 'pop', duration: '3:35', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },
  { id: 'good-4-u-album', title: 'good 4 u', artist: 'Olivia Rodrigo', genre: 'pop', duration: '2:58', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },
  { id: 'happier', title: 'happier', artist: 'Olivia Rodrigo', genre: 'pop', duration: '2:55', art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562', hideFromCatalog: true },

  // SOS Tracks (Hidden)
  { id: 'sos-track', title: 'SOS', artist: 'SZA', genre: 'rb', duration: '1:57', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'kill-bill-album', title: 'Kill Bill', artist: 'SZA', genre: 'rb', duration: '2:33', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'seek-destroy', title: 'Seek & Destroy', artist: 'SZA', genre: 'rb', duration: '3:23', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'low', title: 'Low', artist: 'SZA', genre: 'rb', duration: '3:01', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'blind', title: 'Blind', artist: 'SZA', genre: 'rb', duration: '2:30', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'snooze-album', title: 'Snooze', artist: 'SZA', genre: 'rb', duration: '3:21', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'shirt-album', title: 'Shirt', artist: 'SZA', genre: 'rb', duration: '3:01', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true },
  { id: 'i-hate-u', title: 'I Hate U', artist: 'SZA', genre: 'rb', duration: '2:54', art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c', hideFromCatalog: true }

];

const ALBUMS_DATA = [
  { 
    id: 'flaws-and-all', title: '0.1 Flaws and All.', artist: 'wave to earth', 
    released: '20 de abril de 2023', duration: '52:14', 
    art: 'https://i.scdn.co/image/ab67616d0000b2734135930263f35f299103e301',
    tracks: [
      { title: 'bad', duration: '3:20' },
      { title: 'sunny days', duration: '3:45' },
      { title: 'peach eyes', duration: '3:12' },
      { title: 'evening glow', duration: '4:01' },
      { title: 'pink horizon', duration: '3:58' },
      { title: 'pink', duration: '3:30' },
      { title: 'calla', duration: '3:15' },
      { title: 'love.', duration: '4:20' },
      { title: 'homesick', duration: '3:55' },
      { title: 'dried flower', duration: '3:40' },
      { title: 'sunburn', duration: '3:25' },
      { title: 'akira', duration: '4:10' },
      { title: 'nouvelle vague', duration: '3:50' },
      { title: 'so real', duration: '3:35' }
    ]
  },
  { 
    id: 'ruby-jennie', title: 'RUBY', artist: 'JENNIE', 
    released: '2025', duration: '48:30', 
    art: 'https://i.scdn.co/image/ab67616d0000b2737a34657159f802f354972179',
    tracks: [
      { title: 'Intro: JANE', duration: '1:45' },
      { title: 'like JENNIE', duration: '3:20' },
      { title: 'start a war', duration: '3:10' },
      { title: 'Handlebars', duration: '3:55' },
      { title: 'with the IE', duration: '3:05' },
      { title: 'ExtraL', duration: '3:40' },
      { title: 'Mantra', duration: '3:15' },
      { title: 'Love Hangover', duration: '3:50' },
      { title: 'ZEN', duration: '3:25' },
      { title: 'Damn Right', duration: '4:05' },
      { title: 'F.T.S.', duration: '3:10' },
      { title: 'Filter', duration: '3:30' },
      { title: 'Seoul City', duration: '3:45' },
      { title: 'Starlight', duration: '3:20' },
      { title: 'twin', duration: '3:15' }
    ]
  },
  { 
    id: 'sour-album', title: 'SOUR', artist: 'Olivia Rodrigo', 
    released: '21 de maio de 2021', duration: '34:41', 
    art: 'https://i.scdn.co/image/ab67616d0000b273a9139615731758280f7aa562',
    tracks: [
      { title: 'brutal', duration: '2:23' },
      { title: 'traitor', duration: '3:49' },
      { title: 'drivers license', duration: '4:02' },
      { title: 'deja vu', duration: '3:35' },
      { title: 'good 4 u', duration: '2:58' },
      { title: 'happier', duration: '2:55' }
    ]
  },
  { 
    id: 'sos-album', title: 'SOS', artist: 'SZA', 
    released: '9 de dezembro de 2022', duration: '67:52', 
    art: 'https://i.scdn.co/image/ab67616d0000b2730ca7897084534f434b9d031c',
    tracks: [
      { title: 'SOS', duration: '1:57' },
      { title: 'Kill Bill', duration: '2:33' },
      { title: 'Seek & Destroy', duration: '3:23' },
      { title: 'Low', duration: '3:01' },
      { title: 'Blind', duration: '2:30' },
      { title: 'Snooze', duration: '3:21' },
      { title: 'Shirt', duration: '3:01' },
      { title: 'I Hate U', duration: '2:54' }
    ]
  }
];

function getArtBg(art) {
  if (art && art.startsWith('http')) return `url('${art}')`;
  return art;
}

const FULL_LYRICS = {
  'As It Was': [
    "Hold on, Harry, you're no good alone",
    "Why are you sitting on the floor?",
    "What kind of pills are you on?",
    "Ringin' the bell, nobody's coming to help",
    "Your daddy lives by himself",
    "He just wants to know that you're well",
    "In this world, it's just us",
    "You know it's not the same as it was",
    "In this world, it's just us",
    "You know it's not the same as it was",
    "As it was, as it was",
    "You know it's not the same",
    "Answer the phone, Harry, you're no good alone",
    "Why are you sitting on the floor?",
    "What kind of pills are you on?",
    "Ringin' the bell, nobody's coming to help",
    "Your daddy lives by himself",
    "He just wants to know that you're well",
    "In this world, it's just us",
    "You know it's not the same as it was",
    "In this world, it's just us",
    "You know it's not the same as it was",
    "As it was, as it was",
    "You know it's not the same"
  ],
  'Blinding Lights': [
    "I've been on my own for long enough",
    "Maybe you can show me how to love, maybe",
    "I'm going through withdrawals",
    "You don't even have to do too much",
    "You can turn me on with just a touch, baby",
    "I look around and Sin City's cold and empty",
    "No one's around to judge me",
    "I can't see clearly when you're gone",
    "I said, ooh, I'm blinded by the lights",
    "No, I can't sleep until I feel your touch",
    "I said, ooh, I'm drowning in the night",
    "Oh, when I'm like this, you're the one I trust",
    "I'm running out of time",
    "Cause I can see the sun light up the sky",
    "So I hit the road in overdrive, baby",
    "Oh, the city's cold and empty",
    "No one's around to judge me",
    "I can't see clearly when you're gone",
    "I said, ooh, I'm blinded by the lights",
    "No, I can't sleep until I feel your touch",
    "I said, ooh, I'm drowning in the night",
    "Oh, when I'm like this, you're the one I trust"
  ],
  'Unholy': [
    "Lucky, lucky girl, she got a married man",
    "She don't give a damn, she's unholy",
    "Mummy don't know Daddy's getting hot",
    "At the body shop, doing something unholy",
    "He's lucky, lucky girl, she got a married man",
    "She don't give a damn, she's unholy",
    "Mummy don't know Daddy's getting hot",
    "At the body shop, doing something unholy",
    "Lucky, lucky girl, she got a married man",
    "She don't give a damn, she's unholy",
    "Mummy don't know Daddy's getting hot",
    "At the body shop, doing something unholy",
    "Ayy, ayy, ayy, ayy",
    "She got a married man",
    "Doing something unholy"
  ],
  'Dynamite': [
    "Cos ah, ah, I'm in the stars tonight",
    "So watch me bring the fire and set the night alight",
    "Shoes on, get up in the morn",
    "Cup of milk, let's rock and roll",
    "King Kong, kick the drum, rolling on like a rolling stone",
    "Sing song when I'm walking home",
    "Jump up to the top, LeBron",
    "Ding dong, call me on my phone",
    "Ice tea and a game of ping pong",
    "This is getting heavy",
    "Can you hear the bass boom, I'm ready",
    "Life is sweet as honey",
    "Yeah this beat cha ching like money",
    "Disco overload, I'm into that, I'm good to go",
    "I'm diamond, you know I glow up",
    "Hey, so let's go",
    "Cos ah, ah, I'm in the stars tonight",
    "So watch me bring the fire and set the night alight",
    "Shining through the city with a little funk and soul",
    "So I'ma light it up like dynamite, woah",
    "Bring the fire and set the night alight (hey!)",
    "Shining through the city with a little funk and soul",
    "So I'ma light it up like dynamite, woah"
  ],
  'Golden Hour': [
    "It's your golden hour (oh-oh-oh)",
    "You slow down time in your unbeatable glow (oh-oh-oh)",
    "We were just two lovers, feet in the sand",
    "She was the goddess, I was the man",
    "We were just two lovers, feet in the sand",
    "I was the goddess, she was the man",
    "I'm in your golden hour (oh-oh-oh)",
    "You slow down time in your unbeatable glow (oh-oh-oh)",
    "I'm in your golden hour"
  ],
  'Seven': [
    "Weight of the world on your shoulders",
    "I kiss your waist and ease your mind",
    "I must be favored to know ya",
    "I take my hands and trace your lines",
    "It's the way that we can ride",
    "It's the way that we can ride (oh-oh-oh-oh)",
    "Think I met you in another life",
    "So I break you off a stick of dynamite",
    "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)",
    "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)",
    "Every hour, every minute, every second",
    "You know night after night",
    "I'll be lovin' you right, seven days a week"
  ],
  'Calm Down': [
    "Vibez",
    "Another banger",
    "Baby, calm down, calm down",
    "Girl, this your body put in my heart for lockdown, for lockdown, oh, lockdown",
    "Girl, you sweet like Fanta, Fanta, oh, Fanta, Fanta",
    "If I tell you say, I love you, you no dey form yanga, oh, yanga, no dey form yanga",
    "No tell me no, no, no, no, woah, woah, woah, woah",
    "Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh",
    "Baby, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love",
    "You got me like woah-woah-woah-woah-woah-woah-woah-woah-woah",
    "Shawty, come gimme your lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-lo-love, mm-mm"
  ],
  'Starboy': [
    "I'm tryna put you in the worst mood, ah",
    "P1 cleaner than your church shoes, ah",
    "Milli point two just to hurt you, ah",
    "All red Lamb' just to tease you, ah",
    "None of these toys they on lease too, ah",
    "Made your whole year in a week too, main bitch out your league too, ah",
    "Side bitch out of your league too, ah",
    "House so empty, need a centerpiece",
    "Twenty racks a table, cut from ebony",
    "Cut that ivory into skinny pieces",
    "Then she clean it with her face, man, I love my baby, ah",
    "You talkin' money, need a hearing aid",
    "You talkin' 'bout me, I don't see a shade",
    "Switch up my style, I take any lane",
    "I switch up my cup, I kill any pain",
    "Look what you've done",
    "I'm a motherfuckin' starboy",
    "Look what you've done",
    "I'm a motherfuckin' starboy"
  ],
  'Anti-Hero': [
    "I have this thing where I get older but just never wiser",
    "Midnights become my afternoons",
    "When my depression works the graveyard shift",
    "All of the people I've ghosted stand there in the room",
    "I should not be left to my own devices",
    "They come with prices and vices",
    "I end up in crisis",
    "(Tale as old as time)",
    "I wake up screaming from dreaming",
    "One day, I'll watch as you're leaving",
    "'Cause you got tired of my scheming",
    "(For the last time)",
    "It's me, hi",
    "I'm the problem, it's me",
    "At teatime, everybody agrees",
    "I'll stare directly at the sun but never in the mirror",
    "It must be exhausting, always rooting for the anti-hero",
    "Sometimes I feel like everybody is a sexy baby",
    "And I'm a monster on the hill",
    "Too big to hang out, slowly lurching toward your favorite city",
    "Pierced through the heart, but never killed",
    "Did you hear my covert narcissism I disguise as altruism",
    "Like some kind of congressman?",
    "(Tale as old as time)",
    "I wake up screaming from dreaming",
    "One day, I'll watch as you're leaving",
    "And life will lose all its meaning",
    "(For the last time)",
    "It's me, hi",
    "I'm the problem, it's me (I'm the problem, it's me)",
    "At teatime, everybody agrees",
    "I'll stare directly at the sun but never in the mirror",
    "It must be exhausting, always rooting for the anti-hero",
    "I have this dream my daughter-in-law kills me for the money",
    "She thinks I left them in the will",
    "The family gathers 'round and reads it and then someone screams out",
    "\"She's laughing up at us from hell\"",
    "It's me, hi",
    "I'm the problem, it's me (I'm the problem, it's me)",
    "At teatime, everybody agrees",
    "I'll stare directly at the sun but never in the mirror",
    "It must be exhausting, always rooting for the anti-hero"
  ],
  'Flowers': [
    "We were good, we were gold",
    "Kind of dream that can't be sold",
    "We were right 'til we weren't",
    "Built a home and watched it burn",
    "Mmm, I didn't wanna leave you, I didn't wanna lie",
    "Started to cry, but then remembered I",
    "I can buy myself flowers",
    "Write my name in the sand",
    "Talk to myself for hours",
    "Say things you don't understand",
    "I can take myself dancing",
    "And I can hold my own hand",
    "Yeah, I can love me better than you can",
    "Can love me better, I can love me better, baby",
    "Can love me better, I can love me better, baby",
    "Paint my nails, cherry-red",
    "Match the roses that you left",
    "No remorse, no regret",
    "I forgive every word you said",
    "Ooh, I didn't wanna leave you, baby, I didn't wanna fight",
    "Started to cry, but then remembered I",
    "I can buy myself flowers",
    "Write my name in the sand",
    "Talk to myself for hours, yeah",
    "Say things you don't understand",
    "I can take myself dancing, yeah",
    "I can hold my own hand",
    "Yeah, I can love me better than you can",
    "Can love me better, I can love me better, baby",
    "Can love me better, I can love me better, baby",
    "Can love me better, I can love me better, baby",
    "Can love me better, I...",
    "(Ooh, I)",
    "I didn't wanna leave you, I didn't wanna fight",
    "Started to cry, but then remembered I",
    "I can buy myself flowers",
    "Write my name in the sand",
    "Talk to myself for hours (Yeah)",
    "Say things you don't understand",
    "I can take myself dancing",
    "And I can hold my own hand",
    "Yeah, I can love me better than",
    "Yeah, I can love me better than you can, uh",
    "Can love me better, I can love me better, baby",
    "Can love me better, I can love me better, baby (Than you can)",
    "Can love me better, I can love me better, baby",
    "Can love me better"
  ],
  'Kill Bill': [
    "I'm still a fan even though I was salty",
    "Hate to see you with some other broad, know you happy",
    "Hate to see you happy if I'm not the one drivin'",
    "I'm so mature, I'm so mature",
    "I'm so mature, I got me a therapist to tell me there's other men",
    "I don't want none, I just want you",
    "If I can't have you, no one should, I might",
    "I might kill my ex, not the best idea",
    "His new girlfriend's next, how'd I get here?",
    "I might kill my ex, I still love him, though",
    "Rather be in jail than alone",
    "I get the sense that it's a lost cause",
    "I get the sense that you might really love her",
    "The text gon' be evidence, this text is evidence",
    "I tried to ration with you, no murders, no crimes of passion",
    "But, damn, you was out of reach",
    "You was at the farmer's market with your perfect peach",
    "Now I'm in amazement, playin' on my patience",
    "Now you layin' face-down, got me sayin' over a beat",
    "I'm so mature, I'm so mature",
    "I'm so mature, I got me a therapist to tell me there's other men",
    "I don't want none, I just want you",
    "If I can't have you, no one will",
    "I might kill my ex, not the best idea",
    "His new girlfriend's next, how'd I get here?",
    "I might kill my ex, I still love him, though",
    "Rather be in jail than alone",
    "I did it all for love (love)",
    "I did it all on no drugs (drugs)",
    "I did all of this sober",
    "I did it all for us, oh",
    "I did it all for love (love)",
    "I did it all of this on no drugs (drugs)",
    "I did all of this sober",
    "Don't you know I did it all for us?",
    "I just killed my ex, not the best idea",
    "Killed his girlfriend next, how'd I get here?",
    "I just killed my ex, I still love him, though",
    "Rather be in hell than alone"
  ],
  'Vampire': [
    "Hate to give the satisfaction, asking how you're doing now",
    "How's the castle built off people you pretend to care about?",
    "Just what you wanted, look at you, cool guy, you got it",
    "I see the parties and the diamonds, sometimes when I close my eyes",
    "Six months of torture you sold as some forbidden paradise",
    "I loved you truly, gotta laugh at the stupidity",
    "'Cause I've made some real big mistakes",
    "But you make the worst one",
    "Looked so fine, I should have known",
    "It was strange, you only come out at night",
    "I used to think I was smart",
    "But you made me look so naïve",
    "The way you sold me for parts",
    "As you sunk your teeth into me, oh",
    "Bloodsucker, famefucker",
    "Bleedin' me dry like a goddamn vampire",
    "And every girl I ever talked to told me you were bad, bad news",
    "You called 'em crazy, God, I hate the way I called 'em crazy too",
    "You're so convincin'",
    "How do you lie without flinchin'?",
    "How do you lie?",
    "What a mesmerizin', paralyzin', fucked-up thrill",
    "Can't figure out just how you do it and God knows I never will",
    "And for me, not her",
    "'Cause girls your age know better",
    "I've made some real big mistakes",
    "But you make the worst one",
    "Looked so fine, I should have known",
    "It was strange, you only come out at night",
    "I used to think I was smart",
    "But you made me look so naïve",
    "The way you sold me for parts",
    "As you sunk your teeth into me, oh",
    "Bloodsucker, famefucker",
    "Bleedin' me dry like a goddamn vampire",
    "You said it was true love, but wouldn't that be hard?",
    "You can't love anyone 'cause that would mean you had a heart",
    "I tried to help you out, now I know that I can't",
    "'Cause how you think's the kind of thing I'll never understand",
    "(How you think's the kind of thing I'll never understand)",
    "You build me up just to watch me fall",
    "You're not the treasure, you're the fall",
    "You're just a leech, a vampire",
    "I'm so tired, I'm so tired",
    "(Bloodsucker, famefucker)",
    "(Bleedin' me dry like a goddamn vampire)"
  ],
  'Cruel Summer': [
    "(Yeah, yeah, yeah, yeah)",
    "Fever dream high in the quiet of the night",
    "You know that I caught it (Oh yeah, you're right, I want it)",
    "Bad, bad boy, shiny toy with a price",
    "You know that I bought it (Oh yeah, you're right, I want it)",
    "Killing me slow, out the window",
    "I'm always waiting for you to be waiting below",
    "Devils roll the dice, angels roll their eyes",
    "What doesn't kill me makes me want you more",
    "And it's new, the shape of your body",
    "It's blue, the feeling I've got",
    "And it's ooh, whoa-oh",
    "It's a cruel summer",
    "It's cool, that's what I tell 'em",
    "No rules in breakable heaven",
    "But ooh, whoa-oh",
    "It's a cruel summer with you",
    "Hang your head low in the glow of the vending machine",
    "I'm not dying (Oh yeah, you're right, I want it)",
    "We say that we'll just screw it up in these trying times",
    "We're not trying (Oh yeah, you're right, I want it)",
    "So cut the headlights, summer's a knife",
    "I'm always waiting for you just to cut to the bone",
    "Devils roll the dice, angels roll their eyes",
    "And if I bleed, you'll be the last to know",
    "And it's new, the shape of your body",
    "It's blue, the feeling I've got",
    "And it's ooh, whoa-oh",
    "It's a cruel summer",
    "It's cool, that's what I tell 'em",
    "No rules in breakable heaven",
    "But ooh, whoa-oh",
    "It's a cruel summer with you",
    "I'm drunk in the back of the car",
    "And I cried like a baby coming home from the bar (Oh)",
    "Said, \"I'm fine,\" but it wasn't true",
    "I don't wanna keep secrets just to keep you",
    "And I snuck in through the garden gate",
    "Every night that summer just to seal my fate (Oh)",
    "And I scream, \"For whatever it's worth",
    "I love you, ain't that the worst thing you ever heard?\"",
    "He looks up, grinning like a devil",
    "And it's new, the shape of your body",
    "It's blue, the feeling I've got",
    "And it's ooh, whoa-oh",
    "It's a cruel summer",
    "It's cool, that's what I tell 'em",
    "No rules in breakable heaven",
    "But ooh, whoa-oh",
    "It's a cruel summer with you",
    "I'm drunk in the back of the car",
    "And I cried like a baby coming home from the bar (Oh)",
    "Said, \"I'm fine,\" but it wasn't true",
    "I don't wanna keep secrets just to keep you",
    "And I snuck in through the garden gate",
    "Every night that summer just to seal my fate (Oh)",
    "And I scream, \"For whatever it's worth",
    "I love you, ain't that the worst thing you ever heard?\"",
    "He looks up, grinning like a devil"
  ],
  'Espresso': [
    "Now he's thinkin' 'bout me every night, oh",
    "Is it that sweet? I guess so",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "Move it up, down, left, right, oh",
    "Switch it up like Nintendo",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "I can't relate to desperation",
    "My give-a-fucks are on vacation",
    "And I got this one boy and he won't stop calling",
    "When they act this way, I know I got 'em",
    "Too bad your ex don't do it for ya",
    "Walked in and dream-came-trued it for ya",
    "Soft skin and I perfumed it for ya",
    "(Yes) I know I Mountain Dew it for ya",
    "(Yes) That morning coffee, brewed it for ya",
    "(Yes) One touch and I brand-newed it for ya",
    "And now he's thinkin' 'bout me every night, oh",
    "Is it that sweet? I guess so",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "Move it up, down, left, right, oh",
    "Switch it up like Nintendo",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "Holy shit",
    "Is it that sweet? I guess so",
    "I'm working late 'cause I'm a singer",
    "Oh, he looks so cute wrapped 'round my finger",
    "My twisted humor make him laugh so often",
    "My honey bee, come and get this pollen",
    "Too bad your ex don't do it for ya",
    "Walked in and dream-came-trued it for ya",
    "Soft skin and I perfumed it for ya",
    "(Yes) I know I Mountain Dew it for ya",
    "(Yes) That morning coffee, brewed it for ya",
    "(Yes) One touch and I brand-newed it for ya",
    "And now he's thinkin' 'bout me every night, oh",
    "Is it that sweet? I guess so",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "Move it up, down, left, right, oh",
    "Switch it up like Nintendo",
    "Say you can't sleep, baby, I know",
    "That's that me espresso",
    "(That's that me espresso)",
    "Is it that sweet? I guess so"
  ],
   'bad': [
   "How could my day be bad when I'm with you?",
   "You're the only one who makes me laugh",
   "So how can my day be bad?",
   "It's a day for you",
   "Lately, life's so boring",
   "I've been watching Netflix all day long",
   "I thought there would be",
   "No things left to watch",
   "So I let myself out",
   "When I went to the park",
   "I recognised you at a glance",
   "Face to face, we just smiled",
   "We already know that we'll be together (we'll be together)",
   "How could my day be bad when I'm with you?",
   "You're the only one who makes me laugh",
   "So how can my day be bad?",
   "It's a day for you, oh, babe",
   "Coffee in the morning, you and the sun",
   "There's a brown hue in your eyes",
   "How pretty it is, I think I'm in love, ooh",
   "When I went to the park",
   "I recognised you at a glance",
   "Face to face, we smiled",
   "And I finally held your hands",
   "How could my day be bad when I'm with you?",
   "You're the only one who makes me laugh",
   "So how can my day be bad?",
   "It's a day for you, oh, babe",
   "How could my day be bad when I'm with you?",
   "You're the only one who gives me love",
   "So how can my day be bad?",
   "It's a day for you, oh, babe"
   ],
   'peach eyes': [
   "Peach eyes and blue skies, I'll be with you on your ride",
   "It's on the moonlight, how many songs I write",
   "You'll be my sunlight, how could I not rely",
   "On you, peach eyes?",
   "You're mine as soon as I watch your eyes",
   "I couldn't find fear on my damn mind",
   "Oh my, I'm heading into you",
   "Hope you don't mind",
   "Hope you don't mind",
   "I'm talking to you",
   "Oh, I'm talking, you",
   "My life's so jerky, yeah",
   "So would you let me",
   "To hide inside your eyes?",
   "Your peach eyes",
   "Peach eyes and blue skies, I'll be with you on your ride",
   "It's on the moonlight, how many songs I write",
   "You'll be my sunlight, how could I not rely",
   "On you, peach eyes?",
   "The countless days I've been without you",
   "(You are the one I need)",
   "You know, besides",
   "I won't find nobody to give my, aye",
   "Whole life with you",
   "Oh, you",
   "Peach eyes and blue skies",
   "Oh, it's on the moonlight",
   "You'll be my sunlight",
   "Peach eyes",
   "Peach eyes and blue skies, I'll be with you on your ride",
   "It's on the moonlight, how many songs I write",
   "You'll be my sunlight, how could I not rely",
   "On you, peach eyes?",
   "Peach eyes and blue skies",
   "Oh, it's on the moonlight",
   "You'll be my sunlight, how could I not rely",
   "On you, peach eyes?"
   ],
   'Mantra': [
   "Pretty, pretty",
   "Pretty, pretty",
   "This that pretty-girl mantra, this that flaunt ya, just touched down in L.A.",
   "Pretty girls don't do drama 'less we wanna, it'll be depending on the day",
   "Pretty girls packed in a Defender, know I'ma defend her, never let her catch no stray",
   "This that pretty-girl mantra, she's that stunna, make you wanna swing both ways",
   "Mix me with the drama (Drama)",
   "Check you like commas (Ah-ah, ah-ah)",
   "My clothes are pajamas ('Jamas)",
   "Straight from the cold plunge (Ah-ah, ah-ah)",
   "Daytime baddie use her mind",
   "Quick switch of the fit for the night (Night)",
   "Swеrvin' through the lane, we'll bе twenty minute late",
   "'Cause we had to do an In-N-Out drive-by",
   "It's not that deep (Deep), I'm not that drunk (Drunk)",
   "Sometimes, girls just gotta have fun",
   "Throw it back, all that ass",
   "Me and my sis, way too attached",
   "It's not that deep (Deep), we're not that dumb (Dumb)",
   "Look at them Bonnies on the run",
   "Inside glowin' like the sun (Sun, s—)",
   "You're gonna feel this every day (Day)",
   "This that pretty-girl mantra, this that flaunt ya, just touched down in L.A.​",
   "Pretty girls don't do drama 'less we wanna, it'll be depending on the day",
   "Pretty girls packed in a Defender, know I'ma defend her, never let her catch no stray",
   "This that pretty-girl mantra, she's that stunna, make you wanna swing both ways",
   "Love what it feel like (Feel like)",
   "To be off of the grid like all night",
   "Oh, with my bih, like (Bitch, like)",
   "We ain't even tryna talk no one",
   "Swerve off all the creeps, no weird vibes",
   "We ain't never let it ruin a good time",
   "Ain't nobody gon' dim our good light",
   "This them words we're livin' by",
   "This that pretty-girl mantra, this that flaunt ya, just touched down in L.A. (Ah)",
   "Pretty girls don't do drama 'less we wanna, it'll be depending on the day (Ah, ah, ah)",
   "Pretty girls packed in a Defender, know I'ma defend her, never let her catch no stray (Ah, ah)",
   "This that pretty-girl mantra, she's that stunna, make you wanna swing both ways (Ah, ah, ah)",
   "This that pretty-girl mantra, this that flaunt ya, just touched down in L.A. (Ah, ah)",
   "Pretty girls don't do trauma, no new drama, we already got a full day (Ah, ah)",
   "Pretty girls that you gon' remember, know that you could never, nothing ever trigger me (Ah, ah)",
   "This that pretty-girl mantra, she's that stunna, everyone knows she is me",
   "Hahahahahahaha",
   "Pretty"
    ],
   'seoul-city-jennie': [
    "Ooh",
    "Ooh",
    "Ooh",
    "(Mike WiLL Made-It)",
    "Give me hug, need your love, touch my thigh",
    "Tell me what puts you in that mind",
    "Frame it up, draw me in, do me right",
    "Don't you dare leave my sight",
    "I could be, be your prize, pick me up",
    "Flying lights, paradise",
    "In Seoul city",
    "I see your soul",
    "Seoul city",
    "I see your soul",
    "Yeah, yeah",
    "Hey, ayy, hey",
    "+82, some miracle",
    "Only listen to my general, whoa",
    "He says my attitude out of control",
    "Tell me what to do, Mr. General",
    "Oh-oh",
    "Would you make me your boss, pretty please?",
    "Pretty please, let me ease your mind",
    "Look at me, can you breathe? (Ah, ah)",
    "I could give you life",
    "Apple of, of my eye, pick me up",
    "Flying lights, paradise",
    "In Seoul city",
    "I see your soul",
    "Seoul city",
    "I see your soul",
    "Yeah, yeah",
    "Hey, ayy, hey",
    "+82, some miracle",
    "Only listen to my general, whoa",
    "He says my attitude out of control",
    "Tell me what to do, Mr. General",
    "Oh-oh"
  ],
   'pink': [
    "이곳은 모두 자유롭게",
    "푸르게 번져 날아가는 마음",
    "나는 비록 발이 무거워",
    "신발이 닳도록 풀 밭을 뛰었네, 우우",
    "노을이 지는 동안에",
    "분홍 빛이 선명해 너를 그렸네",
    "아름다운 그대",
    "너의 모습",
    "하루가 참 빨라 잊혀지는 만큼",
    "구름을 타고 날아가는 마음",
    "너의 향기를 따라가다",
    "빗방울이 톡 터질때 즈음, 아아",
    "그리워질까",
    "풀 밭을 뛰어, 우우",
    "노을이 지는 동안에",
    "분홍 빛이 선명해",
    "너를 그렸네 아름다운 그대",
    "너의 모습"
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
  const saved = localStorage.getItem('bv-theme') || 'dark';
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
function renderCatalog(filter = 'all', targetGrid = tracksGrid) {
  if (!targetGrid) return;
  targetGrid.innerHTML = '';

  SONGS_DATA.forEach((song, index) => {
    // Se for o grid principal da home, respeita o hideFromCatalog
    if (targetGrid === tracksGrid && song.hideFromCatalog) return;
    
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

function renderFullCatalog() {
  const grid = $('fullTracksGrid');
  if (!grid) return;
  grid.innerHTML = '';
  SONGS_DATA.forEach((song, index) => {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="track-art" style="background-image: ${getArtBg(song.art)}; background-size: cover; background-position: center; aspect-ratio: 1; border-radius: 12px; position: relative; overflow: hidden; margin-bottom: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        <div class="track-play-btn" onclick="playSongById('${song.id}')" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); opacity: 0; transition: 0.3s; cursor: pointer;">
          <svg width="40" height="40" viewBox="0 0 22 22" fill="none"><path d="M8 6l9 5-9 5V6z" fill="white"/></svg>
        </div>
      </div>
      <div class="track-info">
        <h4 class="track-title" style="font-size: 16px; margin-bottom: 4px;">${song.title}</h4>
        <p class="track-artist" style="font-size: 13px; color: var(--txt-2);">${song.artist}</p>
      </div>
    `;
    card.onmouseover = () => card.querySelector('.track-play-btn').style.opacity = '1';
    card.onmouseout = () => card.querySelector('.track-play-btn').style.opacity = '0';
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
  
  const fp = $('floatingPlayer');
  if (fp) fp.classList.add('active');
  
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
  renderFullCatalog();
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
$('fpClose') && $('fpClose').addEventListener('click', () => {
  const fp = $('floatingPlayer');
  if (fp) fp.classList.remove('active');
  playing = false;
  updatePlayPauseUI();
});
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

// ── FULL CATALOG PAGE ──────────────────────────────
(function initFullCatalog() {
  const fullGrid = $('fullTracksGrid');
  if (fullGrid) {
    // No catálogo completo, mostramos TODAS as músicas
    renderCatalog('all', fullGrid);
  }
})();

// ── CONTACT FORM LOGIC ─────────────────────────────
(function initContactForm() {
  const form = $('contatoForm');
  const phoneInput = $('ctPhone');
  
  const emailBtn = $('emailChannelBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'beearochaconceicao@gmail.com';
      
      // Abre o Gmail diretamente no navegador
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
      
      navigator.clipboard.writeText(email).then(() => {
        showToast('Abrindo Gmail e copiando endereço...');
      });
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      if (!x) return;
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = $('ctName').value;
      const email = $('ctEmail').value;
      const phone = $('ctPhone').value;
      const msg = $('ctMsg').value;
      
      if (!name || !email || !phone || !msg) {
        showToast('Por favor, preencha todos os campos.');
        return;
      }
      
      const recipient = 'beearochaconceicao@gmail.com';
      const subject = `Contato BeatVibes - ${name}`;
      // Usando %0A para quebras de linha no Gmail
      const body = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0A%0AMensagem:%0A${msg}`;
      
      // Abre o Gmail com os dados preenchidos
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`, '_blank');
      
      showToast('mensagem enviada com sucesso');
      form.reset();
    });
  }
})();

