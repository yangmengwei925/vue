import React, { Component } from 'react';
// import Home from './home'
import RootRouters from '../router'
import {Provider} from 'react-redux'
import store from '../store'
class App extends Component {
    render() {
        return (
          <div className="wrap">
          <Provider store={store}>
            <RootRouters></RootRouters>
          </Provider>
        </div> 
        );
    }
}

export default App;