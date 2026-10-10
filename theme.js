const toggle = document.querySelector('.theme-toggle');
function updateLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  toggle.title = `Switch to ${dark ? 'light' : 'dark'} theme`;
  toggle.textContent = dark ? '☀' : '☾';
}
updateLabel();
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
  updateLabel();
});

const menuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('#mobile-nav');
if (menuToggle && menu) {
  function closeMenu() {
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open page menu');
  }
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close page menu' : 'Open page menu');
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}
