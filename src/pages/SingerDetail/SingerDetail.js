import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'

export default class SingerDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar />

        <Text>歌手详情</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },

  backgroundVideo: {
    width:108,
    height:108,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#555'
  },
});
