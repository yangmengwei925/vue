<template>
  <div class="hello">
    <header>
      <h2>任务计划列表</h2>
    </header>
    <main>
      <input type="text" v-model="txt" v-on:keydown="addFn" placeholder="例如:吃饭打豆豆" class="input"/>
      <p>  总任务:4个。已完成：<label> <input type="checkbox" v-model="checkAll" @change="checkAllFn"/></label>
          未完成:<label> <input type="checkbox" @change="checkAllFnn"/> </label></p>
      <ul>
        <li v-for="(item,index) in list" :key="index">
        <input type="checkbox" v-model="item.checkflag" @change="singleCheck">
          {{index+1}}
          <span v-if="!item.flag">{{item.name}}</span>
            <input type="text" v-else v-model="item.name" @blur="editSave(item.id)">
            <button @click="editBtn(item.id)"> <div>编辑</div> </button>
            <button @click="delBtn(item.id)"> <div>删除</div> </button>
        </li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
        return {
          txt:'',
          checkAll:false,

          list:[
            {
              name:"向往的活",
              flag:false,
              id:0,
              checkflag:false
            },{
              name:"奔跑吧是",
              flag:false,
              id:2,
              checkflag:false
            },{
               name:"快乐家庭",
              flag:false,
              id:3,
              checkflag:false
            },{
               name:"快乐家庭",
              flag:false,
              id:4,
              checkflag:false
            }
          ]
        }
    },
    //新增方法
    methods:{
      addFn(e){
        if(e.keyCode===13){
          let obj={
            name:this.txt,
            flag:false,
            flags:false,
            id:new Date()*1,
            checkflag:false
          };
          this.list.push(obj)
          this.txt=''
        }
      },
      editBtn(id){
        this.list.find(item=>item.id===id).flag=true;
      },
      editSave(id){
        this.list.find(item=>
          item.id===id).flag=false;
      },
      delBtn(id){
        let index=this.list.findIndex(item=>item.id===id)
        this.list.splice(index,1)
      },
      singleCheck(){
        this.checkAll=this.list.every(item=>item.checkflag)
      },
      checkAllFn(){
        this.list.forEach(item=>{
          item.checkflag=this.checkAll
        })
      },
      checkAllFnn(){
        this.list.forEach(item=>{
          item.checkflag=!this.checkAll
        })
      }
    }
  
}
</script>
<style  scoped>
  .hello{
   height: 100%;
    display:flex;
    flex-direction: column;
    background: tomato
  }
  header{
    width:100%;
    height:30px;
    line-height: 30px;
   text-align: center;
  }
  main{
    flex:1;
    overflow: auto;
  }
   footer{
      width:100%;
    height:30px;
    line-height: 30px;
    background: salmon;
    position: fixed;
    bottom:0
   }
   .input{
     width:100%;
     height: 20px;
   }
   
   button{
     width:50px;
     height: 50px;
     margin:2px 20px
   }
</style>

