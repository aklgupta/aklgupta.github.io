import { SKILL_GROUPS, EXTRA_KEYWORDS, SKILL_SYNONYMS } from "./data/skills.js";
import { APPROACH_CARDS, RANGE_SEGMENTS } from "./data/approach.js";
import { FEATURED_PROJECTS, STATUS_META, MORE_PROJECTS } from "./data/projects.js";
import { HIGHLIGHTS, RECOGNITION_MODAL } from "./data/recognition.js";
import { TIMELINE } from "./data/experience.js";
import { CASE_STUDIES } from "./data/case-studies.js";
import { STORY_MODAL } from "./data/story.js";
import { HERO_STATS } from "./data/hero.js";
import { THEMES } from "./data/themes.js";
import { CONTACT } from "./data/contact.js";

document.getElementById('year').textContent = new Date().getFullYear();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   THEMES
   ============================================================ */
function applyTheme(id) {
  document.documentElement.setAttribute('data-theme', id);
  document.querySelectorAll('.theme-dot').forEach(d => d.classList.toggle('active', d.dataset.theme === id));
  updateFavicon();
  try { localStorage.setItem('portfolio-theme', id); } catch (e) {}
}

const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.innerHTML = THEMES.map(t =>
  `<button class="theme-dot" data-theme="${t.id}" style="background:${t.swatch}" title="${t.name}" aria-label="${t.name}"></button>`
).join('');
themeSwitcher.addEventListener('click', e => {
  const btn = e.target.closest('.theme-dot');
  if (btn) applyTheme(btn.dataset.theme);
});

let savedTheme = 'obsidian';
try { savedTheme = localStorage.getItem('portfolio-theme') || 'obsidian'; } catch (e) {}
applyTheme(savedTheme);

