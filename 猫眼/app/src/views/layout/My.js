
import React, { Component } from 'react';
import widthLogin from '../../until/widthLogin'
import {NavLink} from 'react-router-dom'
class My extends Component {
     state={
            name:'',
            pwd:'',
            flag:false,
            list:[
                {
                    title:"美团账号登录"
                },{
                    title:"手机验证登录"
                }
            ],
            count:0,
           
                }
    render() {
      const {list,count,name,pwd,flag}=this.state
        return (
            <div className='my'>
                <header className="head" onClick={()=>
                this.props.history.go(-1)
                }>
                <div className="left">
                  <img src={require('../../static/images/返回.png')} alt=""/>
                </div>
                 <div className="right">
                  猫眼电影
                 </div>
               </header>
               <nav>
                 {
                     list.map((item,index)=>{
                         return <span key={index} className={count===index?'active':''} onClick={()=>this.setState({
                             count:index
                         })}>{item.title}</span>
                     })
                 }
               </nav>
                <main>
                     <p> <input type="text"  value={name} placeholder="账户名手机号Emall" onChange={(e)=>{
                       this.setState({
                           name:e.target.value
                       }) 
                     }}/></p> 
                    <p><input type={flag?"text":"password"} value={pwd} placeholder="请输入正确密码"onChange={(e)=>{
                        this.setState({
                            pwd:e.target.value
                        })
                    }} /> <span className={flag?" iconfont icon-yanjing": "iconfont icon-biyanjing"} onClick={()=>this.changeEye}></span></p> 
                   
                    <p onClick={()=>this.props.history.go(-1)
                    }>登录</p>
                          
                        
                </main>
                <footer>
                <img src={require('../../static/images/返回.png')} alt=""/>
                <NavLink to="/my">猫眼电话0932-232424535</NavLink>
                </footer>
            </div>
        );
    }
    changeEye=()=>{
      let {flag}=this.state
        // console.log(1)
        this.setState({flag:!flag})
    } 
    sumbitFn=()=>{
        const {name,pwd}=this.state
        if(name.trim()&&pwd.trim()){
            localStorage.user=name
        }
    }
}

export default widthLogin(My) ;