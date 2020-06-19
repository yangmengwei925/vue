import React, { Component } from 'react';
import RootRouter from './router'
import store from './store'
import './component/App.css'
import {Provider} from 'react-redux'
class App extends Component {
    render() {
        return (
          <div className="App">
          <Provider store={store}>
            <RootRouter />
          </Provider>
        </div>
        
        );
    }
}

export default App;