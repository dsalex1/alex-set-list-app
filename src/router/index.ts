import { createRouter, createWebHashHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/',
      redirect: '/login',
    },
  ],
})

export default router
