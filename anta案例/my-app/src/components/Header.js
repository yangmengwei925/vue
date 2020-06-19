import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile';

function mapStateToProps(state) {
    return {

    };
}

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" onClick={()=>{
            
        }}/>,
      ]}
    >东风日产-轩逸</NavBar>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
)(Header);