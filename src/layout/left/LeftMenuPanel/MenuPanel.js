import React  from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

import MenuNavbar from './container/MenuNavbar.js'
import MenuLink from './container/MenuLink.js'
import MenuBottom from './container/MenuBottom.js'

/**
 * 抽屉内容
 */
class MenuPanel extends React.Component {
  render () {
    return (
      <View style={[styles.menuPanel, {backgroundColor:this.props.theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.73)'}]}>
        <MenuNavbar />

        <MenuLink />

        <MenuBottom />
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}

const styles = StyleSheet.create({
  menuPanel: {height:'100%', paddingBottom:53, flex:1}
})

function reduxState(store) {
  return {
    theme: store.config.theme
  }
}

export default connect(reduxState)(MenuPanel);
