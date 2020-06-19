import React, { Component } from 'react';
import {Route} from 'react-router-dom'
class MyRouter extends Component {
    render() {
          const {routerList} =this.props
             console.log(routerList)
        return (
            <div>
                {
              this.props.routerList.map((item,index)=>{
                return <Route path={item.path} key={index} render={   
                (props)=>{
                    let Com=item.com
                    if(item.children){
                        return <Com {...props} children={item.children}></Com>
                    }else{
                        return <Com {...props}></Com>
                    }
                }}>
                    
                </Route>
              })
                }
            </div>
        );
    }
}

export default MyRouter;