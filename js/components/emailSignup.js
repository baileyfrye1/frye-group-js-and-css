export default function emailSignup() {
  const contactContainer = document.querySelector('.contact-container');
  if (contactContainer) {
    return (contactContainer.innerHTML = `<div class="contact-content">
      <h2 class="section-title">Subscribe to Receive Exclusive Listings in Your Inbox</h2>
      <form action="https://fryegroupnashville.us7.list-manage.com/subscribe/post?u=4f32366e47426ef7da3ed6103&amp;id=a8cb9b13d0&amp;f_id=00308ee2f0" novalidate method="post" name="mc-form" id="mc-form" target="_self" class="contact-form">
        <div class="names">
          <div class="input-box name">
            <input type="text" id="first" required="required" name="FNAME">
            <label class="first label" for="mce-FNAME">First Name</label>
          </div>
          <div class="input-box name">
            <input type="text" id="last" required="required" name="LNAME">
            <label class="last label" for="mce-LNAME">Last Name</label>
          </div>
        </div>
        <div class="input-box">
          <input type="email" id="email" required="required" name="EMAIL">
          <label class="email label" for="mce-EMAIL">Email</label>
        </div>
        <div hidden="true"><input type="hidden" name="tags" value=""></div>
        <button class="contact-btn">Subscribe</button>
        <div class="error"></div>
      </form>
    </div>`);
  }
}
