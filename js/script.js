import footer from './components/footer.js';
import emailSignup from './components/emailSignup.js';
import workWithUs from './components/workWithUs.js';

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    emailSignup();
    workWithUs();
    footer();
  }
});
