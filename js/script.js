AOS.init({ once: true });

// Auto‑update year in footer
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Header hide/show on scroll
let previousScroll = 0;
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > previousScroll && currentScroll > 100) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  previousScroll = currentScroll;
});

// CTA ripple effect
const cta = document.querySelector('.cta');
if (cta) {
  cta.addEventListener('pointermove', e => {
    cta.style.setProperty('--x', `${e.offsetX}px`);
    cta.style.setProperty('--y', `${e.offsetY}px`);
  });
}
