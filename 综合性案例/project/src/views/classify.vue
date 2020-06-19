<!--  -->
<template>
<div>
  <div class="wrap">
   <span v-for="(item,index) in list" :class='{active: count===index}' :key="index" @click="count=index">
      {{item.title}}
   </span>
    </div>
    <span  v-show="index===count" v-for="(item,index) in list" :key="index">
      {{item.count}}
    </span>
</div>
    
</template>

<script>
export default {
  data () {
    return {
          list:[
            {
              title:"第一季",
              count:11111111111
            },{
               title:"第二季",
              count:1111111221111
            },{
               title:"第三季",
              count:1111111331111
            }
          ],
          count:0
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style lang='scss' scoped>
  .wrap{
    display: flex;
  }
  .wrap>span{
    flex:1;
    text-align: center;
    line-height: 40px;
  }
  .active{
    color:red
  }
</style>