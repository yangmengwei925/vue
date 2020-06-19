import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import '../index.scss'
class Search extends Component {
    state={
        keyword:""
    }
    render() {
        const {keyword}=this.state
        const {searchList}=this.props
        console.log(keyword)
        return (
            <div className="search">
            <header>
                <div>
                <NavLink to="/layout/movie/hot">
                 <img src={require('../../src/static/images/返回.png')} alt=""/>
                </NavLink>
               
                </div>
               
                <div className="catEye">猫眼电影</div>
            </header>
            <nav>
                    <p>
                    <input type="text" placeholder="搜电影,搜影院" className="input" onChange={(e)=>{
                        this.setState({
                            keyword:e.target.value
                        },()=>{
                          //执行完 赋值后回调函数 
                        })
                        this.props.setsearchLIST(this.state.keyword)
                    }}/>
                    <button>取消</button>
                    </p>
                    <div className="list">
                      {
                          searchList.length?searchList.map((item,index)=>{
                              return <p key={index}>{item.nm}</p>
                          }):<span>暂无数据</span>
                      }
                    </div>
            
            </nav>
            </div>
        );

    }
}

export default connect((state)=>{
        return {
            searchList:state.searchList
        }
},(dispatch)=>{
    return {
         setsearchLIST(keyword){
        dispatch({
           type: "SET_SEARCHLIST",keyword
        })
    }
    }
   
})(Search);