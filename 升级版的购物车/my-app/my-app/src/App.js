import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './view/Home'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = { store }>
          <Home/>
      </Provider>
    </div>
  );
}

export default App;
