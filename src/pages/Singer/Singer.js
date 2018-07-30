import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalNavbar from '../../layout/Top/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


export default class Singer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar />

        <Text onPress={()=>{this.openControlPanel()}} >歌手</Text>
        <SuperButton label="登录" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