function updateFavicon() {
  const styles = getComputedStyle(document.documentElement);
  const bg = styles.getPropertyValue('--bg').trim();
  const accent = styles.getPropertyValue('--accent').trim();
  const border = styles.getPropertyValue('--border').trim();

  // A clean, geometric "A" inside a premium game-studio-style rounded card (squircle)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
      <!-- Rounded Background Card -->
      <rect x="32" y="32" width="448" height="448" rx="110" fill="${bg}" stroke="${border}" stroke-width="16"/>
      <!-- Stylized geometric "A" using evenodd fill rule for a clean vector cutout -->
      <path fill-rule="evenodd" d="M 235,120 L 277,120 L 392,392 L 324,392 L 294,320 L 218,320 L 188,392 L 120,392 Z M 256,180 L 232,275 L 280,275 Z" fill="${accent}"/>
    </svg>
  `.trim();
  const svgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = svgUrl;
}

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

/* ---------------- Scroll progress bar ---------------- */
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  progressBar.style.width = max > 0 ? `${(scrolled / max) * 100}%` : '0%';
}
document.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* ============================================================
   MODAL SYSTEM
   Register any modal's content into MODALS[id] = { eyebrow, title, html }
   and trigger it from anywhere with data-modal="id".
   ============================================================ */
const MODALS = {};
const overlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
let lastFocused = null;

function openModal(id) {
  const data = MODALS[id];
  if (!data) return;
  modalBody.innerHTML = `
    ${data.eyebrow ? `<p class="modal-eyebrow">${data.eyebrow}</p>` : ''}
    <h3 class="modal-title" id="modal-title">${data.title}</h3>
    ${data.html}
  `;
  lastFocused = document.activeElement;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });
document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-modal]');
  if (trigger) openModal(trigger.dataset.modal);
});

/* ============================================================
   HERO STATS (count-up)
   ============================================================ */
document.getElementById('hero-stats').innerHTML = HERO_STATS.map((s, i) => `
  <div class="hero-stat">
    <span class="hero-stat-num" data-target="${s.target}" data-index="${i}">${reduceMotion ? s.format(s.target) : s.format(s.from)}</span>
    <span class="hero-stat-label">${s.label}</span>
  </div>
`).join('');

function countUp(el, from, target, format) {
  if (reduceMotion) { el.textContent = format(target); return; }
  const duration = 1300;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const value = Math.round(from + (target - from) * eased);
    el.textContent = format(value);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ============================================================
   APPROACH (How I Work)
   ============================================================ */
document.getElementById('approach-grid').innerHTML = APPROACH_CARDS.map(c => `
  <div class="approach-card">
    <div class="approach-icon"><i class="${c.icon}"></i></div>
    <div class="approach-title">${c.title}</div>
    <div class="approach-desc">${c.desc}</div>
  </div>
`).join('');

document.getElementById('range-bar').innerHTML = RANGE_SEGMENTS.map(s => `
  <div class="range-seg" style="width:${s.pct}%; background:${s.color};" title="${s.label} — ${s.pct}%">
    <span>${s.label} · ${s.pct}%</span>
  </div>
`).join('');

MODALS['story'] = STORY_MODAL;

/* ============================================================
   CASE STUDIES
   ============================================================ */
document.getElementById('case-grid').innerHTML = CASE_STUDIES.map(c => `
  <div class="case-card">
    <div class="case-tag">${c.tag}</div>
    <div class="case-title">${c.title}</div>
    <p class="project-hook">${c.hook}</p>
    <button class="case-more" data-modal="${c.id}">Read case study →</button>
  </div>
`).join('');

CASE_STUDIES.forEach(c => {
  MODALS[c.id] = {
    eyebrow: c.tag,
    title: c.title,
    html: `
      <div class="m-line"><b>Problem</b><p>${c.problem}</p></div>
      <div class="m-line"><b>Approach</b><p>${c.approach}</p></div>
      <div class="m-line"><b>Result</b><p>${c.result}</p></div>
      <div class="modal-tags">${c.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `
  };
});

/* ============================================================
   PROJECTS
   ============================================================ */
function renderProjectThumb(p) {
  return p.thumb
    ? `<img src="${p.thumb}" alt="${p.name}" loading="lazy" onerror="this.parentElement.classList.remove('has-image');this.outerHTML='<span>${p.name}</span>';">`
    : `<span>${p.name}</span>`;
}

function getLinkLabel(l) {
  return `${l.label ? l.label + ' (' : ''}${l.type.title}${l.label ? ')' : ''}`;
}

function renderLink(l) {
  return `<a href="${l.url}" target="_blank" rel="noopener"><i class="${l.type.icon}"></i> ${getLinkLabel(l)}</a>`;
}

document.getElementById('project-grid').innerHTML = FEATURED_PROJECTS.map(p => `
  <div class="project-card">
    <div class="project-thumb${p.thumb ? ' has-image' : ''}">${renderProjectThumb(p)}</div>
    <div class="project-body">
      <div class="project-top">
        <div class="project-name">${p.name}</div>
        <span class="status-label ${STATUS_META[p.status].cls}">${STATUS_META[p.status].label}</span>
      </div>
      <p class="project-hook">${p.hook}</p>
      <div class="project-footer">
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <div class="project-links">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener"><i class="${l.type.icon}"></i></a>`).join('')}</div>
          <button class="project-details-btn" data-modal="${p.id}">Details</button>
        </div>
      </div>
    </div>
  </div>
`).join('');

FEATURED_PROJECTS.forEach(p => {
  MODALS[p.id] = {
    eyebrow: STATUS_META[p.status].label,
    title: p.name,
    html: `
      <div class="m-line"><b>Project</b><p>${p.desc}</p></div>
      <div class="m-line"><b>Role</b><p>${p.contribution}</p></div>
      <div class="modal-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.links.length ? `<div class="modal-links">${p.links.map(l => renderLink(l)).join('')}</div>` : ''}
    `
  };
});

document.getElementById('project-list').innerHTML = MORE_PROJECTS.map(p => `
  <div class="project-list-row">
    <span class="pl-name">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.name}</a>` : p.name}</span>
    <span class="status-label ${STATUS_META[p.status].cls}">${STATUS_META[p.status].label}</span>
    <span class="pl-desc">${p.desc}</span>
  </div>
`).join('');

