<script setup>
import { Vue3Marquee } from 'vue3-marquee'


import logo1 from '@/assets/images/Logo01.svg'
import logo2 from '@/assets/images/Logo02.svg'
import logo3 from '@/assets/images/Logo03.svg'
import logo4 from '@/assets/images/Logo04.svg'
import logo5 from '@/assets/images/Logo05.svg'
import logo6 from '@/assets/images/Logo06.svg'
</script>

<template>
  <section class="technology-section">
    <h2>technologies</h2>
    <div class="marquee-section">
      <!-- First Row -->
      <Vue3Marquee :duration="60" :pauseOnHover="true" :clone="true">
        <div class="marquee-item"><img :src="logo4" alt="Logo 4" /></div>
        <div class="marquee-item"><img :src="logo3" alt="Logo 3" /></div>
        <div class="marquee-item"><img :src="logo5" alt="Logo 5" /></div>
        <div class="marquee-item"><img :src="logo6" alt="Logo 6" /></div>
        <div class="marquee-item"><img :src="logo1" alt="Logo 1" /></div>
        <div class="marquee-item"><img :src="logo2" alt="Logo 2" /></div>
      </Vue3Marquee>

      <!-- Second Row -->
      <Vue3Marquee :duration="60" :pauseOnHover="true" :clone="true" direction="reverse">
        <div><img :src="logo1" alt="Logo 1" /></div>
        <div><img :src="logo2" alt="Logo 2" /></div>
        <div><img :src="logo3" alt="Logo 3" /></div>
        <div><img :src="logo4" alt="Logo 4" /></div>
        <div><img :src="logo5" alt="Logo 5" /></div>
        <div><img :src="logo6" alt="Logo 6" /></div>
      </Vue3Marquee>
    </div>

  </section>
</template>
