/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import { Provider } from 'react-redux'
import ConfigureStore from './src/redux/store/ConfigureStore.js'
const store = ConfigureStore();

import storage from './src/utils/storage/index.js'
global.storage = storage;

import AppRoot from './src/AppRoot.js'


type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
