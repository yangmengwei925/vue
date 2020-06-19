import React, { Component } from 'react';
import Header from './component/Home'
import Login from './component/Login'
import Pj from './component/Pj'
class App extends Component {
    render() {
        return (
          <div>
          <Header/>
          <Login/>
          <Pj/>
          </div> 
        );
    }
}

export default App;

