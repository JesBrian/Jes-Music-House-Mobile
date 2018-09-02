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
import SuperIcon from '../../../../components/SuperIcon.js'


class IndexFriend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Index Friend</Text>

        <View style={{width:43, height:43, right:18, bottom:76, position:'absolute', zIndex:5}}>
          <SuperButton width={43} height={43} label={<SuperIcon type={'\ue638'} style={{fontSize:28}} />} />
        </View>
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
