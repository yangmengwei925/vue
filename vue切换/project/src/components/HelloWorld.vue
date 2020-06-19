<template>
  <div class="hello">
  <div class="topBox">
      <div :class="{active: count===index}" v-for="(item, index) in tabList" @click="tabClick(index)" :key="index">
          {{item}}
        </div>
       </div>
   <div><tabBar :tabList="list" :curIndex.sync="curIndex" @click="handleChange" /></div>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  name: 'HelloWorld',
  data(){
    return {
        // tabList: ['全部任务', '进行中的任务', '强制终止的任务', '已完成的任务'],
        curIndex:0, 
        count:0,
         list:[
        {title:'all'
        },
        {
          title:123123
        },
        {
          title:'12312312123'
        }
      ]
    }
  },
  components: {
   
     tabBar
  },
  methods: {
     tabClick(index) {
       this.count = index
       console.log(this.count)
     },
    handleChange(val){
       this.curIndex=val
       console.log(this.curIndex)
    }
     }, 

}
</script>
<style  scoped>
  .hello{
   height: 100%;
   }
     .active{
      background: orange;
      color: #fff;
      border: 1px solid #fff !important;
    }
    .topBox{
      display: flex;
    }
    .topBox>div{
      flex:1;
      margin: 0 20px;
      text-align: center;
      border: 1px solid black;
    }
    .oul{
      width: 100%;
    }
    .oul>li{
      width: 100%;
      display: flex;
      margin-bottom: 20px;
    }
    .liLeft{
      flex: 1;
    }
    .liLeft>img{
      width: 100%;
      height: 100%;
    }
    .liRight{
      flex: 7;
      text-align: left;
      padding: 0 20px;
    }
    .liRight>h3{
      margin:0;
      background: black;
      opacity: .7;
      color: #fff;
    }
  
  
  
</style>

