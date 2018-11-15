import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'


import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton/SuperButton.js'


class Rank extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'排行榜'} />

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

export default connect(reduxState)(Rank);
