import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import IndexTopNavbar from '../layout/Top/IndexTopNavbar.js'
import LeftMenuPanel from '../layout/Left/LeftMenuPanel.js'
import Drawer from 'react-native-drawer'
import SuperButton from '../components/SuperButton.js'


export default class Index extends React.Component {
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

        content={<LeftMenuPanel closeControlPanel={this.closeControlPanel} navigation={this.props.navigation}/>}

        styles={drawerStyles}

        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >

        <View style={styles.container}>
          <IndexTopNavbar />


          <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>

          <SuperButton label="g3好gbg" />


          <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Login')} />
          <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
          <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
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
