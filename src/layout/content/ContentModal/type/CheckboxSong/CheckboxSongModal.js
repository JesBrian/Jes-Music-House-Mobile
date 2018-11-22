import React  from 'react';

import {
  Modal,
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux'

class CheckboxSongModal extends React.Component {
  static defaultProps = {
    visible: false
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Modal
        animationType={'fade'} transparent={false} visible={this.props.visible}
        onRequestClose={() => {alert("Modal has been closed.")}} >
        <View>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
          <Text onPress={() => {this.props.closeModal()}}>CheckboxSongModal</Text>
        </View>
      </Modal>
    );
  }
}

function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(CheckboxSongModal);
