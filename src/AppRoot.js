import React, {Component} from 'react';
import {
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from './router/PageRouter.js'

import SuperStatusBar from './layout/top/TopStatusbar/SuperStatusBar.js'
import MusicPlayer from './layout/bottom/BottomMusicPlayer/MusicPlayer.js'
import NowPlayList from './layout/bottom/BottomPlayList/PlayList.js'
import SongMenu from './layout/bottom/BottomMenuPanel/SongMenu.js'
import SuperModal from './layout/content/ContentModal/SuperModal.js'


type Props = {};
class AppRoot extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{flex:1, position:'relative'}}>
        <SuperStatusBar />
        <PageRouter />
        <MusicPlayer />
        { this.props.showView.bottomPlayList === true ?  <NowPlayList /> : null }
        { this.props.showView.bottomSongMenu === true ?  <SongMenu /> : null }
        { this.props.showView.showModal === true ? <SuperModal /> : null }
      </View>
    );
  }
}

function reduxState(store) {
  return {
    showView: store.showView,
  }
}

export default connect(reduxState)(AppRoot);
