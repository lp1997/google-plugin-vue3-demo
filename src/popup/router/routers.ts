export const routerMain = [
  {
    path: '/',
    name: 'PageMain',
    isCom: true,
    meta: {
      title: 'PageMain'
    },
    component: import(/* webpackChunkName: "PageMain" */ '@/popup/components/pages/PageMain.vue')
  },
  {
    path: '/PageHello',
    name: 'PageHello',
    isCom: true,
    meta: {
      title: 'PageHello'
    },
    component: import(/* webpackChunkName: "PageHello" */ '@/popup/components/pages/PageHello.vue')
  }
]
