import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../../../redux/actions/ViewActions.js'
import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

class NavLink extends React.Component {
  render () {
    return (
      <View style={{height:58, flexDirection:'row'}}>
        <Ripple onPress={() => {this.props.navigation.navigate('Comment')}} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue638'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
          <Text style={{fontSize:13, color:'#DDD'}}>888</Text>
        </Ripple>
        <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue615'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
          <Text style={{fontSize:13, color:'#DDD'}}>分享</Text>
        </Ripple>
        <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue63c'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
          <Text style={{fontSize:13, color:'#DDD'}}>下载</Text>
        </Ripple>
        <Ripple onPress={() => {this.props.dispatch(showModal('multiSelectSong'))}} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue654'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
          <Text style={{fontSize:13, color:'#DDD'}}>多选</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

function reduxState (store) {
  return {
  }
}

export default connect(reduxState)(withNavigation(NavLink));
