<template>
  <header class="header-banner container">
    <nav class="nav-bar">
      <div class="nav-links">
        <!-- Logo -->
        <div class="logo">
          <RouterLink to="/">
           <img src="@/assets/images/header-logo.svg" alt="TechBank Logo" />
          </RouterLink>
        </div>

        <!-- Navigation Menu -->
        <ul :class="{ 'active-menu': isMenuOpen }">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><a href="#" @click.prevent="scrollToSection('products')">Products</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#" @click.prevent="scrollToSection('blogs')">Blog</a></li>
        </ul>

        <!-- Overlay -->
        <div class="overlay" @click="toggleMenu"></div>

        <!-- Buttons and Hamburger -->
        <div class="buttons">
          <RouterLink to="/contactus">
            <button type="button" class="btn-contact">Contact us</button>
          </RouterLink>

          <a class="ham-menu" @click="toggleMenu">
            <img src="@/assets/images/hamburger.svg" alt="Menu" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isClosing = ref(false)

function toggleMenu() {
  if (isMenuOpen.value) {
    isClosing.value = true
    setTimeout(() => {
      isMenuOpen.value = false
      isClosing.value = false
    }, 700) 
  } else {
    isMenuOpen.value = true
  }
}

</script>

<style scoped>
body.menu-open {
  overflow: hidden;
}
</style>
