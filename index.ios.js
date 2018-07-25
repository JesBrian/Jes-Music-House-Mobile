/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
} from 'react-native';

import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Index from './src/pages/Index.js'
// import Login from './src/components/pages/Login.js'


// 注册导航
const PageRouter = StackNavigator({
  Index: { screen: Index },
  // Login: { screen: Login },
}, {
  initialRouteName: 'Index', // 默认显示界面

  navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    header: {  // 导航栏相关设置项
      backTitle: '返回',  // 左上角返回键文字
      style: {
        backgroundColor: '#fff'
      },
      titleStyle: {
        color: 'green'
      }
    },
    cardStack: {
      gesturesEnabled: true
    }
  },

  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
  onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});



export default class MusicHouseApp extends React.Component {
  render() {
    return <PageRouter />;
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
