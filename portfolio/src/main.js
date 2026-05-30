/**
 * main.js — Portfolio interactivity
 *
 * Features:
 * - Scroll-reveal (IntersectionObserver, animate-once)
 * - Mobile hamburger menu
 * - Active nav highlight
 * - Navbar background on scroll
 * - Smooth-scroll anchor links
 */

// ── Scroll Reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ── Navbar scroll state ────────────────────────────────────
const nav = document.querySelector('.nav');
let ticking = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 32);
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // initial check

// ── Mobile Menu ────────────────────────────────────────────
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden', String(isOpen));
  });

  mobileMenu.querySelectorAll('.nav__mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ── Active Nav Highlight ───────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle(
            'nav__link--active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  },
  { threshold: 0.2, rootMargin: '-72px 0px -50% 0px' }
);
sections.forEach((s) => sectionObserver.observe(s));

// ── Smooth Scroll ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // account for fixed nav
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
