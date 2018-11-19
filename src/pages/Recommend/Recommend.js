import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

export default class Recommend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性推荐'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
