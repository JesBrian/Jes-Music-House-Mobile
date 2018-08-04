import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {common} from '../../../assets/styles/common.js'

export default class SongImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
          <View style={{flex: 1}}>
            <Text>歌曲页面播放[歌曲图片]</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:28}]}>&#xe63c;</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:28}]}>&#xe638;</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:28}]}>&#xe618;</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:28}]}>&#xe80d;</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
