<template>
  <section
    class="blog-section container"
    id="blogs"
    ref="blogSection"
    :class="{ 'is-visible': isVisible }"
  >
    <h6>Techbank</h6>
    <h2>Blogs</h2>

    <div class="blog-slider-wrapper">
      <!-- Custom Arrows -->
      <button class="nav-button prev" ref="prevEl">
        <img src="@/assets/images/arrow-left.svg" alt="Previous" />
      </button>

      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="3"
        :space-between="24"
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="{ prevEl: prevEl, nextEl: nextEl }"
        pagination
        grabCursor
        class="blog-slider"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 12 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 24 }
        }"
      >
        <SwiperSlide v-for="(blog, index) in blogs" :key="index">
          <article class="blog-card">
            <figure class="blog-image">
              <img :src="blog.image" :alt="blog.title" />
            </figure>
            <div class="blog-content">
              <h4>{{ blog.title }}</h4>
              <p>{{ blog.description }}</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>

      <button class="nav-button next" ref="nextEl">
        <img src="@/assets/images/arrow-right.svg" alt="Next" />
      </button>
    </div>

    <div class="nav-top-div">
      <a class="nav-top" id="to-down" @click="scrollToSection('to-top')">
        <img src="@/assets/images/back-to-top.png" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const prevEl = ref(null)
const nextEl = ref(null)

// Blog data
const blogs = [
  {
    image: new URL('@/assets/images/blog-1.png', import.meta.url).href,
    title: 'SMART AI CHATBOT',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
  },
  {
    image: new URL('@/assets/images/blog-2.png', import.meta.url).href,
    title: 'FINTECH PLATFORM',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
  },
  {
    image: new URL('@/assets/images/blog-3.png', import.meta.url).href,
    title: 'AI DESIGN SYSTEM',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
  },
]

// Duplicate if fewer than 4 slides (for looping)
if (blogs.length < 4) {
  blogs.push(...blogs.map(b => ({ ...b })))
}

// Scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Intersection Observer setup
const blogSection = ref(null)
const isVisible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )
  if (blogSection.value) observer.observe(blogSection.value)
})

onUnmounted(() => {
  if (observer && blogSection.value) observer.unobserve(blogSection.value)
})
</script>

<style scoped>
.blog-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.blog-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
