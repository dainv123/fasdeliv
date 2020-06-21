import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: Home
    }
  ]
})

export default router;
