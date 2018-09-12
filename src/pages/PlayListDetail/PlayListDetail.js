import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomSongMenu } from '../../redux/actions/ViewActions.js'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

import { goRouter } from '../../utils/router/router.js'
import SuperIcon from '../../components/SuperIcon.js'


class PlayListDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testData: [3, 5, 8, 9, 12, 1, 4685, 13, 156, 46, 541, 2.1, 231, 3, 42, 14, 564, 134865413, 5]
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌单详情'} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <TouchableWithoutFeedback>
            <View style={{height:108, paddingTop:8, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:70, height:70, margin:16, borderWidth:1, borderRadius:6, borderColor:'#FFF'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
              <View style={{height:'100%', marginLeft:3, flex:1}}>
                <Text>rfgyhji</Text>
                <Ripple>
                  <Text>JesBrian</Text>
                </Ripple>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={{height:58, flexDirection:'row'}}>
            <Ripple onPress={() => {goRouter(this.props.config.navigation, 'Comment')}} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue638'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
              <Text style={{fontSize:13, color:'#DDD'}}>888</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue615'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
              <Text style={{fontSize:13, color:'#DDD'}}>分享</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue63c'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
              <Text style={{fontSize:13, color:'#DDD'}}>下载</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue654'} style={{marginBottom:5, fontSize:22, color:'#FFF'}} />
              <Text style={{fontSize:13, color:'#DDD'}}>多选</Text>
            </Ripple>
          </View>

          <View style={{width:'100%', height:48, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#222'}}>
            <Ripple style={{flex:1}}>
              <View style={{height:'100%', padding:15, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderTopLeftRadius:12}}>
                <SuperIcon type={'\ue6b4'} style={{marginRight:4, fontSize:18, color:'#FFF'}} />
                <Text style={{fontSize:16, color:'#FFF'}}>播放全部 [888]</Text>
              </View>
            </Ripple>

            <Ripple>
              <View style={{width:128, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <SuperIcon type={'\ue80d'} style={{marginRight:4, fontSize:18, color:'#FFF'}} />
                <Text style={{fontSize:16, color:'#FFF'}}> 收藏</Text>
              </View>
            </Ripple>
          </View>

          <View style={{height:53, flexDirection:'row'}}>
            <Ripple style={{flex:1, flexDirection:'row'}}>
              <View style={{width:48, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <SuperIcon type={'\ue6b4'} style={{fontSize:26}} />
                {/*<Text style={{fontSize:20}}>1</Text>*/}
              </View>
              <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                <Text style={{fontSize:17}}>The name of the Song 歌名</Text>
                <Text style={{fontSize:13}}>JesBrian</Text>
              </View>
            </Ripple>
            <Ripple onPress={this.showSongMenu.bind(this)} style={{width:32, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:26}} />
            </Ripple>
          </View>

        </ScrollView>
      </View>
    );
  }

  showSongMenu () {
    this.props.dispatch(showBottomSongMenu())
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
});

function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(PlayListDetail);
