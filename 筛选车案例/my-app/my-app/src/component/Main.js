import React, { Component } from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux'
import Axios from 'axios'
import '../mock'
import './App.css'
import Tablist from './Tablist'
export class Main extends Component {
    state = {
        open: false,
        index:0
      }
      onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
      }
  render() {
    let {list,fillist,tab,tablist,Filter,Indexlist}=this.props   
    let {index}=this.state 
    // fix in codepen
    const sidebar = (<List>
         {tablist.map((item,index)=>{
          if (typeof(item)=='object') {
            return (<List.Item key={index}
                onClick={()=>{
                    this.onOpenChange()
                    Filter(item)
                    //  console.log(item);
                    
                }}
            >{item.typeTitle}</List.Item>);
          }else{
           return <List.Item key={index}
                onClick={()=>{
                    this.onOpenChange()
                    Filter(item) 
                }}
                ></List.Item>
          }
          })
        }
      </List>);
    return (
      <div className="main">
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      <div className='nav'>
      {
           fillist.map((item,index)=>{
           return <li key={index}
           onClick={()=>{
               tab(item.id)
               this.onOpenChange()
           }}>{item.title}</li>
           })
       }
       {/* <li>筛选</li> */}
      </div>
      </Drawer>
      { 
        typeof(Indexlist.Shops)=='object'?Indexlist.Shops.map((items,indexx)=>{
          //  console.log(items);
           
       return <dl key={indexx}>
           <dt><li>
               <img src={items.Images} alt=''/>
               </li></dt>
           <dd>
           <li><h3>{items.CarparName}</h3></li>
           <li className={items.CommentRate?null:'none'}>距离您: {items.CommentRate} KM</li>
           <li className={items.CommentRate?null:'none'}>价格 : {items.ShopId}</li>
           </dd>

           </dl>
       }): <h3>暂无数据</h3>
        
    
}
      </div>
    )
  }
  //
  componentDidMount(){
      let {getList}=this.props
  getList()
    // Axios.get('/getList').then(res => {
    //     console.log(res)
    // })
  }
}

const mapStateToProps = (state) => {
    return {
        list :state.list,
        fillist:state.fillist,
        tablist:state.tablist,
        Indexlist:state.Indexlist
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        getList(){
            dispatch((next)=>{
             Axios.get('/getList').then(res=>{
            //   console.log(res.data);
             
                 
                 next({type:'GET_LIST',list:res.data})
             })
             Axios.get('/getfillist').then(res=>{
                //   console.log(res);
                 next({type:'GET_FILLIST',fillist:res.data.data})
             })
            })
         }, 
         tab:(id)=>{
            dispatch({type:'TAB',id})
        },
        Filter:(item)=>{
            dispatch({type:'FILTER',item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
