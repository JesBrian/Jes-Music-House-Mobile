import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

class CommentAll extends React.Component {
  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
          <Text style={{color:'#EEE'}}>最新评论</Text>
        </View>
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

export default connect(reduxState)(withNavigation(CommentAll));

