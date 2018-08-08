/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation'
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

import Home from './src/pages/Home/Home.js'
import Login from './src/pages/Login/Login.js'
import Register from './src/pages/Register/Register.js'
import Index from './src/pages/Index/IndexIos.js'
import Search from './src/pages/Search/Search.js'
import Singer from './src/pages/Singer/Singer.js'
import User from './src/pages/User/User.js'
import PlayList from './src/pages/PlayList/PlayList.js'
import Song from './src/pages/Song/Song.js'
import Comment from './src/pages/Comment/Comment.js'


// 注册导航
const PageRouter = createStackNavigator({
  Home:{ screen: Home },
  Index: { screen: Index },
  Login: { screen: Login },
  Register: { screen: Register },
  Search: { screen: Search },
  Singer: { screen: Singer },
  User: { screen: User },
  PlayList: { screen: PlayList },
  Song: { screen: Song },
  Comment: { screen: Comment },
}, {
  initialRouteName: 'Index', // 默认显示界面
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  transitionConfig: () => ({ // 页面切换效果 - forHorizontal[right -> left], forVertical[bottom -> up]
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});



export default class MusicHouseApp extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <PageRouter/>
      </View>
    );
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
