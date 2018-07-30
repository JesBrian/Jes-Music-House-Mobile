import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SongNavbar from '../../layout/Top/SongNavbar.js'

export default class Song extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SongNavbar />

        <Text>歌曲页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
