<template>
  <div class="home">
   <div class="tobBox">
      <div :class="{active: count===index}" v-for="(item, index) in tabList" @click="tabClick(index)" :key="index">
          {{item}}
        </div>
       </div>
  </div>
</template>

<script>

export default {
  name: 'home',
   data() {
    return {
      val: "",
      count: 0,
        // dataList: [],
       dataList: [
         {
           title: "客户经理掌上测试",
           grade: 1,
           beginTime: "2013年04月03日",
           endTime: "2013年05月03日",
           img:
             "https://img02.sogoucdn.com/app/a/100520021/49066f77ffe0c695b56652a9ff33db94",
           state: "进行中的任务",
           flag: true
        },
        {
          title: "客户经理掌上测试",
          grade: 1,
           beginTime: "2013年04月03日",
           endTime: "2013年05月03日",
           img:
             "https://img02.sogoucdn.com/app/a/100520021/67c0e5cd1b790c809e27eab115d663e8",
        state: "强制终止的任务",
         flag: true
         },
         {
           title: "客户经理掌上测试",
           grade: 1,
          beginTime: "2013年04月03日",
           endTime: "2013年05月03日",
          img:
             "https://img03.sogoucdn.com/app/a/100520021/b7898a189a96626c8ba0d2eaff48f103",
           state: "以完成的任务",
           flag: true
         }
       ],
      tabList: ["全部任务", "进行中的任务", "强制终止的任务", "已完成的任务"]
    };
   },
  // components: {
  //   HelloWorld
  // },
   methods: {
    tabClick(index) {
      this.count = index;
      // console.log(this.count);
    },
}
}
</script>
<style  scoped>
  .home{
    height:100%
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
    .left{
      flex: 1;
    }
    .left>img{
      width: 100%;
      height: 100%;
    }
    .right{
      flex: 7;
      text-align: left;
      padding: 0 20px;
    }
    .right>h3{
      margin:0;
      background: black;
      opacity: .7;
      color: #fff;
    }
</style>
