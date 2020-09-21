import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const About = () => import('@/views/operation/About.vue')
const NotFound = () => import('@/views/common/404.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]
const router = new VueRouter({
  mode: 'history',
  base: '/backstage',
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  next();
})
export default router
