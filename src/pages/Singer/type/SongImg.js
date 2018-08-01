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
      <View style={{flex: 1, backgroundColor: '#666'}}>
        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
          <View style={{flex: 1, backgroundColor: '#875578'}}>
            <Text>歌曲页面播放[歌曲图片]</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[common.icon]}>&#xe63c;</Text>
          <Text style={[common.icon]}>&#xe63c;</Text>
          <Text style={[common.icon]}>&#xe63c;</Text>
          <Text style={[common.icon]}>&#xe63c;</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
