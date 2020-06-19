<!--  -->
<template>
    <div>
 <span @click="handleClick('-')">-</span>{{count}}
  <span @click="handleClick('+')">+</span>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
 
  },
props:{
    count:{
        type:[
            Number,
            String,  
        ],
         default:0
    }
},
//   components: {},

//   computed: {},

//   mounted: {},
   methods: {
       handleClick(type){
            let num=type=="-" ? -1: 1;
            this.$emit('click',num)

       }
   }
}

</script>
<style lang='scss' scoped>

</style>