import React  from 'react';

import {
  StatusBar,
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/AndroidPageRouter.js'

import MusicPlayer from '../layout/Bottom/MusicPlayer.js'
import NowPlayList from '../layout/Bottom/NowPlayList.js'


class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bottomType: 'music'
    };
  }

  componentWillMount() {
    // alert(this.state.bottomType)
  }

  render() {
    return (
      <View style={{flex:1, position:'relative'}}>
        <StatusBar barStyle="light-content" />
        <PageRouter/>
        {
          this.state.bottomType === '' ? null : this.state.bottomType === 'music' ? <MusicPlayer/> : <NowPlayList/>
        }
      </View>
    );
  }
}


function select(store) {
  return {
    GetWeatherReducer : store.view,
  }
}

export default connect(select)(Root);
