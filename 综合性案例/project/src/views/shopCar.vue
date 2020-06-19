<!--  -->
<template>
    <div class="oul">
     <ul v-for="(item,index) in listData" :key="index">
         <li>
             <h4>{{item.title}}</h4>
             <span>
                 ￥：{{item.newPrice}}
             </span>
             <span style="float:right">
            <button @click="del(index)">-</button>
            {{item.num}}
            <button @click="add(index)">+</button>
             </span>
         </li>
     </ul>
     <p>总价:{{sumPrice.toFixed(2)}}</p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
//   components: {},
//计算属性 可以定义
   computed: {
       ...mapState(['listData','newArr']),
       ...mapGetters(['sumPrice'])
   },

//   mounted: {
    
//   },

  methods: {
        //加减
    ...mapMutations(['addCount','reduceCount']),
    add(index){
      this.addCount(index)
    },
    del(index){
        this.reduceCount(index)
    }
  }
}

</script>
<style lang='scss' scoped>
   .oul{
       width:100%
   }
   .oul>li{
       border-bottom: 1px solid #000;
       padding-bottom: 20px
   }
   button{
       padding:0 8px
   }
</style>