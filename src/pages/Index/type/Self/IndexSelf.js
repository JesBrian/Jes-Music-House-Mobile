import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon.js'


export default class IndexSelf extends React.Component {
  render() {
    const selfBaseMenu = [
      {icon:'\ue661', label:'本地音乐'},
      {icon:'\ue601', label:'最近播放'},
      {icon:'\ue63c', label:'下载管理'},
      {icon:'\ue80d', label:'我的收藏'}
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={{marginTop:8}}>
          {
            selfBaseMenu.map((item, index) => {
              return (
                <Ripple key={index} style={{height:38, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(0,0,0,0.18)'}}>
                  <SuperIcon type={item.icon} style={{marginLeft:12, marginRight:5, color:'#05daf0', fontSize:23}} />
                  <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>
                    <Text style={{color:'#DDD', fontSize:16}}>{ item.label }</Text>
                  </View>
                </Ripple>
              )
            })
          }
        </View>
        <View style={{height:28, flexDirection:'row', alignItems:'center'}}>
          <SuperIcon type={'\ue600'} style={{margin:8, color:'#BBB'}}/>
          <Text style={{flex:1, color:'#BBB'}}>创建的歌单</Text>
          <SuperIcon type={'\ue672'} style={{marginRight:12, fontSize:20, color:'#BBB'}}/>
        </View>
        <View>
          <View style={{height:53, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.18)'}}>
            <Ripple style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
        </View>

        <View style={{height:28, flexDirection:'row', alignItems:'center'}}>
          <SuperIcon type={'\ue600'} style={{margin:8, color:'#BBB'}}/>
          <Text style={{flex:1, color:'#BBB'}}>收藏的歌单</Text>
          <SuperIcon type={'\ue672'} style={{marginRight:12, fontSize:20, color:'#BBB'}}/>
        </View>
        <View>
          <View style={{height:53, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.18)'}}>
            <Ripple style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
