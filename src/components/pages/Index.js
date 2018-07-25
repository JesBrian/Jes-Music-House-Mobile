/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SuperButton from '../SuperButton.js'
import LeftMenuPanel from '../layout/LeftMenuPanel.js'
import Drawer from 'react-native-drawer'
import TopNavbar from "../layout/TopNavbar";


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
