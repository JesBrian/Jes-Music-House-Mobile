import React, {Component} from 'react';
import {
  View
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomMusic, hiddenBottomMusic } from './redux/actions/ViewActions.js'

import PageRouter from './router/PageRouter.js'

import SuperStatusBar from './layout/top/TopStatusbar/SuperStatusBar.js'
import MusicPlayer from './layout/bottom/BottomMusicPlayer/MusicPlayer.js'
import NowPlayList from './layout/bottom/BottomPlayList/PlayList.js'
import MenuPanel from './layout/bottom/BottomMenuPanel/MenuPanel.js'
import SuperModal from './layout/content/ContentModal/SuperModal.js'

// const MUSIC_PLAYER_SHOW_ROUTER = [
//   'Index', 'Search', 'Singer', 'SingerDetail', 'User', 'Member', 'PlayList', 'PlayListDetail', 'ListenHistory', 'Rank', 'Recommend',
//   'WriteTrend', 'Message', 'Collection'
// ];
const MUSIC_PLAYER_NOT_SHOE_ROUTER = [
  'Home', 'Login', 'Register', 'Song', 'Setting', 'Comment', 'AppTheme'
];

/**
 * 项目App - 入口
 */
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
        <PageRouter onNavigationStateChange={(prevState, currentState) => {
          if (currentState.isTransitioning === false) {
            MUSIC_PLAYER_NOT_SHOE_ROUTER.includes(currentState.routes[currentState.routes.length - 1].routeName) === true ?
              this.props.dispatch(hiddenBottomMusic()) : this.props.dispatch(showBottomMusic())
          }
        }} />
        <MusicPlayer />
        { this.props.showView.bottomPlayList === true ?  <NowPlayList /> : null }
        { this.props.showView.bottomMenu === '' ?  null : <MenuPanel bottomMenu={this.props.showView.bottomMenu} /> }
        { this.props.showView.showModal === '' ? null : <SuperModal /> }
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
