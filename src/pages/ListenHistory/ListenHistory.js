import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperListenHistoryTab from './SuperListenHistoryTab.js'
import CheckboxSongModal from '../../layout/content/ContentModal/type/CheckboxSong/CheckboxSongModal.js'

export default class ListenHistory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showCheckboxSongModal: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'听歌排行'} />

        <SuperListenHistoryTab />

        <CheckboxSongModal visible={this.state.showCheckboxSongModal} closeModal={this.closeModal.bind(this)} />
      </View>
    );
  }

  closeModal () {
    this.setState({
      showCheckboxSongModal: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:53,
    backgroundColor:'transparent'
  },
});
