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
      <View style={{width:'100%', height:38, flexDirection:'row', backgroundColor:'#282828'}}>
        <View style={{flex:1, paddingLeft:12, paddingRight:3}}>
          <TextInput selectionColor={'#2DC9FF'} underlineColorAndroid='transparent' style={{height:'100%', flex:1, padding:0, color:'#2DC9FF', fontSize:16}} />
        </View>
        <Ripple style={{width:45, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue614'} style={{fontSize:23, color:'#BBB'}} />
        </Ripple>
        <Ripple style={{width:60, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:18, color:'#BBB'}}>发送</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
