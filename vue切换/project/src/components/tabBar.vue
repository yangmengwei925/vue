<!--  -->
<template>
    <div class="my">
    <li v-for="(item,index) in tabList"  
    :key='index' 
    @click="handleClick(index)" 
    :class="{active:curIndex==index}">
        {{item.title}}
    </li>
    </div>
</template>

<script>
export default {
    name:'tabBar',
    props:{
        tabList:{
            type:Array,
            default:()=>[]
        },
        curIndex:{
            type:[Number,String],
            default:0
        }
    },
  data () {
    return {

    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

  methods: {
      handleClick(i){
          this.$emit('update:curIndex',i)
      }
  }
}

</script>
<style  scoped>
.active{
    color:red
}
.my{
    display: flex;
    justify-content: space-between
}
</style>