// Preencha com o WhatsApp do instrutor: código do país + DDD + número, só dígitos.
const WHATSAPP_NUMBER = '553597260815';
const courseSelect = document.querySelector('#course');
const whatsappLink = document.querySelector('#whatsapp');
const contactStatus = document.querySelector('#contact-status');
function updateContact() {
  if (!/^55\d{10,11}$/.test(WHATSAPP_NUMBER)) return;
  const message = `Olá! Tenho interesse no curso de ${courseSelect.value}. Gostaria de saber sobre datas, valores e disponibilidade na minha cidade.`;
  whatsappLink.href = `https://wa.me/${+5535997260815}?text=${encodeURIComponent(message)}`;
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
  contactStatus.textContent = 'Fale diretamente com o instrutor pelo WhatsApp.';
}
document.querySelectorAll('[data-course]').forEach(link => {
  link.addEventListener('click', () => {
    courseSelect.value = link.dataset.course;
    updateContact();
  });
});
courseSelect.addEventListener('change', updateContact);
whatsappLink.addEventListener('click', event => {
  if (!WHATSAPP_NUMBER) {
    event.preventDefault();
    contactStatus.textContent = 'O WhatsApp do instrutor será disponibilizado em breve.';
  }
});
updateContact();
