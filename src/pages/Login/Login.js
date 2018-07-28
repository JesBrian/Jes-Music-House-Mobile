import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'


export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
        <SuperButton label="登录" />


        <Text onPress={()=>this.props.navigation.navigate('Register')} >跳转到注册页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
