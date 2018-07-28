import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'


export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.openControlPanel()}} >用户注册 88</Text>
        <SuperButton label="注册" />
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
