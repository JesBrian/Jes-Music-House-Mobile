import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import {common} from '../../assets/styles/common.js'


export default class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:this.state.showNowPlayList === true ? 338 : 53, backgroundColor:'#333'}}>
        <View style={{flex:1, position:'relative', flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Song')} style={{flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
            <View style={{width:58, flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Song')} style={{width:'76%', height:'76%', marginLeft:2}}>
                <Image style={{flex:1, marginLeft:2, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
              </TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
              <Text style={{textAlign:'left', fontSize:15, color:'#CCC'}}>The Name of the Song</Text>
              <Text style={{textAlign:'left', fontSize:13, color:'#AAA'}}>JesBrianj 苏敬雄</Text>
            </View>
          </TouchableOpacity>
          <View style={{width:80, flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{paddingLeft:6, paddingRight:8, flexDirection:'column', justifyContent:'center'}}>
              <Text style={[common.icon,  {fontSize:28, color:'#CCC'}]}>&#xe6b4;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{paddingLeft:8, paddingRight:18, flexDirection:'column', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:26, color:'#CCC'}]}>&#xe654;</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
