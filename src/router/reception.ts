import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const Home = () => import('@/views/gateway/Home.vue')
const NotFound = () => import('@/views/common/404.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]
const router = new VueRouter({
  mode: 'history',
  base: '/reception',
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  next();
})
export default router
