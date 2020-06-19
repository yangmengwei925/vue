
import React, { Component } from 'react';
import routerList from './routerList'
import RouterView from './RouterView'
import store from '../store/index'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
//import { BrowserRouter, HashRouter } from 'react-router-dom'
class index extends Component {
    render() {
        return (
           <Provider store={store}>
                <BrowserRouter>
                     <RouterView routes={routerList} />
                </BrowserRouter>
           </Provider>
        );
    }
}

export default index;