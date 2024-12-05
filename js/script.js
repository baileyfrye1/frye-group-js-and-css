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

    const button = document.querySelector('.contact__button');
    const contactModal = document.querySelector('.contact__modal');

    if (contactModal) {
      button.addEventListener('click', () => {
        contactModal.showModal();
      });

      if (contactModal) {
        contactModal.addEventListener('click', (e) => {
          if (e.target.classList.contains('close-modal')) {
            contactModal.close();
          }
        });
      }
    }
  }
});

if (contactForm) formVal();

if (modal) {
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      youtubePlayer.setAttribute('src', `${e.target.dataset.youtubeUrl}`);
      youtubePlayer.setAttribute('width', `${e.target.dataset.width || 560}`);
      youtubePlayer.setAttribute('height', `${e.target.dataset.height || 315}`);
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
