import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'

import { common } from '../../../../assets/styles/common.js'


class SongImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.8)'}}>
        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
          <View style={{flex:1}}>
            <Text>歌曲页面播放[歌曲图片]</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{height:48, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Ripple style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={[common.icon, {fontSize:28, color:'#AAA'}]}>&#xe80d;</Text>
          </Ripple>
          <Ripple style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={[common.icon, {fontSize:28, color:'#AAA'}]}>&#xe63c;</Text>
          </Ripple>
          <Ripple  onPress={() => {this.props.config.navigation.navigate('Comment')}} style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={[common.icon, {fontSize:28, color:'#AAA'}]}>&#xe638;</Text>
          </Ripple>
          <Ripple style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={[common.icon, {fontSize:28, color:'#AAA'}]}>&#xe618;</Text>
          </Ripple>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(SongImg);
