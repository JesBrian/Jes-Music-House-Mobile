import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'


class ListenHistoryWeek extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>
        <LargeList style={{paddingTop:3, paddingBottom:18, flex:1}}
                   data={[{items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}]}
                   heightForIndexPath={() => 48}
                   renderIndexPath={this._renderIndexPath}
        />
      </ScrollView>
    );
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:48, paddingRight:6, flexDirection:'row'}}>
        <Ripple style={{width:42, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#DDD'}} >1</Text>
        </Ripple>

        <Ripple onPress={() => {}} style={{paddingLeft:5, flex:1, flexDirection:'row', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
          <View style={{height:'100%', flex:1, justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#EEE'}}>歌曲名称</Text>
            <Text style={{fontSize:12.5, color:'#AAA'}}>180 首</Text>
          </View>
          <SuperIcon type={'\ue6b4'} style={{marginRight:5, color:'#BBB', fontSize:15}} />
          <Text style={{marginRight:18, color:'#BBB'}}>00次</Text>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(ListenHistoryWeek);
