import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/Programação',
    name: 'Programação',
    component: function () {
      return import('../views/ProgramaçãoView.vue')
    }
  },
  {
    path: '/Palestras',
    name: 'Palestras',
    component: function () {
      return import('../views/PalestrasView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
