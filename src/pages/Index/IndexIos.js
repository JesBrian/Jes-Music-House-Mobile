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
import Swiper from 'react-native-swiper'
import ScrollableTabView from 'react-native-scrollable-tab-view'


import IndexNavbar from '../../layout/top/type/IndexNavbar.js'
import MenuPanel from '../../layout/left/MenuPanel.js'
import Drawer from 'react-native-drawer'
import SuperTabbar from '../../layout/tab/SuperTabbar.js'
import SuperButton from '../../components/SuperButton.js'
import { showModal } from '../../redux/actions/ViewActions.js'

import { common } from '../../assets/styles/common.js'

import PlayList from '../PlayList/PlayList.js'
import Search from '../Search/Search.js'
import User from '../User/User.js'


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

          <ScrollView style={{width:'100%', flex:1, backgroundColor:'rgba(0,0,0,0.8)'}}>

            <View style={{width:'100%', height:138, paddingLeft:18, paddingRight:18}}>
              <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
                </View>
              </Swiper>
            </View>

            <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
            <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
            <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Home')} />
            <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
            <Button title='跳转到歌单详情' onPress={()=>this.props.navigation.navigate('PlayList')} />
            <Button title='打开 Modal' onPress={() => {this.props.dispatch(showModal('loading'))}} />

            <ScrollableTabView  renderTabBar={() => <SuperTabbar someProp={'here'} />}>
              <PlayList tabLabel="个人" />
              <Search tabLabel="推荐" />
              <User tabLabel="朋友" />
            </ScrollableTabView>
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

  wrapper: {
  },
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
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
