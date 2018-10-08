import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'


import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


class PlayList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌单'} />

        <Text>歌单分类</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(PlayList);
