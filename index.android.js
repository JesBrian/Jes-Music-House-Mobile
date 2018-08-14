/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';

import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

import PageRouter from './src/router/AndroidPageRouter.js'

export default class MusicHouseApp extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <PageRouter/>
      </View>
    );
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
