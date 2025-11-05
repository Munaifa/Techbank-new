<template>
  <section
    class="brand-section"
    ref="brandSection"
    :class="{ visible: isVisible }"
  >
    <h6>From One Root, Many Branches</h6>
    <h2>Our Connected Brands</h2>

    <div class="brand-container container">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="false"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        :space-between="41"
        :slides-per-view="'auto'"
        :breakpoints="{
          500: { slidesPerView: 2, centeredSlides: true, spaceBetween: 16 },
          640: { slidesPerView: 1.5, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: false }
        }"
        class="brands-swiper"
      >
        <SwiperSlide
          v-for="brand in branddatas"
          :key="brand.id"
          class="brands-swiper-slide"
        >
          <div class="border-gradient">
            <article class="brand-item">
              <label>{{ brand.label }}</label>
              <p>{{ brand.text }}</p>

              <ul class="social-icons">
                <li><img src="@/assets/images/LinkedinLogo.svg" alt="LinkedIn" /></li>
                <li><img src="@/assets/images/InstagramLogo.svg" alt="Instagram" /></li>
                <li><img src="@/assets/images/XLogo.svg" alt="X" /></li>
                <li><img src="@/assets/images/YoutubeLogo.svg" alt="YouTube" /></li>
              </ul>

              <img :src="brand.src" :alt="brand.alt" />
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const brandSection = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target) // only once
      }
    },
    { threshold: 0.3 }
  )
  if (brandSection.value) observer.observe(brandSection.value)
})

onUnmounted(() => {
  if (observer && brandSection.value) observer.unobserve(brandSection.value)
})

const branddatas = [
  {
    id: 1,
    src: new URL('@/assets/images/branddesign-1.png', import.meta.url).href,
    alt: 'Blue Tigers',
    label: 'BLUE TIGERS',
    text: 'Fueling the Future of Film, Sports, and Technology.'
  },
  {
    id: 2,
    src: new URL('@/assets/images/branddesign-2.png', import.meta.url).href,
    alt: 'Kochi Blue Tigers',
    label: 'KOCHI BLUE TIGERS',
    text: 'A dynamic cricket team redefining the game with passion and power.'
  },
  {
    id: 3,
    src: new URL('@/assets/images/branddesign-3.png', import.meta.url).href,
    alt: 'Blue Tigers London',
    label: 'BLUE TIGERS LONDON',
    text: 'A creative production house bringing bold stories to life.'
  }
]
</script>

<style scoped>
.brand-section {
  opacity: 0;
  transform: translateY(80px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.brand-section.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 1299px) {
  :deep(.swiper-wrapper) {
    justify-content: center;
  }
}
</style>
