import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/collections', name: 'Collections', component: ()=>import('./views/Collections.vue') },
  { path: '/book/:id', name: 'Book', component: ()=>import('./views/BookDetails.vue'), params: true },
  { path: '/:pathMatch(.*)', name: '404', component: ()=>import('./views/PageNotFound.vue') } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router