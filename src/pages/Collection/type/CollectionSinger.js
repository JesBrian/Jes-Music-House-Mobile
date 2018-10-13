import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../components/SuperIcon.js'

class CollectionSinger extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{paddingBottom:8, flex:1, backgroundColor:'#282828'}}>
          <LargeList style={{flex:1}}
                     data={[{items: [0, 1, 2, 3, 4, 5, 6]}]}
                     heightForIndexPath={() => 48}
                     renderIndexPath={this._renderIndexPath}
          />
        </View>
      </View>
    );
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:53, flexDirection:'row'}}>
        <Ripple onPress={() => {this.props.navigation.navigate('SingerDetail')}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>收藏的歌手</Text>
            <Text style={{fontSize:13, color:'#AAA'}}>专辑: 180</Text>
          </View>
        </Ripple>
        <Ripple style={{width:43, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
          <SuperIcon type={'\ue653'} style={{fontSize:23, color:'#BBB'}} />
        </Ripple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(withNavigation(CollectionSinger));
