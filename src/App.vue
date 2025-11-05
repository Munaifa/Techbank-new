<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { RouterView } from 'vue-router';

</script>

<template>
<main>
     <Header />
      <RouterView />
      <Footer />
</main>
</template>

<style scoped></style>
