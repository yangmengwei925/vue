import React, { Component } from 'react';
import list from './routerConfig'
import MyRouter from './MyRouter'
import {BrowserRouter as Router} from 'react-router-dom'
//跟路由
class RooterRouter extends Component {
    render() {
        return (
            <Router>
           <MyRouter routerList={list}></MyRouter>
            </Router>
        );
    }
}

export default RooterRouter;