import React  from 'react';

import { withNavigation } from 'react-navigation'

import SuperSearchResultTab from './SuperSearchResultTab.js'


class SearchResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasSearch: false
    }
  }

  render() {
    return (
      <SuperSearchResultTab />
    );
  }
}


export default withNavigation(SearchResult);
