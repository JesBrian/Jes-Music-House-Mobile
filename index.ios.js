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
// import LeftMenuPanel from './src/components/LeftMenuPanel.js'
import Drawer from 'react-native-drawer'

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
        type="static"
        side="left" //抽屉方向 top／left／right／bottom

        open={false}//默认是否打开抽屉
        tapToClose={true}//点击内容处 会关闭抽屉

        openDrawerOffset={0.6} // 抽屉占整个屏幕的百分比（1-0.6=0.4）
        closedDrawerOffset={0}//关闭抽屉后 抽屉在屏幕中的显示比例

        panCloseMask={0.2}

        ref={(ref) => this._drawer = ref}

        content={<View><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text></View>}

        styles={drawerStyles}

        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >

        <View style={styles.container}>
          <Text onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>

          <SuperButton label="g3好gbg" />
        </View>

      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
});

const drawerStyles = {
  drawer: { shadowColor:'#000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
