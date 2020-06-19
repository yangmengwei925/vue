<!--  -->
<template>
    <div>
<!-- my -->
  <p>
    <input type="text" v-model="user">
  </p>
  <p>
    <input :type="flag?'text' : 'password'" v-model="pwd" />
    <span :class="['iconfont',flag?'con-yanjing':'icon-biyanjing']" @click="changeEye"></span>
  </p>
  <p>
    <button @click="submitFn">登录</button>
  </p>
    </div>

</template>

<script>
export default {
  data () {
    return {
        user:'',
        pwd:'',
        //改正密码
        flag:false,
        type:"password"

    };
  },

//   components: {},

//   computed: {},

//   mounted: {},
//绑定方法
  methods: {
    //验证非空
    submitFn(){
      if(this.user.trim()&&this.pwd.trim()){
        //成功
        localStorage.user=this.user;
         this.$router.push({
            path:'/home/homes'
        })
        //从url上获取path参数、
        let path=this.$route.query.path;
        //跳转
        this.$router.push(path)
       
      }else{
        alert("用户名或密码错误")
      }
    },
    changeEye(){
      this.flag=!this.flag
    }
  }
}

</script>
<style lang='scss' scoped>

</style>