const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`SCG website inquiry — ${data.get('service')}`);
  const body = encodeURIComponent(
    `Hello Soft Creative Group,\n\nMy name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}\n\nSent from the SCG website.`
  );
  window.location.href = `mailto:iamsoftworld@gmail.com?subject=${subject}&body=${body}`;
});
