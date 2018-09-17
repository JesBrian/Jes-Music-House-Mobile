import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

import SuperIcon from '../../components/SuperIcon.js'

export default class SuperInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return (
      <View style={{width:'100%', height:43, flexDirection:'row', backgroundColor:'#282828'}}>
        <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue614'} style={{fontSize:23, color:'#BBB'}} />
        </Ripple>
        <View style={{flex:1, paddingLeft:6, paddingRight:6}}>
          <TextInput selectionColor={'#2DC9FF'} underlineColorAndroid='transparent' style={{height:'100%', flex:1, padding:0, color:'#2DC9FF', fontSize:16}} />
        </View>
        <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue616'} style={{fontSize:23, color:'#BBB'}} />
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
