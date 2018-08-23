import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import PlayListNavbar from '../../layout/Top/type/PlayListNavbar.js'
import SuperButton from '../../components/SuperButton.js'

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

export default class PlayList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayListNavbar />

        <View style={{backgroundColor:'#666'}}>
          <View style={{height:138, backgroundColor:'#666'}}>
          </View>

          <View style={{height:58, flexDirection:'row', backgroundColor:'#666'}}>
            <Ripple style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
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

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
