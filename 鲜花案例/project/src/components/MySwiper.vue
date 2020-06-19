
<template>
  <div class="myswiper">
    <div class="tabbar">
      <span
        v-for="(item,index) in data"
        :key="index"
        :class="{'active':index===currentIndex}"
        @click="tabFn(index)"
      >{{item.Linkage}}</span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="callback">
      <swiper-slide v-for="(item,index) in data" :key="index">
        <img :src="item.ImageUrl" />
        <div class="txt">
          <p>{{item.LabelName}}</p>
          <p>{{item.Desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      swiperOption: {
           loop:true,
          //  autoplay:true
      }
    };
  },
  props: ["data"],
  methods: {
    tabFn(index) {
      this.currentIndex = index;
      // 滑动
      this.$refs.mySwiper.swiper.slideTo(index,1000)
    },
    callback(){
        //获取swiper实例
        console.log(this.$refs.mySwiper.swiper.activeIndex)
        this.currentIndex=this.$refs.mySwiper.swiper.activeIndex
    }
  }
};
</script>

<style scoped >
.active {
  background: red;
}
.tabbar{
    display: flex;
    justify-content: space-around;
}
.swiper-container{
  height: 280px;
  overflow: hidden;
}
  .swiper-slide {
    text-align: center;
  }
    .swiper-slide>img {
      width: 70%;
      border-radius: 17px;
    }
    .txt {
      position: absolute;
      bottom: 50px;
      text-align: center;
      width: 100%;
      color: #fff;
    }
  

</style>