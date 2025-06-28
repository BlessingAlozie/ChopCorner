import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../views/Home/Navbar.vue'
import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
      path: '/',
      name: 'home',
      component: Home,
   },
     {
      path: '/navbar',
      name: 'navbar',
      component: Navbar,
    }
  ],
})

export default router
