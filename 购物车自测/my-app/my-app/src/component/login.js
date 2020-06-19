import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Login extends Component {
    render() {
        return (
            <div>
               login <NavLink to="/home">1</NavLink>
            </div>
        );
    }
}

export default Login;