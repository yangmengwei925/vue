import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './store/index'
import './mock/index'
class App extends Component {
    render() {
        return (
            <div className='app'>
                <Provider store={store}>
                    <Header />
                    <Main />
                </Provider>
            </div>
        );
    }
}

export default App;