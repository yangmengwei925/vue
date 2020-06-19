import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },{
      path: '/category',
      component: () => import('./views/category.vue')
    },{
      path: '/My',
   
      component: () => import('./views/My.vue')
    },{
      path: '/List',
      component: () => import('./views/List.vue')
    }
  
  ]
})
