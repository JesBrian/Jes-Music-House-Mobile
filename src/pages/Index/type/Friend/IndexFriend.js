import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'

import SuperButton from '../../../../components/SuperButton.js'


class IndexFriend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Index Friend</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(IndexFriend);
