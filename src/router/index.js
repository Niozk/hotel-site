import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllHotels from '../views/AllHotels.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: AllHotels
    },
    // {
    //   path: '/*',
    //   component: 404  // voor redirects samen met de _redirect file
    // },
  ]
})

export default router