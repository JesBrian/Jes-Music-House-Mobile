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

    console.log(this.props.modalType);
  }

  render () {
    return (
      <Modal
        animationType={'fade'} transparent={false} visible={true}
        onRequestClose={() => {}}>
        {
          this.props.modalType === 'loading' ? <Loading />
            : this.props.modalType === 'multiSelectSong' ? <MultiSelectSong /> : null
        }
      </Modal>
    )
  }
}

function reduxState (store) {
  return {
    modalType: store.showView.modalType
  }
}

export default connect(reduxState)(SuperModal);
