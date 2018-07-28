import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalTopNavbar from '../../layout/Top/NormalTopNavbar.js'
import SuperButton from '../../components/SuperButton.js'


export default class Singer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalTopNavbar />

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
