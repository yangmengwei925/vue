
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/My',
      component: () => import('../views/My.vue')
    },
    {
      path: '/Category',
      component: () => import('../views/Category.vue')
    },{
      path: '/Login',
      component: () => import('../views/Login.vue')
    }
  ]
})
