import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
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
                 heightForIndexPath={() => 43}
                 renderIndexPath={this._renderIndexPath}
      />
    )
  }

  _renderIndexPath = () => {
    return (
      <Ripple onPress={() => {this.props.navigation.navigate('')}} style={{height:43, flexDirection:'row', alignItems:'center'}}>
        <TouchableWithoutFeedback>
          <Image style={{width:28, height:28, marginHorizontal:5, borderRadius:14}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
        </TouchableWithoutFeedback>
        <View style={{height:'100%', paddingLeft:3, flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
          <Text style={{marginBottom:2, fontSize:13, color:this.props.color}}>用户名</Text>
          <Text style={{fontSize:13, color:'#DDD'}}>黑 yy 科 zz 技 黑 yy 科 zz 技</Text>
          <Text style={{top:0, right:4, padding:6, position:'absolute', fontSize:12, color:'#AAA'}}>2018-09-16</Text>
        </View>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(gestureHandlerRootHOC(SuperNoticeGroup)));
