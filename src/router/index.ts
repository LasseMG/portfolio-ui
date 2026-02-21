import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetail,
    },
    {
      path: '/om-mig',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
