<template>
  <section class="hero-banner container" ref="heroBanner">
    <div class="hero-content ">
      <article class="hero-content__intro animate-on-scroll">
        <img src="@/assets/images/holographic-sticker.png" alt="Holographic sticker" class="hero-content__sticker" />
        <p class="hero-content__desc">
          At TechBank, we’re pioneering the technologies of <br />
          tomorrow. From blockchain to AI, we’re building the <br />
          digital landscape of the future, today.
        </p>
      </article>

      <h1 class="hero-content__heading animate-on-scroll">
        Engineering <br />
        the F<span class="plus">u</span>ture
      </h1>

      <div class="banner-content animate-on-scroll">
        <p class="banner-content__text">
          Empowering Businesses, Enabling Growth <br />
          TechBank’s Products for Success
        </p>
        <button class="btn-common arrow-round">View Products</button>
      </div>
    </div>
  </section>
  <div class="scroll-bottom" id="to-top" @click="scrollToSection('to-down')">
    +
    <p class="">
      SCROLL TO EXPOLORE
    </p>
    +
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const heroBanner = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = heroBanner.value.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));
});

function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
