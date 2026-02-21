/* ════════════════════════════════════════════════════════════════════
   app.js — Navigation, tab switching, scroll highlighting, init
   ════════════════════════════════════════════════════════════════════ */

/* ── INIT ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderMC();
  renderGF();
  renderWF();
  renderReading();
  renderListening();
  initTabs();
  initNavHighlight();
  initHamburger();
});

/* ── PRACTICE TABS ─────────────────────────────────────────────────── */
function initTabs() {
  const tabs = document.querySelectorAll('.practice-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.exercise-panel').forEach(p => {
        p.hidden = true;
        p.classList.remove('active');
      });
      // Activate clicked
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.hidden = false;
        panel.classList.add('active');
      }
    });

    // Keyboard navigation (left/right arrows)
    tab.addEventListener('keydown', (e) => {
      const tabList = Array.from(tabs);
      const idx = tabList.indexOf(tab);
      if (e.key === 'ArrowRight') {
        tabList[(idx + 1) % tabList.length].focus();
      } else if (e.key === 'ArrowLeft') {
        tabList[(idx - 1 + tabList.length) % tabList.length].focus();
      }
    });
  });
}

/* ── ACTIVE NAV ON SCROLL ──────────────────────────────────────────── */
function initNavHighlight() {
  const sections = ['hero', 'theory', 'practice', 'reading', 'listening'];
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ── HAMBURGER MENU ─────────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open', !expanded);
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
}
