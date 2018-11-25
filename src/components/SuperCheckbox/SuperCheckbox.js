import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux'

import SuperIcon from '../SuperIcon/SuperIcon.js'

class SuperCheckbox extends React.Component {
  render () {
    return (
      <View style={{width:22, height:22, marginTop:2, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:this.props.color, borderRadius:3, backgroundColor:this.props.color}} >
        <SuperIcon type={'\ue617'} style={{color:'#383838'}} />
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

export default connect(reduxState)(SuperCheckbox);
