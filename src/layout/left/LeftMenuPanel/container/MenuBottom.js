import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import { setTheme } from '../../../../redux/actions/ConfigActions.js'
import { withNavigation } from 'react-navigation'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

/**
 * 菜单面板底部
 */
class MenuBottom extends React.Component {
  render() {
    return (
      <View style={styles.menuBottom}>
        <Ripple onPress={() => {this.props.dispatch(setTheme(this.props.theme === 'light' ? 'dark' : 'light'))}} style={styles.menuBtn}>
          {
            this.props.theme === 'light' ? (
              <View style={styles.menuBtn}>
                <SuperIcon type={'\ue650'} style={[styles.menuIcon, {color: this.props.color}]} />
                <Text style={styles.menuLabel}>夜间</Text>
              </View>
            ) : (
              <View style={styles.menuBtn}>
                <SuperIcon type={'\ue6c7'} style={[styles.menuIcon, {color: this.props.color}]} />
                <Text style={styles.menuLabel}>日间</Text>
              </View>
            )
          }
        </Ripple>
        <Ripple onPress={() => {}} style={styles.menuBtn}>
          <SuperIcon type={'\ue672'} style={[styles.menuIcon, {color: this.props.color}]} />
          <Text style={styles.menuLabel}>设置</Text>
        </Ripple>
        <Ripple onPress={() => {}} style={styles.menuBtn}>
          <SuperIcon type={'\ue622'} style={[styles.menuIcon, {color: this.props.color}]} />
          <Text style={styles.menuLabel}>退出</Text>
        </Ripple>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuBottom: {width:'100%', height:43, paddingBottom:6, flexDirection:'row', backgroundColor:'#333'},
  menuBtn: {flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'},
  menuIcon: {marginRight:8, fontSize:20, color:'#DDD'},
  menuLabel: {fontSize:18, color:'#999'}
});

function reduxState(store) {
  return {
    color: store.config.color,
    theme: store.config.theme
  }
}

export default connect(reduxState)(withNavigation(MenuBottom));
