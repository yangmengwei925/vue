<!--  -->
<template>
    <div class="book-self-wrap" @click="handleClick">
      </div>
</template>

<script>
export default {
  data () {
    return {
        count:0
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

   methods: {
       handleClick(){
           this.$emit("click",666)
       }
   }
}

</script>
<style lang='scss' scoped>

</style>