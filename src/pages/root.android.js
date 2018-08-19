import React  from 'react';

import {
  StatusBar,
  View,
  Text
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/AndroidPageRouter.js'

import MusicPlayer from '../layout/Bottom/MusicPlayer.js'
import NowPlayList from '../layout/Bottom/NowPlayList.js'


class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, position:'relative'}}>
        <StatusBar barStyle="light-content" />
        <Text>{ this.props.showView.bottom }</Text>
        <PageRouter/>
        {
          this.props.showView.bottomMusic === true ? <MusicPlayer/> : null
        }
        {
          this.props.showView.bottomPlayList === true ?  <NowPlayList/> : null
        }
      </View>
    );
  }
}

function reduxState(store) {
  return {
    showView: store.showView,
  }
}

export default connect(reduxState)(Root);
