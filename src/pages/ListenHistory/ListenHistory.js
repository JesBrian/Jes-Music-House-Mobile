import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperListenHistoryTab from './SuperListenHistoryTab.js'

export default class ListenHistory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'听歌排行'} />

        <SuperListenHistoryTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:53,
    backgroundColor:'transparent'
  },
});
