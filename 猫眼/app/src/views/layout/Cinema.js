import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {NavLink} from 'react-router-dom'
function mapStateToProps(state) {
    console.log(state);
    return {
        Ing:state.Ing
    };
}

class Cinema extends Component {
    render() {
        const {Ing,img} =this.props
        console.log(this.props.Ing);
        
        return (
            <div className="cinena">
             <header onClick={()=>this.props.history.go(-1)}>猫眼电影</header>
             <nav>
             </nav>
             <main>
             <h2>近期上线</h2>
              <main>
              {
                 Ing.map((item,index)=>{
                     return <div key={index}>
                     <dl>
                       <dt>
                        <img src={item.img.replace('w.h','64.100')} alt="" />
                       </dt>
                       <dd>{item.nm}</dd>
                     </dl>
                 
                     </div>
                 })
             } 
              </main>
              
              
             </main>
             <footer>
            
             </footer>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cinema);