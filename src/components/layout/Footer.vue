<template>
  <footer class="footer-section">
    <div class="container">
      <!-- Footer Top -->
      <div class="footer-top">
        <RouterLink to="/" class="footer-logo">
          <img src="@/assets/images/footer-logo.svg" alt="TechBank Logo" />
        </RouterLink>
        <a href="mailto:hi@techbank.com" class="footer-mail">hi@techbank.com</a>
      </div>

      <!-- Footer Main Content -->
      <div class="footer-content">
        <div class="footer-logo-section">
          <h5>Engineering <br />the Future</h5>
           <RouterLink to="/contactus">
            <button type="button" class="btn-contact">Contact us</button>
          </RouterLink>
        </div>

        <div class="footer-details">
          <nav class="footer-nav">
            <ul class="footer-links">
              <li><RouterLink to="#">About</RouterLink></li>
              <li><RouterLink to="#">Products</RouterLink></li>
              <li><RouterLink to="#">Teams</RouterLink></li>
              <li><RouterLink to="#">Career</RouterLink></li>
              <li><RouterLink to="#">Blog</RouterLink></li>
            </ul>
          </nav>

          <address class="footer-address">
            <ul>
              <li><strong>Offices</strong></li>
              <li>Infopark<br />Kochi - Kerala</li>
            </ul>
          </address>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <ul class="social-icons">
          <li>
            <a href="#"><img src="@/assets/images/LinkedinLogo.svg" alt="LinkedIn" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/InstagramLogo.svg" alt="Instagram" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/XLogo.svg" alt="X (Twitter)" /></a>
          </li>
          <li>
            <a href="#"><img src="@/assets/images/YoutubeLogo.svg" alt="YouTube" /></a>
          </li>
        </ul>

        <div class="footer-bottom-details">
          <p>&copy; 2024 TechBank. All rights reserved.</p>
          <ul class="policy-links">
            <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
            <li><RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No JS needed anymore
</script>
