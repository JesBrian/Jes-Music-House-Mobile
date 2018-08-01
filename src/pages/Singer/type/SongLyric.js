import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {common} from '../../../assets/styles/common.js'

export default class SongLyric extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#666'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
          <View style={{width: '88%', height: 28, flexDirection: 'row'}}>
            <View style={{width: 38, height: '100%', flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={[common.icon, {lineHeight: 28,}]}>&#xe6ac;</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableWithoutFeedback>
                <View style={{width: '95%', height: 4, backgroundColor: 'green'}}/>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('img')}>
          <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <Text>歌曲页面播放[歌曲歌词]</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
