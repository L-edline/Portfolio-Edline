import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../vues/Accueil.vue'
import CV from '../vues/CV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil,
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV,
    },
  ],
})

export default router
