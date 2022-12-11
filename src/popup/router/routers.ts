export const routerMain = [
  {
    path: '/',
    name: 'PageMain',
    title: '首页',
    component: import(/* webpackChunkName: "PageMain" */ '@/popup/components/pages/PageMain.vue')
  },
  {
    path: '/PageHello',
    name: 'PageHello',
    title: 'Hello页',
    component: import(/* webpackChunkName: "PageHello" */ '@/popup/components/pages/PageHello.vue')
  }
]
