import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import SuperIcon from '../../SuperIcon/SuperIcon.js'

class SuperDownloadGroup extends React.Component {
  static defaultProps = {
    dataSource: []
  }

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <LargeList style={[{flex:1}, this.props.style]}
                 data={[{items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}]}
                 heightForIndexPath={() => 48}
                 renderIndexPath={this._renderIndexPath}
      />
    )
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:48, paddingRight:6, flexDirection:'row'}}>
        <Ripple style={{width:42, justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue63e'} style={{color:'#BBB', fontSize:23}} />
        </Ripple>
        <Ripple onPress={() => {}} style={{paddingLeft:5, flex:1, flexDirection:'row', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
          <View style={{height:'100%', flex:1, justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#EEE'}}>歌曲名称</Text>
            <Text style={{fontSize:12.5, color:'#AAA'}}>180 首</Text>
          </View>
        </Ripple>
        <Ripple style={{width:48, height:48, justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
          <SuperIcon type={'\ue61f'} style={{color:'#BBB', fontSize:23}} />
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default gestureHandlerRootHOC(SuperDownloadGroup);
