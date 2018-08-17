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
      viewBottomType: 'music'
    };
  }

  componentWillMount() {
    alert(this.props.showView)
    setTimeout(() => {
      alert(this.props.showView)
    }, 5000)
  }

  render() {
    return (
      <View style={{flex:1, position:'relative'}}>
        <StatusBar barStyle="light-content" />
        <PageRouter/>
        {
          this.state.viewBottomType === '' ? null : this.state.viewBottomType === 'music' ? <MusicPlayer/> : <NowPlayList/>
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
