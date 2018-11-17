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

const selfBaseMenu = [
  {icon:'\ue661', label:'本地音乐', url:'Collection'},
  {icon:'\ue601', label:'最近播放', url:'ListenHistory'},
  {icon:'\ue63c', label:'下载管理', url:'Collection'},
  {icon:'\ue80d', label:'我的收藏', url:'Collection'}
];

class NavLink extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View>
        <View style={{width:'100%', height:0.3, backgroundColor:'#444'}} />
        {
          selfBaseMenu.map((item, index) => {
            return (
              <Ripple key={index} onPress={() => {this.props.navigation.navigate(item.url)}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
                <SuperIcon type={item.icon} style={{marginLeft:12, marginRight:5, color:this.props.color, fontSize:23}} />
                <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                  <Text style={{color:'#DDD', fontSize:16}}>{ item.label }</Text>
                </View>
              </Ripple>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(NavLink));
