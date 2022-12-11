import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routerMain } from './routers'
const routes: Array<RouteRecordRaw> = [
  ...routerMain,
  {
    path: '/*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
