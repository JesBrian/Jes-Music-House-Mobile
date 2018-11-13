import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Ripple from 'react-native-material-ripple'
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux'
import { setTheme } from '../../../../redux/actions/ConfigActions.js'

import SuperIcon from '../../../../components/SuperIcon.js'

/**
 * 菜单面板底部
 */
class MenuBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width:'100%', height:43, paddingBottom:6, flexDirection:'row', backgroundColor:'#333'}}>
        <Ripple onPress={() => {this.props.dispatch(setTheme(this.props.theme === 'light' ? 'dark' : 'light'))}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          {
            this.props.theme === 'light' ? (
              <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <SuperIcon type={'\ue650'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                <Text style={{fontSize:18, color:'#DDD'}}>夜间</Text>
              </View>
            ) : (
              <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <SuperIcon type={'\ue6c7'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                <Text style={{fontSize:18, color:'#DDD'}}>日间</Text>
              </View>
            )
          }
        </Ripple>
        <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue672'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
          <Text style={{fontSize:18, color:'#DDD'}}>设置</Text>
        </Ripple>
        <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue622'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
          <Text style={{fontSize:18, color:'#DDD'}}>退出</Text>
        </Ripple>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    theme: store.config.theme
  }
}

export default connect(reduxState)(withNavigation(MenuBottom));
