
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
import bannerList from '../data/banner.json'
import catagory from '../data/catagory.json'
export default new Vuex.Store({
  state:{
    bannerList,
    catagory
  }
})
