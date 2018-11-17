import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'

class SearchCategory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View>
        <Ripple onPress={() => {this.props.navigation.navigate('Singer')}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
          <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <SuperIcon type={'\ue671'} style={{color:this.props.color, fontSize:23}} />
            <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌手分类</Text>
            <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
          </View>
        </Ripple>
        <Ripple onPress={() => {this.props.navigation.navigate('PlayList')}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
          <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <SuperIcon type={'\ue62b'} style={{color:this.props.color, fontSize:23}} />
            <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌单分类</Text>
            <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
          </View>
        </Ripple>
      </View>
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

export default connect(reduxState)(withNavigation(SearchCategory));
