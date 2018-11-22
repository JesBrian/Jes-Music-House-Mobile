import React  from 'react';

import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenModal } from '../../../../../redux/actions/ViewActions.js'

class MultiSelectSongModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#383838'}}>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
        <Text onPress={() => {this.props.dispatch(hiddenModal())}}>CheckboxSongModal</Text>
      </View>
    );
  }
}

function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(MultiSelectSongModal);
