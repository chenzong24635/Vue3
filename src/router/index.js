import { 
  createRouter,
  createWebHashHistory 
  // createWebHistory
} from 'vue-router';

import {routes} from './routes'
const router = createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || to.name
  next()
})
export default router
