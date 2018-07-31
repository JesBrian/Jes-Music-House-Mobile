import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

export default class SongImg extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={{flex: 1, backgroundColor: '#666'}}>
          <Text>歌曲页面播放[歌曲图片]</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
});
