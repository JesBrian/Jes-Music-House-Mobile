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
                <Ripple key={index} style={{height:38, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.038)'}}>
                  <SuperIcon type={item.icon} />
                  <Text>{ item.label }</Text>
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
