import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: () => import(/* webpackChunkName: "LifeCycle" */ '@/components/LifeCycle/index.vue')
  },
  {
    path: '/LifeCycle1',
    name: 'LifeCycle1',
    component: () => import(/* webpackChunkName: "LifeCycle" */ '@/components/LifeCycle/index1.vue')
  },
  {
    path: '/GetCurrentInstance',
    name: 'GetCurrentInstance',
    component: () => import(/* webpackChunkName: "GetCurrentInstance" */ '@/components/GetCurrentInstance/index.vue')
  },
  {
    path: '/Reactive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "Reactive" */ '@/components/Reactive/index.vue')
  },
  {
    path: '/Props_Emit',
    name: 'Props_Emit',
    component: () => import(/* webpackChunkName: "Props_Emit" */ '@/components/Props_Emit/index.vue')
  },
  {
    path: '/Provide_Inject',
    name: 'Provide_Inject',
    component: () => import(/* webpackChunkName: "Provide_Inject" */ '@/components/Provide_Inject/index.vue')
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "Computed" */ '@/components/Computed/index.vue')
  },
  {
    path: '/Watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "Watch" */ '@/components/Watch/index.vue')
  },
  {
    path: '/Mixins',
    name: 'Mixins',
    component: () => import(/* webpackChunkName: "Mixins" */ '@/components/Mixins/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
