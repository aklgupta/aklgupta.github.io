/* ============================================================
   PROJECTS
   Featured projects support an optional `thumb` field (path to
   an image under assets/projects/). If omitted, the card falls
   back to a plain text tile — see renderProjectThumb() in script.js.
   ============================================================ */

const LINK_TYPE = {
  STEAM: { title: 'Steam', icon: 'fa-brands fa-steam' },
  GOOGLE: { title: 'Google Play', icon: 'fa-brands fa-google-play' },
  APPLE: { title: 'App Store', icon: 'fa-brands fa-app-store-ios' },
  ITCH: { title: 'itch.io', icon: 'fa-brands fa-itch-io' },
}

export const FEATURED_PROJECTS = [
  {
    id: 'proj-greywake', name: 'GreyWake: Project Somnium', status: 'dev',
    hook: 'Solo-programmed horror game, upcoming on Steam.',
    desc: "An upcoming 3D horror game for Steam, inspired by Resident Evil, Silent Hill, and Amnesia, built in Unity by a tiny indie team. Tentative release: October 2026.",
    contribution: "I'm the only programmer, owning gameplay mechanics, core systems, NPC/enemy AI, the build pipeline, tools, Steam SDK integration, and a plug-and-play save/load system with in-editor data protection and auto-persistent runtime IDs for ScriptableObjects, while also contributing to game design, project management, and overall direction.",
    tags: ['Horror', 'Solo Programmer', 'NPC AI', 'Save Systems'],
    thumb: 'assets/projects/greywake.jpg',
    links: [
      { type: LINK_TYPE.STEAM, url: 'https://store.steampowered.com/app/4931620/GreyWake_Project_Somnium/' },
    ]
  },
  {
    id: 'proj-kurukshetra', name: 'Kurukshetra: Ascension', status: 'released',
    hook: 'Cross-platform multiplayer roguelite CCG.',
    desc: 'A cross-platform multiplayer roguelite CCG built in Unity for Studio Sirah, released on Google Play, the App Store, and Steam.',
    contribution: "I built gameplay features, custom Unity editor tools, native platform integrations, automation pipelines, and performance optimizations. Led the development of CI/CD and QA automation systems, streamlined asset and build workflows, and mentored junior developers to improve team productivity and release quality.",
    thumb: 'assets/projects/kurukshetra.jpg',
    tags: ['Multiplayer', 'CCG', 'LiveOps', 'Object Pooling', 'Addressables'],
    links: [
      { type: LINK_TYPE.GOOGLE, url: 'https://play.google.com/store/apps/details?id=com.StudioSirah.KurukshetraAscension' },
      { type: LINK_TYPE.APPLE, url: 'https://apps.apple.com/in/app/kurukshetra-ascension/id1601430224' },
      { type: LINK_TYPE.STEAM, url: 'https://store.steampowered.com/app/1857540/Kurukshetra_Ascension/' },
    ]
  },
  {
    id: 'proj-aristocrat', name: 'Aristocrat Slot Games', status: 'released',
    hook: 'NFL Slots, Heart of Vegas, Lightning Link & Cashman Casino. 10M+ downloads each.',
    desc: "A portfolio of mobile social slot games at Aristocrat, spanning two stints.",
    contribution: "Developed and shipped slot games across the full product lifecycle, from early gameplay prototypes to live social casino and iGaming titles. Built gameplay features, modular frameworks, custom Unity tooling, and automation systems, while improving developer workflows, mentoring engineers, and leading technical delivery for production projects.",
    tags: ['Slots', 'F2P', 'LiveOps'],
    thumb: 'assets/projects/nfl.webp',
    links: [
      { type: LINK_TYPE.GOOGLE, label: 'NFL Slots', url: 'https://play.google.com/store/apps/details?id=com.productmadness.nflslots' },
      { type: LINK_TYPE.APPLE, label: 'Heart of Vegas', url: 'https://apps.apple.com/us/app/heart-of-vegas-casino-slots/id785537179' },
      { type: LINK_TYPE.GOOGLE, label: 'Lightning Link', url: 'https://play.google.com/store/apps/details?id=com.productmadness.lightninglink&hl=en_GB' },
      { type: LINK_TYPE.APPLE, label: 'Cashman Casino', url: 'https://apps.apple.com/us/app/cashman-casino-slots-games/id1123582513' },
    ]
  },
  {
    id: 'proj-black', name: 'BLACK: Extraction Raiders', status: 'released',
    hook: 'Multiplayer social FPS for mobile.',
    desc: 'A multiplayer social FPS for mobile by LILA Games, built in Unity using DOTS/ECS and Photon Fusion for real-time networked gameplay.',
    contribution: "Engineered gameplay and multiplayer systems for BLACK: Extraction Raiders, including authoritative networked loot containers and doors, a non-allocating proximity scanning framework shared across multiple gameplay systems, and early mobile support for Unity's new Input System. Participated in code reviews and technical planning during the project's early development.",
    tags: ['FPS', 'DOTS/ECS', 'Multiplayer'],
    thumb: 'assets/projects/black.jpg',
    links: [{ type: LINK_TYPE.GOOGLE, url: 'https://play.google.com/store/apps/details?id=com.lilagames.black' }]
  },
  {
    id: 'proj-btcking', name: 'BTC King', status: 'released',
    hook: 'Solo-built browser game, itch.io front page.',
    desc: 'A browser game solo-built and published on itch.io, featured on the front page for two weeks with ongoing player engagement.',
    contribution: "Solo-developed BTC King, a browser-based incremental strategy game powered by a custom JavaScript game engine built from scratch. Designed and implemented the core engine architecture, gameplay systems, input handling, and UI, leveraging native browser technologies for performance and simplicity.",
    tags: ['Web', 'Solo Dev'],
    thumb: 'assets/projects/btcking.png',
    links: [{ type: LINK_TYPE.ITCH, url: 'https://aklgupta.itch.io/btc-king' }]
  },
  {
    id: 'proj-lighthouse', name: 'The Lighthouse', status: 'dev',
    hook: 'Narrative-driven walking-sim mystery, two-person indie team.',
    desc: "A narrative-driven walking simulator mystery with realistic graphics, cinematic scenes, and branching stories. Working title.",
    contribution: "Developing The Lighthouse, a narrative-driven first-person mystery game for PC. As a programmer in a two-person indie team, I architect and implement core gameplay systems, save/load infrastructure, AI, UI, and custom development tools, while also contributing to game design, technical direction, and project planning.",
    tags: ['Narrative', 'Cinemachine', 'Custom Editors', 'TDD'],
    thumb: 'assets/projects/lighthouse.jpg',
    links: []
  },
];

