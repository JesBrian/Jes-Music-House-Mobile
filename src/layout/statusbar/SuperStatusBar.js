import React  from 'react';

import {
  StatusBar
} from 'react-native';

import { connect } from 'react-redux'

class SuperStatusBar extends React.Component {
  render () {
    return (
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={this.props.config.theme === 'light' ? 'dark-content' : 'light-content'} />
    );
  }
}

function reduxState(store) {
  return {
    config: store.config,
  }
}

export default connect(reduxState)(SuperStatusBar);
