import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
function mapStateToProps(state) {
  return {

  };
}
export class header extends Component {
  render() {
    return (
      <div>
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
    )
  }
}





export default connect(mapStateToProps)(header)
