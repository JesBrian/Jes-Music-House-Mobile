/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SuperButton from './src/components/SuperButton.js'

export default class MusicHouseApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>用户登录 88</Text>

        <SuperButton label="6长8时间6ghy6" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
