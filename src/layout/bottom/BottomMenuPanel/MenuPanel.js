import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';


import { connect } from 'react-redux'
import { hiddenBottomMenu } from '../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'
import { goRouter } from '../../../utils/common/router.js'

const BOTTOM_MENU_DATA_MAP = {
  PlayListPage: {
    menuTitle: '歌曲：The Name of the Song - 1',
    menuData: [
      {icon:'\ue6b4', name:'播放该歌曲', handler: (that) => {alert('now')}},
      {icon:'\ue66c', name:'下一首播放', handler: (that) => {alert('next')}},
      {icon:'\ue80d', name:'收藏到歌单', handler: (that) => {alert('collection')}},
      {icon:'\ue671', name:'歌手:xxx', handler: (that) => {goRouter(that.props.config.navigation, 'SingerDetail')}},
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue638', name:'评论', handler: (that) => {goRouter(that.props.config.navigation, 'Comment')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}}
    ]
  },
  SongPage: {
    menuTitle: '歌曲：The Name of the Song - 2',
    menuData: [
      {icon:'\ue80d', name:'收藏到歌单', handler: (that) => {alert('collection')}},
      {icon:'\ue671', name:'歌手:xxx', handler: (that) => {goRouter(that.props.config.navigation, 'SingerDetail')}},
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue638', name:'评论', handler: (that) => {goRouter(that.props.config.navigation, 'Comment')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}}
    ]
  },
  SelfPageLike: {
    menuTitle: '歌单：我喜欢的音乐',
    menuData: [
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}}
    ]
  },
  SelfPageCreate: {
    menuTitle: '歌单：创建的歌单 - xxxx',
    menuData: [
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}},
      {icon:'\ue638', name:'编辑歌单信息', handler: (that) => {alert('edit')}},
      {icon:'\ue61f', name:'删除', handler: (that) => {alert('del')}}
    ]
  },
  SelfPageCollection: {
    menuTitle: '歌单：收藏的歌单 - zzzz',
    menuData: [
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}},
      {icon:'\ue671', name:'歌单作者', handler: (that) => {goRouter(that.props.config.navigation, 'User')}},
      {icon:'\ue61f', name:'删除', handler: (that) => {alert('del')}}
    ]
  }
};

class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: BOTTOM_MENU_DATA_MAP[this.props.bottomMenu]
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', top:0, left:0, flex:1, position:'absolute', backgroundColor:'transparent', zIndex:18}}>
        <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomMenu())}}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>

          <View style={{width:'100%', height:308, position:'relative', flexDirection:'column'}}>
            <View style={{width:'100%', height:33, justifyContent:'center', borderTopLeftRadius:8, borderTopRightRadius:8, backgroundColor:'#444'}}>
              <Text style={{marginLeft:15, color:'#AAA'}}>{ this.state.data.menuTitle }</Text>
            </View>

            <FlatList style={{flex:1, backgroundColor:'#282828'}}
                      data={this.state.data.menuData}
                      renderItem={({item, index}) => (
                        <Ripple onPress={() => {item.handler(this); this.props.dispatch(hiddenBottomMenu());}} style={{height:38, flexDirection:'row'}}>
                          <View style={{width:38, justifyContent:'center', alignItems:'center'}}>
                            <SuperIcon type={item.icon} style={{fontSize:21, color:this.props.config.color}} />
                          </View>
                          <View style={{justifyContent:'center'}}>
                            <Text style={{fontSize:15, color:'#DDD'}}>{ item.name }</Text>
                          </View>
                        </Ripple>
                      )}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

function reduxState(store) {
  return {
    config: store.config,
    bottomMenu: store.showView.bottomMenu
  }
}

export default connect(reduxState)(MenuPanel);
