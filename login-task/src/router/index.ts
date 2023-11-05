import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../components/Login.vue') },
  { path: '/user-dashboard', component: () => import('../components/UserPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;