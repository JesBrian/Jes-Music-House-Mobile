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

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import { common } from '../../assets/styles/common.js'

import { goRouter } from '../../utils/common/router.js'
import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperIcon from '../../components/SuperIcon/SuperIcon.js'


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

              <Ripple style={{width:70, height:70, margin:16}}>
                <Image style={{flex:1, borderWidth:1, borderRadius:6, borderColor:'#FFF'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              </Ripple>

              <View style={{height:'100%', marginLeft:3, flex:1}}>
                <Text style={{marginTop:13, fontSize:17, color:'#DDD'}}>rf参数  67ncja gyhd 高度为 shg ji djh 干哈</Text>
                <Ripple style={{height:38, flexDirection:'row', alignItems:'center'}}>
                  <Image style={{width:20, height:20, marginRight:8, borderRadius:10}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                  <Text style={{color:'#AAA'}}>JesBrian</Text>
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

          <View style={{width:'100%', height:38, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'rgba(0,0,0,0.28)'}}>
            <Ripple style={{height:'100%', padding:15, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderTopLeftRadius:12}}>
              <SuperIcon type={'\ue6b4'} style={{marginTop:1, marginRight:6, fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}>播放全部 [888]</Text>
            </Ripple>

            <Ripple style={{width:108, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue80d'} style={{fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}> 收藏</Text>
            </Ripple>
          </View>

          <LargeList style={{flex:1, backgroundColor:'#282828'}}
                     data={[{items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]}
                     heightForIndexPath={() => 48}
                     renderIndexPath={this._renderIndexPath}
          />
        </ScrollView>
      </View>
    );
  }

  showSongMenu () {
    this.props.dispatch(showBottomSongMenu())
  };

  _renderIndexPath = () => {
    return (
      <View style={{height:48, flexDirection:'row'}}>
        <Ripple style={{flex:1, flexDirection:'row'}}>
          <View style={{width:43, height:'100%', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue6b4'} style={{fontSize:23, color:this.props.config.color}} />
            {/*<Text style={{fontSize:20}}>1</Text>*/}
          </View>
          <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#DDD'}}>The name of the Song 歌名</Text>
            <Text style={{fontSize:12, color:'#999'}}>JesBrian</Text>
          </View>
        </Ripple>
        <Ripple onPress={this.showSongMenu.bind(this)} style={{width:32, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue653'} style={{fontSize:26, color:'#999'}} />
        </Ripple>
      </View>
    );
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
