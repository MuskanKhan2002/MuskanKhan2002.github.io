import { useEffect } from 'react';

/**
 * Observes all .reveal elements and adds .visible when they enter the viewport.
 * Call once at the App level.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe current + future .reveal elements via MutationObserver
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    };

    observeAll();

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
