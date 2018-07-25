import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import SuperButton from '../components/SuperButton.js'
import TopNavbar from "../components/layout/TopNavbar";


export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    // header: ({ state, setParams, goBack }) => {
    //   let right = (<Button title="取消"/>);
    //   let left = (<Button title="返回"/>);
    //   let visible = false;  // 是否显示导航栏
    //   return { right, left, visible };
    // },
    header: {left: <Button title="返回"/>},
  };

  render() {
    return (
      <View style={styles.container}>
        <TopNavbar />
        <Text onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
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
