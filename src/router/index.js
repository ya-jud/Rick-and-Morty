import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  { 
    path: '/main', 
    name: 'Main page',
    component: () => import('../views/main/page.vue'),
  },
  { 
    path: '/characters', 
    name: 'Characters',
    component: () => import('../views/character/page.vue')
  },
  {
    path: '/characterCard', 
    name: 'Character Card',
    component: () => import('../views/character/card.vue')
  },
  { 
    path: '/episodes', 
    name: 'Episodes',
    component: () => import('../views/episode/page.vue')
  },
  {
    path: '/episodeCard', 
    name: 'Episode Card',
    component: () => import('../views/episode/card.vue')
  },
  { 
    path: '/locations', 
    name: 'Locations',
    component: () => import('../views/location/page.vue')
  },
  {
    path: '/locationCard', 
    name: 'Location Card',
    component: () => import('../views/location/card.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router