/* ============================================================
   SKILLS
   ============================================================ */
document.getElementById('skills-groups').innerHTML = SKILL_GROUPS.map(g => `
  <div class="skill-group">
    <div class="skill-group-title">${g.title}</div>
    <div class="skill-pills">${g.items.map(i => `<span class="skill-pill">${i}</span>`).join('')}</div>
  </div>
`).join('');

const extraPillsEl = document.getElementById('extra-pills');
extraPillsEl.innerHTML = EXTRA_KEYWORDS.map(i => `<span class="skill-pill">${i}</span>`).join('');

function skillMatches(label, term) {
  if (!term) return true;
  const haystacks = [label.toLowerCase(), ...(SKILL_SYNONYMS[label] || [])];
  return haystacks.some(h => h.includes(term));
}

let extraManuallyOpen = false;
const extraToggleBtn = document.getElementById('extra-toggle');
extraToggleBtn.addEventListener('click', () => {
  extraManuallyOpen = !extraManuallyOpen;
  if (!document.getElementById('skills-search-input').value.trim()) {
    extraPillsEl.hidden = !extraManuallyOpen;
  }
  extraToggleBtn.textContent = extraManuallyOpen ? 'Hide additional keywords ←' : 'Show additional keywords →';
});

const searchInput = document.getElementById('skills-search-input');
const noResultsEl = document.getElementById('no-results');
const noResultsTerm = document.getElementById('no-results-term');
searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  let groupHit = false;
  document.querySelectorAll('#skills-groups .skill-pill').forEach(p => {
    if (!term) { p.classList.remove('dim', 'hit'); return; }
    const match = skillMatches(p.textContent, term);
    p.classList.toggle('dim', !match);
    p.classList.toggle('hit', match);
    if (match) groupHit = true;
  });
  let extraHit = false;
  extraPillsEl.querySelectorAll('.skill-pill').forEach(p => {
    const match = term && skillMatches(p.textContent, term);
    p.style.display = term ? (match ? '' : 'none') : '';
    if (match) extraHit = true;
  });
  extraPillsEl.hidden = term ? !extraHit : !extraManuallyOpen;
  noResultsEl.hidden = !(term && !groupHit && !extraHit);
  noResultsTerm.textContent = searchInput.value.trim();
});

/* ============================================================
   EXPERIENCE (condensed timeline)
   ============================================================ */
document.getElementById('timeline').innerHTML = TIMELINE.map(t => `
  <button class="tl-row" data-modal="${t.id}">
    <span class="tl-dates">${t.dates}</span>
    <span class="tl-main">
      <span class="tl-role">${t.role}</span><br>
      <span class="tl-company">${t.company} · ${t.loc}</span>
    </span>
    <span class="tl-arrow"><i class="fa-solid fa-arrow-right"></i></span>
  </button>
`).join('');

TIMELINE.forEach(t => {
  MODALS[t.id] = {
    eyebrow: `${t.dates} · ${t.loc}`,
    title: `${t.role} — ${t.company}`,
    html: `
      <div class="tl-focus">${t.focus.map(f => `<span class="tl-focus-tag">${f}</span>`).join('')}</div>
      <div class="tl-lines">${t.lines.map(l => `<div class="tl-line"><span>${l}</span></div>`).join('')}</div>
    `
  };
});

/* ============================================================
   RECOGNITION
   ============================================================ */
document.getElementById('highlight-grid').innerHTML = HIGHLIGHTS.map(h => `
  <div class="highlight-card">
    <div class="highlight-icon"><i class="${h.icon}"></i></div>
    <div class="highlight-text">${h.text}</div>
  </div>
`).join('');

MODALS['recognition-full'] = RECOGNITION_MODAL;

