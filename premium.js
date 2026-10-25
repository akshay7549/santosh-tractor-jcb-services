if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveals = document.querySelectorAll('.section-head, .steps > div, .about-copy, .closing-cta');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold: .08});
  reveals.forEach(element => {element.classList.add('reveal-on-scroll');revealObserver.observe(element);});
}
const businessFooter = document.querySelector('.site-footer');
if (businessFooter && 'IntersectionObserver' in window) {
  const footerObserver = new IntersectionObserver(entries => {
    document.body.classList.toggle('footer-in-view', entries[0].isIntersecting);
  }, {threshold: 0});
  footerObserver.observe(businessFooter);
}
