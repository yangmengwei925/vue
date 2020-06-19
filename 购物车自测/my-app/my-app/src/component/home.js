import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import MyRouter from '../router/MyRouter'
import '../component/App.css'
export class Home extends Component {
    render() {
        const  {children,count,price}=this.props
        console.log(this.props.children)
        return (
            <div>
               <header></header> 
               <main>
                 <nav>
                    {
                        children.map((item,index)=>{
                            {
                                return <NavLink activeClassName="active" to={item.path} key={index}>
                                    {item.title}
                                </NavLink>
                            }
                        })
                    }
                 </nav>
                 {/** */}
                   
                 <div className="content">
                   <MyRouter routerList={children}></MyRouter>
                 </div>
               </main>
               <footer>
               <a>
              
               <span>联系商家</span>
           </a>
              <p>
              <span>数量：{count}</span>&nbsp;&nbsp;&nbsp;
                   <span>总价： {price}</span>
              </p>
              <p>
              <NavLink to='/login'>
              结账
          </NavLink>
              </p>

           </footer>
            </div>
        )
    }
}
//从仓库取值解构
const mapStateToProps = (state) => {
    const {count,price}=state
    return {
      price:price,
      count:count
    }
}
//写逻辑代码
const mapDispatchToProps =(dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
