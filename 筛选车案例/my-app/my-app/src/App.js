import React, { Component } from 'react';
import Header from './component/header'
import Main from './component/Main'
import { Provider } from 'react-redux'
import store from './store/index'
import 'antd-mobile/dist/antd-mobile.css';  
class App extends Component {
    render() {
        return (
          <div className='app'>
          <Provider store={store}>
              <Header /> 
              <Main></Main>        
          </Provider>
      </div>
        );
    }
}

export default App;