// Small interactions for the static portfolio.
const menuButton = document.getElementById('mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  mobileNav.hidden = isOpen;
  menuIcon.innerHTML = isOpen
    ? '<path d="M4 6h16M4 12h16M4 18h16" />'
    : '<path d="m6 6 12 12M18 6 6 18" />';
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation menu');
    if (menuIcon) menuIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" />';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const text = `Client: ${name}\nEmail: ${email}${message ? `\n\n${message}` : ''}`;
  // This static GitHub Pages form opens WhatsApp; it does not store submissions on a server.
  window.open(`https://wa.me/923006946350?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});
