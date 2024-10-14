export default function workWithUs() {
  const wwu = document.querySelector('#wwu');
  if (wwu) {
    return (wwu.innerHTML = `<div class="contact-content">
      <h2>
        Work With Us
      </h2>
      <p>
        We are dedicated to creating and implementing a customized marketing plan for every client. We develop a plan to ensure his client’s properties sell at the highest possible price, in the quickest time, while also negotiating the best deals for our buyer clients.
      </p>
      <a href="contact" class="btn-light">Contact Us</a>
    </div>`);
  }
}
