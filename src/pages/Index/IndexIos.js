import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';


import { connect } from 'react-redux'
import { setNavigation } from '../../redux/actions/ConfigActions.js'

import Ripple from 'react-native-material-ripple'

import IndexNavbar from '../../layout/top/type/IndexNavbar.js'
import MenuPanel from '../../layout/left/MenuPanel.js'
import Drawer from 'react-native-drawer'
import SuperButton from '../../components/SuperButton.js'
import { showModal } from '../../redux/actions/ViewActions.js'

import { common } from '../../assets/styles/common.js'


class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    this.props.dispatch(setNavigation(this.props.navigation))
  }

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
          <IndexNavbar navigation={this.props.navigation} openControlPanel={this.openControlPanel} />

          <View style={{height:46, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.68)'}}>
            <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:5, color:'#38daf0', fontSize:18}]}>&#xe618;</Text>
              <Text style={{color:'#38daf0', fontSize:16}}>个人</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:6, color:'#38daf0', fontSize:18}]}>&#xe661;</Text>
              <Text style={{color:'#38daf0', fontSize:16}}>推荐</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:8, color:'#38daf0', fontSize:18}]}>&#xe671;</Text>
              <Text style={{color:'#38daf0', fontSize:16}}>朋友</Text>
            </Ripple>
          </View>

          <ScrollView style={{width:'100%', flex:1, backgroundColor:'rgba(0,0,0,0.68)'}}>
            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Home')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
            <Button title='跳转到歌单详情' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='打开 Modal' onPress={() => {this.props.dispatch(showModal('loading'))}} />
          </ScrollView>
        </View>

      </Drawer>
    );
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  buttonClickEvent = () => {
    this.props.navigation.navigate('Login');
  };
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    flexDirection:'column'
  },
});

const drawerStyles = {
  drawer: {
    shadowColor:'#000', shadowOpacity:0.8, shadowRadius:3
  },
  main: {
    paddingLeft:3
  }
}


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(Index);
