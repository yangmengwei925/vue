import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import './header.css'
import Main from './main'
export class index extends Component {
  state={
    defaultIndex:0
  }
 render() {
    const {defaultIndex}=this.state
   console.log(this.props.headerlist)
    return (
      <div className="header">
      <ul>
       {
        this.props.headerlist.map((item,index)=>{
          return <li key={index} className={defaultIndex===index?'action':''} onClick={()=>{
            this.setState({defaultIndex:index})
           this.props.history.push(item.to)}}>{item.title}</li>
        })
        }
      </ul>
       
        <Switch>
                    <Route path="/home/main" render={()=>{
                            return <Main data={this.props.location.state}/>
                    }}></Route>
                    <Route path="/home/talk" component={()=><div>评价</div>}></Route>
                    <Route path="/home/shop" component={()=><div>商店</div>}></Route>
                    <Route path="/home/login" component={()=><div>登录</div>}></Route>
                 
                </Switch>
      </div>
    )
  }
}
//从仓库拿数据
const mapStateToProps = (store) => {
  const {headerlist}=store
  return {
    headerlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
