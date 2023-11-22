import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  { 
    path: '/main', 
    name: 'Main page',
    component: () => import('../views/main/page.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router