import footer from './components/footer.js';
import emailSignup from './components/emailSignup.js';
import workWithUs from './components/workWithUs.js';
import formVal from './components/formVal.js';

const contactForm = document.querySelector('.contact-form');

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    emailSignup();
    workWithUs();
    footer();
    formVal();
  }
});

if (contactForm) formVal();
