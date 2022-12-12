export const routerMain = [
  {
    path: '/',
    name: 'PageMain',
    title: '首页',
    isCom: true,
    component: import(/* webpackChunkName: "PageMain" */ '@/popup/components/pages/PageMain.vue')
  },
  {
    path: '/PageSetting',
    name: 'PageSetting',
    title: '配置页',
    isCom: true,
    component: import(/* webpackChunkName: "PageSetting" */ '@/popup/components/pages/PageSetting.vue')
  },
  {
    path: '/PageHello',
    name: 'PageHello',
    title: 'hello页',
    component: import(/* webpackChunkName: "PageHello" */ '@/popup/components/pages/PageHello.vue')
  }
]
