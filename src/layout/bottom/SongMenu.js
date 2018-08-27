import React  from 'react';

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { hiddenBottomSongMenu } from '../../redux/actions/ViewActions.js'

class SongMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.68)', zIndex:8}}>
        <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomSongMenu())}}>
          <View style={{flex:1}}/>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

function reduxState(store) {
  return {
    config: store.config,
    music: store.music,
    showView: store.showView
  }
}

export default connect(reduxState)(SongMenu);

