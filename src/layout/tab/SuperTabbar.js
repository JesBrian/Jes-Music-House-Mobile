import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

export default class SuperTabbar extends React.Component {
  render () {
    return (
      <View style={{height:46, flexDirection:'row'}}>
        <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Text style={[common.icon, {marginRight:5, color:'#38daf0', fontSize:18}]}>&#xe618;</Text>
          <Text style={{color:'#38daf0', fontSize:16}}>个人</Text>
        </Ripple>
        <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Text style={[common.icon, {marginRight:6, color:'#38daf0', fontSize:18}]}>&#xe661;</Text>
          <Text style={{color:'#38daf0', fontSize:16}}>推荐</Text>
        </Ripple>
        <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Text style={[common.icon, {marginRight:8, color:'#38daf0', fontSize:18}]}>&#xe671;</Text>
          <Text style={{color:'#38daf0', fontSize:16}}>朋友</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
