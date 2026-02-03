import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BirkensView from '../views/BirkensView.vue'
import BonesView from '../views/BonesView.vue'
import CamisasView from '../views/CamisasView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/birkens', name: 'birkens', component: BirkensView },
    { path: '/bones', name: 'bones', component: BonesView },
    { path: '/camisas', name: 'camisas', component: CamisasView },
    { path: '/login', name: 'login', component: LoginView }
  ]
})

export default router