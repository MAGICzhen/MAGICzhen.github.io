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
