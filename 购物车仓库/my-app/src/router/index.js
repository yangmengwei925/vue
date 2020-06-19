import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
//二级路由
import Home from '../component/home'
class RootRouter extends Component {
    render() {
        //<BrowserRouter>路由系统 
        return (
            <BrowserRouter>
                <Switch>
                  <Route path='/home' component={Home}>
                {/** 重定向 */} 
    
                  </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RootRouter;