/* ============================================================
   PIPELINE ANIMATION — JS-driven so node highlights land exactly
   where the moving dot passes each one, regardless of layout.
   Sequence: dot travels left→right (eased), lighting each node
   as it passes and filling the line behind it → holds fully lit
   → fades color back to dim in place (no backward motion) →
   brief pause → loops.
   ============================================================ */
function initPipeline() {
  if (reduceMotion) return;
  const inner = document.getElementById('pipeline-inner');
  const track = document.getElementById('pipeline-track');
  const fill = document.getElementById('pipeline-fill');
  const mover = document.getElementById('pipeline-mover');
  if (!inner || !track || !fill || !mover) return;
  const nodes = Array.from(inner.querySelectorAll('.pipeline-node'));

  const TRAVEL = 4200;   // ms — dot travels start to end
  const HOLD = 1000;     // ms — pause fully lit before fading
  const FADE = 1500;     // ms — fade back to dim
  const GAP = 600;       // ms — blank pause before next loop

  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  let trackWidth = 0;
  let nodeFractions = [];
  function measure() {
    const trackRect = track.getBoundingClientRect();
    trackWidth = trackRect.width;
    nodeFractions = nodes.map(n => {
      const dotRect = n.querySelector('.pipeline-dot').getBoundingClientRect();
      const center = dotRect.left + dotRect.width / 2;
      return Math.min(1, Math.max(0, (center - trackRect.left) / trackWidth));
    });
  }
  measure();
  window.addEventListener('resize', measure);

  let litIndex = -1;
  let cancelled = false;

  function runCycle() {
    if (cancelled) return;
    litIndex = -1;
    nodes.forEach(n => n.classList.remove('lit'));
    fill.style.transition = 'none';
    fill.style.width = '0px';
    fill.style.opacity = '1';
    mover.style.transition = 'none';
    mover.style.left = '0px';
    mover.style.opacity = '1';
    void mover.offsetWidth; // force reflow before re-enabling transitions

    const start = performance.now();
    function frame(now) {
      if (cancelled) return;
      const t = Math.min((now - start) / TRAVEL, 1);
      const eased = easeInOutCubic(t);
      const px = eased * trackWidth;
      mover.style.left = px + 'px';
      fill.style.width = px + 'px';

      nodeFractions.forEach((frac, i) => {
        if (i > litIndex && eased >= frac) {
          nodes[i].classList.add('lit');
          litIndex = i;
        }
      });

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        mover.style.transition = 'opacity 0.3s ease';
        mover.style.opacity = '0';
        setTimeout(() => {
          if (cancelled) return;
          // Fade the completed line's color back to dim in place — width stays put,
          // so it never looks like progress is retreating backward.
          fill.style.transition = `opacity ${FADE}ms ease`;
          fill.style.opacity = '0';
          nodes.forEach(n => n.classList.remove('lit')); // CSS transition (1.5s) fades these out too
          setTimeout(() => { if (!cancelled) setTimeout(runCycle, GAP); }, FADE);
        }, HOLD);
      }
    }
    requestAnimationFrame(frame);
  }

  runCycle();
}
window.addEventListener('load', initPipeline);

/* ============================================================
   SCROLL REVEAL + COUNT-UP TRIGGER
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

if (!reduceMotion) {
  const statEls = document.querySelectorAll('.hero-stat-num');
  const statIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const stat = HERO_STATS[+el.dataset.index];
        countUp(el, stat.from, stat.target, stat.format);
        statIo.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statIo.observe(el));
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), i * 90);
  });
});

/* ============================================================
CONTACT DETAILS
   ============================================================ */
// Hero Landing quick links
document.getElementById('hero-links').innerHTML = CONTACT.map(h => `
  <a href="${h.link}" target="_blank" rel="noopener" aria-label="${h.title}"><i class="${h.icon}"></i></a>
`).join('');

// Main contacts
document.getElementById('contact-links').innerHTML = CONTACT.map(h => `
  <a href="${h.link}" target="_blank" rel="noopener" class="contact-card">
    <i class="${h.icon}"></i><span>${h.title}</span>
  </a>
`).join('');
