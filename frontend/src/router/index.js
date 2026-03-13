import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuPage.vue')
  },
  {
    path: '/franchise',
    name: 'Franchise',
    component: () => import('../views/FranchisePage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  },
  // Legacy home view (can be removed if not needed)
  {
    path: '/old-home',
    component: () => import('../views/HomeView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
