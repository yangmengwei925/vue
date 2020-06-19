
import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import Item from '../../../components/Item'
class Hot extends Component {
    render() {
        let {hotList}=this.props
        return (
            <div className="hot">
              <div className="wrapper" ref="wrapper">
                    <div className="content">
                            {
                        hotList.map((item,index)=>{
                            return(
                            <Item key={item.id} {...item}></Item>     
                            )
                        })
                    }
                    </div>
              </div>
            
            </div>
        );
    }
    componentDidMount(){
        axios.get('/hot').then(({data})=>{
          this.props.sethotlist(data)
          //console.log(data)
        })
  let scroll=new BScroll(this.refs.wrapper,{
        pullUpLoad:{
            threshold:-100
        },
        click:true
    })
       scroll.on('pullingup',()=>{
            console.log(111)
          .props.addHotList()
          scroll.refresh()
            //加载完毕
           scroll.finishPullUp()
        })
    }
}

// 两个参数、且都是函数
let mapStateToProps=(state)=>{
    return {
        hotList:state.hotList
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        sethotlist(data){
            dispatch({type:'SET_HOT_LIST',data})
        },
        addHotList(){
            dispatch({
                type:"ADD_HOTLIST",

            })
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hot);