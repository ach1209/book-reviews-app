import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/completed', name: 'Completed', component: ()=>import('./views/Completed.vue') },
  { path: '/reviews', name: 'Reviews', component: ()=>import('./views/Reviews.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router