import React, { Component } from 'react'
import './App.css'
import Header from './header'
import Main from './main'
import Footer from './footer'
 class App extends Component {
    render() {
        return (
            <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            </div>
        )
    }
}
export default App
