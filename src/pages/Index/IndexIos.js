import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';

import IndexNavbar from '../../layout/Top/IndexNavbar.js'
import MenuPanel from '../../layout/Left/MenuPanel.js'
import Drawer from 'react-native-drawer'
import MusicPlayer from '../../layout/Bottom/MusicPlayer.js'
import SuperButton from '../../components/SuperButton.js'


export default class Index extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  buttonClickEvent = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Drawer
        type="overlay"
        side="left" //抽屉方向 top／left／right／bottom

        open={false}//默认是否打开抽屉
        tapToClose={true}//点击内容处 会关闭抽屉
        openDrawerOffset={0.18} // 抽屉占整个屏幕的百分比
        closedDrawerOffset={-3}//关闭抽屉后 抽屉在屏幕中的显示比例
        panCloseMask={0.18}//最右边的频幕宽度比例范围内为关闭响应区域

        ref={(ref) => this._drawer = ref}

        content={<MenuPanel closeControlPanel={this.closeControlPanel} navigation={this.props.navigation}/>}

        styles={drawerStyles}

        tweenHandler={(ratio) => ({
          main: {opacity: (2 - ratio) / 2}
        })}
      >

        <View style={styles.container}>
          <IndexNavbar />

          <ScrollView style={{width:'100%', flex:1}}>
            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Login')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Login')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Login')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Login')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
          </ScrollView>

          <MusicPlayer navigation={this.props.navigation} />
        </View>

      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    flexDirection:'column',
    backgroundColor:'transparent'
  },
});

const drawerStyles = {
  drawer: {
    shadowColor:'#000', shadowOpacity:0.8, shadowRadius:3
  }
}
