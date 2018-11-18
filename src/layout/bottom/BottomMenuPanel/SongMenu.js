import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';


import { connect } from 'react-redux'
import { hiddenBottomSongMenu } from '../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import { common } from '../../../assets/styles/common.js'
import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'

import { goRouter } from '../../../utils/common/router.js'

class SongMenu extends React.Component {
  static defaultProps = {
    menuData: [
      {icon:'\ue6b4', name:'播放该歌曲', handler: (that) => {alert('now')}},
      {icon:'\ue6b4', name:'下一首播放', handler: (that) => {alert('next')}},
      {icon:'\ue80d', name:'收藏到歌单', handler: (that) => {alert('collection')}},
      {icon:'\ue671', name:'歌手:xxx', handler: (that) => {goRouter(that.props.config.navigation, 'SingerDetail')}},
      {icon:'\ue63c', name:'下载', handler: (that) => {alert('download')}},
      {icon:'\ue638', name:'评论', handler: (that) => {goRouter(that.props.config.navigation, 'Comment')}},
      {icon:'\ue615', name:'分享', handler: (that) => {alert('share')}}
    ]
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', top:0, left:0, flex:1, position:'absolute', backgroundColor:'transparent', zIndex:18}}>
        <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomSongMenu())}}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>

          <View style={{width:'100%', height:308, position:'relative', flexDirection:'column'}}>
            <View style={{width:'100%', height:33, justifyContent:'center', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
              <Text style={{marginLeft:15, color:'#AAA'}}>歌曲：The Name of the Song</Text>
            </View>

            <FlatList style={{flex:1, backgroundColor:'#282828'}}
                      data={this.props.menuData}
                      renderItem={({item, index}) => (
                        <Ripple onPress={() => {let that = this; item.handler(that); this.props.dispatch(hiddenBottomSongMenu());}} style={{height:38, flexDirection:'row'}}>
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
    showView: store.showView
  }
}

export default connect(reduxState)(SongMenu);

