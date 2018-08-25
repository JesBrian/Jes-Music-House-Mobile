import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'

import PlayListNavbar from '../../layout/Top/type/PlayListNavbar.js'

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

import { goRouter } from '../../utils/router/router.js'


class PlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testData: [3, 5, 8, 9, 12, 1, 4685, 13, 156, 46, 541, 2.1, 231, 3, 42, 14, 564, 134865413, 5]
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <PlayListNavbar />

        <View style={{backgroundColor:'#666'}}>
          <TouchableWithoutFeedback>
            <View style={{height:108, flexDirection:'row', alignItems:'center', backgroundColor:'#666'}}>
              <Image style={{width:70, height:70, margin:16, borderWidth:1, borderRadius:6, borderColor:'#FFF'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
              <View style={{height:'100%', flex:1, backgroundColor:'#00d8ff'}}>
                <Text>rfgyhji</Text>
                <Ripple>
                  <Text>JesBrian</Text>
                </Ripple>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={{height:58, flexDirection:'row', backgroundColor:'#666'}}>
            <Ripple onPress={() => {goRouter(this.props.config.navigation, 'Comment')}} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginBottom:5, fontSize:22, color:'#FFF'}]}>&#xe638;</Text>
              <Text style={{fontSize:13, color:'#DDD'}}>888</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginBottom:5, fontSize:22, color:'#FFF'}]}>&#xe615;</Text>
              <Text style={{fontSize:13, color:'#DDD'}}>分享</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginBottom:5, fontSize:22, color:'#FFF'}]}>&#xe63c;</Text>
              <Text style={{fontSize:13, color:'#DDD'}}>下载</Text>
            </Ripple>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginBottom:5, fontSize:22, color:'#FFF'}]}>&#xe654;</Text>
              <Text style={{fontSize:13, color:'#DDD'}}>多选</Text>
            </Ripple>
          </View>

          <View style={{width:'100%', height:48, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
            <Ripple style={{flex:1}}>
              <View style={{height:'100%', padding:15, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderTopLeftRadius:12}}>
                <Text style={[common.icon, {marginRight:4, fontSize:18, color:'#FFF'}]}>&#xe6b4;</Text>
                <Text style={{fontSize:16, color:'#FFF'}}>播放全部 [888]</Text>
              </View>
            </Ripple>

            <Ripple>
              <View style={{width:128, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={[common.icon, {fontSize:18, color:'#FFF'}]}>&#xe80d;</Text>
                <Text style={{fontSize:16, color:'#FFF'}}> 收藏</Text>
              </View>
            </Ripple>
          </View>

          <View style={{height:53, flexDirection:'row', backgroundColor:'lightgreen'}}>
            <Ripple style={{flex:1, flexDirection:'row'}}>
              <View style={{width:48, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20}}>1</Text>
              </View>
              <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                <Text style={{fontSize:17}}>The name of the Song 歌名</Text>
                <Text style={{fontSize:13}}>JesBrian</Text>
              </View>
            </Ripple>
            <Ripple onPress={this.showSongMenu.bind(this)} style={{width:32, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {fontSize:18}]}>&#xe653;</Text>
            </Ripple>
          </View>

        </View>
      </View>
    );
  }

  showSongMenu () {
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});

function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(PlayList);
