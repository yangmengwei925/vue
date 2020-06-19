import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import './assets/font/iconfont.css'

// import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from "vue-awesome-swiper"
 import "swiper/css/swiper.css"
 Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

window.vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
