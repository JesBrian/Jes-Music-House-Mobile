import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import CollectionPlayList from './type/CollectionPlayList.js'
import CollectionSinger from './type/CollectionSinger.js'
import CollectionUser from './type/CollectionUser.js'


export default class SuperCollectionTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{backgroundColor:'rgba(0,0,0,0.73)'}}>

        <CollectionPlayList tabLabel={'专辑'} />
        <CollectionSinger tabLabel={'歌手'} />
        <CollectionUser tabLabel={'用户'} />
      </ScrollableTabView>
    );
  }
}