import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'
import SuperSongGroup from '../../../../components/SuperSongGroup/SuperSongGroup.js'

export default class SongList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testData: [3, 5, 8, 9, 12, 1, 4685, 13, 156, 46, 541, 2.1, 231, 3, 42, 14, 564, 134865413, 5]
    };
  }

  render () {
    return (
      <View style={{paddingBottom:50}}>
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

        <SuperSongGroup />

      </View>
    )
  }
}

const styles = StyleSheet.create({
});
