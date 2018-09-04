import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
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
                    <Text style={{color:'#BBB', fontSize:16}}>{ item.label }</Text>
                  </View>
                </Ripple>
              )
            })
          }
        </View>
        <Text>Index Friend</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
