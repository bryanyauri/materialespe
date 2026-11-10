import { createRouter, createWebHistory } from 'vue-router'
import PreciosView from '../views/PreciosView.vue'

const routes = [
  {
    path: '/',
    redirect: '/precios'
  },
  {
    path: '/precios',
    name: 'Precios',
    component: PreciosView
  },
  {
    path: '/pro',
    name: 'Pro',
    component: () => import('../views/ProView.vue')
  },
  {
    path: '/ferreterias',
    name: 'Ferreterias',
    component: () => import('../views/FerreteriasView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router