import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import HotSong from './type/HotSong.js'
import AllAlbum from './type/AllAlbum.js'
import SingerInfo from './type/SingerInfo.js'


export default class SuperUserTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{backgroundColor:'rgba(0,0,0,0.73)'}}>

        <HotSong tabLabel={'热门歌曲'} scrollEvent={this.handleScrollEvent.bind(this)} />
        <AllAlbum tabLabel={'所有专辑'} scrollEvent={this.handleScrollEvent.bind(this)} />
        <SingerInfo tabLabel={'艺人信息'} scrollEvent={this.handleScrollEvent.bind(this)} />
      </ScrollableTabView>
    );
  }

  handleScrollEvent (top) {
    this.props.scrollEvent(top);
    // console.log(this.props.scrollEvent);
  }
}