import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import ContactView from '@/view/ContactView.vue';

const routes = [
  { path: '/', name: 'page', component: HomeView },
  { path: '/contactus', name: 'ContactUs', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;