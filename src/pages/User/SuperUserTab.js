import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/tab/SuperTabbar.js'
import UserMusic from './type/UserMusic.js'
import UserTrend from './type/UserTrend.js'
import UserInfo from './type/UserInfo.js'


export default class SuperUserTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{backgroundColor:'rgba(0,0,0,0.73)'}}>

        <UserMusic tabLabel={'音乐'} />
        <UserTrend tabLabel={'动态'} />
        <UserInfo tabLabel={'关于我'} />
      </ScrollableTabView>
    );
  }
}