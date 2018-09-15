import React  from 'react';

import {
  View
} from 'react-native';


import { connect } from 'react-redux'

import PageRouter from '../router/IosPageRouter.js'

import SuperStatusBar from '../layout/statusbar/SuperStatusBar.js'
import MusicPlayer from '../layout/bottom/MusicPlayer.js'
import NowPlayList from '../layout/bottom/NowPlayList.js'
import SongMenu from '../layout/bottom/SongMenu.js'
import SuperModal from '../layout/modal/SuperModal.js'


import Test from "./Test/Test";


class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{flex:1, position:'relative'}}>
        <SuperStatusBar />
        <PageRouter style={{paddingBottom:this.props.showView.bottomMusic === true ? 53 : 0}} />
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
    config: store.config,
    showView: store.showView
  }
}

export default connect(reduxState)(Root);
