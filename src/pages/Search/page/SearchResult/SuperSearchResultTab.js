import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../../../layout/content/ContentTab/SuperTabbar.js'
import SearchResultSong from './type/Song/SearchResultSong.js'
import SearchResultPlayList from './type/PlayList/SearchResultPlayList.js'
import SearchResultSinger from './type/Singer/SearchResultSinger.js'
import SearchResultUser from './type/User/SearchResultUser.js'


export default class SuperSearchResultTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{paddingBottom:53, flex:1}}>

        <SearchResultSong tabLabel={'单曲'} />
        <SearchResultPlayList tabLabel={'歌单'} />
        <SearchResultSinger tabLabel={'歌手'} />
        <SearchResultUser tabLabel={'用户'} />
      </ScrollableTabView>
    );
  }
}