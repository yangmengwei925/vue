import React, { Component, Children } from "react"
import './app.css'
class MyTab extends Component {
    state = {
        list: [
            {
                tit: "one",
                child: [
                    { name: "one1" },
                    { name: "one2" },
                    { name: "one3" }
                ]
            },
            {
                tit: "two",
                child: [
                    { name: "two1"
                       
                     },
                     
                    { name: "two2" ,
                  
                },
                    { name: "two3" }
                ]
            }, {
                tit: "three",
                child: [
                    { name: "three1" },
                    { name: "three2" },
                    { name: "three3" }
                ]
            },{
                tit: "three",
                child: [
                    { name: "three1" },
                    { name: "three2" },
                    { name: "three3" }
                ] 
            },{
                tit: "three",
                child: [
                    { name: "three11"},
                
                    { name: "three21" },
                    { name: "three31" }
                ],
              
                
            }
        ],
        currIndex: 0,
        count:0
    }
    render() {
        const {list,currIndex,count}=this.state
        return <div className="wrap">
        <div className="left">
            {list.map((item,index)=>{
                    return <span key={index} style={{background:currIndex===index?"yellow":""}} 
                    onClick={()=>{this.setState({currIndex:index})}}
                    >{item.tit}</span>
                })}
        </div>
           <div className="right">
                        <div>
                        {list[currIndex].child.map((ite,ind)=>{
                            return <p key={ind}>{ite.name}</p>
                        })}
                        </div>
                
            </div> 
          
            <div className="count">
            {list[count].child.map((ite,ind)=>{
                return <p key={ind}>{ite.name}</p>
            })}
        </div>  
            

        </div>
    }
}
export default MyTab