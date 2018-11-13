import React from 'react';

import {
  Modal
} from 'react-native';


import { connect } from 'react-redux'

import Loading from './type/LoadingModal.js'

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
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={() => {}}>
        {
          this.props.showView.modalType === 'loading' ? <Loading /> : null
        }
      </Modal>
    )
  }
}


function reduxState (store) {
  return {
    showView: store.showView
  }
}

export default connect(reduxState)(SuperModal);
