<template>
  <footer>
    <router-link to="/home" tag="span">首页</router-link>
    <router-link to="/category" tag="span">分类</router-link>
    <router-link to="/my" tag="span">我的</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom:0
}
  span{
    flex: 1;
    text-align: center;
    
  }
  .router-link-active{
      color: red
    }

</style>