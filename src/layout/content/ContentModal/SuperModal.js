import React from 'react';

import {
  Modal
} from 'react-native';


import { connect } from 'react-redux'

import Loading from './type/Loading/LoadingModal.js'
import MultiSelectSong from './type/MultiSelectSong/MultiSelectSongModal.js'

/**
 * 模态框组件
 */
class SuperModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Modal
        animationType={'fade'} transparent={true} visible={true}
        onRequestClose={() => {}}>
        {
          this.props.showModal === 'loading' ? <Loading />
            : this.props.showModal === 'multiSelectSong' ? <MultiSelectSong /> : null
        }
      </Modal>
    )
  }
}

function reduxState (store) {
  return {
    showModal: store.showView.showModal
  }
}

export default connect(reduxState)(SuperModal);
