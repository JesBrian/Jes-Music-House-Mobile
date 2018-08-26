import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { BoxShadow } from 'react-native-shadow'

import SuperLoading from '../../../components/SuperLoading.js'


export default class LoadingModal extends React.Component {
  render() {
    const shadowOpt = {
      width:178,
      height:168,
      color:"#000",
      border:6,
      radius:5,
      opacity:0.38
    }

    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.58)'}}>
        <BoxShadow setting={shadowOpt} >
          <View style={{width:178, height:168, justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:'rgba(0, 0, 0, 0.58)'}}>
            <SuperLoading/>
            <Text style={{marginTop:6, color:'#DDD', fontSize:18}}>Loading ...</Text>
          </View>
        </BoxShadow>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
