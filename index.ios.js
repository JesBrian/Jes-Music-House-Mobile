/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  BVLinearGradient,
  Text,
  View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

export default class MusicHouseApp extends Component {
  render() {
    return (
      <LinearGradient colors={['#9f678c', '#718697', '#2b4963']} style={styles.container}>
        <View style={styles.header}>
          <Text>用户登录</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
