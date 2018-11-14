import React  from 'react';

import {
  StatusBar
} from 'react-native';

import { connect } from 'react-redux'

/**
 * 屏幕顶部状态栏 - 电量、信号那部分
 */
class SuperStatusBar extends React.Component {
  render () {
    return (
      <StatusBar barStyle={this.props.theme === 'light' ? 'dark-content' : 'light-content'}
                 translucent={true} backgroundColor={'transparent'} />
    );
  }
}

function reduxState(store) {
  return {
    theme: store.config.theme,
  }
}

export default connect(reduxState)(SuperStatusBar);
