
<template>
  <div class="my">
    <p>
      账号:<input type="text"  v-model="user" />
    </p>
    <p>
        密码:<input :type="flag?'text':'password'" v-model="pwd" />
        <span :class="['iconfont',flag?'con-yanjing':'icon-biyanjing']" @click="changeEye"></span>
    </p>
    <p>
       <button @click="submitFn">登录</button>
    </p>
  </div>
</template>

<script>
export default {
   data(){
     return {
       user:"",
       pwd:"",
       flag:false,
       type:"password"
       
     }
   },
   //飞控验证
   methods:{
     submitFn(){
       if(this.user.trim()&&this.pwd.trim()){
         localStorage.user=this.user;
         this.$router.push({
           path:'/list'
         })
       }else{
         alert("用户名或者密码错误")
       }
     },
       changeEye(){
     this.flag=!this.flag
   }
   },
 
}
</script>

<style>

</style>