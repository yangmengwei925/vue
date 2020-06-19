
<template>
  <div class="category">
  <!-- 获取到数据解构 -->
 
             
           <Cate v-for="(item,index) in catagory" :key="index" :item="item"/>
  <!-- {{catagory}} -->
  </div>
</template>

<script>
//父组件
import Cate from '../components/Cate'
import {mapState} from 'vuex'
export default {
   computed:{
     //从仓库取数据
     ...mapState(['catagory'])
   },
  //  methods:{
    
  //  },
   components:{
     Cate
   }
}
</script>

<style lang='scss' scoped >
  
</style>