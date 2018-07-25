/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SuperButton from './src/components/SuperButton.js'
import LeftMenuPanel from './src/components/layout/LeftMenuPanel.js'
import Drawer from 'react-native-drawer'
import TopNavbar from "./src/components/layout/TopNavbar";

import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Index from './src/components/pages/Index.js'


// 注册导航
const Navs = StackNavigator({
  Index: { screen: Index },
  // Song: {
  //   screen: Song,  // 必须, 其他都是非必须
  //   path:'app/homeTwo', // 使用url导航时用到, 如 web app 和 Deep Linking
  //   navigationOptions: {}  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文
  // },
  // PlayList: { screen: PlayList },
  // Singer: { screen: Singer }
}, {
  initialRouteName: 'Home', // 默认显示界面
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
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        type="overlay"
        side="left" //抽屉方向 top／left／right／bottom

        open={false}//默认是否打开抽屉
        tapToClose={true}//点击内容处 会关闭抽屉

        openDrawerOffset={0.18} // 抽屉占整个屏幕的百分比（1-0.6=0.4）
        closedDrawerOffset={0}//关闭抽屉后 抽屉在屏幕中的显示比例
        panCloseMask={0.18}//最右边的频幕宽度比例范围内为关闭响应区域

        ref={(ref) => this._drawer = ref}

        content={<LeftMenuPanel closeControlPanel={this.closeControlPanel}/>}

        styles={drawerStyles}

        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >

        <View style={styles.container}>
          <TopNavbar />

          <Text onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>

          <SuperButton label="g3好gbg" />
        </View>

      </Drawer>
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

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
