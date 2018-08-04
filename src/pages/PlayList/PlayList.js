import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalNavbar from '../../layout/Top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


export default class PlayList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar />

        <Text onPress={()=>{this.openControlPanel()}} >播放列表</Text>
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
