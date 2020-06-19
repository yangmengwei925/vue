1.下载vuex
2.在src文件夹下新建store文件夹，里面写index.js
3.index.js中
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
        },
        getters: {
        },
        mutations: {
        },
    })

    export default store
4.在main.js中引入 store下的index.js并且在new Vue中配置store