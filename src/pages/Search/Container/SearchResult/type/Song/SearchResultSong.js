import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showBottomSongMenu } from '../../../../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'


class SearchResultSong extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>
        <LargeList style={{paddingBottom:8, flex:1}}
                   data={[{items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]}
                   heightForIndexPath={() => 48}
                   renderIndexPath={this._renderIndexPath}
        />
      </ScrollView>
    );
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:47, flexDirection:'row', borderColor:'#FFF', borderBottomWidth:0.3}}>
        <Ripple style={{flex:1, flexDirection:'row'}}>
          <View style={{paddingLeft:12, flex:1, flexDirection:'column', justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#DDD'}}>The name of the Song 歌名</Text>
            <Text style={{fontSize:12, color:'#999'}}>JesBrian</Text>
          </View>
        </Ripple>
        <Ripple onPress={this.showSongMenu.bind(this)} style={{width:32, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue653'} style={{fontSize:26, color:'#999'}} />
        </Ripple>
      </View>
    );
  }

  showSongMenu () {
    this.props.dispatch(showBottomSongMenu())
  };
}


function reduxState(store) {
  return {
    config: store.config,
  }
}

export default connect(reduxState)(withNavigation(SearchResultSong));
