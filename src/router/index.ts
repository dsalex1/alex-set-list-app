import { createRouter, createWebHashHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'

import HomeView from '@/views/HomeView.vue'
import UserIndex from '@/views/users/UserIndex.vue'
import UserCreateEdit from '@/views/users/UserCreateEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/user/:id/edit',
      component: UserCreateEdit,
    },
    {
      path: '/user/create',
      component: UserCreateEdit,
    },
    {
      path: '/user',
      component: UserIndex,
    },
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
