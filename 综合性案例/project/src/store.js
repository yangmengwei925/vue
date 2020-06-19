import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData:[],
    newArr:[]
  },
  //getters 的返回值会根据它的依赖被缓存起来，
  //且只有当它的依赖值发生了改变才会被重新计算。
  getters:{
  //计算总价
  sumPrice(state){
    return state.newArr.reduce((prve,next)=>{
      return prve + next.num*next.newPrice
    },0)
  }
  },
  ///突变/生明一个常量mutations，
  //将所有的mutation放入其中mutations 
  //对象里的方法需要使用 store.commit 调用
mutations: {
    addShop(state,action){
      var isFlag=state.listData.some(res=>{
        return res.id===action.id
      })
      //不存在时
      if(!isFlag){
        state.listData.push(action)
      }else{
        state.listData.forEach(val=>{
          if(val.id===action.id){
            val.num++
          }
        })
      }
    },
//根据下标增加说话间驱动应用的数据源，用于保存所有组件的公共数据.
//Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
//因此你可以调用 context.commit 提交一个 mutation，
//或者通过 context.state 和 context.getters
 //来获取 state 和 getters。
addCount(state,action){
  state.listData[action].num++
},
reduceCount(state,action){
  if(state.listData[action].num===1){
    state.listData.splice(action,1)
  }else{
    state.listData[action].num--
  }
}
  },
  //异步操作。actions 对象里的方法需要使用 store.dispatch 调用。
  ////异步改变state,dispatch方法
  actions: {
  },
  //分割模块
  modules: {
  }
})
