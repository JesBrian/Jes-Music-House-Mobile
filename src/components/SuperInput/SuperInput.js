import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

export default class SuperInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return (
      <View style={{width:'100%', height:45, flexDirection:'row', backgroundColor:'#282828'}}>
        <View style={{flex:1, backgroundColor:'lightgreen'}}>
        </View>
        <Ripple style={{width:45, height:'100%', backgroundColor:'lightblue'}}>
        </Ripple>
        <Ripple style={{width:55, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Text>发送</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
