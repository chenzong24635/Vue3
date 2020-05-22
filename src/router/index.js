import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import(/* webpackChunkName: "setup" */ '@/components/setup/index.vue')
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: () => import(/* webpackChunkName: "lifeCycle" */ '@/components/lifeCycle/index.vue')
  },
  {
    path: '/lifeCycle1',
    name: 'lifeCycle1',
    component: () => import(/* webpackChunkName: "lifeCycle1" */ '@/components/lifeCycle/index1.vue')
  },
  {
    path: '/getCurrentInstance',
    name: 'getCurrentInstance',
    component: () => import(/* webpackChunkName: "getCurrentInstance" */ '@/components/getCurrentInstance/index.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import(/* webpackChunkName: "reactive" */ '@/components/reactive/index.vue')
  },
  {
    path: '/props-emit',
    name: 'props-emit',
    component: () => import(/* webpackChunkName: "props-emit" */ '@/components/props-emit/index.vue')
  },
  {
    path: '/provide-inject',
    name: 'provide-inject',
    component: () => import(/* webpackChunkName: "provide-inject" */ '@/components/provide-inject/index.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "computed" */ '@/components/computed/index.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "watch" */ '@/components/watch/index.vue')
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: () => import(/* webpackChunkName: "mixins" */ '@/components/mixins/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
