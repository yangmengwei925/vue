import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../mock'
import Axios from 'axios'
export class Shoop extends Component {
    render() {
          const {list,childrenList,Gatering,Del,Add}=this.props
          console.log(list)
          console.log(childrenList)
        return (
            <div className="shoop">
                <div className="left">
                {
                    list.map((item,index)=>{
                      return <div key={index} className="set" onClick={()=>{
                          Gatering(item,index)
                      }}>{item.name}</div>  
                    })
                }
                </div>
                <div className="right">
                {
                    childrenList.map((item,index)=>{
                        return <div key={index}><dl>
                        <dt>
                        <img src={item.image} alt="" className="img"/>
                        </dt>
                        <dd>
                        <p>{item.name}</p>
                        <p>
                        <span>￥{item.price}</span> 
                        <button onClick={()=>{
                            Del(index)
                        }}>-</button>
                        <span className={item.count > 0 ? "block" : "none"}>{item.count}</span>
                        <button onClick={()=>{
                            Add(index)
                        }}>
                        +
                        </button>   
                        </p>
                        </dd>
                    </dl></div>
                    })
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        const {getList}=this.props
        getList()
    }
}

const mapStateToProps = (state) => {
    const {list,childrenList}=state
    console.log(childrenList)
    return {
        list,
        childrenList

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getList(){
            dispatch((next)=>{
                 Axios.get('/getList').then(res=>{
                        res.data.goods.map((item,index)=>{
                            // item.counts=0,
                            item.prices=0
                            console.log(res.data.goods)
                    item.foods.map((item,index)=>{
                            item.count=0
                            item.flag=false
                    })
                })
                 next({
                    type:'GET_SHOOP',
                    list:res.data
                })
            })
                   
            })
          
        },
        //点击事件
        Gatering(item,index){
            dispatch({
                type:'CATE_RING',
                item,index
            })
        },
        Add(index){
            dispatch({
                type:'ADD_COUNT',
                index
            })
        },
        Del(index){
            dispatch({
                type:"DEL_COUNT",
                index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoop)
