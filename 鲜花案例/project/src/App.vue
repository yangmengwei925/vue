<template>
  <div class="app">
    <router-view class="main" />
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter";
export default {
  components: { MyFooter }
};
</script>

<style scoped lang='scss'>
.app,html,body,#root,.cate{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none
}
  .main{
    flex: 1;
    overflow: auto
  }
header{
    height: 50px;
    background: pink;
    font-size: 30px;
    text-align: center;
    line-height: 50px;

  }
  header>img{
    width: 100%;
    height: 100px;
  }
</style>