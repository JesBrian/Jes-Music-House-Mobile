import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SuperLoading from '../../../components/SuperLoading.js'


export default class LoadingModal extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.58)'}}>
        <View style={{width:178, height:168, justifyContent:'center', alignItems:'center', borderRadius:8, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <SuperLoading/>
          <Text style={{marginTop:18, color:'#DDD', fontSize:18}}>Loading ...</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
