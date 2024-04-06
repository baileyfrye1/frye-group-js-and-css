import footer from './components/footer.js';
import emailSignup from './components/emailSignup.js';
import workWithUs from './components/workWithUs.js';
import formVal from './components/formVal.js';

const contactForm = document.querySelector('.contact-form');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const youtubePlayer = document.querySelector('.youtube-player');

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    emailSignup();
    workWithUs();
    footer();
    formVal();
  }
});

if (contactForm) formVal();

if (modal) {
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      console.log(e.target);
      youtubePlayer.setAttribute('src', `${e.target.dataset.youtubeUrl}`);
      modal.showModal();
      modal.style.display = 'flex';
    });

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('close-modal')) {
        youtubePlayer.setAttribute('src', '');
        modal.close();
        modal.style.display = 'none';
      }
    });
  });
}
