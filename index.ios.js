/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import Index from './src/pages/Index.js'
import Login from './src/pages/Login.js'
import Register from './src/pages/Register.js'
import Singer from './src/pages/Singer.js'
import PlayList from './src/pages/PlayList.js'


// 注册导航
const PageRouter = StackNavigator({
  Index: { screen: Index },
  Login: { screen: Login },
  Register: { screen: Register },
  Singer: { screen: Singer },
  PlayList: { screen: PlayList },
}, {
  initialRouteName: 'Index', // 默认显示界面

  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});



export default class MusicHouseApp extends React.Component {
  render() {
    return <PageRouter />;
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
