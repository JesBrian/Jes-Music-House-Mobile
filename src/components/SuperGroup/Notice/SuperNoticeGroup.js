import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { withNavigation } from 'react-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

class SuperNoticeGroup extends React.Component {
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
                 data={[{items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}]}
                 heightForIndexPath={() => 53}
                 renderIndexPath={this._renderIndexPath}
      />
    )
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:53, flexDirection:'row'}}>
        <Ripple onPress={() => {this.props.navigation.navigate('')}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:38, height:38, marginLeft:6, marginRight:8, borderRadius:19}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <Text style={{marginLeft:3, fontSize:16, color:'#EEE'}}>用户名</Text>
          </View>
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(gestureHandlerRootHOC(SuperNoticeGroup));
