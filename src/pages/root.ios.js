import React  from 'react';

import {
  StatusBar,
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/IosPageRouter.js'

import MusicPlayer from '../layout/Bottom/MusicPlayer.js'
import NowPlayList from '../layout/Bottom/NowPlayList.js'
import SongMenu from '../layout/Bottom/SongMenu.js'


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
        <PageRouter/>
        {
          this.props.showView.bottomMusic === true ? <MusicPlayer/> : null
        }
        {
          this.props.showView.bottomPlayList === true ?  <NowPlayList/> : null
        }
        {
          this.props.showView.bottomSongMenu === true ?  <SongMenu/> : null
        }

        {}
      </View>
    );
  }
}

function reduxState(store) {
  return {
    config: store.config,
    showView: store.showView
  }
}

export default connect(reduxState)(Root);
