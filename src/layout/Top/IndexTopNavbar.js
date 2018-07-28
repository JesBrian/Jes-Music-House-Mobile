import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {common} from '../../assets/styles/common.js'

export default class IndexTopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>index</Text>*/}
        <Text style={[common.icon, styles.icon]}>&#xe654;</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
  icon: {
    color: 'red', fontSize: 30
  }
})
