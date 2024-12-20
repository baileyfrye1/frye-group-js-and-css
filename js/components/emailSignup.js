export default function emailSignup() {
  const contactContainer = document.querySelector('.contact-container');
  const contactBlock = document.querySelector('#contact-block');
  if (contactContainer) {
    contactContainer.innerHTML = `<div class="contact__content">
      <h2 class="contact__header">
        Receive exclusive real estate insights and event updates straight to your inbox
      </h2>
      <button class="btn-light contact__button">
        Sign Up Now
      </button>
    </div> `;
  }

  if (contactBlock) {
    const contactModal = document.createElement('dialog');
    contactModal.classList.add('contact__modal');
    contactModal.innerHTML = `
    <i class="fa-solid fa-xmark close-modal"></i>
    <div class="modal__content">
      <h3 class="modal__header">Sign Up</h3>
      <form action="https://fryegroupnashville.us7.list-manage.com/subscribe/post?u=4f32366e47426ef7da3ed6103&amp;id=a8cb9b13d0&amp;f_id=00308ee2f0" novalidate method="post" name="mc-form" id="mc-form" target="_self" class="modal__form">
        <div class="modal__names">
          <div class="modal__input-container">
            <label for="modal-first" class="form__label">First Name<span class="required">*</span></label>
            <input type="text" id="modal-first" class="modal__input" name="FNAME" required>
          </div>
          <div class="modal__input-container">
            <label for="modal-last" class="form__label">Last Name<span class="required">*</span></label>
            <input type="text" id="modal-last" class="modal__input" name="LNAME" required>
          </div>
        </div>
        <div class="modal__input-container modal__input-container--email">
          <label for="modal-email" class="form__label">Email<span class="required">*</span></label>
          <input type="email" id="modal-email" class="modal__input" name="EMAIL" required>
        </div>
        <div hidden="true"><input type="hidden" name="tags" value=""></div>
        <button class="btn-dark modal__button" type="submit">
          Submit
        </button>
      </form>
    </div>`;
    contactBlock.insertAdjacentElement('afterend', contactModal);
  }
}
