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


import { Provider } from 'react-redux'
import ConfigureStore from './src/redux/store/ConfigureStore.js'


import PageRouter from './src/router/AndroidPageRouter.js'

import MusicPlayer from './src/layout/Bottom/MusicPlayer.js'
import NowPlayList from './src/layout/Bottom/NowPlayList.js'


const store = ConfigureStore();

export default class MusicHouseApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bottomType: 'playList'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1, position:'relative'}}>
          <StatusBar barStyle="light-content" />
          <PageRouter/>
          {
            this.state.bottomType === '' ? null : this.state.bottomType === 'music' ? <MusicPlayer/> : <NowPlayList/>
          }
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MusicHouseApp', () => MusicHouseApp);
