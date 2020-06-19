<template>
  <div class="hello">
    <div class="header">
     <h2>每日优鲜</h2>
    </div>
    <main>
      <router-view></router-view>
    </main>
    <footer>
         <router-link :to="item.path" v-for="(item,index) in list" :key="index">
           {{item.title}}
         </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        list:[
          {
            title:"配送",
            path:"home/homes",
            flag:false
          },{
            title:"分类",
            path:"home/classify",
             flag:false
          },{
            title:"会员",
            flag:false,
             path:'home/vip',

          },{
            title:"购物车",
            path:"/home/shopCar",
             flag:true
          },{
             title:"我的",
            path:"/home/my",
             flag:false
          }
        ]
    }
  }
}
</script>
<style  scoped>
*{
  text-decoration: none;
  list-style: none;
  color:black
}
  .hello{
   height: 100%;
    flex-direction: column;
    display: flex;
  
  }
  .header{
    width:100%;
    height: 36px;
    line-height: 36px;
    background: darkkhaki
  }
  .header>h2{
    text-align: center;
  }
  main{
    flex:1;
    overflow: auto;
  }
  footer{
  
    width: 100%;
    height: 20px;
    line-height: 30px;
    background: salmon;
    display: flex;
    justify-content: space-between
  }
  
</style>

