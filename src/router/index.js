import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../vues/Accueil.vue'
import CV from '../vues/CV.vue'
import Mentions from '@/vues/Mentions.vue'

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
    {
      path: '/mentions',
      name: 'mentions',
      component: Mentions,
    },
  ],
})

export default router
