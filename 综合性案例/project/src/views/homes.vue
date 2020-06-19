<!--  -->
<template>
    <div class="wrapBox">
                <div v-for="(item,index) in list" :key="index" class="itemWrap">
                      <div @click="pushDetail(item)">
                          <img :src="item.img" alt="" class="img">
                      </div>
                  
                    <p>  {{item.title}}</p>
                    <p class="word">
                      <span float:left>
                          ￥{{item.newPrice}}
                          </span>
                          <span class="smallBox" @click="add(item)" style="float:right">
                                +
                          </span>
                    </p>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
    list:[]
    };
  },
   created(){
       axios.get('/getList').then(res=>{
           this.list=res.data
           console.log(res.data)
       })
   },
//   components: {},

//   computed: {},

//   mounted: {},
  methods: {
      pushDetail(item){
          this.$router.push({
              path:'/detail',
              query:{
                  item:item
              }
          })
      },
      ...mapMutations(['addShop']),
        add(item){
          this.addShop(item)
        }
  }
}

</script>
<style lang='scss' scoped>
.wrapBox{
    display: flex;
    flex-wrap: wrap
}
 .itemWrap{
  width:30%;
margin-right: 3%;
 }
 .itemWrap>div{
    width:100% 
 }
 .itemWrap>div>img{
     width:100%;
     height: 100px;
 }
</style>