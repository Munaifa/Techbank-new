<template>
  <section class="about-section container" ref="aboutSection">
    <h2>About Us</h2>
    <p>
      TechBank is a blockchain product company creating decentralized tools like TechBank,<br />
      Dbank, and Dwallet to simplify digital finance. We empower users with secure,
      transparent,<br />
      and user-friendly solutions for managing assets in the Web3 world.
    </p>

    <ul class="counter">
      <li
        class="counter-item"
        v-for="(item, index) in counters"
        :key="index"
        ref="counterItems"
      >
        <article>
          <h3 class="counter-value">{{ formatValue(item.value) }}</h3>
          <p class="counter-label">{{ item.label }}</p>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const counters = [
  { value: 4, label: 'Products' },
  { value: 2000, label: 'Active Users' },
  { value: 1000000, label: 'Downloads' },
]

const aboutSection = ref(null)
const counterItems = ref([])
let observer = null

// Format numbers for display
const formatValue = (num) => {
  if (num >= 1000000) return '1M+'
  if (num >= 1000) return `${num.toLocaleString()}+`
  return num
}

// Fade-in counters sequentially
const fadeInCounters = async () => {
  for (let i = 0; i < counterItems.value.length; i++) {
    counterItems.value[i].classList.add('visible')
    await new Promise((resolve) => setTimeout(resolve, 200)) // small delay between items
  }
}

// Observe section and trigger fade-in
onMounted(async () => {
  await nextTick()
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        fadeInCounters()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (aboutSection.value) observer.observe(aboutSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

