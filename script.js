const WHATSAPP_NUMBER = '5535997260815';
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('open', open);
});
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('open');
}
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu(); menuToggle.focus();
  }
});
const slides = [
  ['Segurança no trabalho.', 'Conhecimento para a vida.', 'Consultoria e treinamentos para empresas e pessoas. Mais de 15 anos de experiência técnica a serviço do seu aprendizado.', 'Conheça os serviços', '#servicos'],
  ['Prepare sua equipe.', 'Valorize a segurança.', 'Palestras e treinamentos em prevenção, operação de equipamentos e atendimento a emergências para sua empresa.', 'Fale sobre sua empresa', '#contato'],
  ['Seu próximo passo', 'começa com conhecimento.', 'Cursos de primeiros socorros, caminhão munck, empilhadeira e máquinas pesadas para o público em geral.', 'Entre em contato', '#contato']
];
let currentSlide = 0;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const [title, highlight, description, label, href] = slides[currentSlide];
  const heading = document.querySelector('#hero-title');
  const span = document.createElement('span'); span.textContent = highlight;
  heading.replaceChildren(document.createTextNode(title), document.createElement('br'), span);
  document.querySelector('#hero-description').textContent = description;
  const link = document.querySelector('#hero-link');
  link.textContent = label + ' ↗'; link.href = href;
  document.querySelectorAll('[data-slide]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.slide) === currentSlide)));
}
document.querySelector('#previous-slide').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('#next-slide').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelectorAll('[data-slide]').forEach(button => button.addEventListener('click', () => showSlide(Number(button.dataset.slide))));
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#contact-name').value.trim();
  const city = document.querySelector('#contact-city').value.trim();
  const extra = document.querySelector('#contact-message').value.trim();
  const message = [name ? `Olá! Meu nome é ${name}.` : 'Olá!', 'Gostaria de informações sobre seus serviços.', city ? `Minha cidade: ${city}.` : '', extra, 'Gostaria de consultar datas, valores e disponibilidade.'].filter(Boolean).join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
document.querySelector('#year').textContent = new Date().getFullYear();
