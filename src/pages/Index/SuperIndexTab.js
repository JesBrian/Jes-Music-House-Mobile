import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import IndexSelf from './type/Self/IndexSelf.js'
import IndexRecommend from './type/Recommend/IndexRecommend.js'
import IndexFrined from './type/Friend/IndexFriend.js'


export default class SuperIndexTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        initialPage={1}
        renderTabBar={() => <SuperTabbar />}
        style={{backgroundColor:'rgba(0,0,0,0.73)'}}>

        <IndexSelf tabLabel={'个人'} />
        <IndexRecommend tabLabel={'推荐'} />
        <IndexFrined tabLabel={'朋友'} />
      </ScrollableTabView>
    );
  }
}