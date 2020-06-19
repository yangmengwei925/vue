<!-- Cate -->
<template>
    <div class="cate">
    <!-- {{item}} -->
<h3>{{item.Subject}} </h3> 
  <div class="main">
        <dl v-for="(v,i) in item.Content" :key="i">
                <div class="dl">
                        <dt>
                                    <img :src="v.Icon" alt=""/>
                            </dt>
                            <dd>{{v.Label}}</dd>
                </div>
                
            </dl>
  </div>
      
    </div>
</template>

<script>
export default {
    props:['item'],
  data () {
    return {

    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style lang='scss' scoped>
  .main{
      
        display:flex;
        flex-wrap:wrap
   }
  dl{
      width:25%;   
  } 
  img{
      width:100%;
      height:100%
  }

</style>