import React  from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../components/SuperIcon.js'


export default class UserMusic extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>创建的歌单</Text>
          </View>
        </View>
        <View>
          <View style={{height:53, flexDirection:'row'}}>
            <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
          <View style={{height:53, flexDirection:'row'}}>
            <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
        </View>


        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>收藏的歌单</Text>
          </View>
        </View>
        <View>
          <View style={{height:53, flexDirection:'row'}}>
            <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
          <View style={{height:53, flexDirection:'row'}}>
            <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
              </View>
            </Ripple>
            <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
            </Ripple>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:3,
    backgroundColor:'rgba(0,0,0,0.28)',
  },
});
