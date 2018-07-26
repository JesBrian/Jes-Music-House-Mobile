import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalTopNavbar from '../layout/Top/NormalTopNavbar.js'
import SuperButton from '../components/SuperButton.js'


export default class PlayList extends React.Component {
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

const drawerStyles = {
  drawer: { shadowColor:'#000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
