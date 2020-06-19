import React, { Component } from 'react';
import Mocknetwork from '../../until'
class Main extends Component {
    state={
        defaultIndex:0,
        data:[],
        subData:[]
    }
    tabData=(index,item)=>{
            this.setState({
                    defaultIndex:index,
                    subData:item.shopmenuFoods
            })
    }
    render() {
        const {data,defaultIndex,subData}=this.state
        return (
            <div className="main">
              <ul>
                {
                    data.map((item,index)=>{
                        return <li key={index} className={defaultIndex===index?'high':''} onClick={()=>this.tabData(index,item)}>{item.title}</li>
                    })
                }
              </ul>
              <div className="footer">
              </div>
            </div>
        );
    }
}

export default Main;