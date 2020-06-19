
<template>
  <div class="home">
    <header>鲜花网</header>
    <img :src="bannerList.TopPic" alt="" >
    <MySwiper :data="bannerList.BannerList"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MySwiper from '../components/MySwiper'
export default {
  components:{MySwiper},
computed:{
  ...mapState(['bannerList'])
}
}
</script>

<style scoped >
.home,html,body,#root{
  width:100%;
  height:100%;
}
  header{
    height: 30px;
    background: pink;
    font-size: 30px;
    text-align: center;
    line-height: 30px;

  }
  header>img{
    width: 100%;
    height: 100px;
  }

</style>