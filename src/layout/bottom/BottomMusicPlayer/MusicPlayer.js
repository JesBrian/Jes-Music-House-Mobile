import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomPlayList } from '../../../redux/actions/ViewActions.js'
import { changeMusicPlayStatus } from '../../../redux/actions/MusicActions.js'

import Swiper from 'react-native-swiper'
import Ripple from 'react-native-material-ripple'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { BoxShadow }  from 'react-native-shadow'

import { common } from '../../../assets/styles/common.js'
import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'

/**
 * 底部音乐播放器
 */
class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const shadowOpt = {
      width:Dimensions.get('window').width,
      height:53,
      color:this.props.config.theme === 'light' ? '#282828' : '#181818', border:12, opacity:0.8, x:0, y:0,
    }

    return (
      <View style={{width:Dimensions.get('window').width, height:65, top:Dimensions.get('window').height - (this.props.isShow === false ? 0 : 65), left:0, paddingTop:12, position:'absolute', zIndex:5}}>
        <BoxShadow setting={shadowOpt}>
          <View style={{flex:1, flexDirection:'row', backgroundColor:this.props.config.theme === 'light' ? '#F8F8F8' : '#282828'}}>
            <Swiper loop={true} showButtons={false} showsPagination={false} >
              <Ripple onPress={() => {this.props.config.navigation.navigate('Song');}} style={{flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{width:58, flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                  <Image style={{width:38, height:38, marginLeft:2, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
                  <Text style={{textAlign:'left', fontSize:15, color:'#CCC'}}>The Name of the Song</Text>
                  <Text style={{textAlign:'left', fontSize:13, color:'#AAA'}}>JesBrianj 苏敬雄</Text>
                </View>
              </Ripple>
              <Ripple onPress={() => {this.props.config.navigation.navigate('Song');}} style={{flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
                <View style={{width:58, flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                  <Image style={{width:38, height:38, marginLeft:2, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
                  <Text style={{textAlign:'left', fontSize:15, color:'#CCC'}}>The Name of the Song</Text>
                  <Text style={{textAlign:'left', fontSize:13, color:'#AAA'}}>JesBrianj 苏敬雄</Text>
                </View>
              </Ripple>
            </Swiper>
            <View style={{width:88, flexDirection:'row', justifyContent:'center'}}>
              <Ripple onPress={this.changePlayStatus} style={{paddingHorizontal:10, flexDirection:'column', justifyContent:'center'}}>

                <AnimatedCircularProgress
                  size={26} width={2} fill={20}
                  tintColor={this.props.config.color}
                  backgroundColor="#CCC">
                  {
                    (fill) => (
                      this.props.music.playStatus === false ?
                        <SuperIcon type={'\ue9f9'} style={{fontSize:16, color:'#CCC'}} /> :
                          <SuperIcon type={'\ue7fa'} style={{fontSize:16, color:this.props.config.color}} />
                    )
                  }
                </AnimatedCircularProgress>
              </Ripple>
              <Ripple onPress={() => {this.props.dispatch(showBottomPlayList())}} style={{paddingLeft:8, paddingRight:18, flexDirection:'column', justifyContent:'center'}}>
                <SuperIcon type={'\ue654'} style={{fontSize:26, color:'#CCC'}} />
              </Ripple>
            </View>
          </View>
        </BoxShadow>
      </View>
    )
  }

  /**
   * 修改播放状态
   */
  changePlayStatus = () => {
    this.props.dispatch(changeMusicPlayStatus());
  }
}

const styles = StyleSheet.create({
})


function reduxState(store) {
  return {
    config: store.config,
    music: store.music,
    isShow: store.showView.bottomMusic,
  }
}

export default connect(reduxState)(MusicPlayer);
