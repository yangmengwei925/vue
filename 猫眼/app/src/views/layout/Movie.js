
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/RouterView'
import {connect} from 'react-redux'
class Movie extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='movie'>
                <header>猫眼电影</header>
                <nav>
                <dl>
                    <dt><img src="http://p0.meituan.net/moviemachine/aecdf2ec9d155e6e35a9d8110dca3df229803.png" alt=""/></dt>
                    <dd className="eye">猫眼</dd>
                    <dd>动画上帝女我说的</dd>
                </dl>
                   <button>立即打开</button>
                </nav>
                <div className='tabbar'>
                {/*this.props.history.push()*this.props.city */} 
            <NavLink to="/Address">{this.props.city}</NavLink>
                    <NavLink to='/layout/movie/hot'>正在热映</NavLink>
                    <NavLink to='/layout/movie/ing'>即将上映</NavLink>
                    <img src={require('../../static/images/search.png')} alt=""  className="search" onClick={()=>{
                        this.props.history.push('/search')
                    }}/>
                </div>
                <RouterView routes={this.props.routes} />
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
  return {
   city:state.city
  }
}
const mapdispatchToProps=(dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapdispatchToProps)(Movie) ;