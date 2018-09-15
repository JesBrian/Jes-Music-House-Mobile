import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/tab/SuperTabbar.js'
import IndexSelf from './type/Self/IndexSelf.js'
import IndexRecommend from './type/Recommend/IndexRecommend.js'
import IndexFrined from './type/Friend/IndexFriend.js'


export default class SuperIndexTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{paddingTop:6, backgroundColor:'rgba(0,0,0,0.73)'}}>

        <IndexSelf tabLabel={'音乐'} />
        <IndexRecommend tabLabel={'动态'} />
        <IndexFrined tabLabel={'关于我'} />
      </ScrollableTabView>
    );
  }
}