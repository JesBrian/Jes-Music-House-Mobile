import React, {Component} from 'react';
import {
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from './router/PageRouter.js'

import SuperStatusBar from './layout/statusbar/SuperStatusBar.js'
import MusicPlayer from './layout/bottom/MusicPlayer.js'
import NowPlayList from './layout/bottom/NowPlayList.js'
import SongMenu from './layout/bottom/MenuPanel/SongMenu.js'
import SuperModal from './layout/modal/SuperModal.js'


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
