import { defineAsyncComponent } from 'vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('@/views/Home.vue'))
  },
  {
    path: '/setup',
    name: 'setup',
    component: defineAsyncComponent(() => import('@/components/setup/index.vue'))
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: defineAsyncComponent(() => import('@/components/lifeCycle/index.vue'))
  },
  {
    path: '/lifeCycle1',
    name: 'lifeCycle1',
    component: defineAsyncComponent(() => import('@/components/lifeCycle/index1.vue')),
    meta: { hide: true},
  },
  {
    path: '/getCurrentInstance',
    name: 'getCurrentInstance',
    component: defineAsyncComponent(() => import('@/components/getCurrentInstance/index.vue'))
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: defineAsyncComponent(() => import('@/components/reactive/index.vue'))
  },
  {
    path: '/props-emit',
    name: 'props-emit',
    component: defineAsyncComponent(() => import('@/components/props-emit/index.vue'))
  },
  {
    path: '/provide-inject',
    name: 'provide-inject',
    component: defineAsyncComponent(() => import('@/components/provide-inject/index.vue'))
  },
  {
    path: '/computed',
    name: 'computed',
    component: defineAsyncComponent(() => import('@/components/computed/index.vue'))
  },
  {
    path: '/watch',
    name: 'watch',
    component: defineAsyncComponent(() => import('@/components/watch/index.vue'))
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: defineAsyncComponent(() => import('@/components/mixins/index.vue'))
  },
  {
    path: '/router',
    name: 'router',
    component: defineAsyncComponent(() => import('@/components/router/index.vue'))
  },
  {
    path: '/store',
    name: 'store',
    component: defineAsyncComponent(() => import('@/components/store/index.vue'))
  },
  // {
  //   path: '/others',
  //   name: 'others',
  //   component: defineAsyncComponent(() => import('@/components/others/index.vue')),
  //   meta: { title: 'others------', isChild: false },
  //   // children: [
  //   //   { name: 'aaa',path: 'a', meta: { isChild: true },component:()=>import('@/components/others/a.vue'),},
  //   //   { name: 'bbb',path: 'b', meta: { isChild: false },component:()=>import('@/components/others/b.vue'),},
  //   // ]
  // },
  {
    path: '/teleport',
    name: 'teleport',
    component: defineAsyncComponent(() => import('@/components/teleport/index.vue')),
    meta: { title: 'teleport'},
  },
  {
    path: '/suspense',
    name: 'suspense',
    component: defineAsyncComponent(() => import('@/components/suspense/index.vue')),
    meta: { title: 'suspense'},
  },
  {
    path: '/vModels',
    name: 'vModels',
    component: defineAsyncComponent(() => import('@/components/others/vModels/index.vue')),
    meta: { title: '多个v-model'},
  },
  {
    path: '/ref',
    name: 'ref',
    component: defineAsyncComponent(() => import('@/components/others/ref/index.vue')),
    meta: { title: 'ref组件实例'},
  },
  {
    path: '/render',
    name: 'render',
    component: defineAsyncComponent(() => import('@/components/render/index.vue')),
    meta: { title: 'render'},
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: defineAsyncComponent(() => import('@/components/404.vue')),
    meta: { hide: true},
  }
]
