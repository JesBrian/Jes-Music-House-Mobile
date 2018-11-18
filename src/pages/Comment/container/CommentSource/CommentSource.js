import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

class CommentSource extends React.Component {
  render () {
    return (
      <Ripple style={{width:'100%', height:68, flexDirection:'row', alignItems:'center'}}>
        <Image style={{width:43, height:43, marginLeft:12, marginRight:18, borderRadius:5}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
        <View style={{height:'100%', flex:1, justifyContent:'center'}}>
          <Text style={{marginTop:2, fontSize:17}}>The Name of the Song</Text>
          <Text>JesBrian</Text>
        </View>
        <View style={{marginTop:5, marginRight:18}}>
          <SuperIcon type={'\ue604'} style={{color:this.props.color}} />
        </View>
      </Ripple>
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

export default connect(reduxState)(withNavigation(CommentSource));
