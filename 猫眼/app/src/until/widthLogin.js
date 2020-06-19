import React, { Component } from 'react';

//高阶组件案例
const withLogin=(Com)=>{
   return class extends Component{
    componentWillMount(){
        //判断
        if(!localStorage.user){
            this.props.history.push('/Login');
        }
    }
    render (){
        return <Com {...this.props}/>
    }
   }
}
export default withLogin