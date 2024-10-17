export default function footer() {
  const footerContainer = document.querySelector('.footer-container');
  return (footerContainer.innerHTML = `<section class="footer-content">
      <div class="logos">
        <img src="https://res.cloudinary.com/dlieh2u8a/image/upload/v1678212350/Frye%20Group%20Website%20Build/White_Frye_Group_Logo_lsdowt.png" alt="" class="frye">
        <img src="https://res.cloudinary.com/dlieh2u8a/image/upload/v1678387257/Frye%20Group%20Website%20Build/White-Hive-Logo_cec2w4.png" alt="" class="hive">
      </div>
      <div class="vertical-line">

      </div>
      <section class="footer-links">
        <div class="footer-col">
          <h3 class="link-title">Buyers</h3>
          <ul>
            <li><a href="/buying-process">The Buying Process</a></li>
            <li><a href="/mortgage-calculator">Mortgage Calculator</a></li>
            <li><a href="/home-search">Market Search</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="link-title">Sellers</h3>
          <ul>
            <li><a href="/selling-process">The Selling Process</a></li>
            <li><a href="/evaluation">Home Valuation</a></li>
            <li><a href="/sell">List With Us</a></li>
            <li><a href="/listings">Listings</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="link-title">Investors</h3>
          <ul>
            <li><a href="/investor-guide">Investor Guide</a></li>
            <li><a href="/calculators">Calculators</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="link-title">Development &<br>Commercial</h3>
          <ul>
            <li><a href="/development">Development</a></li>
          </ul>
        </div>
      </section>
      <div class="vertical-line remove">

      </div>
      <section class="contact">
        <div class="footer-col">
          <h3 class="link-title">
            Connect With Us
          </h3>
          <ul>
            <li><a href="https://www.facebook.com/TheFryeGroup">Facebook</a></li>
            <li><a href="https://www.instagram.com/thefryegroup/">Instagram</a></li>
            <li><a href="https://www.youtube.com/@loganfrye6548">YouTube</a></li>
          </ul>
        </div>
      </section>
    </section>
  </section>
  <section id="copyright">
    <p id="year">
      © ${new Date().getFullYear()} Frye Group | LIC #347717 | Hive Nashville All rights reserved.
    </p>`);
}