export const STATUS_META = {
  released: { label: 'Released', cls: 'status-released' },
  dev: { label: 'In Development', cls: 'status-dev' },
  proto: { label: 'Prototype', cls: 'status-proto' },
  hiatus: { label: 'On Hiatus', cls: 'status-proto' },
  tool: { label: 'Internal Tool', cls: 'status-tool' },
  experimental: { label: 'Experimental', cls: 'status-experimental' },
};

export const MORE_PROJECTS = [
  { name: 'Mirror Runner', status: 'released', desc: 'Hyper-casual Android runner — controls two characters at once via gyroscope, dodging obstacles together.' },
  { name: 'Robo Killer', status: 'proto', desc: 'Single-level 3D FPS developed in Unity for PC.' },
  { name: 'Chalk Stories — Lonely Oni', status: 'hiatus', desc: 'Narrative-driven top-down RPG for PC — on hold since the team disbanded.' },
  { name: 'Rogue Planets', status: 'proto', desc: 'Upcoming action roguelike for PC/Steam/GOG — planned as the first title of an indie studio I intend to launch in Jan 2027. Currently pre-production.' },
  { name: 'Pickuiz', status: 'released', desc: "Image-based Android quiz app with a LAMP backend, built as a college final-year project — worked around an early Unity version's lack of native gallery upload." },
  { name: 'Boxes of Trouble', status: 'released', desc: 'Infinite-runner style Android game, published on Google Play.', link: 'https://aklgupta.itch.io/boxes-of-trouble' },
  { name: 'Custom XML Builder', status: 'tool', desc: 'Standalone Unity application for authoring XML — a personal internal dev tool.' },
  { name: 'Music Manager', status: 'tool', desc: 'Personal Windows utility built in Unity to manage audio/music files, including reading audio format metadata directly in C#.' },
  { name: 'EOD', status: 'hiatus', desc: 'Tetris meets base-building with resource management, for web and PC — built in Godot (GDScript/C#), currently on hiatus.', link: 'https://himaghnam.itch.io/eod' },
  { name: 'BaseTD', status: 'hiatus', desc: 'Tower-defense / base-defense game for PC, web, and mobile — built in Godot (GDScript/C#), currently on hiatus.' },
  { name: 'Space Invader Clone', status: 'experimental', desc: 'Homage to classic Space Invaders for PC, with 100 levels and an endless mode — built in GameMaker to learn the engine.' },
  { name: 'Web PM Tool', status: 'tool', desc: 'Personal project-management tool (LAMP/jQuery) with hierarchical tasks and statuses, built after existing free tools fell short.' },
  { name: 'CSS Generator', status: 'experimental', desc: 'Browser-based WYSIWYG CSS generator, built in JavaScript as a college project.' },
  { name: 'TwineJS Fork', status: 'experimental', desc: 'Forked the open-source TwineJS engine, adding tag support and colored nodes.' },
];
