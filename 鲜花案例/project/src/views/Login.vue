
 <template>
  <div class="login">
    <p>
      <input type="text" v-model="user" />
    </p>
    <p>
      <input type="text" v-model="pwd" />
    </p>
    <button @click="submit">登陆</button>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    /**
     * 登陆功能
     * 非空校验
     */
    submit() {
      if(this.user.trim()&&this.pwd.trim()){
        localStorage.user=this.user
      }else{
        alert("用户名或者密码错误")
      }
    }
  }
};
</script>
 
 <style>
</style>
