import React  from 'react';

import {
  StatusBar,
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/AndroidPageRouter.js'

import SongPage from '../layout/page/Song/Song.js'

import MusicPlayer from '../layout/bottom/MusicPlayer.js'
import NowPlayList from '../layout/bottom/NowPlayList.js'
import SongMenu from '../layout/bottom/SongMenu.js'
import SuperModal from '../layout/modal/SuperModal.js'


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
        { this.props.bottomMusic === true ? <MusicPlayer/> : null }
        { this.props.bottomPlayList === true ?  <NowPlayList/> : null }
        { this.props.bottomSongMenu === true ?  <SongMenu/> : null }

        {
          this.props.showModal === true ? <SuperModal /> : null
        }
        {
          this.props.pageSong === true ? <SongPage /> : null
        }
      </View>
    );
  }
}

function reduxState(store) {
  return {
    config: store.config,
    showModal: store.showView.showModal,
    bottomMusic: store.showView.bottomMusic,
    bottomPlayList: store.showView.bottomPlayList,
    bottomSongMenu: store.showView.bottomSongMenu,
    pageSong: store.showView.pageSong,
  }
}

export default connect(reduxState)(Root);
