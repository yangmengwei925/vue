import React, { Component } from 'react';
//父传子
class Main extends Component {
    state={
        num:9999,
        text:'收到就好'
    }
    sendFn=()=>{
        console.log(222)
    }
    render() {
        let {num,text}=this.state
        return (
            <div>
           我是主页
           发送
           <Content sendNum={num} sendFn={this.sendFn}></Content>
            </div>
        );
    }
} 
 class Content extends Component {
     state={
         num:9944,
         text:'收到就好'
     }
    
     render() {
         console.log(this.props)
         let {num,text}=this.state
         return (
             <div>
               我是Content  
            接收到的
              {this.props.sendNum}
             
             </div>
         );
     }
 }
 

export default Main;