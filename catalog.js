const filters = [...document.querySelectorAll('[data-filter]')];
const catalogCards = [...document.querySelectorAll('.catalog-card')];
const search = document.querySelector('#service-search');
let category = 'all';
let expanded = false;
const moreButton = document.querySelector('#show-more-services');
const moreWrapper = document.querySelector('.catalog-more');
function filterServices() {
  const query = search.value.toLocaleLowerCase().trim();
  let visible = 0;
  let matched = 0;
  const showPreview = category === 'all' && !query && !expanded;
  catalogCards.forEach(card => {
    const matches = (category === 'all' || card.dataset.category === category) && card.textContent.toLocaleLowerCase().includes(query);
    if (matches) matched++;
    const show = matches && (!showPreview || matched <= 6);
    card.hidden = !show;
    if (show) visible++;
  });
  document.querySelector('#service-count').textContent = visible < matched ? `${visible} of ${matched} services · aur services neeche dekhein` : `${matched} service${matched === 1 ? '' : 's'}`;
  document.querySelector('.catalog-empty').hidden = matched !== 0;
  moreWrapper.hidden = category !== 'all' || !!query;
  moreButton.setAttribute('aria-expanded', String(expanded));
  moreButton.innerHTML = expanded ? 'Kam services dikhayein <span>↑</span>' : `Sabhi ${catalogCards.length} services dekhein <span>↓</span>`;
}
moreButton.addEventListener('click', () => {
  expanded = !expanded;
  filterServices();
  if (!expanded) document.querySelector('.catalog-tools').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
});
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  expanded = false;
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  filterServices();
}));
search.addEventListener('input', filterServices);
filterServices();
document.querySelector('#share-business').addEventListener('click', async () => {
  const url = document.querySelector('link[rel="canonical"]').href;
  const status = document.querySelector('#share-status');
  try {
    if (navigator.share) {
      await navigator.share({title:'Santosh Tractor & JCB Services',text:'Tractor aur JCB services — Sonbarsa, Sitamardhi. Call +91 80026 26322.',url});
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      status.textContent = 'Website link copy ho gaya. Aap ise share kar sakte hain.';
    } else {
      status.textContent = url;
    }
  } catch (error) {
    if (error.name !== 'AbortError') status.textContent = url;
  }
});
