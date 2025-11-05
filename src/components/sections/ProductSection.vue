<template>
  <section
    class="product-section container"
    id="products"
    ref="sectionRef"
    :class="{ 'is-visible': isVisible }"
  >
    <h6>Innovative</h6>
    <h2>Products</h2>

    <ul class="product-container">
      <li v-for="(product, index) in products" :key="index" class="product-card">
        <article class="product-item">
          <div class="figure-section">
            <figure>
              <img :src="product.image" :alt="product.title" class="product-image" />
            </figure>
             <figure>
              <img :src="product.imagelogo" :alt="product.title" class="product-image-logo" />
            </figure>
          </div>

          <div class="details">
            <span class="inline-flex-span">
              <h3>{{ product.title }}</h3>
              <p v-html="product.description"></p>
            </span>
            <button type="button" class="btn-common arrow">View</button>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import dwallet from '@/assets/images/dwallet.png'
import dwalletlogo from '@/assets/images/dwallet-logo.svg'
import dbank from '@/assets/images/dbank.png'
import dbanklogo from '@/assets/images/dbank-logo.svg'

// Reactive state
const sectionRef = ref(null)
const isVisible = ref(false)

const products = [
  {
    title: 'DWALET',
    description:
      'A secure, intuitive crypto wallet for managing <br /> your digital assets',
    image: dwallet,
    imagelogo: dwalletlogo,
  },
  {
    title: 'DBANK',
    description:
      'A secure staking platform for earning <br /> rewards on your digital assets',
    image: dbank,
    imagelogo: dbanklogo,
  },
]

// Intersection Observer logic
let observer

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target) // stop observing once visible
    }
  }, { threshold: 0.3 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
})
</script>

<style scoped>
.product-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.product-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
