import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  // additional routes can be added per client
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
