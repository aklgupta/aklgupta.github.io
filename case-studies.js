/* ============================================================
   CASE STUDIES ("Problem Solving" section)
   ============================================================ */
const CASE_STUDIES = [
  {
    id: 'case-0', tag: 'Aristocrat Leisure',
    title: 'A framework for a team that ran out of time',
    hook: 'Five people, one ambitious framework — cut short by a studio shutdown.',
    problem: "Every new slot game meant developers and technical artists rebuilding the same scaffolding by hand — scenes, prefabs, state machines, boilerplate — with room for inconsistency and avoidable errors each time.",
    approach: "I initiated and led a 5-person effort (3 Unity/frontend developers, 2 ASP.NET backend developers, and a technical artist) building an internal framework on top of Aristocrat's existing tooling — part templating system, part plugin framework, part gameplay API and dev-tool suite. Game features were split into decoupled Unity packages, each bringing its own tools and setup wizard; a master wizard let a developer pick the modules a new game needed and have it configure the scenes, prefabs, ScriptableObjects, and state machines automatically, leaving only game-specific polish by hand. A parallel framework covered the backend side.",
    result: "The studio I was building this for was shut down two to three months into the effort, before the framework shipped. It's not a finished product I can point to — but the modular packaging approach, the wizard-driven setup flow, and the gameplay APIs underneath it are the clearest example I have of how I try to remove repetitive work for a team, not just for myself.",
    tags: ['Unity Editor Tooling', 'Framework Design', 'Team Leadership', 'Modular Architecture'],
  },
  {
    id: 'case-1', tag: 'Studio Sirah',
    title: 'Three pipelines built to catch problems before QA does',
    hook: 'Manual asset setup, ad-hoc builds, and no automated testing — replaced with a system.',
    problem: "A live-ops multiplayer CCG had no automated safety net: assets were configured by hand (with recurring platform-specific mistakes), builds were manual and tied up developers' machines, and nothing tested a build before it reached QA.",
    approach: "I built three connected systems. An asset management pipeline grouped every asset by real usage for Addressables, ran validation checks per asset type (flagging things like NPOT textures and emailing the owner), and auto-applied correct import settings per platform. A Jenkins build pipeline ran on schedule and on-demand, with parameterized builds so teams could self-serve instead of tying up developer machines. On top of that, a QA automation bot triggered on every merge to main: it built fresh iOS, Android, and PC binaries, deployed them to devices connected to the build server, and ran an increasingly capable set of automated tests — from clicking through menus, to playing full story-mode matches by calling gameplay methods directly instead of simulating drag-and-drop, with configurable scope (menus, FTUE, story, PvP, store) and runtime options like bot speed and skipping cinematics. Logs streamed into AWS Athena for QA and devs to review, later extended with automatic screenshots and performance metrics.",
    result: "A live multiplayer game got a real safety net — problems surfaced on merge instead of in QA or production, and developers got their time and machines back.",
    tags: ['CI/CD', 'Jenkins', 'Test Automation', 'Asset Pipeline', 'AWS Athena'],
  },
  {
    id: 'case-2', tag: 'Studio Sirah',
    title: 'Turning a 3-day manual pricing update into a script',
    hook: 'Regional IAP pricing across every storefront, done by hand, every time.',
    problem: "Updating in-app-purchase pricing across mobile storefronts meant manually pulling live conversion rates for every country, applying regional pricing adjustments, and rounding to natural-looking price points ($4.99 instead of $4.87) — a manual spreadsheet job that took 2–3 days each time.",
    approach: "Built a tool that automated the entire process: pulling live conversion rates, applying regional adjustments, and rounding to clean price points across every supported country, then generating the listing data ready for the mobile stores.",
    result: "A multi-day manual process became a repeatable, automated one — freeing up the time of whoever owned that spreadsheet for actual pricing strategy instead of data entry.",
    tags: ['Python', 'Automation', 'LiveOps', 'Tooling'],
  },
  {
    id: 'case-3', tag: 'LILA Games',
    title: 'Making shared loot and doors behave when three players grab them at once',
    hook: "Multiplayer means someone's always fighting over the same door.",
    problem: "In a shared multiplayer hub supporting up to 20 players, loot containers and doors could be triggered by multiple nearby players at nearly the same instant — creating contention over who 'won' the interaction, and visible desync when network latency made an action look successful on one client but not others.",
    approach: "Implemented networked, multiplayer-aware interaction handling for loot/storage containers and doors — resolving simultaneous-use contention and compensating for network delay to keep state consistent across clients.",
    result: "I joined in the project's first few months of what became a multi-year development cycle, so most of the game shipped after I moved on — but this interaction-handling layer was part of the shared-world foundation other systems built on top of.",
    tags: ['Multiplayer', 'Networking', 'Photon Fusion', 'Concurrency'],
  },
  {
    id: 'case-4', tag: 'Omneity — Founder',
    title: 'Going from zero to shipped, alone',
    hook: 'No engine, no team, no budget — just an idea.',
    problem: 'A semi-text-based web game concept had no existing engine that fit, no team, and no budget — just an idea worth building.',
    approach: 'Built a custom JavaScript game engine from scratch to streamline development, then independently designed and shipped two games across mobile and web.',
    result: '"BTC King" landed on itch.io\'s front page for two weeks and kept earning regular player engagement long after launch.',
    tags: ['JavaScript', 'Solo Development', 'Game Engine', 'Web'],
  },
];
