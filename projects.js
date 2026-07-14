/* ============================================================
   PROJECTS
   Featured projects support an optional `thumb` field (path to
   an image under assets/projects/). If omitted, the card falls
   back to a plain text tile — see renderProjectThumb() in script.js.
   ============================================================ */
const FEATURED_PROJECTS = [
  {
    id: 'proj-horrorisland', name: 'HorrorIsland', status: 'dev',
    hook: 'Solo-programmed horror game, upcoming on Steam.',
    desc: "An upcoming 3D horror game for Steam — inspired by Resident Evil, Silent Hill, and Amnesia — built in Unity within a 4-person indie team. I'm the only programmer, owning gameplay mechanics, core systems, NPC/enemy AI, the build pipeline, Steam SDK integration, and a plug-and-play save/load system with in-editor data protection and auto-persistent runtime IDs for ScriptableObjects — while also contributing to game design, project management, and overall direction. Tentative release: October 2026.",
    tags: ['Horror', 'Solo Programmer', 'NPC AI', 'Save Systems'],
    thumb: 'assets/projects/horrorisland.jpg',
    links: []
  },
  {
    id: 'proj-kurukshetra', name: 'Kurukshetra: Ascension', status: 'released',
    hook: 'Cross-platform multiplayer roguelite CCG.',
    desc: 'A cross-platform multiplayer roguelite CCG built in Unity for Studio Sirah, released on Google Play, the App Store, and Steam.',
    thumb: 'assets/projects/kurukshetra.jpg',
    tags: ['Multiplayer', 'CCG', 'LiveOps', 'Object Pooling', 'Addressables'],
    links: [
      { icon: 'fa-brands fa-google-play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.StudioSirah.KurukshetraAscension' },
      { icon: 'fa-brands fa-app-store-ios', label: 'App Store', url: 'https://apps.apple.com/in/app/kurukshetra-ascension/id1601430224' },
      { icon: 'fa-brands fa-steam', label: 'Steam', url: 'https://store.steampowered.com/app/1857540/Kurukshetra_Ascension/' },
    ]
  },
  {
    id: 'proj-aristocrat', name: 'Aristocrat Slot Games', status: 'released',
    hook: 'NFL Slots, Heart of Vegas, Lightning Link & Cashman Casino — 10M+ downloads each.',
    desc: "A portfolio of mobile social slot games at Aristocrat, spanning two stints. As a slot prototype developer in my first stint, I worked on Heart of Vegas, Lightning Link, and Cashman Casino — each with 10M+ downloads and ranking among the top social slots. In my current stint, I'm a full Unity developer on NFL Slots, an officially NFL-partnered title.",
    tags: ['Slots', 'F2P', 'LiveOps'],
    thumb: 'assets/projects/aristocrat-slots.jpg',
    links: [
      { icon: 'fa-brands fa-google-play', label: 'NFL Slots (Google Play)', url: 'https://play.google.com/store/apps/details?id=com.productmadness.nflslots' },
      { icon: 'fa-brands fa-app-store-ios', label: 'Heart of Vegas (App Store)', url: 'https://apps.apple.com/us/app/heart-of-vegas-casino-slots/id785537179' },
      { icon: 'fa-brands fa-google-play', label: 'Lightning Link (Google Play)', url: 'https://play.google.com/store/apps/details?id=com.productmadness.lightninglink&hl=en_GB' },
      { icon: 'fa-brands fa-app-store-ios', label: 'Cashman Casino (App Store)', url: 'https://apps.apple.com/us/app/cashman-casino-slots-games/id1123582513' },
    ]
  },
  {
    id: 'proj-black', name: 'BLACK: Extraction Raiders', status: 'released',
    hook: 'Multiplayer social FPS for mobile.',
    desc: 'A multiplayer social FPS for mobile by LILA Games, built in Unity using DOTS/ECS and Photon Fusion for real-time networked gameplay.',
    tags: ['FPS', 'DOTS/ECS', 'Multiplayer'],
    thumb: 'assets/projects/black.jpg',
    links: [{ icon: 'fa-brands fa-google-play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.lilagames.black' }]
  },
  {
    id: 'proj-btcking', name: 'BTC King', status: 'released',
    hook: 'Solo-built browser game, itch.io front page.',
    desc: 'A browser game solo-built and published on itch.io, featured on the front page for two weeks with ongoing player engagement.',
    tags: ['Web', 'Solo Dev'],
    thumb: 'assets/projects/btc-king.jpg',
    links: [{ icon: 'fa-brands fa-itch-io', label: 'itch.io', url: 'https://aklgupta.itch.io' }]
  },
  {
    id: 'proj-lighthouse', name: 'The Lighthouse', status: 'dev',
    hook: 'Narrative-driven walking-sim mystery, two-person indie team.',
    desc: "A narrative-driven walking simulator mystery with realistic graphics, cinematic scenes, and branching stories — early in development with a two-person indie team, where I work as programmer, game designer, and project manager. Built with an event-driven architecture, custom editor tooling, and test-driven development from the start. Working title.",
    tags: ['Narrative', 'Cinemachine', 'Custom Editors', 'TDD'],
    thumb: 'assets/projects/lighthouse.jpg',
    links: []
  },
];

const STATUS_META = {
  released: { label: 'Released', cls: 'status-released' },
  dev: { label: 'In Development', cls: 'status-dev' },
  proto: { label: 'Prototype', cls: 'status-proto' },
  tool: { label: 'Internal Tool', cls: 'status-tool' },
  experimental: { label: 'Experimental', cls: 'status-experimental' },
};

const MORE_PROJECTS = [
  { name: 'Mirror Runner', status: 'released', desc: 'Hyper-casual Android runner — controls two characters at once via gyroscope, dodging obstacles together.' },
  { name: 'Robo Killer', status: 'proto', desc: 'Single-level 3D FPS developed in Unity for PC.' },
  { name: 'Chalk Stories — Lonely Oni', status: 'proto', desc: 'Narrative-driven top-down RPG for PC — on hold since the team disbanded.' },
  { name: 'Rogue Planets', status: 'proto', desc: 'Upcoming action roguelike for PC/Steam/GOG — planned as the first title of an indie studio I intend to launch in Jan 2027. Currently pre-production.' },
  { name: 'Pickuiz', status: 'released', desc: "Image-based Android quiz app with a LAMP backend, built as a college final-year project — worked around an early Unity version's lack of native gallery upload." },
  { name: 'Boxes of Trouble', status: 'released', desc: 'Infinite-runner style Android game, published on Google Play.', link: 'https://aklgupta.itch.io/boxes-of-trouble' },
  { name: 'Custom XML Builder', status: 'tool', desc: 'In-house Unity developer tool for XML authoring.' },
  { name: 'Music Manager', status: 'tool', desc: 'Custom Windows utility built in Unity to manage audio files.' },
  { name: 'EOD', status: 'dev', desc: 'Tetris meets base-building with resource management, in Godot.' },
  { name: 'BaseTD', status: 'dev', desc: 'Upcoming tower-defense / base-defense game for PC, in Godot.' },
  { name: 'Space Invader Clone', status: 'experimental', desc: 'PC game with multiple modes, built in GameMaker to learn the engine.' },
  { name: 'Web PM Tool', status: 'dev', desc: 'Browser-based project management tool on the LAMP stack (ongoing).' },
  { name: 'CSS Generator', status: 'experimental', desc: 'Browser-based WYSIWYG CSS generator, built in JavaScript.' },
  { name: 'TwineJS Fork', status: 'experimental', desc: 'Forked the open-source TwineJS engine and added several new features.' },
];
