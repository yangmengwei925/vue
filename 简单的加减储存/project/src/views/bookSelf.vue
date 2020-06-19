<!--  -->
<template>
    <div>
<shopCar :count="count" @click="handleClick"/>
    </div>
</template>

<script>
import shopCar from '../components/shpCar'
export default {
  data () {
    return {
            count:0
    };
  },

  components: {
      shopCar
  },

//   computed: {},

//   mounted: {},

  methods: {
  handleClick(payload){
          this.count+=payload;
          window.localStorage.count = this.count
  }
  }
}

</script>
<style lang='scss' scoped>

</style>