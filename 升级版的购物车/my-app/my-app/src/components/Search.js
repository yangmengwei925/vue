import React, { Component } from 'react'

import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {
  render() {
    return (<div>
      <SearchBar placeholder="Search" maxLength={8} />
    </div>);
  }
}

export default class Search extends Component {
    render() {
        return (
            <div>
                <SearchBarExample />
            </div>
        )
    }
}
