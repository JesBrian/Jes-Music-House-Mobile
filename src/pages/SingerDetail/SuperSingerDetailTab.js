import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import HotSong from './type/HotSong.js'
import AllAlbum from './type/AllAlbum.js'
import SingerInfo from './type/SingerInfo.js'


export default class SuperUserTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{width:'100%', height:500, flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>

        <HotSong tabLabel={'热门歌曲'} />
        <AllAlbum tabLabel={'所有专辑'} />
        <SingerInfo tabLabel={'艺人信息'} />
      </ScrollableTabView>
    );
  }
}