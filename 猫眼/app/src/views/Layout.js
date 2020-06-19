
import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import RouterView from '../router/RouterView'
class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <RouterView routes={this.props.routes}/>
                <footer>
                    <NavLink to='/layout/movie'>电影</NavLink>
                    <NavLink to='/layout/cinema'>影院</NavLink>
                    <NavLink to='/layout/my'>我的</NavLink>
                </footer>
            </div>
        );
    }
}

export default Layout;